/**
 * Used in determining if color passes readability.
 *
 * @see https://www.npmjs.com/package/tinycolor2
 */
import tinycolor from 'tinycolor2';


/**
 * Tests the font sizes of the passed in attributes for readability.
 *
 * @param {Object} [attributes] Attributes passed from the editor.
 *
 * @return {Number} Error Code.
 */
function validateFontSize(attributes) {

	/* hasIssue:
		0 == No Warning
		1 == Other (No Font Value)
		2 == Font Too Small
		3 == Font Too Large
	*/
	var hasIssue = 0;
	var fontSize = 0;

	//Our minimum values.
	var minFontSize = 14;
	var maxFontSize = 108;

	//If attributes.fontSize exists, we have a text WP font size.
	if (attributes.fontSize) {
		//Parse text font size into numeric.
		fontSize = parseFontSize(attributes.fontSize);
		//If no fontSize has been set.
		if (fontSize == 0) { hasIssue = 1; }
	}
	//Else if attributes.style.typography.fontSize exists, we have a numeric font size.
	else if ((attributes.style) && (attributes.style.typography) && (attributes.style.typography.fontSize)) {
		fontSize = attributes.style.typography.fontSize;
	}
	//Else we have no font size.
	else { hasIssue = 1; }

	//If no issues are present yet, proceed.
	if (hasIssue == 0) {
		//If fontSize is less than our minimum.
		if (fontSize < minFontSize) { hasIssue = 2; }
		//If fontSize is more than our maximum.
		if (fontSize > maxFontSize) { hasIssue = 3; }
	}

	return hasIssue;
}
//Parses text WP font size into numeric size.
function parseFontSize(size) {

	//Get font sizes from editor.
	var fontArray = wp.data.select("core/editor").getEditorSettings().fontSizes;

	//Loop through list of font sizes.
	for (var index in fontArray) {
		//If we find our text size, return it's numeric size.
		if (fontArray[index].slug == size) { return fontArray[index].size; }
	}

	//If we get nothing return 0;
	return 0;
}

/**
 * Tests the font colors of the passed in attributes for readability.
 *
 * @param {Object} [attributes] Attributes passed from the editor.
 *
 * @return {Number} Error Code.
 */
function validateFontColor(attributes) {

	/* hasIssue:
		0 == No Warning
		1 == Other (No Color Value)
		2 == Font Too Small
		3 == Font Too Large
	*/
	var hasIssue = 0;
	var fontSize = 0;
	var tinyBackgroundColor;
	var tinyTextColor;
	if (attributes.fontSize) {
		//Parse text font size into numeric.
		fontSize = parseFontSize(attributes.fontSize);
	}
	//Else if attributes.style.typography.fontSize exists, we have a numeric font size.
	else if ((attributes.style) && (attributes.style.typography) && (attributes.style.typography.fontSize)) {
		fontSize = attributes.style.typography.fontSize;
	}
	//If attributes.backgroundColor exists, we have a text WP color.
	if (attributes.backgroundColor) {
		//Create a tinycolor object from the parsed color.
		tinyBackgroundColor = tinycolor(parseFontColor(attributes.backgroundColor));
		//If no tinyBackgroundColor has been set.
		if (tinyBackgroundColor == 0) { hasIssue = 1; }
	}
	//Else if attributes.style.color.background exists, we have a hex color.
	else if ((attributes.style) && (attributes.style.color) && (attributes.style.color.background)) {
		//Create a tinycolor object from the hex color.
		tinyBackgroundColor = tinycolor(attributes.style.color.background);
	}
	//Else we have no font size.
	else {
		hasIssue = 1;
	}

	//If attributes.textColor exists, we have a text WPcolor.
	if (attributes.textColor) {
		//Create a tinycolor object from the parsed color.
		tinyTextColor = tinycolor(parseFontColor(attributes.textColor));
		//If no tinyTextColor has been set.
		if (tinyTextColor == 0) { hasIssue = 1; }
	}
	//Else if attributes.style.color.text exists, we have a hex color.
	else if ((attributes.style) && (attributes.style.color) && (attributes.style.color.text)) {
		//Create a tinycolor object from the hex color.
		tinyTextColor = tinycolor(attributes.style.color.text);
	}
	//Else we have no font size.
	else {
		hasIssue = 1;
	}

	//If no issues are present yet, proceed.
	if (hasIssue == 0) {

		//Check if either color is transparent.
		const hasTransparency = tinyBackgroundColor.getAlpha() !== 1 || tinyTextColor.getAlpha() !== 1;
		//Test if the font is visible.
		var isVisible = tinycolor.isReadable(
			tinyBackgroundColor,
			tinyTextColor,
			{ level: 'AA', size: ((fontSize >= 24) ? 'large' : 'small') }
		)
		//If either color has transparency, unable to determine.
		if (hasTransparency) {
			hasIssue = 1;
		}
		//If color combination is not visible, test why.
		else if (!(isVisible)) {
			//If the background color is darker.
			if (tinyBackgroundColor.getBrightness() < tinyTextColor.getBrightness()) {
				hasIssue = 2;
			}
			//If the background color is brighter.
			else if (tinyBackgroundColor.getBrightness() > tinyTextColor.getBrightness()) {
				hasIssue = 3;
			}
			//If the colors match.
			else if (tinyBackgroundColor.getBrightness() == tinyTextColor.getBrightness()) {
				hasIssue = 4;
			}
		}
	}

	return hasIssue;
}
//Parses text WP color into hex color.
function parseFontColor(color) {

	//Get font sizes from editor.
	var colorArray = wp.data.select("core/editor").getEditorSettings().colors;

	//Loop through list of colors.
	for (var index in colorArray) {
		//If we find our color, return it's hex color.
		if (colorArray[index].slug == color) { return colorArray[index].color; }
	}

	//If we get nothing return 0;
	return 0;
}

/**
 * Returns the passed in index. This is just a placeholder.
 *
 * @param {number} [index] The number to return.
 * @param {Object} [attributes] Attributes passed from the editor.
 *
 * @return {Number} Error Code.
 */
function validateFontOther(attributes) {
	return 0;
}

/**
 * Returns the passed in index. This is just a placeholder.
 *
 * @param {Object} [attributes] Attributes passed from the editor.
 *
 * @return {Number} Error Code.
 */
function validateImageAltText(attributes) {

	/* hasIssue:
		0 == No Warning
		1 == No Image Set
		2 == No Alt-Text
	*/
	var hasIssue = 0;

	//If attributes has a link or an url, image is set.
	if ((attributes.link) || (attributes.url)) {

		//if attributes.alt is an empty string or non-existant, we have no alt-text.
		if (!attributes.alt) {
			hasIssue = 2;
		}

	}
	//If we have no image.
	else {
		hasIssue = 1;
	}

	return hasIssue;
}

/**
 * Checks if any control has an active warning.
 *
 * @param {number} [control] The control to be tested. Can be false to test all controls.
 * @param {Object} [attributes] Attributes passed from the editor.
 *
 * @return {bool} True/False result.
 */
function isWarningActive(name, attributes) {

	//Default to false.
	var isActive = false;
	if (name == "core/paragraph") {
		isActive = (validateFontSize(attributes) > 1) ? true : isActive;
		isActive = (validateFontColor(attributes) > 1) ? true : isActive;
		isActive = (validateFontOther(0, attributes) > 1) ? true : isActive;
	}
	else if (name == "core/image") {
		isActive = (validateImageAltText(attributes) > 1) ? true : isActive;
	}
	return isActive;

}

export { isWarningActive, validateFontColor, validateFontSize, validateFontOther, validateImageAltText };
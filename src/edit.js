/**
 * Webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 */
import './scss/editor.scss';

/**
 * Internal dependencies
 */
import blockControls from './block-controls/blockcontrols';
import inspectorControls from './inspector-controls/inspectorcontrols';
import { isWarningActive } from './core/core';

/**
 * Returns Candescent's addition block editor properties.
 * 
 * @param {Object} [props] Properties passed from the editor.
 *
 * @return {WPElement} Element to render.
 */
export default function blockEdit(props) //Runs everytime there is an update to the block editor.
{
	//Pull out what we need from props.
	const {
		name,
		attributes
	} = props;

	//Set up our internal global class names
	var internalClassName = "candescent";
	//If any warning is active, add an active class.
	internalClassName += (isWarningActive(name, attributes)) ? " candescent-active" : '';
	//If the attributes contains a class name from the editor, append it.
	internalClassName += (attributes.className) ? " " + attributes.className : '';

	//If the block type is a paragraph or image, add Candescent's controls.
	if ((name == "core/paragraph") || (name == "core/image")) {

		return (

			//Main div for the block.
			<div className={internalClassName}>

				{blockControls(internalClassName, name, attributes)}

				{inspectorControls(internalClassName, name, attributes)}

			</div>

		);
	}

	//If we didn't return anything above, return an empty string.
	return '';
}
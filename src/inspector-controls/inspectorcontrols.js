/**
 * Wordpress components.
 */
import { InspectorControls } from '@wordpress/block-editor'

/**
 * Internal dependencies.
 */
import inspectorMenu from './inspectormenu';


/**
 * The Inspector Controls element, this is where we will inject our side menu.
 *
 * @param {String} [className] Class names constructed in edit.js.
 * @param {Object} [attributes] Attributes passed from the editor.
 *
 * @return {BlockControls} Element to render.
 */
export default function inspectorControls(className, name, attributes) {
	return (
		<InspectorControls>

			{ /* Candescent's inspector menu */}
			{inspectorMenu(className, name, attributes)}

		</InspectorControls>
	);

}
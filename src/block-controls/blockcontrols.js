/**
 * Wordpress components.
 */
import { BlockControls } from '@wordpress/block-editor';

/**
 * Internal dependencies.
 */
import blockMenu from './blockmenu';


/**
 * The Block Controls element, this is where we will inject our block menu.
 *
 * @param {String} [className] Class names constructed in edit.js.
 * @param {Object} [attributes] Attributes passed from the editor.
 *
 * @return {BlockControls} Element to render.
 */
export default function blockControls(className, name, attributes) {
	return (
		<BlockControls>

			{ /* Candescent's block menu */}
			{blockMenu(className, name, attributes)}

		</BlockControls>
	);
}
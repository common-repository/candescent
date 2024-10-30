/**
 * Wordpress components.
 */
import { DropdownMenu } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import { paragraphControls, imageControls } from '../core/controls';

/**
 * Candescent's block menu dropdown.
 *
 * @param {String} [className] Class names constructed in edit.js.
 * @param {Object} [attributes] Attributes passed from the editor.
 *
 * @return {DropdownMenu} Element to render.
 */
export default function blockMenu(className, name, attributes) {
	var menuControls;
	if (name == "core/paragraph") { menuControls = paragraphControls; }
	else if (name == "core/image") { menuControls = imageControls; }
	return (

		<DropdownMenu
			className={"components-toolbar block-menu " + className}
			isCollapsed={true}
			label="Candescent Menu"
			icon='sos'
			popoverProps={
				{
					className: className
				}
			}
			controls={
				//Maps out global candescentControls to the dropdown's controls.
				menuControls.map(
					(control) => {
						const isActive = (control.validationFunction(attributes) > 1); //Tests if controls are active and sets their state.
						return {
							...control,
							isActive,
						};
					}
				)
			}
		/>

	);
}
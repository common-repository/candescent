/**
 * Wordpress components.
 */
import {
	IconButton,
	Toolbar,
	PanelBody,
} from '@wordpress/components';
import { flatMap } from 'lodash';

/**
 * Internal dependencies.
 */
import { paragraphControls, imageControls } from '../core/controls';

/**
 * The Inspector menu's panel body.
 *
 * @param {String} [className] Class names constructed in edit.js.
 * @param {Object} [attributes] Attributes passed from the editor.
 *
 * @return {BlockControls} Element to render.
 */
export default function inspectorMenu(className, name, attributes) {
	var menuControls;
	if (name == "core/paragraph") { menuControls = paragraphControls; }
	else if (name == "core/image") { menuControls = imageControls; }
	return (

		/* Main Toggle Panel */
		<PanelBody title="Candescent" icon="sos" className={className.concat(" inspectormenu-toggle")}>

			{ /* "Issues" Header */}
			<div>
				<span className="dashicons dashicons-welcome-comments" />
				Issues:
			</div>

			{ /*Maps out global candescentControls to build the inspectors's controls.*/}
			{flatMap(menuControls,
				(control, indexOfControl) => (

					<Toolbar
						className={className.concat(' inspectormenu')}
						style={{ width: '100%' }}
					>
						<IconButton
							key={indexOfControl}
							onClick={() => { }} //onClick Should do nothing.
							className={className.concat(' inspectorbutton').concat((control.validationFunction(attributes) > 1) ? ' is-active' : '')}
							icon={control.icon}
							style={{ width: '100%', justifyContent: 'start' }}
							role="menuitem"
						>
							{control.title}
						</IconButton>

						{control.status[
							(control.validationFunction(attributes))
						].msg}
					</Toolbar>

				)
			)}
		</PanelBody>

	);
}
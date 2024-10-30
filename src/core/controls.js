/**
 * Internal dependencies.
 */
import {
	validateFontColor,
	validateFontSize,
	validateFontOther,
	validateImageAltText
} from '../core/core';

/**
 * The controlset for paragraph blocks.
 */
export const paragraphControls = [
	{
		icon: 'editor-textcolor',
		title: 'Font Size',
		slug: 'size',
		onClick: () => wp.data.dispatch('core/edit-post').openGeneralSidebar('edit-post/block'),
		status: [
			{ msg: 'Font Size looks good!' },
			{ msg: 'Unable to Determine Font Size.' },
			{ msg: 'Font Size Too Small' },
			{ msg: 'Font Size Too Large' },
		],
		validationFunction: (attributes) => validateFontSize(attributes),
	},
	{
		icon: 'admin-customizer',
		title: 'Contrast',
		slug: 'color',
		onClick: () => wp.data.dispatch('core/edit-post').openGeneralSidebar('edit-post/block'),
		status: [
			{ msg: 'Font Color looks good!' },
			{ msg: 'Unable to Determine Font Colors.' },
			{ msg: 'Font Too Dark/Background Too Bright' },
			{ msg: 'Font Too Bright/Background Too Dark' },
			{ msg: 'Font and Background Color Match.' },
		],
		validationFunction: (attributes) => validateFontColor(attributes),
	},
	{
		icon: 'info',
		title: 'Other',
		slug: 'other',
		onClick: () => wp.data.dispatch('core/edit-post').openGeneralSidebar('edit-post/block'),
		status: [
			{ msg: 'Everything looks good!' },
			{ msg: 'Mud in the Flaps.' },
			{ msg: 'Not enough cowbell!' },
			{ msg: 'Who let the dogs out?' },
		],
		validationFunction: (attributes) => validateFontOther(attributes),
	},
];

/**
 * The controlset for image blocks.
 */
export const imageControls = [
	{
		icon: 'editor-textcolor',
		title: 'Alt-Text',
		slug: 'alt-text',
		onClick: () => wp.data.dispatch('core/edit-post').openGeneralSidebar('edit-post/block'),
		status: [
			{ msg: 'Alt-Text looks good!' },
			{ msg: 'No Image Set' },
			{ msg: 'Alt Text is Missing' },
		],
		validationFunction: (attributes) => validateImageAltText(attributes),
	}
];
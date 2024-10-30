/**
 * Registers a new block provided a unique name and an object defining its behavior.
 */

/**
 * Internal dependencies
 */
import blockEdit from './edit';

//Variables
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;

//Candescent's modified block editor.
const withCandescent = createHigherOrderComponent((BlockEdit) => {

	//Return a function that takes props and returns our filtered data.
	return (props) => {

		//Return a fragment with the old BlockEdit elements and add our new blockEdit elements.
		return (
			<Fragment>
				<BlockEdit {...props} className='collapsed' />
				{blockEdit(props)}
			</Fragment>
		);

	}
}, "withCandescent");

//Hook into the BlockEdit filter.
wp.hooks.addFilter('editor.BlockEdit', 'candescent/block-filter', withCandescent);
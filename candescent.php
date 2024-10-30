<?php

/**
 * Plugin Name:     Candescent
 * Description:     Accessibility Guidance Tool
 * Version:         1.0.0
 * Author:          Ignition72
 * Author URI:		http://ignition72.com/
 * License:         GPL-2.0
 * Text Domain:     candescent
 *
 * @package         candescent
 */

/**
 * Registers assets so that they can be enqueued through the block editor
 * in the corresponding context.
 */
function candescent_init()
{
	$dir = dirname(__FILE__);

	$script_asset_path = "$dir/build/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'build/index.asset.php not Found. You need to run `npm install` and/or `npm run build` to compile the source first.'
		);
	}

	//Register the javascript.
	$index_js     = 'build/index.js';
	$script_asset = require($script_asset_path);
	wp_register_script(
		'candescent-editor',
		plugins_url($index_js, __FILE__),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	//Register the css.
	$editor_css = 'build/index.css';
	wp_register_style(
		'candescent-editor',
		plugins_url($editor_css, __FILE__),
		array(),
		filemtime("$dir/$editor_css")
	);

	//Add script and style to the block editor.
	register_block_type('candescent/block', array(
		'editor_script' => 'candescent-editor',
		'editor_style'  => 'candescent-editor'
	));
}
add_action('init', 'candescent_init');

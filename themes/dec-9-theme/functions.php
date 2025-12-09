<?php
/**
 * Dec-9 Theme functions and definitions
 */

function my_react_theme_new_register_blocks() {
    register_block_type( __DIR__ . '/blocks/react-counter-block' );
}
add_action( 'init', 'my_react_theme_new_register_blocks' );

function my_react_theme_new_enqueue_styles() {
    wp_enqueue_style(
        'my-react-theme-new-style',
        get_stylesheet_directory_uri() . '/style.css',
        [],
        filemtime( get_stylesheet_directory() . '/style.css' )
    );
}
add_action( 'wp_enqueue_scripts', 'my_react_theme_new_enqueue_styles' );
add_action( 'enqueue_block_editor_assets', 'my_react_theme_new_enqueue_styles' );

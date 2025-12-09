<?php
function mytheme_register_blocks() {
    register_block_type( __DIR__ . '/blocks/my-react-block' );
}
add_action( 'init', 'mytheme_register_blocks' );

function mytheme_enqueue_styles() {
    wp_enqueue_style(
        'mytheme-tailwind',
        get_stylesheet_directory_uri() . '/style.css',
        [],
        filemtime( get_stylesheet_directory() . '/style.css' )
    );
    wp_enqueue_style(
        'mytheme-tailwind-editor',
        get_stylesheet_directory_uri() . '/style.css',
        [],
        filemtime( get_stylesheet_directory() . '/style.css' )
    );
}
add_action( 'wp_enqueue_scripts', 'mytheme_enqueue_styles' );
add_action( 'enqueue_block_editor_assets', 'mytheme_enqueue_styles' );

<?php
/**
 *
 * @author    Nicolas Menescardi
 *
 * @wordpress-plugin
 * Plugin Name:       WP React OpenTable
 * Description:       WordPress Plugin to connect with the OpenTable API using React
 * Version:           0.0.1
 * Author:            Nicolas Menescardi
 * Author URI:        https://github.com/nmenescardi
 * Text Domain:       nrmwprot
 * Domain Path:       /languages
 */


namespace NRMWPROT;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'NRMWPROT_VERSION', '0.0.1' );


/**
 * Autoloader
 *
 * @param string $class The fully-qualified class name.
 * @return void
 *
 *  * @since 1.0.0
 */
spl_autoload_register(function ($class) {

    // project-specific namespace prefix
    $prefix = __NAMESPACE__;

    // base directory for the namespace prefix
    $base_dir = __DIR__ . '/includes/';

    // does the class use the namespace prefix?
    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        // no, move to the next registered autoloader
        return;
    }

    // get the relative class name
    $relative_class = substr($class, $len);

    // replace the namespace prefix with the base directory, replace namespace
    // separators with directory separators in the relative class name, append
    // with .php
    $file = $base_dir . str_replace('\\', '/', $relative_class) . '.php';

    // if the file exists, require it
    if (file_exists($file)) {
        require $file;
    }
});

/**
 * Initialize Plugin
 *
 * @since 1.0.0
 */
function init() {
	$wpr = Plugin::get_instance();
	$wpr_shortcode = Shortcode::get_instance();
	/* $wpr_admin = Admin::get_instance();
	$wpr_rest = Endpoint\Example::get_instance(); */
}
add_action( 'plugins_loaded', 'NRMWPROT\\init' );



/**
 * Register the widget
 *
 * @since 1.0.0
 */
/* function widget_init() {
	return register_widget( new Widget );
}
add_action( 'widgets_init', 'NRMWPROT\\widget_init' ); */

/**
 * Register activation and deactivation hooks
 */
register_activation_hook( __FILE__, array( 'NRMWPROT\\Plugin', 'activate' ) );
register_deactivation_hook( __FILE__, array( 'NRMWPROT\\Plugin', 'deactivate' ) );


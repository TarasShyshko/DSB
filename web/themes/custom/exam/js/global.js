/**
 * @file
 * Global utilities.
 *
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_barrio_subtheme = {
    attach: function (context, settings) {

    }
  };

})(Drupal);
jQuery(document).ajaxComplete(function() {
  jQuery('.view-id-[view-id-projects] .pager a').click(function(e) {
    e.preventDefault();
  });
});

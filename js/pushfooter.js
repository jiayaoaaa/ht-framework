/* ========================================================================
 * Bootstrap: transition.js v3.3.4
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+ function($) {
  'use strict';
  //固定footer在底部
  $.fn.pushFooter = function(duration) {
    var $el = this;

    function setfooter() {
      var footerHeight = $el.height();
      // var footerWidth = $el.width();
      if (($(document.body).height() + footerHeight) < $(window).height()) {
        $el.css({
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          // width: footerWidth
        })
      } else {
        $el.css({
          position: "static"
        });
      }
    }
    setfooter();
    $(window).on('resize', setfooter)

  }

}(jQuery);
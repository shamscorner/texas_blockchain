/* ===================================
--------------------------------------
  Texas|Blockchain HTML Template
  Version: 1.0
  Author: Shamim Hossain
  Email: hossains159@gmaill.com
  Facebook: facebook.com/shamscorner
--------------------------------------
======================================*/

"use strict";

$(window).on("load", function() {
  /*------------------
		Preloder
  --------------------*/
  $(".loader").css({
    background: 'url("../img/pre-loader/1.png") no-repeat center',
    "background-size": "110px 110px"
  });
  setTimeout(() => {
    $(".loader").css({
      background: 'url("../img/pre-loader/2.png") no-repeat center',
      "background-size": "contain"
    });
  }, 800);
  setTimeout(() => {
    $(".loader").css({
      background: 'url("../img/pre-loader/3.png") no-repeat center',
      "background-size": "200px 200px"
    });
    $("#pre-loader-text").fadeIn("slow");
  }, 1600);

  $("#preloder")
    .delay(3000)
    .fadeOut("slow");
});

(function($) {})(jQuery);

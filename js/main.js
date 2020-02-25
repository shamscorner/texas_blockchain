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
      "background-size": "205px 205px"
    });
    $("#pre-loader-text").fadeIn("slow");
  }, 1600);

  $("#preloder")
    .delay(3000)
    .fadeOut("slow");

  /*------------------
		bounty page
  --------------------*/
  // add the toggle functionality using React or Vue framwork
  // and remove this click functionality from here
  for (let i = 1; i < 5; i++) {
    $("#btn-apply-" + i).click(function() {
      $("#bounty-container-" + i).show(100);
    });
    $("#btn-hide-" + i).click(function() {
      $("#bounty-container-" + i).hide(50);
    });
  }
});

(function($) {})(jQuery);

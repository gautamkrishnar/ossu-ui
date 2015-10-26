$(document).ready(function() {
  setTimeout(shadow, 1000);
});

function shadow() {
	$('.masthead h1.ui.header').addClass('loaded');
}

$(window).scroll(function() {     
      var scroll = $(window).scrollTop();
      var mastheadHeight = $(".masthead").height();
      if (scroll > mastheadHeight - 56) {
          $(".mdl-layout__header--waterfall").addClass("is-casting-shadow");
      }
      else {
          $(".mdl-layout__header--waterfall").removeClass("is-casting-shadow");
      }
});
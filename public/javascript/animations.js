$(document).ready(function() {
  setTimeout(shadow, 1000);
});

function shadow() {
	$('.masthead h1').addClass('text-shadow');
	$('.masthead h2').addClass('text-shadow');
}

$(window).scroll(function() {     
      var scroll = $(window).scrollTop();
      var mastheadHeight = $(".masthead").height();
      if (scroll > mastheadHeight - 56) {
        $( ".mdl-layout__header--waterfall" ).addClass( "is-casting-shadow" );
        $( "#logo-fade-in-out" ).addClass( "showing" );
      }
      else {
        $( ".mdl-layout__header--waterfall" ).removeClass( "is-casting-shadow" );
        $( "#logo-fade-in-out" ).removeClass( "showing" );
       
      }
});

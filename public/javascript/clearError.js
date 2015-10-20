!($(document).ready(function() {
  //remove 'flash message' error at top of page after 3 seconds
function clearError() {
	$('.flash').remove();
}

//remove this
function clearScript() {
	$('.clearScript').remove();
}


  setTimeout(clearError, 3000);
  setTimeout(clearScript, 5000);
}))();



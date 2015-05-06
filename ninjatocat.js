$(document).ready(function(){
	$("img").click(function(){
		console.log($(this).attr('src'));
		console.log($(this).attr('data-alt-src'));
		var source = $(this).attr('src');
		var alt_source = $(this).attr('data-alt-src');
		$(this).attr('src', alt_source);
		$(this).attr('data-alt-src', source);
	});
});



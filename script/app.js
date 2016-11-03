
// $('img').click(function(e){
//     $('div.overlayHidden').toggleClass('overlay');
//     $(this).addClass('clickedImg');
// }); 



var img,
	alt;
$(function() {
	$('img').click(function() {
		$('div.overlayHidden').addClass('overlay');
		
		img = $(this).attr('src');
		alt = $(this).attr('alt');
		console.log(img);
		
		$('.overlay img').attr('src', img);
		$('.image-caption').text(alt);
		
	})
	
	$('.overlayHidden').click(function() {
			$(this).removeClass('overlay');
		})
});
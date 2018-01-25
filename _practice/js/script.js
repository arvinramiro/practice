$(document).ready(function(){
	$('.accordion').click(function(e){
		e.preventDefault();
		$(this).toggleClass('.open');
		$(this).next().slideToggle();
	});
		var heights = $('.section02 ul li').map(function(e){
			return $(this).height();
		}).get(),
		maxHeight = Math.max.apply(null, heights);
		$('.section02 ul li').each(function(e){
			$(this).height(maxHeight)
		})
});
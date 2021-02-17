$(document).ready(function(){
	$('.qa-button a').click(function(){
		$('.progress-bar-striped_active').addClass('progressbar_w_50');
		$('#headline-57833-110').hide();
		$('.question-1-answer').hide();
		$('.question-2-answer').show();
		$('#headline-57833-102').show();
		
	});
	
	$('.qb-button a').click(function(){
		$('.progress-bar-striped_active').addClass('progressbar_w_75');
		$('#headline-57833-102').hide();
		$('.question-2-answer').hide();
		$('.question-3-answer').show();
		$('#headline-57833-102-151').show();
		
	});
	
	$('.qc-button a').click(function(){
		$('.progress-bar-striped_active').addClass('progressbar_w_90');
		$('#headline-57833-102-151').hide();
		$('.question-3-answer').hide();
		$('.question-4-answer').show();
		$('#headline-57833-102-151-109').show();
		
	});
	$('.qd-button a').click(function(){
		$('.progress-bar-striped_active').addClass('progressbar_w_100');
		$("#row--36072-146").css({"background-color": "#2d2d2d", "padding-top": "35px", "border-bottom-left-radius" :"15px", "border-bottom-right-radius" : "15px" });
		$('#headline-30649-166').hide();
		$('#tmp_image-71324-154').hide();
		$('#headline-57833-102-151-109').hide();
		$('.question-4-answer').hide();
		$('#section-below-quiz').hide();
		$('.thankyou-text').show();
		$('.thank-heading').show();
		$('#almost_done').show();
		$("#section-1852710000-162").css({"background": "transparent"})
	});
	
	
});


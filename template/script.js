jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});


// default show first section
$('.cd-container').show();
$('.cd-container-2').hide();
$('.cd-container-3').hide();

// click on the button/link to display desired section
$('.link1').on('click', function(e) {
    e.preventDefault();
    $('.cd-container-2').hide();
    $('.cd-container-3').hide();
    $('.cd-container').show();
});

$('.link2').on('click', function(e) {
    e.preventDefault();
    $('.cd-container').hide();
    $('.cd-container-3').hide();
    $('.cd-container-2').show();
});

$('.link3').on('click', function(e) {
    e.preventDefault();
    $('.cd-container').hide();
    $('.cd-container-2').hide();
    $('.cd-container-3').show();
});
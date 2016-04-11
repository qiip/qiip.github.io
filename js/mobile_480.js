// JavaScript Document

$(function(){
	$(window).on('resize', function() {
		setHallCircleArcs();
	});
	if ($(window).width() < 480) {
		$('.mob_img_block #thumb1 div').css({'width': '160px', 'height': '160px'});
		$('.mob_video_content .mob_video_content_wrap iframe').attr('width', '290').attr('height', '140');
	}
	$('.bg_line .mob_menu').on('click', function() {
		$('.mob_menu_list').slideDown();
	});
	$('.mob_menu_close').on('click', function() {
		$('.mob_menu_list').slideUp();
	});
	$('.mob_trigger').on('click', function() {
		if ($(this).find('img').attr('src') == 'images/icons/arrow_up.png') {
			$(this).find('img').attr('src', 'images/icons/arrow_down.png');
			$(this).parent().find('.control-panel, p.text_light, p.title, > br, .mob_icons').hide();
			if ($(this).parent().hasClass('halls')) $(this).parent().find('p.b_title').css('padding-bottom', '16px');
			if ($(this).parent().hasClass('small-hall')) {
				$(this).parent().find('p.b_title').css('padding-bottom', '4px');
				$(this).parent().css('padding-top', '20px');
				$(this).css('top', '24px');
			}
			if ($(this).parent().hasClass('lounge')) {
				$(this).parent().css('padding-top', '19px');
				$(this).css('top', '24px');
			}
			if ($(this).parent().hasClass('terrain')) {
				$(this).parent().css('padding-top', '26px');
				$(this).parent().css('padding-bottom', '10px');
				$(this).css('top', '20px');
			}
		} else {
			$(this).find('img').attr('src', 'images/icons/arrow_up.png');
			$(this).parent().find('.control-panel, p.text_light:not(.mob_hidden), p.title, > br, .mob_icons').show();
			if ($(this).parent().hasClass('halls')) $(this).parent().find('p.b_title').css('padding-bottom', '0');
			if ($(this).parent().hasClass('small-hall')) {
				$(this).parent().find('p.b_title').css('padding-bottom', '0');
				$(this).parent().css('padding-top', '45px');
				$(this).css('top', '51px');
			}
			if ($(this).parent().hasClass('lounge')) {
				$(this).parent().css('padding-top', '36px');
				$(this).css('top', '37px');
			}
			if ($(this).parent().hasClass('terrain')) {
				$(this).parent().find('p.text_light').hide();
				$(this).parent().css('padding-top', '28px');
				$(this).parent().css('padding-bottom', '35px');
				$(this).css('top', '37px');
			}
		}
	});
	$('#teamSlider_mob, #teamSlider_cal_mob, #teamSlider_photo_mob').flexslider();
	$('#teamSlider_mob .flex-control-nav').insertBefore($('#teamSlider_mob .slides'));
	$('#teamSlider_cal_mob .flex-control-nav').insertBefore($('#teamSlider_cal_mob .slides'));
	$('#teamSlider_photo_mob .flex-control-nav').insertBefore($('#teamSlider_photo_mob .slides'));
	$('.mob_video_block').on('click', function() {
		var c = $('<div class="box-modal" />');
		var content = $(this).find('.mob_video_content');
		c.html($(content).html());
		c.prepend('<div class="box-modal_close arcticmodal-close"></div>');
		$.arcticmodal({
			content: c,
			clone: true
		});
	});
});

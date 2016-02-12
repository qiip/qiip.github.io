// jQuery for page scrolling feature 
		$(function() {
		$(document).on("scroll", onScroll);
		  $('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top 
		        }, 1000);
		        return false;
		      }
		    }
		  });
		});

// Contact form
		var form = $('#main-contact-form');
		form.submit(function(event){
		var formData = $(form).serialize();
		event.preventDefault();
			var form_status = $('<div class="form_status"></div>');
			$.ajax({
				type: "POST",
				data: formData,
				url: $(this).attr('action'),
				beforeSend: function(){
					form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i>Отправка сообщения ...</p>').fadeIn() );
					}
				}).done(function(data){
					form_status.html('<p class="text-success">Ваша заявка оформленна. Наш менеджер свяжется с вами в ближайшее время.</p>').delay(3000).fadeOut();
				});
		});


// Parallax Scrolling

$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); 
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
            var coords = 'center '+ yPos + 'px';
            $bgobj.css({ backgroundPosition: coords });
        });
    });
});


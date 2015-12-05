/*	Fixed main menu
	================================================== */ 

	$('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();
	scrollIntervalID = setInterval(stickIt, 10);

	function stickIt() {

	  var orgElementPos = $('.original').offset();
	  orgElementTop = orgElementPos.top;               

	  if ($(window).scrollTop() >= (orgElementTop)) {
	    // scrolled past the original position; now only show the cloned, sticky element.

	    // Cloned element should always have same left position and width as original element.     
	    orgElement = $('.original');
	    coordsOrgElement = orgElement.offset();
	    leftOrgElement = coordsOrgElement.left;  
	    widthOrgElement = orgElement.css('width');
	    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
	    $('.original').css('visibility','hidden');
	  } else {
	    // not scrolled past the menu; only show the original menu.
	    $('.cloned').hide();
	    $('.original').css('visibility','visible');
	  }
	}
/*	Pop-up
	================================================== */ 

	$('.magnific').magnificPopup({
	  type:'image',
	  removalDelay: 300,
	  mainClass: 'mfp-fade'
	});

	$('.magnific-youtube, .magnific-vimeo').magnificPopup({
	  disableOn: 700,
	  type: 'iframe',
	  mainClass: 'mfp-fade',
	  removalDelay: 300,
	  preloader: false,
	  fixedContentPos: false
	});
	
// jQuery for page scrolling feature 
		$(function() {
		$(document).on("scroll", onScroll);
		  $('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top - $('.menu.cloned').height()
		        }, 1000);
		        return false;
		      }
		    }
		  });
		});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - $('.menu.cloned').height()<= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu ul a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

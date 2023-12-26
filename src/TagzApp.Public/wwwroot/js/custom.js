/*************************************************
	1. use strict
	2. Preloader
	3. baguetteBoxOne map 	
	4. owlCarousel
	5. Affix
	7. map scroll off 
	8. offset
	9. scrolling
*************************************************/
(function($) {
    // Start of use strict
"use strict";

/*------------------------------------------------
* Preloader 
------------------------------------------------*/
$(window).on('load', function() {
    $('#loading').fadeOut();
    $('#preloader').delay(300).fadeOut('slow');

    /*------------------------------------------------
* baguetteBoxOne map 
------------------------------------------------*/
if (typeof oldIE === 'undefined' && Object.keys) {
    hljs.initHighlighting();
}

baguetteBox.run('.baguetteBoxOne');
baguetteBox.run('.baguetteBoxTwo');
baguetteBox.run('.baguetteBoxThree', {
    animation: 'fadeIn',
    noScrollbars: true
});
baguetteBox.run('.baguetteBoxFour', {
    buttons: false
});
baguetteBox.run('.baguetteBoxFive', {
    captions: function(element) {
        return element.getElementsByTagName('img')[0].alt;
    }
});

/*------------------------------------------------
* Load Functions
------------------------------------------------*/
	
Counter();
});


/*------------------------------------------------
* page scroll 
------------------------------------------------*/
$('.nl-simple .nav-link').on('click', function(event) {
    var $anchor = $(this);

    $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top - 50
}, 1500, 'easeInOutExpo');

event.preventDefault();
});

$(window).scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
});
/*------------------------------------------------
* Accordion 
------------------------------------------------*/
	 $(document).ready(function () {
            $('.collapse.in').prev('.panel-heading').addClass('active');
            $('#accordion, #bs-collapse')
                .on('show.bs.collapse', function (a) {
                    $(a.target).prev('.panel-heading').addClass('active');
                })
                .on('hide.bs.collapse', function (a) {
                    $(a.target).prev('.panel-heading').removeClass('active');
                });
        });
/*------------------------------------------------
* Affix 
------------------------------------------------*/
	$(window).on('scroll', function() {
		
		"use strict";
								
		/*----------------------------------------------------*/
		/*	Navigtion Menu Scroll
		/*----------------------------------------------------*/	
		
		var b = $(window).scrollTop();
		
		if( b > 72 ){		
			$(".navbar").addClass("scroll");
		} else {
			$(".navbar").removeClass("scroll");
		}				

	});
	/*------------------------------------------------
* Counter
------------------------------------------------*/
var Counter = function() {
    $('.timer').countTo();
};
/*------------------------------------------------
* tabs 
------------------------------------------------*/
$(function(){
 $('.btn-circle').on('click',function(){
   $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
   $(this).addClass('btn-info').removeClass('btn-default').blur();
 });

 $('.next-step, .prev-step').on('click', function (e){
   var $activeTab = $('.tab-pane.active');

   $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');

   if ( $(e.target).hasClass('next-step') )
   {
      var nextTab = $activeTab.next('.tab-pane').attr('id');
      $('[href="#'+ nextTab +'"]').addClass('btn-info').removeClass('btn-default');
      $('[href="#'+ nextTab +'"]').tab('show');
   }
   else
   {
      var prevTab = $activeTab.prev('.tab-pane').attr('id');
      $('[href="#'+ prevTab +'"]').addClass('btn-info').removeClass('btn-default');
      $('[href="#'+ prevTab +'"]').tab('show');
   }
 });
});

/*------------------------------------------------
* WOW
------------------------------------------------*/
// Initialize WOW.js Scrolling Animations
    new WOW().init();

	
	
}(jQuery, window, document));

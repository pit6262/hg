
$(window).on('load', function(){
	$('body').removeClass('loaded');
});

$(function(){

	/* Burger */
	/* ---------------------------------------------- */

	$(".toggle-menu").on('click',function(){
		$(this).find(".burger__icon").toggleClass("open");
	});

	// Counter
	function counter(){
		$('.js-minus').click(function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
		$('.js-plus').click(function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});
	}
	counter();

	
	// Fixed Header
	function fixedHeader(){
		$(".header").removeClass("fixed");
		$(window).on('scroll load', function(){

			if ($(this).scrollTop() > 145) {
				$(".header").addClass("fixed");
			} else {
				 $(".header").removeClass("fixed");
			};

			
		});
	}
	fixedHeader();


	// Dropdown
	function dropdown(){
		$('.dropdown-button').on('click', function(){
			var thisButton = $(this)
			var thisBlock = $(this).parents('.dropdown-container').find('.dropdown-block');
			$('.dropdown-button').not(thisButton).removeClass('is-active')
			$('.dropdown-block').not(thisBlock).fadeOut(200)
			$(this).toggleClass('is-active')
				.parents('.dropdown-container')
				.find('.dropdown-block').fadeToggle(200)

			
			return false;
		})

		$(document).on('click', function(e) {
			if (!$(e.target).closest(".dropdown-block").length) {
				$('.dropdown-block').fadeOut(200);
				$('.dropdown-button').removeClass('is-active');
			}
			e.stopPropagation();
		});

		
	}
	dropdown();

	// Turn on the light
	function shineOn(){
		$('.shine-on').on('click', function(){
			$('body').toggleClass('main-light')
			return false;
		})
		
	}
	shineOn();

	

	/* Tabs */
	/* ---------------------------------------------- */
	$('.tabs a').on('click', function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('is-hidden');
		$(this).parent().siblings().removeClass('is-active');
		var id = $(this).attr('href');
		$(id).removeClass('is-hidden');
		$(this).parent().addClass('is-active');
		return false
	});

	/* Plugins */
	/* ---------------------------------------------- */


});
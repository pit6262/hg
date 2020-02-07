
$(window).on('load', function(){
	$('body').removeClass('loaded');
});

$(function(){

	/* Burger */
	/* ---------------------------------------------- */

	$(".toggle-menu").on('click',function(){
		$(this).find(".burger__icon").toggleClass("open");
		return false;
	});

	$(".toggle-main-menu").on('click',function(){
		$(this).find(".burger__icon").toggleClass("open");
		$(this).parents('.catalog-container').find('.main-menu').slideToggle();
		return false;
	});
	$(".toggle-add-reviews").on('click',function(){
		$('.add-review').slideToggle(200)
		return false;
	});


	$(".mm-dropdowm").on('click',function(){
		var thisBlock = $(this)
		
		$(".mm-dropdowm").not(thisBlock).removeClass('is-open')
		$(this).toggleClass("is-open");

		return false;
	});

	// smooth Scroll
	function smoothScroll(){
		$('a.anchor').bind('click.smoothscroll',function () {
			var target = $(this).attr('href'),
		        bl_top = $(target).offset().top;
			$('body,html').animate({scrollTop: bl_top}, 900);
			return false;
		});
	}
	smoothScroll()

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
			$('body').toggleClass('main-light');
			namebl = $(this).find('.shine-on__text span').html();
			if(namebl == 'Включить свет '){
				$(this).find('.shine-on__text span').html('Выключить свет ');
			}else{
				$(this).find('.shine-on__text span').html('Включить свет ');
			}
			return false;
		})
		
	}
	shineOn();

	// Like
	function like(){
		$(".like").on('click', function(){
			$(this).toggleClass("is-active");
		});
	}
	like();

	//  Filter accordion
	function filterAccordion() {
		$('.filter-block__head').on('click', function(){
			$(this).parents('.filter-block').toggleClass('is-open')
			$(this).next().slideToggle(200)

			if($(this).parents('.filter-block').find('.styler').length>0) {
				$(this).parents('.filter-block').find('.styler').trigger('refresh')

			}
			return false;
		});

	}
	filterAccordion();

	//  Filter how many active elements
	function filterActiveElements() {
		$('.filter-block__list label').on('click', function(){
			$(this).parent().toggleClass('is-selected');
			var parent = $(this).parents(".filter-block");
			var count = $(this)
				.parents('.filter-block__list')
				.find("input[type=checkbox]:checked").length
			parent.find(".filter-block__number").html("(" + count + ")");
			if(!$(this).parents(".filter-block__list").find("input[type=checkbox]:checked").length) {
				$(this).parents('.filter-block').find('.filter-block__number').html("")
			}
		})
	}
	filterActiveElements();

	
	
	//  Filter show all items
	function openAllNavFilter() {
		$('.filter-link').on('click', function(){
			namebl = $(this).html();
			dataNameBl = $(this).data('title');
			if(namebl == dataNameBl){
				$(this).html('Cвернуть');
				$(this).parents('.filter-block').find('.i-hidden').removeClass('i-hidden').addClass('i-visible')
			}else{
				$(this).html(dataNameBl);
				$(this).parents('.filter-block').find('.i-visible').removeClass('i-visible').addClass('i-hidden')
			}
			
			return false;
		});

	}
	openAllNavFilter();


	// Show More
	function openAllList() {
		$('.toggle-more').on('click', function(){
			namebl = $(this).html();
			dataNameBl = $(this).data('title');
			if(namebl == dataNameBl){
				$(this).html('Cвернуть');
				$(this).parents('.toggle-container').find('.i-hidden').removeClass('i-hidden').addClass('i-visible')
			}else{
				$(this).html(dataNameBl);
				$(this).parents('.toggle-container').find('.i-visible').removeClass('i-visible').addClass('i-hidden')
			}
			
			return false;
		});

	}
	openAllList();

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

	/* Accordion */
	/* ---------------------------------------------- */
	$('.accordion-item').on('click', function(){
		var el = $(this);
		var elNext = $(this).next();
		$('.accordion-item').not(el).removeClass('is-active')
		$('.accordion-body').not(elNext).slideUp(200)
		el.next('.accordion-body').slideToggle(200);
		el.toggleClass('is-active');
		return false;
	});


	/* Popup */
	/* ---------------------------------------------- */
	var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};

	if(location.hash){
		var hsh=location.hash.replace('#','');
		if($('.popup-'+hsh).length>0){
			popupOpen(hsh);
		}else if($('div.'+hsh).length>0){
			$('body,html').animate({scrollTop:$('div.'+hsh).offset().top,},500, function(){});
		}
	}

	var act="click";
	if(isMobile.iOS()){
		var act="touchstart";
	}

	$('.popup-open').click(function(event) {
		var popup = $(this).attr('href').replace('#','');
		var video = $(this).data('video');
		popupOpen(popup,video);
		return false;
	});
	function popupOpen(popup,video){
		$('.popup').removeClass('active').hide();
		
		if(!isMobile.any()){
			$('body').css({paddingRight:$(window).outerWidth()-$('.main-wrapper').outerWidth()}).addClass('lock');
			// $('.pdb').css({paddingRight:$(window).outerWidth()-$('.main-wrapper').outerWidth()});
		}else{
			setTimeout(function() {
				$('body').addClass('lock');
			},300);
		}
		history.pushState('', '', '#'+popup);
		if(video!='' && video!=null){
			$('.popup-'+popup+' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/'+v+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		}
		$('.popup-'+popup).fadeIn(300).delay(300).addClass('active');

		if($('.popup-'+popup).find('.slick-slider').length>0){
			$('.popup-'+popup).find('.slick-slider').slick('setPosition');
		}
	}

	function popupClose(){
		$('.popup').removeClass('active').fadeOut(300);
		
		if(!isMobile.any()){
			setTimeout(function() {
				$('body').css({paddingRight:0});
				// $('.pdb').css({paddingRight:0});
			},200);
			setTimeout(function() {
				$('body').removeClass('lock');

			},200);
		}else{
			$('body').removeClass('lock');
		}

		$('.popup-video__value').html('');

		history.pushState('', '', window.location.href.split('#')[0]);
	}
	$('.popup-close,.popup__close').on('click', function(event) {
		popupClose();
		return false;
	});
	$('.popup').on('click', function(e) {
		if (!$(e.target).is(".popup>.popup-container *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
			popupClose();
			return false;
		}
	});
	$(document).on('keydown',function(e) {
		if(e.which==27){
			popupClose();
		}
	});



	/* Plugins */
	/* ---------------------------------------------- */

	// range
	
	if($("#range" ).length>0){
		$("#range" ).slider({
			range: true,
			min: 100,
			max: 93456,
			values: [19124, 72390],
			slide: function( event, ui ){
				$('#rangefrom').text($( "#range" ).slider( "option","min").toLocaleString());
				$('#rangeto').text($( "#range" ).slider( "option","max").toLocaleString());
				$(this).find('.ui-slider-handle').eq(0).html('<span>'+ui.values[0].toLocaleString() +'</span>');
				$(this).find('.ui-slider-handle').eq(1).html('<span>'+ui.values[1].toLocaleString() +'</span>');
			},
			change: function( event, ui ){
				if(ui.values[0]!=$( "#range" ).slider( "option","min") || ui.values[1]!=$( "#range" ).slider( "option","max")){
					$('#range').addClass('act');
				}else{
					$('#range').removeClass('act');
				}
			}
		});
		$('#rangefrom').text($( "#range" ).slider( "option","min").toLocaleString());
		$('#rangeto').text($( "#range" ).slider( "option","max").toLocaleString());
		$("#range" ).find('.ui-slider-handle').eq(0).html('<span>'+$( "#range" ).slider( "values", 0).toLocaleString() +'</span>');
		$("#range" ).find('.ui-slider-handle').eq(1).html('<span>'+$( "#range" ).slider( "values", 1).toLocaleString() +'</span>');
		
		$("#range" ).find('.ui-slider-handle').eq(0).addClass('left');
		$("#range" ).find('.ui-slider-handle').eq(1).addClass('right');
	}

	// Styler 
	if($('.styler').length){
		$('.styler').styler({
			singleSelectzIndex: '5',
			selectVisibleOptions: '7',
		});
	};

	// MASKS 
	$('input.tel').inputmask('+7(999) 999 9999',{
		clearIncomplete: true,
		clearMaskOnLostFocus: true,
		showMaskOnHover: false,

	});


	// Slick Slider  
	if($('.slider').length){
		$('.slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			
			asNavFor: '.slider-nav',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						centerPadding: '20%',
						centerMode: true,
						dots: true,
						fade: false,
					}
				}
			]
		});
		$('.slider-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.slider',
			arrows: false,
			swipe: false,

			focusOnSelect: true,
			vertical: true,
			verticalSwiping: true,
			verticalScrolling: true,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						vertical: false,
						verticalScrolling: false,
						verticalSwiping: false,
						slidesToShow: 5,
					}
				}
			]
		});
	}

	

});

if($('#map').length){
    function initMap() {
        var myLatLng = {lat: 47.956413, lng: 33.407902};

        var map = new google.maps.Map(document.getElementById('map'), {
			center: myLatLng,
			zoom: 18,
			disableDefaultUI: true,
	       
        });

		var widthWindow = $(window).width();
		// var contentString = '';


		// var infowindow = new google.maps.InfoWindow({
		// 	content: contentString,
			
		// }); 

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: ' ',
       	  icon: 'img/pin.svg',

       });

		infowindow.open(map, marker);

    }

    

};
;(($)=> {
	'use strict';
// slow scroll start
	$('a[href*="#"]').on('click', function(){
		event.preventDefault();
		$('body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 400);
	});
//slow scroll end

// map function start
	function createMap() {
		var $markers = $('.ba-marker');
		var map = new google.maps.Map( $('.ba-map')[0], {
			zoom: 14,
			center: new google.maps.LatLng(0,0),
			scrollwheel: false,
		});
	addMarkers($markers,map);
	centerMap($markers, map);
	}
//map function end

//markers function start
	function addMarkers($markers, map) {
 		$markers.each(function(){
 			var lat = $(this).data('lat');
 			var lng = $(this).data('lng');
 			var icon = $(this).data('icon');
	 		var marker = new google.maps.Marker({
 				position: { lat: lat, lng: lng	},
 				map: map,
 				icon: icon,
 			});
	 		var content = $(this).find('.description').html();
	 		var infoWindow = new google.maps.InfoWindow({
 				content: content,
 			});
 			marker.addListener('click', function(){
 				infoWindow.open(map,marker);
			});
		});
	}
//markers function end

//centerMap function start
	function centerMap($markers, map) {
		if ($markers.length == 1) {
			var lat = $markers.data('lat');
			var lng = $markers.data('lng');
			var latLng = new google.maps.LatLng( lat, lng );
			map.setCenter(latLng);
		} else { 
			var bounds = new google.maps.LatLngBounds();
			$markers.each( function() {
				var lat = $(this).data('lat');
				var lng = $(this).data('lng');
				var latLng = new google.maps.LatLng( lat, lng );
				bounds.extend(latLng);
			});
			map.fitBounds(bounds);
		}
	}
//centerMap function end

//slider start & create map
	$(window).on('load', function(){

		
		$('.ba-works-slider').slick({
			dots: false,
			arrows: true,
			slide: '.ba-works-slide',
			slidesToShow: 1,
  			slidesToScroll: 1,
  			dots: true,
  			autoplay: true,
  			// responsive: [
			  //   {
			  //     breakpoint: 1024,
			  //     settings: {
			  //       slidesToShow: 3,
			  //       slidesToScroll: 3,
			  //       infinite: true,
			  //       dots: true
			  //     }
			  //   },
			  //   {
			  //     breakpoint: 600,
			  //     settings: {
			  //       slidesToShow: 2,
			  //       slidesToScroll: 2
			  //     }
			  //   },
			  //   {
			  //     breakpoint: 480,
			  //     settings: {
			  //       slidesToShow: 1,
			  //       slidesToScroll: 1
			  //     }
			  //   }
			  //   // You can unslick at a given breakpoint now by adding:
			  //   // settings: "unslick"
			  //   // instead of a settings object
			  // ]
			prevArrow: '.ba-button--prev',
			nextArrow: '.ba-button--next'
		});

		$('.ba-team-slider').slick({
			dots: false,
			arrows: true,
			slide: '.ba-team-slide',
			slidesToShow: 1,
  			slidesToScroll: 1,
  			dots: false,
  			infinite: true,
  			autoplay: true,
  			// responsive: [
			  //   {
			  //     breakpoint: 1024,
			  //     settings: {
			  //       slidesToShow: 3,
			  //       slidesToScroll: 3,
			  //       infinite: true,
			  //       dots: true
			  //     }
			  //   },
			  //   {
			  //     breakpoint: 600,
			  //     settings: {
			  //       slidesToShow: 2,
			  //       slidesToScroll: 2
			  //     }
			  //   },
			  //   {
			  //     breakpoint: 480,
			  //     settings: {
			  //       slidesToShow: 1,
			  //       slidesToScroll: 1
			  //     }
			  //   }
			  //   // You can unslick at a given breakpoint now by adding:
			  //   // settings: "unslick"
			  //   // instead of a settings object
			  // ]
			prevArrow: '.ba-button--prev',
			nextArrow: '.ba-button--next'
		});
		
	
		createMap();
	});
//slider end & create map









})(jQuery);
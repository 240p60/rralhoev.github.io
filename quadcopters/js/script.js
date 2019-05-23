$('.review_slider').owlCarousel({
loop:true,
autoplay:false,
margin:0,
nav:true,
navText:true,
dots:false,
items:1,
});

$('.brand_slider').owlCarousel({
loop:true,
autoplay:false,
margin:30,
nav:false,
navText:false,
dots:false,
items:6,
responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        800:{
            items:5
        },
        1200:{
            items:6
        },
    }
});

$(document).ready(function() {

	$(".fancybox").fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

});

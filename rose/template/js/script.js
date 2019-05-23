$(document).ready(function() {
	$("select.nice").selectBox();
});

$('.slider1').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	nav:true,
	navText:false,
	dots:true,
	autoplay:true,
	autoplayTimeout:7000,
	autoplayHoverPause : true,
});

$('.slide3resp').owlCarousel({
    loop:true,
    margin:0,
	nav:true,
	navText:false,
	dots:true,
	responsive:{
		0:{
            items:1,
            nav:true
        },
		630:{
            items:2,
            nav:true
        },
		
		1000:{
            items:3,
            nav:true
        }
		
    }
});

$('.slide5resp').owlCarousel({
    loop:false,
    margin:0,
	nav:true,
	navText:false,
	dots:true,
	responsive:{
		0:{
            items:1,
            nav:true
        },
		500:{
            items:2,
            nav:true
        },
		
		1000:{
            items:3,
            nav:true
        },
		1500:{
            items:4,
            nav:true
        },
		2000:{
            items:5,
            nav:true
        }
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
	
	$('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
	});
	
	
});



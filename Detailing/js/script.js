$('.slider_clients').owlCarousel({
loop:true,
autoplay:false,
margin:0,
nav:false,
navText:false,
dots:true,
items:1,
});

$('.banner__slider').owlCarousel({
loop:true,
autoplay:false,
margin:0,
nav:true,
navText:true,
dots:false,
items:1,
});


$('.burger').click(function(){
$(this).toggleClass('active');
$('.menu').toggleClass('active');
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
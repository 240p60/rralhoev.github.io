
$('.banner_slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText:true,
    dots:true,
    items:1
});

$('.review_slider').owlCarousel({
    loop:true,
    margin:90,
    nav:false,
    navText:false,
    dots:false,
    items:3,
    responsive:{
        0:{
            margin:20
        },
        600:{
            items:3,
            margin:30
        },
        700:{
            margin:30
        },
        800:{
            margin:30
        },
        1000:{
            margin:80
        },
    }
});

$(document).ready(function(){
	$(".scroll").click(function (event) {
	//отменяем стандартную обработку нажатия по ссылке
	event.preventDefault();

	//забираем идентификатор бока с атрибута href
	var id = $(this).attr('href'),

	//узнаем высоту от начала страницы до блока на который ссылается якорь
	top = $(id).offset().top;

	//анимируем переход на расстояние - top за 1500 мс
	$('body,html').animate({scrollTop: top}, 1000);
	});
});

$('#button-menu_adaptive').click(function(){
  $(this).toggleClass('all_width');
  $(this).parent().toggleClass('menu-open');
  $('#header .menu_adap').toggleClass('visible');
});

$('#header .menu > ul > li').hover(function(){
  $(this).children('.popup_menu').toggleClass('active');
});

$('#header .menu > ul > li.active').hover(function(){
  $(this).toggleClass('active');
});

$('.about_company ul').click(function(){
  $(this).toggleClass('select');
});

$('form .hideIt').click(function(){
  $(this).parent().parent().addClass('hide_you');
});

$('form .showIt').click(function(){
  $(this).parent().parent().removeClass('hide_you');
});

$('.about_company ul li').click(function(){
  $('.about_company ul li').removeClass('active');
  $(this).addClass('active');
});

$('.menu_adap .accordion > li > a').click(function(){
$('.menu_adap .accordion > li').removeClass('active');
$(this).parent().children('ul').slideUp();
$(this).parent().addClass('active');
$(this).parent().children('ul').slideDown();
});

$('.review_slider .more_info').click(function(){
  $('#review_popup').show();
});

$('#review_popup .close').click(function(){
    $('#review_popup').hide();
});

$('.description_block h2').click(function(){
    $(this).parent().parent().toggleClass('active');
});


$(".numbox").mask("+7(999)999-99-99");
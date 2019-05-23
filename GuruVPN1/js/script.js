$(document).ready(function() {
    $('.connect .row .input_block').click(function(){
        $('.connect .row .input_block').removeClass('active');
        $(this).toggleClass('active');
    });
});

$(document).ready(function() {
    $('.top_block .content li').click(function(){
        $(this).toggleClass('active');
    });
});


$('.active_bl').click(function() {
	$('.how_did .inner').addClass('active');
    $('.how_did .inner').removeClass('disactive');
    $('.how_did .inner').removeClass('w_area');
});

$('.disactive_bl').click(function() {
	$('.how_did .inner').removeClass('active');
    $('.how_did .inner').addClass('disactive');
    $('.how_did .inner').addClass('w_area');
    $('.how_did label input').removeAttr('checked');
});

$('.country_choice ul li').click(function() {
	$('.country_choice ul li.active').removeClass('active');
    $('.country_choice').parent().removeClass('active');
	$(this).parent().addClass('active');
	$('.country_area > div.item').removeClass('active')
	                  .eq($(this).index()).addClass('active');
	return false;
});


$(function () { 
$(window).scroll(function () { 
if ($(this).scrollTop() > 40) {
$('#header .top_block').addClass('fixed_head'); 
$('.freak_header').addClass('visible');
}
else {
$('#header .top_block').removeClass('fixed_head'); 
$('.freak_header').removeClass('visible');
}
});
});

$(document).ready(function() {
    $(window).scroll(function () {
        var pos = $(this).scrollTop()+10;/*высота точки*/
        var destination1 = $('#banner1').offset().top;
        var destination2 = $('#banner2').offset().top;
        var destination3 = $('#banner3').offset().top;
        var destination4 = $('#banner4').offset().top;
        var destination5 = $('#banner5').offset().top;
        if(pos>destination5) {
            $('.scroll').each(function() {
                $('.top_block .content > ul li a').removeClass('active');
                $('.item-5').addClass('active');
            })
        } else if(pos>destination4) {
            $('.scroll').each(function() {
                $('.top_block .content > ul li a').removeClass('active');
                $('.item-4').addClass('active');
            })
        } else if(pos>destination3) {
            $('.scroll').each(function() {
                $('.top_block .content > ul li a').removeClass('active');
                $('.item-3').addClass('active');
            })
        } else if(pos>destination2) {
            $('.scroll').each(function() {
                $('.top_block .content > ul li a').removeClass('active');
                $('.item-2').addClass('active');
            })
        } else if(pos>destination1) {
            $('.scroll').each(function() {
                $('.top_block .content > ul li a').removeClass('active');
                $('.item-1').addClass('active');
            })
        }
    });
});



    
    $(document).ready(function () {
    $("a.scroll").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 1000);
        } else {
            $('html').animate({ scrollTop: destination }, 1000);
        }
        return false; 
    });
    
    
});

$('#button-menu_adaptive').click(function(){
  $(this).parent().toggleClass('menu-open');
  $('.hidden_menu_adap').toggleClass('visible');
});

$('.hidden_menu_adap .scroll').click(function(){
  $('.right_side_adap').removeClass('menu-open');
  $('.hidden_menu_adap').toggleClass('visible');
});

$('.call_and_order').click(function(){
    $('#modal').arcticmodal();
});

$('.modal1').click(function(){
    $('#modal1').arcticmodal();
});

$('.modal2').click(function(){
    $('#modal2').arcticmodal();
});

$(".numbox").mask("+7(999)999-99-99");
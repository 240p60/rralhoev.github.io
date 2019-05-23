$('.my_tabs ul a').click(function() {
	$('.my_tabs ul a.active').removeClass('active');
	$(this).addClass('active');
	$('.my_tabs div.item').removeClass('active')
	                  .eq($(this).parent().index()).addClass('active');
	return false;
});


$(document).ready(function() {
    $(window).scroll(function () {
        var pos1 = $(this).scrollTop()+10;/*высота точки*/
		var destinatio0 = $('#banne0').offset().top;
        var destinatio1 = $('#banne1').offset().top;
        var destinatio2 = $('#banne2').offset().top;
        var destinatio3 = $('#banne3').offset().top;
        var destinatio4 = $('#banne4').offset().top;
        var destinatio5 = $('#banne5').offset().top;
        var destinatio6 = $('#banne6').offset().top;
        var destinatio7 = $('#banne7').offset().top;
        var destinatio8 = $('#banne8').offset().top;
        var destinatio9 = $('#banne9').offset().top;
        var destinatio10 = $('#banne10').offset().top;
        var destinatio11 = $('#banne11').offset().top;
        var destinatio12 = $('#banne12').offset().top;
        var destinatio13 = $('#banne13').offset().top;
        if(pos1>destinatio13) {
            $('.scroll').each(function() {
                $('.questions__page .aside li a').removeClass('active');
                $('.ite-13').addClass('active');
            })
        } else if(pos1>destinatio12) {
            $('.scroll').each(function() {
                $('.questions__page .aside li a').removeClass('active');
                $('.ite-12').addClass('active');
            })
        } else if(pos1>destinatio11) {
            $('.scroll').each(function() {
                $('.questions__page .aside li a').removeClass('active');
                $('.ite-11').addClass('active');
            })
        } else if(pos1>destinatio10) {
            $('.scroll').each(function() {
                $('.questions__page .aside li a').removeClass('active');
                $('.ite-10').addClass('active');
            })
        } else if(pos1>destinatio9) {
            $('.scroll').each(function() {
                $('.questions__page .aside li a').removeClass('active');
                $('.ite-9').addClass('active');
            })
        } else if(pos1>destinatio8) {
            $('.scroll').each(function() {
                $('.questions__page .aside li a').removeClass('active');
                $('.ite-8').addClass('active');
            })
        } else if(pos1>destinatio7) {
            $('.scroll').each(function() {
                $('.questions__page .aside li a').removeClass('active');
                $('.ite-7').addClass('active');
            })
        } else if(pos1>destinatio6) {
            $('.scroll').each(function() {
                $('.questions__page .aside li a').removeClass('active');
                $('.ite-6').addClass('active');
            })
        } else if(pos1>destinatio5) {
            $('.scroll').each(function() {
                $('.questions__page .aside li a').removeClass('active');
                $('.ite-5').addClass('active');
            })
        } else if(pos1>destinatio4) {
            $('.scroll').each(function() {
                $('.questions__page .aside li a').removeClass('active');
                $('.ite-4').addClass('active');
            })
        } else if(pos1>destinatio3) {
            $('.scroll').each(function() {
                $('.questions__page .aside li a').removeClass('active');
                $('.ite-3').addClass('active');
            })
        } else if(pos1>destinatio2) {
            $('.scroll').each(function() {
                $('.questions__page .aside li a').removeClass('active');
                $('.ite-2').addClass('active');
            })
        } else if(pos1>destinatio1) {
            $('.scroll').each(function() {
                $('.questions__page .aside li a').removeClass('active');
                $('.ite-1').addClass('active');
            })
        } else if(pos1>destinatio0) {
            $('.scroll').each(function() {
                $('.questions__page .aside li a').removeClass('active');
                $('.ite-0').addClass('active');
            })
        }
    });
});


$(document).ready(function() {
    $('.aside').theiaStickySidebar({
      // Settings
      additionalMarginTop: 10
    });
  });
  
$('.questions__page .block .ah2 span').click(function() {
	$('.questions__page .block .ah2').removeClass('active');
	$('.questions__page .block .hid_mobile').slideUp();
	$(this).parent().addClass('active');
    $(this).parent().next().slideDown();
  });
  
  
 $('.box_shadow .rows .block input').click(function() {
    var aa = $(this).val();
	$('#year').text(aa);
  });
  
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.ru = {
	closeText: "Закрыть",
	prevText: "&#x3C;Пред",
	nextText: "След&#x3E;",
	currentText: "Сегодня",
	monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
	"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
	monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
	"Июл","Авг","Сен","Окт","Ноя","Дек" ],
	dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
	dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
	dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
	weekHeader: "Нед",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.ru );

return datepicker.regional.ru;

} ) );
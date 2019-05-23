
$('.review_slider').owlCarousel({
loop:true,
autoplay:false,
margin:0,
nav:false,
navText:false,
dots:true,
items:3,
responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
    }
});

$('.progress__slider').owlCarousel({
loop:true,
autoplay:false,
margin:0,
nav:false,
navText:false,
dots:true,
items:4,
responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:4
        },
    }
});

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [57.113199404699905,65.54250977116382],
            zoom: 17
        });

        myPlacemark = new ymaps.Placemark([57.11365859033628,65.54227799206534], {
            // Свойства.
            hintContent: 'Собственный значок метки'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconLayout: 'default#image',
            iconImageHref: 'img/marker_map.png',
            // Размеры метки.
            iconImageSize: [96, 136],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42]
        });


    // Добавляем все метки на карту.
    myMap.geoObjects
        .add(myPlacemark);
}

$('.about_us .anchors > .fleft a').click(function() {
	$('.about_us .anchors > .fleft a.active').removeClass('active');
	$(this).addClass('active');
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

$(".numbox").mask("+7(999)999-99-99");
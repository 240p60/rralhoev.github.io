// ymaps.ready(function () {
//     var myMap = new ymaps.Map('map', {
//             center: [56.00781015059731, 37.1944899957008],
//             zoom: 16
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),

//         // Создаём макет содержимого.
//         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//             '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//         ),

//         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//             hintContent: 'Собственный значок метки',
//             balloonContent: 'Это красивая метка'
//         }, {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#image',
//             // Своё изображение иконки метки.
//             iconImageHref: '../img/marker_map.png',
//             // Размеры метки.
//             iconImageSize: [46, 68],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-5, -38]
//         }),

//     myMap.geoObjects
//         .add(myPlacemark)
// });

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [56.00781015059731, 37.1944899957008],
            zoom: 16
        });

        // Создаем многоугольник, используя вспомогательный класс Polygon.
        var myPolygon = new ymaps.Polygon([
            // Указываем координаты вершин многоугольника.
            // Координаты вершин внешнего контура.
            [
                [56.00895521234085,37.19358877347183],
                [56.00816688794529,37.19643872594709],
                [56.00802863799703,37.19634753084059],
                [56.007965523725034,37.19654064988964],
                [56.00679037717891,37.19554286813612],
                [56.00685048784771,37.19525318956249],
                [56.0067212497937,37.19513517236584],
                [56.00745760033827,37.192377861498535],
            ]
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            hintContent: "Многоугольник"
        }, {
            // Задаем опции геообъекта.
            // Цвет заливки.
            fillColor: '#E0E0E4',
            strokeColor: '#3878cb',
            // Ширина обводки.
            strokeWidth: 3
        });

        myPlacemark = new ymaps.Placemark([56.008210, 37.194089], {
            // Свойства.
            hintContent: 'Собственный значок метки'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconLayout: 'default#image',
            iconImageHref: 'img/marker_map.png',
            // Размеры метки.
            iconImageSize: [46, 68],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42]
        });


    // Добавляем все метки на карту.
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPolygon);
}
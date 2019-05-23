ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [43.24560907451953,76.9042504999999],
            zoom: 10
        }),

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [43.24560907451953,76.9042504999999]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Метка',
                balloonContent: 'Меня можно перемещать'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'twirl#redStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),

    // Добавляем все метки на карту.
    myMap.geoObjects
        .add(myGeoObject);
}

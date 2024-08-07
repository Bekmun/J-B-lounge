export const map = () => {
  ymaps.ready(init);
  function init() {
    let myMap = new ymaps.Map("map", {
      center: [67.49911918698896, 64.06848763558197],
      zoom: 17,
    });

    let myPlacemark = new ymaps.Placemark(
      [67.49926714483183, 64.06852518650817],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../img/Subtract.svg",
        iconImageSize: [70, 70],
        iconImageOffset: [-30, -59],
      }
    );

    myMap.controls.remove("geolocationControl"); // удаляет геолокацию
    myMap.controls.remove("searchControl"); // удаляем поиск
    myMap.controls.remove("trafficControl"); // удаляем контроль трафик
    myMap.controls.remove("typeSelector"); // удаляем тип
    myMap.controls.remove("fullscreenControl"); // удаляем кнопку переход в полно. режим
    myMap.controls.remove("zoomControl"); // удаляем зумирования
    myMap.controls.remove("rulerControl"); // удаляем контрол правил
    myMap.behaviors.disable("scrollZoom"); // отключаем скролл карты (опционально)

    myMap.geoObjects.add(myPlacemark);
  }
};

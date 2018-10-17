let map;
ymaps.ready(init); 
function init() {
  map = new ymaps.Map('map', {
    center: [55.76, 37.64],
    zoom: 10,
    controls: []
  });
  const marker = new ymaps.Placemark([55.694843, 37.435023], {
    iconCaption: 'Курсы Mat1'
  });
  map.geoObjects.add(marker);
  map.behaviors.disable('scrollZoom');
}

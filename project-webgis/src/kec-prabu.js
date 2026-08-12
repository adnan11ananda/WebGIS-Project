import { Map } from 'maplibre-gl';
import { addAreaLayer } from './layers/Area.js';
import { addLineLayer } from './layers/line.js';
import { addPointLayer } from './layers/point.js';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json',
  center: [104.23117780290508, -3.441584955294986],
  zoom: 10
});

map.on('load', () => {
  addAreaLayer(map);
  
  
  });
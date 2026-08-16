import { 
  Map, 
  AttributionControl,
  FullscreenControl,
  GlobeControl,
  LogoControl,
  ScaleControl
 } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { addAreaLayer } from './layers/Area.js';
import { addLineLayer } from './layers/line.js';
import { addPointLayer } from './layers/point.js';
import {LogoOSFControl} from '../src/controls/OSFLogoControl.js'
import {createPopup} from '../src/popup/layersPopup.js';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://api.maptiler.com/maps/hybrid-v4/style.json?key=dILJMd6XGwLVf88PHfg3',
  center: [104.23117780290508, -3.441584955294986],
  zoom: 10,
  attributionControl: false,
  cooperativeGestures: true
});


map.on('load', () => {
  addAreaLayer(map);
  addLineLayer(map);
  addPointLayer(map);
  });

  map.addControl(new AttributionControl({
  compact: true,
  customAttribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://tanahair.indonesia.go.id/portal-web/">2026 Badan Informasi Geospasial</a>'
}));

map.on('click','layanan_kesehatan-layer', (event) => {
  createPopup(map, event);
});

map.addControl(new FullscreenControl());
map.addControl(new GlobeControl());
map.addControl(new LogoControl({
compact: false,
  }));
map.addControl(new ScaleControl({
  maxWidth: 80,
  unit: 'metric'
}));
map.addControl(new LogoOSFControl(),'top-left');




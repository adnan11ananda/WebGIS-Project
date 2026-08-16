import { 
  Map, 
  AttributionControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
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
  zoom: 10,
 attributionControl: false
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

import { Map } from 'maplibre-gl';
import JalanPbm from "./data/Way_Prabumulih.geojson?url";
import layanan_kesehatan from "./data/Layanan_Kesehatan_Pbm.geojson?url";

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json',
  center: [104.23117780290508, -3.441584955294986],
  zoom: 7
});

map.on('load', () => {
  map.addSource('jalan.pbm', {
    type: 'geojson',
    data: JalanPbm
  });

  map.addSource('layanan_kesehatan', {
    type: 'geojson',
    data: layanan_kesehatan
  });

  

  map.addLayer({
    id: 'jalan-layer',
    type: 'line',
    source: 'jalan.pbm',
    paint: {
      'line-color': '#FF0000',
      'line-width': 3
    }
  });
  map.addLayer({
    id: 'layanan_kesehatan-layer',
    type: 'circle',
    source: 'layanan_kesehatan',
    paint: {
      'circle-radius': 5,
      'circle-color': '#0000FF'
    }
  });
});
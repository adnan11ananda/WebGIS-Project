import JalanPbm from "../data/Way_Prabumulih.geojson?url";

export function addLineLayer(map) {
  map.addSource('jalan.pbm', {
    type: 'geojson',
    data: JalanPbm
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
}
import kecamatan_pbm from "../data/Kecamatan_Pbm.geojson?url";

export function addAreaLayer(map) {
  map.addSource('kecamatan_pbm', {
    type: 'geojson',
    data: kecamatan_pbm
  });

  map.addLayer({
    id: 'kecamatan_pbm-layer',
    type: 'fill',
    source: 'kecamatan_pbm',
    paint: {
      'fill-color': '#FF00FF',
      'fill-opacity': 0.5,
      'fill-outline-color': '#000000'
    }
  });

map.addSource('area', {
    type: 'geojson',
    data: "https://geoserver.mapid.io/layers_new/get_layer?api_key=55013b38e13441b1b3e182796cf09a6d&layer_id=6a7a529ab54ea2cae50be3bf&project_id=6a7a522cb54ea2cae50bd59b"
  });

  map.addLayer({
    id: 'area-layer',
    type: 'fill',
    source: 'area',
    paint: {
      'fill-color': '#00FF00',
      'fill-opacity': 0.5
    }
  });
}
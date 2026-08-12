import layanan_kesehatan from "../data/Layanan_Kesehatan_Pbm.geojson?url";

export function addPointLayer(map) {
  map.addSource('layanan_kesehatan', {
    type: 'geojson',
    data: layanan_kesehatan
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
}
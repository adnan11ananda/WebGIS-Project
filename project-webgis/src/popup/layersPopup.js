import {Popup} from 'maplibre-gl';

const popup = new Popup();

export function createPopup(map, event) {
    console.log(event.features[0].properties);
 return new Popup()
    .setLngLat(event.lngLat)
    .setHTML(`<h3>${event.features[0].properties.NAMOBJ}</h3><p>Tipe Faskes: ${event.features[0].properties.REMARK}<br>Longitude: ${event.lngLat.lng.toFixed(5)}<br>Latitude: ${event.lngLat.lat.toFixed(5)}</p>`)
    .addTo(map);
}
import logoOSF from '../data/logoOSF.png';

export class LogoOSFControl {
    onAdd(map) {  
        this._map = map;
        this._container = document.createElement('div');
        this._container.className = 'maplibregl-ctrl';
        this._container.innerHTML = `
            <img src="${logoOSF}" alt="Logo OSF" style="width: 100px; height: auto;">
        `;
        return this._container;
    }
    onRemove() {
        this._container.remove();
        this._map = undefined;
}
} 
/*
TitleCard.js
*/

export function TitleCard(map) {
    // Set path to img src 
    const img_path = "./src/assets/WERI_MAppFx_DOWs_Title_Card_White_Bold.png";

    // Configure map title 
    const mapTitle = L.control({position: 'topleft'});

    mapTitle.onAdd =  function(map) {
        this._div = L.DomUtil.create('div', 'mapTitle'); 
        this._div.innerHTML = `<img src="${img_path}" height="120">`;
        return this._div;
    };

    mapTitle.addTo(map);
}
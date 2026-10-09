// Approximate complex center; use the supplied Maps link for the exact entrance.
const gymCoordinates = [39.96832, 32.77375];
const map = L.map('leaflet-map', {
    center: [39.936,32.819], zoom: 12, minZoom: 3, maxZoom: 18,
    scrollWheelZoom: false, worldCopyJump: false, maxBounds: [[-85, -180], [85, 180]],
    maxBoundsViscosity: 1
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, noWrap: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
const markerLayer = L.layerGroup();
const rollsCoordinates = [39.904986, 32.864647];
const rollsMarker = L.marker(rollsCoordinates, {title: 'Rolls’n Smiles'}).addTo(markerLayer);
function rollsPopup() {
 const tr = document.documentElement.lang === 'tr';
 return `<article class="place-popup"><img style="object-position:center 35%" src="assets/images/rollsnsmiles.jpeg" alt="A favorite ice cream moment at Rolls’n Smiles"><h3>Rolls’n Smiles</h3><p>${tr ? 'Favori insanımla şehirdeki favori dondurmacımız.' : 'Our favorite ice cream spot in the city, with my favorite person.'}</p><small>Barbaros · Abay Kunanbay Caddesi 32/A</small><p><a href="https://www.google.com/maps/search/?api=1&query=39.904986,32.864647&query_place_id=ChIJwYlqt2lP0xQR37Hs-1tF9Ug" target="_blank" rel="noopener">${tr ? 'Google Maps’te Aç' : 'Open in Google Maps'}</a></p></article>`;
}
rollsMarker.bindPopup(rollsPopup, {maxWidth:280});
function showRolls() { map.setView(rollsCoordinates,15); updateMarkers(); rollsMarker.openPopup(); }
document.getElementById('show-rolls').addEventListener('click',showRolls);
const gymMarker = L.marker(gymCoordinates, {title: 'Gym Center · Park Avenue'}).addTo(markerLayer);
function popupContent() {
    const tr = document.documentElement.lang === 'tr';
    return `<article class="place-popup"><img src="assets/images/gym-center-squash.jpeg" alt="Gym Center Park Avenue squash court"><h3>Gym Center · Park Avenue</h3><p>${tr ? 'Spor ve squash için keyif aldığım mekânlardan biri.' : 'One of my favorite places for exercise and squash.'}</p><small>${tr ? 'İşaretçi Park Avenue kompleksinin yaklaşık konumunu gösterir.' : 'Marker shows the approximate Park Avenue complex location.'}</small><p><a href="https://share.google/9wMscWxmRTzuVJe8A" target="_blank" rel="noopener">${tr ? 'Google Maps’te Aç' : 'Open in Google Maps'}</a> · <a href="hobbies.html#favorite-places">${tr ? 'Hobilerime Dön' : 'Back to Hobbies'}</a></p></article>`;
}
gymMarker.bindPopup(popupContent, {maxWidth: 280});
function updateMarkers() {
    const zoom = map.getZoom();
    document.getElementById('leaflet-zoom').textContent = `${document.documentElement.lang === 'tr' ? 'Yakınlaştırma' : 'Current zoom'}: ${zoom}`;
    if (zoom >= 10) { if (!map.hasLayer(markerLayer)) markerLayer.addTo(map); }
    else { map.removeLayer(markerLayer); map.closePopup(); }
}
function showGym() { map.setView(gymCoordinates, 15); updateMarkers(); gymMarker.openPopup(); }
document.getElementById('show-gym').addEventListener('click', showGym);
map.on('zoomend', updateMarkers);
document.addEventListener('languagechange', () => { updateMarkers(); gymMarker.setPopupContent(popupContent()); rollsMarker.setPopupContent(rollsPopup()); });
updateMarkers();
if (location.hash === '#gym-center') showGym();

if (location.hash === '#rollsnsmiles') showRolls();

const extraMarkers = new Map();
function extraPopup(place) {
 const tr = document.documentElement.lang === 'tr';
 return `<article class="place-popup"><img style="height:240px;object-fit:contain" src="${place.image}" alt="${place.name}"><h3>${place.name}</h3><p>${tr ? place.tr : place.en}</p><small>${place.address}</small>${place.noteEn ? `<p>${tr ? place.noteTr : place.noteEn}</p>` : ''}<p><a href="${place.maps}" target="_blank" rel="noopener">${tr ? 'Google Maps’te Aç' : 'Open in Google Maps'}</a> · <a href="hobbies.html#${place.id}">${tr ? 'Hobilerime Dön' : 'Back to Hobbies'}</a></p></article>`;
}
function showExtra(place) {
 map.setView(place.coordinates, place.id === 'bozburun' ? 11 : 15);
 updateMarkers(); extraMarkers.get(place.id).openPopup();
}
favoritePlaces.forEach(place => {
 const marker = L.marker(place.coordinates, {title:place.name}).addTo(markerLayer);
 marker.bindPopup(() => extraPopup(place), {maxWidth:280}); extraMarkers.set(place.id,marker);
 const button = document.createElement('button');
 button.type='button'; button.className='button secondary'; button.textContent=place.name;
 button.addEventListener('click',()=>showExtra(place));
 document.getElementById('more-place-buttons').appendChild(button);
});
document.addEventListener('languagechange',()=>favoritePlaces.forEach(place=>extraMarkers.get(place.id).setPopupContent(extraPopup(place))));
function showPlaceFromHash() {
 const place = favoritePlaces.find(p=>'#'+p.id === location.hash);
 if(place) showExtra(place);
 else if(location.hash === '#gym-center') showGym();
 else if(location.hash === '#rollsnsmiles') showRolls();
}
window.addEventListener('hashchange',showPlaceFromHash);
showPlaceFromHash();

const aoiFeatures = new ol.format.GeoJSON().readFeatures(wadiAOI, {
    dataProjection:'EPSG:4326', featureProjection:'EPSG:3857'
});
const aoiSource = new ol.source.Vector({features:aoiFeatures, wrapX:false});
const aoiLayer = new ol.layer.Vector({source:aoiSource, style:new ol.style.Style({
    stroke:new ol.style.Stroke({color:'#70e0ce',width:3}),
    fill:new ol.style.Fill({color:'rgba(112,224,206,0.02)'})
})});
const projectFeature = new ol.Feature({geometry:new ol.geom.Point(ol.extent.getCenter(aoiSource.getExtent()))});
const vectorLayer = new ol.layer.Vector({source:new ol.source.Vector({features:[projectFeature],wrapX:false}), style:new ol.style.Style({image:new ol.style.Circle({radius:8,fill:new ol.style.Fill({color:'#f4b56b'}),stroke:new ol.style.Stroke({color:'#17222d',width:2})})})});
const internshipFeatures = internshipPlaces.map(place=>new ol.Feature({geometry:new ol.geom.Point(ol.proj.fromLonLat(place.coordinates)),internship:place}));
vectorLayer.getSource().addFeatures(internshipFeatures);
const internshipStyle = new ol.style.Style({image:new ol.style.RegularShape({points:4,radius:10,angle:Math.PI/4,fill:new ol.style.Fill({color:'#70e0ce'}),stroke:new ol.style.Stroke({color:'#17222d',width:2})})});
const projectStyle = vectorLayer.getStyle();
vectorLayer.setStyle(feature=>feature.get('internship')?internshipStyle:projectStyle);
const rasterLayer = new ol.layer.Tile({source:new ol.source.OSM({wrapX:false})});
const satelliteLayer = new ol.layer.Tile({source:new ol.source.XYZ({
 url:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
 wrapX:false, maxZoom:19,
 attributions:'Tiles &copy; Esri — Esri, Maxar, Earthstar Geographics, and the GIS User Community'
})});
rasterLayer.setVisible(false);
const cropLayer = new ol.layer.Image({opacity:0.75});
const map = new ol.Map({target:'openlayers-map',layers:[rasterLayer,satelliteLayer,cropLayer,aoiLayer,vectorLayer],view:new ol.View({center:ol.proj.fromLonLat([38.15,30.66]),zoom:10,minZoom:3,maxZoom:18,extent:ol.proj.get('EPSG:3857').getExtent(),showFullExtent:false})});
const overlay = new ol.Overlay({element:document.getElementById('ol-popup'),autoPan:{animation:{duration:200}}});
map.addOverlay(overlay);
const content = document.getElementById('ol-popup-content');
let selected = false;
let selectedInternship = null;
function renderPopup() {
 const tr=document.documentElement.lang==='tr';
 if(selectedInternship) {
  const p=selectedInternship;
  content.innerHTML=`<strong>${p.name}</strong>${p.image?`<img class="internship-popup-photo" src="${p.image}" alt="${p.name} internship photo"><small>${p.id==='mapeg'?(tr?'MAPEG stajımdan bir ofis anı.':'An office moment from my MAPEG internship.'):(tr?'YMN saha fotoğrafı; ofis konumunda çekilmemiştir.':'YMN fieldwork photo; not taken at the office location.')}</small>`:''}<p>${tr?p.tr:p.en}</p><small>${p.address}</small><p><a href="about.html#${p.id}-internship">${tr?'Staj deneyimimi oku':'Read my internship experience'}</a></p><p><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name+' '+p.address)}" target="_blank" rel="noopener">${tr?'Google Maps’te aç':'Open in Google Maps'}</a></p>`;
  const photo=content.querySelector('img');
  if(photo)photo.onload=()=>overlay.panIntoView({margin:24});
  return;
 }
 content.innerHTML=`<strong>Wadi As-Sirhan</strong><p>${tr?'Aynı bölgeyle ilişkili iki ayrı çalışma:':'Two separate studies related to the same region:'}</p><p><a href="assets/documents/06_Report/crop_masking_assignment_rabiademir.pdf" target="_blank" rel="noopener">01 · Crop Masking · 2020–2024</a></p><p><a href="assets/documents/06_Report/Wadi_As_Sirhan_Pivot_Crop_Mapping_Web_Arayuz_Raporu.pdf" target="_blank" rel="noopener">02 · GEOINSIGHT Web Platform</a></p><small>${tr?'Sınır, Crop Masking çalışmasının gerçek AOI verisidir.':'Boundary: actual Crop Masking study AOI.'}</small>`;
}
function updateMarkerVisibility() {
 const zoom=map.getView().getZoom();
 const tr=document.documentElement.lang==='tr';
 const enabled=document.getElementById('marker-toggle').checked;
 vectorLayer.setVisible(enabled && zoom>=10);
 document.getElementById('ol-zoom').textContent=`${tr?'Yakınlaştırma':'Current zoom'}: ${zoom.toFixed(1)}`;
 document.getElementById('map-status').textContent=!enabled ? (tr?'Proje işaretçisi kapalı.':'Project marker is switched off.') : zoom<10 ? (tr?'Proje işaretçisi için 10 düzeyine yaklaşın.':'Zoom to level 10 to see the project marker.') : (tr?'Raporları açmak için işaretçiye veya çalışma alanına tıklayın.':'Click the marker or study area to open the reports.');
 if(zoom<10) {selected=false;overlay.setPosition(undefined);}
}
function fitWadi() {selected=false;selectedInternship=null;overlay.setPosition(undefined);map.getView().fit(aoiSource.getExtent(),{padding:[60,45,60,45],maxZoom:12});updateMarkerVisibility();}
document.getElementById('fit-wadi').addEventListener('click',fitWadi);
document.getElementById('map-overview').addEventListener('click',()=>{map.getView().setCenter(ol.proj.fromLonLat([37,34]));map.getView().setZoom(5);updateMarkerVisibility();});
document.getElementById('aoi-toggle').addEventListener('change',event=>{aoiLayer.setVisible(event.target.checked);selected=false;overlay.setPosition(undefined);});
document.getElementById('marker-toggle').addEventListener('change',()=>{selected=false;overlay.setPosition(undefined);updateMarkerVisibility();});
map.getView().on('change:resolution',updateMarkerVisibility);
map.on('singleclick',event=>{
 const feature=map.forEachFeatureAtPixel(event.pixel,f=>f,{hitTolerance:6});
 selected=Boolean(feature) && map.getView().getZoom()>=10;
 selectedInternship=feature ? feature.get("internship") || null : null;
 if(selected) {renderPopup();overlay.setPosition(event.coordinate);} else overlay.setPosition(undefined);
});
map.on('pointermove',event=>{map.getTargetElement().style.cursor=map.hasFeatureAtPixel(event.pixel)&&map.getView().getZoom()>=10?'pointer':'';});
document.getElementById('ol-popup-closer').onclick=()=>{selected=false;overlay.setPosition(undefined);return false;};
document.addEventListener('languagechange',()=>{updateMarkerVisibility();if(selected)renderPopup();});
fitWadi();

let maskState = 'loading';
let tileFailed = false;
function updateRasterStatus() {
 const tr=document.documentElement.lang==='tr';
 const inWadi=ol.extent.containsCoordinate(aoiSource.getExtent(),map.getView().getCenter());
 if(!inWadi) {document.getElementById('raster-load-status').textContent=tr?'Tarım analizi kontrolleri Wadi As-Sirhan alanına aittir.':'Crop analysis controls apply to the Wadi As-Sirhan study area.';return;}
 const text=maskState==='error' ? (tr?'Maske yüklenemedi. Başka tarih seçerek yeniden deneyin.':'Mask could not be loaded. Select another date to retry.') : maskState==='loading' ? (tr?'Tarım maskesi yükleniyor…':'Loading crop mask…') : '';
 document.getElementById('raster-load-status').textContent=text+(tileFailed ? (tr?' Uydu altlığı yüklenemedi; sokak altlığına geçebilirsiniz.':' Satellite basemap could not load; you can select the street basemap.') : '');
}
function selectMask() {
 const entry=cropMasks.find(item=>item.date===document.getElementById('mask-date').value);
 const source=new ol.source.ImageStatic({url:entry.url,imageExtent:entry.extent,projection:'EPSG:3857',interpolate:false});
 maskState='loading'; updateRasterStatus();
 source.on('imageloadend',()=>{if(cropLayer.getSource()===source){maskState='ready';updateRasterStatus();}});
 source.on('imageloaderror',()=>{if(cropLayer.getSource()===source){maskState='error';updateRasterStatus();}});
 cropLayer.setSource(source);
 document.getElementById('crop-area').textContent=entry.areaKm2.toFixed(2)+' km²';
 document.getElementById('ndvi-threshold').textContent=entry.threshold.toFixed(2);
}
document.getElementById('basemap-select').addEventListener('change',event=>{
 const satellite=event.target.value==='satellite';satelliteLayer.setVisible(satellite);rasterLayer.setVisible(!satellite);
 tileFailed=false;updateRasterStatus();
});
satelliteLayer.getSource().on('tileloaderror',()=>{tileFailed=true;updateRasterStatus();});
document.getElementById('mask-date').addEventListener('change',selectMask);
document.getElementById('crop-toggle').addEventListener('change',event=>cropLayer.setVisible(event.target.checked));
document.getElementById('mask-opacity').addEventListener('input',event=>{
 cropLayer.setOpacity(Number(event.target.value)/100);document.getElementById('opacity-value').textContent=event.target.value+'%';
});
document.addEventListener('languagechange',updateRasterStatus);
map.addControl(new ol.control.ScaleLine());
selectMask();

function showInternship(id) {
 const feature=internshipFeatures.find(f=>f.get('internship').id===id);
 if(!feature)return;
 document.getElementById('marker-toggle').checked=true;
 document.getElementById('basemap-select').value='street';
 document.getElementById('basemap-select').dispatchEvent(new Event('change'));
 map.getView().setCenter(feature.getGeometry().getCoordinates());map.getView().setZoom(15);
 updateMarkerVisibility();selected=true;selectedInternship=feature.get('internship');renderPopup();overlay.setPosition(feature.getGeometry().getCoordinates());
}
map.on('moveend',updateRasterStatus);
['mapeg','ymn'].forEach(id=>document.getElementById('show-'+id).addEventListener('click',()=>showInternship(id)));
function showInternshipHash(){if(['#mapeg','#ymn'].includes(location.hash))showInternship(location.hash.slice(1));}
window.addEventListener('hashchange',showInternshipHash);showInternshipHash();

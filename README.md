# Rabia Demir — GMT458 Personal Web Page

Personal portfolio for GMT458 Web GIS, Hacettepe University. Built with HTML, CSS and JavaScript; no build step required.

## Pages

- `index.html`: introduction and project navigation.
- `about.html`: background and technical interests.
- `projects.html`: Wadi As-Sirhan Crop Masking and the separate GEOINSIGHT Web Platform follow-up, each with its own PDF. Includes an image-based results table.
- `hobbies.html`: personal interests.
- `leaflet.html`: favorite places map with Gym Center Park Avenue and a user-supplied squash photo.
- `openlayers.html`: OpenLayers 10.6.1 map. `maps.html` provides the same working map for existing links.

OpenLayers shows academic project locations; Leaflet shows six favorite hobby venues with personal photos. Markers are hidden below zoom 10 and visible at zoom 10 or above. Leaflet uses `noWrap`, geographic bounds and a minimum zoom. OpenLayers uses OSM and Esri `wrapX: false` and a constrained view extent to prevent repeated worlds. Wadi coordinates are approximated from the included AOI. External map libraries and tiles require internet access.

TR/EN selection is stored locally and applied on subsequent pages. Some proper names and technical method names remain in English. CSS provides entry animations, responsive layouts, focus indicators and a reduced-motion alternative.

## Why I used two different mapping libraries

I separated the maps by purpose: OpenLayers presents my academic projects, while Leaflet presents my hobbies and favorite places. This gives each map a clear role and lets me explore both libraries required by the assignment.

### OpenLayers — academic project map

The project map combines the real Wadi As-Sirhan study boundary, crop-mask overlays for three analysis dates, satellite/street basemaps and opacity controls. It links to the original Crop Masking report and the separate GEOINSIGHT Web Platform report. The shared reference location does not make them a single project.

**Advantages:** OpenLayers supports tiled, image and vector layers and multiple geographic data formats. Its layer/source model fits this map's combination of a GeoJSON boundary, projected raster overlays and project markers. It leaves room to extend the academic map with additional GIS datasets.

**Disadvantages in this implementation:** Setting up sources, layers, styles, projections and controls takes more code and learning than a simple marker map. The crop GeoTIFFs also needed preprocessing into browser-ready overlays. Maintaining the date selector, opacity control and layer visibility adds complexity.

### Leaflet — hobbies and favorite places map

The personal map shows the gym, cafes, restaurants and Bozburun with my own photographs, bilingual captions and navigation links. Its main interaction is selecting a place and opening a photo popup.

**Advantages:** Leaflet's simple API, built-in markers and popups, and mobile interaction support suit this small collection of places. HTML popup content makes it straightforward to combine a photograph, a personal description and a link.

**Disadvantages for a larger GIS application:** Requirements beyond its core features may need plugins or custom code, introducing extra dependencies to maintain. More complex projection or analysis workflows would require additional setup. Leaflet already supports GeoJSON, polygons and image overlays, so this division is a design choice rather than a claim that it cannot display project data.

Using both libraries also means maintaining two implementations for shared behavior such as language changes, zoom thresholds and map bounds. For this assignment, that tradeoff helps demonstrate both approaches within a coherent portfolio.

Library capabilities were checked against the official [OpenLayers overview](https://openlayers.org/) and [Leaflet features](https://leafletjs.com/). The implementation tradeoffs above describe this website, rather than a universal performance ranking.

## How I designed my maps — in my own words

I wanted my website to show more than a written introduction about me. I wanted visitors to explore both my projects and the places I enjoy on a map. Since the assignment asks us to use OpenLayers and Leaflet, I gave each map a different purpose. I used one for my academic work and the other for my hobbies and favorite places. This way, each map adds something different to my website.

### OpenLayers: showing my projects on a map

I chose OpenLayers for my Wadi As-Sirhan project map. I wanted to show my actual study area and analysis results, instead of only placing a marker. OpenLayers suited this idea because it supports different types of layers together. We used the original study boundary as GeoJSON and transformed its coordinates into the coordinate system used by the web map. We also placed a project marker at the center of the study area.

I present two separate studies here. The first is my Wadi As-Sirhan Crop Masking study using Sentinel-2 and NDVI. The second is GEOINSIGHT Web Platform, developed separately as a follow-up to the first study. They are connected, but they are not the same project, so I kept their descriptions and PDF links separate. The boundary shown on the map belongs to the Crop Masking study; I do not use it to claim the full coverage of GEOINSIGHT.

To make the results easier to explore, we added crop masks from January 2020, February 2020 and April 2023. We converted the original GeoTIFF outputs into PNG overlays that the browser can display. Pixels classified as crops appear in yellow, while the other pixels remain transparent. Nearest-neighbor resampling was used during reprojection to preserve the classes. Changing the analysis date changes the mask and its area information. The displayed areas come from my original analysis table, rather than being recalculated from the displayed image.

We also added satellite and street basemaps, a crop-layer switch and an opacity slider. Visitors can reduce the opacity or hide the mask to compare it with the basemap. I explain on the page that the satellite basemap may contain imagery from different dates; it is not the Sentinel-2 image for the selected analysis month. The study-area and regional-view buttons make navigation easier.

OpenLayers worked well for this combination of layers, but configuring sources, layers, styles and projections required more code. We developed these parts and the raster conversion with AI assistance.

### Leaflet: my hobbies and favorite places

For my Leaflet map, I wanted something more personal. I selected places that mean something to me: Gym Center Park Avenue, Rolls’n Smiles, Deli Yengeç, Coffee Break at Hacettepe Beytepe, Bozburun Gulf and Etmanyak. I included my own photographs and short descriptions explaining why I enjoy these places.

My main goal was to let visitors click a place and see its photograph and story. Leaflet’s markers and popups suited this idea. Leaflet can also display project data; separating the two maps was my design choice. More complex features could require plugins or additional custom code.

We matched the places with their addresses and map sources, then positioned the markers using latitude and longitude. Some locations are approximate: the gym marker represents the Park Avenue complex, and Bozburun uses a representative point in the gulf. I do not claim that these are the exact locations where the photographs were taken. The location sources are documented elsewhere in this README.

### How I added my photographs

I provided my own photographs and identified which place each one belonged to. We copied them into the project’s `assets/images` folder with descriptive filenames. Instead of linking to the Downloads folder on my computer, we used relative paths inside the project. This lets the images work when the project files are uploaded to GitHub together.

On the Hobbies page, we added the photographs to place cards. On the Leaflet map, we included the same image paths, place names and descriptions in the marker popups. The cards and popups use the same files, so we did not need duplicate copies. CSS controls their displayed size and layout; the original photographs were not edited.

### How I connected the pages, maps and reports

The Maps menu provides separate links to the two map pages. Links from the Hobbies page include a place identifier, such as `leaflet.html#rollsnsmiles`. The map reads this identifier, moves to the relevant location and opens its photo popup. The place buttons on the map also take visitors to individual locations. Popup links allow visitors to return to the Hobbies page.

Google Maps links let visitors open each location in another map service. For my project reports, we used relative links to the PDF files inside the project folder. Clicking the study area or project marker in OpenLayers provides access to the two separate reports. The report links are also available in the project cards below the map.

### What the two maps have in common

We chose zoom level 10 as the marker visibility threshold so that markers do not fill the map when viewed from far away. Whenever the zoom changes, the code checks the level: markers are hidden below 10 and shown at 10 or above. This is our implementation of the assignment’s marker-overlap requirement.

We also disabled repeated copies of the world when zooming out. We used `noWrap` in Leaflet and `wrapX: false` in OpenLayers, together with map-view bounds. The TR/EN controls change the descriptions and map messages, and the selected language is stored in the browser. We added CSS rules to adjust the cards and controls for smaller screens.

I chose the places, photographs, personal descriptions and purposes of the maps. I used ChatGPT/Codex assistance to connect them to the website, implement JavaScript interactions, convert data and check the result. I do not present all of the code as independently written work; I explain the assistance I received and the concepts I learned here.

## Run and verify

Open the folder in VS Code and use Live Server, or run `python3 -m http.server 8000` and visit `http://localhost:8000`.

Check all pages in both languages at mobile and desktop widths. On each map, zoom across 9/10 and click a marker; zoom out to confirm there are no repeated basemaps. Open both PDF links and both results images. Check keyboard and touch access to the Maps dropdown.

## GitHub hosting

Repository: https://github.com/rabiademr/gmt458-personal-webpage

Expected Pages URL: https://rabiademr.github.io/gmt458-personal-webpage/

GitHub Pages was enabled on 9 October 2026 from main → /(root). The live homepage, Hobbies and About pages were confirmed accessible. New changes appear after pushing and successful deployment. All local resource URLs are relative to support the repository subpath.

## Assignment checklist

Source: `a1_web_page.pdf`, Assignment 1. Submission: 12 October 2026. Peer review: 23 October 2026.

| Criterion | Weight | Before day 2 audit | Current status |
| --- | --- | --- | --- |
| At least three HTML files | 15% | Present | Seven HTML files, including the compatibility map page |
| CSS animation | 10% | Present in local CSS | Entry animations preserved; reduced-motion support added |
| Tabular information with images | 10% | Missing | Two real project figures in a semantic table |
| OpenLayers map | 10% | Implemented but navbar led to placeholder | Navbar corrected; maps.html now works |
| Leaflet map | 10% | Implemented | Shared navigation and language controls added |
| Zoom threshold for markers | 10% | Implemented | Threshold 10 preserved in both maps |
| Prevent repeating Earth | 10% | Implemented | noWrap / wrapX and view constraints preserved |
| At least three commits on different days | 5% | Two commits, both 5 October | Day 2 commit on 9 October; a third distinct day remains |
| Overall quality | 10% | Inconsistent navigation and translations | Navigation, mobile dropdown, headings and footer translations improved |

TR/EN, the exact page names and project PDFs are portfolio requirements; the brief does not individually require them. It does require GitHub hosting, mentions GitHub Pages as a tutorial, and explicitly requires AI disclosure in README.

## AI assistance disclosure

ChatGPT helped develop the page structure, styling, TR/EN interface and project descriptions. Codex audited the assignment against the actual files, corrected map navigation, removed the obsolete Harran marker, added the image table, improved mobile navigation and documented remaining work.

Specific concepts explained with AI assistance: using zoom events to control marker visibility; disabling map world wrapping; keeping language preference in localStorage; distinguishing a local file path from an HTML link; using relative paths for GitHub Pages; touch and keyboard access for a dropdown.

**Total AI usage estimate: awaiting Rabia's estimate of prior ChatGPT work plus this Codex session. This must be filled in before submission.** No unsupported duration or prior independent search history is claimed. The brief asks students to research problems first and use AI for unresolved issues.

## Remaining before submission

1. Enter the honest total AI usage estimate above.
2. Complete meaningful work and commit on a third distinct calendar day, e.g. 10 October; do not backdate commits.
3. After deployment, test all pages, maps and PDFs at the live URL, including on a phone.
4. Complete desktop/mobile map interaction checks, including popups and threshold 9/10, on the deployed site.
5. Register at https://gmt458.hacettepe.edu.tr/ and review three assigned peers by 23 October. The brief states 85% instructor / 15% blind peer evaluation and requires detailed feedback.

Gym Center marker uses the approximate YDA Park Avenue complex center (39.96832, 32.77375), not an exact entrance. Coordinate source: https://mapcarta.com/W606411043 . Venue: https://centergym.com.tr/yda-park-avenue/ . Use the user-supplied Google Maps link for navigation.

Rolls’n Smiles: user-supplied personal photo and caption; location 39.904986, 32.864647 from https://mekanlar.com/mekan/rollsn-smiles-barbaros (Barbaros, Abay Kunanbay Cd. 32/A).

Additional favorite places (user-provided photos and personal captions):
- Deli Yengeç: https://www.bugunnereye.com/ankara/deli-yengec . Coordinates: [39.89704, 32.86691].
- Coffee Break · Hacettepe Beytepe: https://menuburada.com/amp-restoran-coffee-break-universiteler-ankara/ . Coordinates: [39.862672, 32.73583].
- Bozburun Körfezi: https://mapcarta.com/12946408 . Coordinates: [36.63466, 28.01445].
- Etmanyak · Beytepe / Çayyolu: https://menuburada.com/etmanyak-burger-sosis-alacaatli-ankara/ . Coordinates: [39.863835, 32.695272].
Bozburun is a representative gulf point, not an inferred photo location. Deli Yengeç currently uses the Filistin Caddesi branch; Etmanyak uses the official Çayyolu/Alacaatlı branch address.

Project map update: OpenLayers now reads the original Crop Masking AOI, with EPSG:4326 to EPSG:3857 conversion. The source is copied into `assets/data/wadi-aoi.geojson`; `wadi-aoi.js` embeds the same data for synchronous browser loading. Boundary and marker controls, study-area fit, regional overview, bilingual status and separate report links are provided. The GEOINSIGHT card is a separate follow-up; its full coverage is not inferred from this AOI. Only the two currently featured Wadi studies appear on this project map.

Crop-mask explorer: choose January 2020, February 2020 or April 2023, switch between Esri World Imagery and OpenStreetMap, toggle the crop layer, and adjust its opacity. PNG overlays are derived from the original uint8 GeoTIFF crop masks, reprojected to EPSG:3857 with nearest-neighbor resampling. Only class 1 is yellow; class 0 and NoData are transparent. Extents and source CSV area/threshold values are recorded in `assets/data/crop-masks-metadata.json` and `crop-masks.js`. Displayed areas come from the original analysis CSV rather than counting reprojected pixels. Esri imagery is a contextual basemap with potentially different acquisition dates; it is not the selected month’s Sentinel-2 image. AI assistance included raster conversion, layer controls and browser verification.

Usability update: navigation uses purpose-based map names, the home page links directly to favorite places, and both maps include short getting-started instructions. Leaflet mouse-wheel zoom is disabled to make page scrolling easier; zoom buttons and touch gestures remain available.

Pottery and preparing sandwiches with different breads and healthy snacks are included as bilingual hobbies, using the user-supplied photos unchanged.

Internship update: About includes MAPEG and the 2026 YMN internship. YMN descriptions and three field photos are taken from the user-provided internship diary; dates spanning the whole internship are not inferred from a single survey date. Photos are extracted unchanged from DOCX media (image8.jpg, image9.jpg, image12.jpeg). The fixed-wing UAV photo belongs to a separate quarry visit, not the Ankara-6494 survey. A user-supplied MAPEG office photo is included in About and its map popup. OpenLayers includes two institutional office markers with zoom threshold 10; YMN field photographs in the office popup do not imply they were taken at the office. MAPEG coordinates [32.812756,39.9208027] come from its official contact-page map; YMN coordinates [32.819466,39.921443] come from its official website map embed. Source URLs: https://www.mapeg.gov.tr/Sayfa/iletisim and https://www.ymnproje.com .

Bozcaada: user-supplied photography hobby image, reused in the Leaflet popup. Caption: “The place where I feel I belong, every time.” Coordinates [39.8172, 26.0227] represent the island, not the exact photograph location. Location source: https://mapcarta.com/Bozcaada .

Cappadocia: user-supplied photo appears in the Photography hobby and Leaflet popup with a bilingual personal caption. Coordinates [38.6421, 34.8296] represent Göreme in Cappadocia, not the exact photo location. Source: https://mapcarta.com/G%C3%B6reme .

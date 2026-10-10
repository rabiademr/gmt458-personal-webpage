# Rabia Demir — GMT458 Personal Web Page

I created this website for the GMT458 Web GIS course at Hacettepe University. I wanted one place to introduce myself, share my projects and internships, and show the places and activities I enjoy. The site uses HTML, CSS and JavaScript and runs without a build step.

[Live website](https://rabiademr.github.io/gmt458-personal-webpage/) · [GitHub repository](https://github.com/rabiademr/gmt458-personal-webpage)

## My design choices

I chose a dark background with turquoise accents. The homepage has a small portrait, two featured projects and a “Beyond the maps” section with my own hobby photographs. I wanted visitors to understand who I am, then easily explore my work or favorite places. The tennis and Bozcaada cards link directly to their locations on the map.

The subtle contour lines connect the design to my interest in mapping. Sections appear once as visitors scroll, and project covers gently enlarge on hover. Browsers that support cross-document view transitions show a short transition between pages; other browsers use normal navigation. Animations respect the reduced-motion preference, and cards stack on smaller screens.

My portrait and hobby photographs are real images I provided. The two satellite-style homepage covers are AI-generated illustrations, not analysis results. The actual project figures, study boundary and reports are presented separately in the project details.

## Why I separated the maps

The assignment requires both OpenLayers and Leaflet. I gave them different purposes: OpenLayers presents my academic work and internship institutions, while Leaflet presents my favorite places and hobbies. This makes the navigation easier to understand and lets me explore both libraries.

This is my design choice, not a restriction of either library. Leaflet can display project data, and OpenLayers can also display personal markers and photographs.

### OpenLayers: my projects and internships

For Wadi As-Sirhan, I wanted to show the actual study area and analysis outputs. I added the original boundary as GeoJSON and transformed its coordinates to EPSG:3857 for the web map. Visitors can choose crop masks from January 2020, February 2020 and April 2023.

With AI assistance, the original GeoTIFF outputs were converted into browser-ready PNG overlays. Nearest-neighbor resampling preserved the classification during reprojection. Crop pixels appear in yellow; other pixels are transparent. The displayed area values come from my original analysis table, rather than being recalculated from the displayed overlays.

I added satellite and street basemaps, layer switches and an opacity slider. The satellite basemap provides context and may contain imagery from different dates; it is not the Sentinel-2 image for the selected analysis month.

Crop Masking and GEOINSIGHT are related but separate studies, so I kept their descriptions and PDF links separate. The mapped boundary belongs to Crop Masking and does not claim to represent the full coverage of GEOINSIGHT. MAPEG and YMN markers show institutional locations with internship photographs. YMN field photographs do not imply that the fieldwork took place at the office.

**Advantages for my website:**

- OpenLayers supports tiled, image and vector layers, which suits the combination of basemaps, crop overlays and a GeoJSON boundary.
- Its source/layer structure gives me control over visibility, styling and opacity.
- Its projection tools fit the coordinate conversion needed for my study data.

**Disadvantages I encountered:**

- Learning sources, layers, styles and projections required more setup and code than my simple personal marker map.
- The original crop rasters needed preprocessing for this implementation.
- Date selection, layer controls and popup state add more code to maintain.

### Leaflet: my favorite places and hobbies

My personal map includes eleven places: Gym Center, Rolls’n Smiles, Deli Yengeç, Coffee Break, Bozburun, Etmanyak, Bozcaada, Cappadocia, Ahal Teke, Lake Eymir and Erciyes. Each place is connected to my photograph, a short description and navigation links.

**Advantages for my website:**

- Its straightforward marker and popup API suited my small collection of personal places.
- HTML popups let me combine photographs, descriptions and links easily.
- Built-in pan, zoom and touch interactions support exploring the places on desktop and mobile.

**Disadvantages and limits:**

- Features outside the core library can require plugins or custom code, adding dependencies to maintain.
- More specialized projection or GIS workflows would need additional setup.
- A large collection of nearby markers would need further design, such as clustering; my zoom threshold alone does not separate every nearby point.

### Comparing my two implementations

| Aspect | Leaflet map | OpenLayers map |
| --- | --- | --- |
| My purpose | Personal places and hobbies | Academic work and internships |
| Main content | Photo markers and short stories | Study boundary, crop overlays, basemaps and institution markers |
| Main interaction | Select a place and open its photo popup | Select a date, compare layers and open project reports |
| Setup in this project | Relatively simple marker/popup logic | More source, layer, projection and control configuration |
| Main tradeoff | Extra features may need plugins or custom code | More configuration and state to learn and maintain |

Using two libraries also means maintaining two versions of shared behavior, including language changes, zoom thresholds and map bounds. I accepted that tradeoff to demonstrate both libraries in the assignment. These are observations about my implementation, not a universal performance ranking.

I checked the library capabilities against the official [Leaflet features](https://leafletjs.com/#features) and [OpenLayers overview](https://openlayers.org/).

## How I connected photographs, pages and reports

I copied my photographs into `assets/images` and used relative paths instead of paths to the Downloads folder on my computer. This allows the images to load when the project is uploaded to GitHub. Hobby cards and map popups reuse the same photograph files. The original photographs were not edited; CSS controls their displayed size and cropping.

For example, `leaflet.html#bozcaada` opens the relevant location and its photo popup. Google Maps links open the location in another map service. PDF reports also use relative project paths. The TR/EN preference is stored in `localStorage` and continues across pages.

Coordinates were matched using addresses and map sources. Some points represent a facility or a wider area, rather than an exact photo location. Sources are listed below.

## How I addressed the two map issues

**Marker overlap:** I chose zoom level 10 as the visibility threshold in both maps. The code checks the zoom when it changes: markers are hidden below 10 and shown at 10 or above. This implements the requested threshold behavior, although it does not guarantee that all closely spaced markers are separated at higher zoom levels.

**Repeated worlds:** In Leaflet, I used `noWrap` and geographic map bounds. In OpenLayers, I used `wrapX: false` and a constrained view extent. Both maps have a minimum zoom of 3.

## Pages

- `index.html`: introduction, selected projects and personal photographs.
- `about.html`: education, contact information and MAPEG/YMN internships.
- `projects.html`: two separate studies, PDF reports and a table with real analysis figures.
- `hobbies.html`: hobbies, photography and travel galleries.
- `leaflet.html`: personal places map.
- `openlayers.html`: academic project and internship map.
- `maps.html`: OpenLayers compatibility page for older links.

The external map libraries and basemaps require an internet connection. For local viewing, I use VS Code Live Server.

## What I learned with AI assistance

I used ChatGPT/Codex for help with HTML/CSS structure, JavaScript interactions, bilingual content, debugging and interface checks. Specific concepts I learned include controlling marker visibility through zoom events, preventing world wrapping, transforming coordinates, distinguishing local file paths from web links, and using relative paths for GitHub Pages. I also received help with raster conversion, accessible navigation and reduced-motion support.

I provided the personal content, photographs and descriptions. I do not claim to have independently written all the code. My earlier estimate of total AI-assisted work was approximately 10 hours. This was not timed, and I still need to reassess it to include the final design session before submission. The brief asks us to research problems first and use AI for unresolved issues; I do not claim an independent research history that I did not carry out.

## Assignment checklist and submission

- At least three HTML files: seven included.
- CSS animation: included, with reduced-motion support.
- Tabular information with images: two real analysis figures in `projects.html`.
- OpenLayers and Leaflet maps: both included.
- Zoom threshold and prevention of repeated worlds: implemented in both maps.
- At least three commits on different days: history includes 5, 9 and 10 October 2026; dates were not altered.
- GitHub hosting: GitHub Pages is used.
- Specific AI learning and estimated usage time: documented above.

Submission is due on 12 October and peer reviews on 23 October 2026. I registered for the review system, but the test-link record could not be confirmed because of a loading error. Formal submission and detailed feedback on three assigned projects remain separate tasks. A final check on a physical phone is also still needed. Overall quality is subject to the instructor’s assessment.

## Data and location sources

- Gym Center: [venue](https://centergym.com.tr/yda-park-avenue/), [coordinate source](https://mapcarta.com/W606411043). The marker represents the Park Avenue complex.
- Rolls’n Smiles: https://mekanlar.com/mekan/rollsn-smiles-barbaros
- Deli Yengeç: https://www.bugunnereye.com/ankara/deli-yengec
- Coffee Break: https://menuburada.com/amp-restoran-coffee-break-universiteler-ankara/
- Bozburun: https://mapcarta.com/12946408
- Etmanyak: https://menuburada.com/etmanyak-burger-sosis-alacaatli-ankara/
- Bozcaada: https://mapcarta.com/Bozcaada
- Cappadocia/Göreme: https://mapcarta.com/G%C3%B6reme
- Ahal Teke: https://www.ahalteketeniskulubu.com/ (structured location data).
- Lake Eymir: https://geographic.org/geographic_names/name.php?c=turkey&fid=6202&uni=9163815
- Erciyes: https://mapcarta.com/W815651521
- MAPEG: https://www.mapeg.gov.tr/Sayfa/iletisim (official map link).
- YMN: https://www.ymnproje.com (official map embed).

The study boundary is stored in `assets/data/wadi-aoi.geojson`. Crop-mask dates, areas, thresholds and extents are recorded in `assets/data/crop-masks-metadata.json`. These use my original analysis outputs. YMN photographs were extracted from my internship diary; the fixed-wing UAV photograph belongs to a separate quarry visit, not the Ankara-6494 survey.

For the illustrative project covers, I referenced the two map views in the design mockup and requested two satellite-style backgrounds without text. The built-in Imagegen tool was used. The saved asset is `assets/images/project-covers.png`, displayed in two separate cards using CSS.

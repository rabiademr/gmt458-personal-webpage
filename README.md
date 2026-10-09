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

## Run and verify

Open the folder in VS Code and use Live Server, or run `python3 -m http.server 8000` and visit `http://localhost:8000`.

Check all pages in both languages at mobile and desktop widths. On each map, zoom across 9/10 and click a marker; zoom out to confirm there are no repeated basemaps. Open both PDF links and both results images. Check keyboard and touch access to the Maps dropdown.

## GitHub hosting

Repository: https://github.com/rabiademr/gmt458-personal-webpage

Expected Pages URL: https://rabiademr.github.io/gmt458-personal-webpage/

This URL returned HTTP 404 during the 9 October 2026 audit; deployment is not confirmed. In repository Settings → Pages, select Deploy from a branch → main → /(root), save, and wait for deployment. All local resource URLs are relative to support the repository subpath.

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
3. Enable/verify GitHub Pages and test all pages, maps and PDFs at the live URL.
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

# Rabia Demir — GMT458 Personal Web Page

Personal portfolio for GMT458 Web GIS, Hacettepe University. Built with HTML, CSS and JavaScript; no build step required.

## Pages

- `index.html`: introduction and project navigation.
- `about.html`: background and technical interests.
- `projects.html`: Wadi As-Sirhan Crop Masking and the separate GEOINSIGHT Web Platform follow-up, each with its own PDF. Includes an image-based results table.
- `hobbies.html`: personal interests.
- `leaflet.html`: Leaflet 1.9.4 map.
- `openlayers.html`: OpenLayers 10.6.1 map. `maps.html` provides the same working map for existing links.

Both maps show the same locations. Markers are hidden below zoom 10 and visible at zoom 10 or above. Leaflet uses `noWrap`, geographic bounds and a minimum zoom. OpenLayers uses OSM `wrapX: false` and a constrained view extent to prevent repeated worlds. Wadi coordinates are approximated from the included AOI. External map libraries and tiles require internet access.

TR/EN selection is stored locally and applied on subsequent pages. Some proper names and technical method names remain in English. CSS provides entry animations, responsive layouts, focus indicators and a reduced-motion alternative.

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

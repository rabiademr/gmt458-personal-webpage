# GMT458 end-of-day review — 9 October 2026

Source: user-provided a1_web_page.pdf (2 pages). Due 12 October 2026; formal peer reviews due 23 October 2026.

| Assignment requirement | Evidence | Status |
| --- | --- | --- |
| At least 3 HTML files (15%) | 7 HTML pages: index, about, projects, hobbies, leaflet, openlayers, maps | Complete |
| CSS animation (10%) | fadeUp keyframes and reduced-motion rules in style.css | Complete |
| Tabular information with images (10%) | Semantic project-results table with two analysis figures | Complete |
| OpenLayers map (10%) | Wadi study boundary, crop masks, basemaps and internship markers | Complete |
| Leaflet map (10%) | Personal places with photo popups and navigation buttons | Complete |
| Zoom threshold (10%) | Both implementations use zoom >= 10; Leaflet verified at 10 and 9 live | Implemented; OL source verified |
| Prevent Earth repetition (10%) | Leaflet noWrap and bounds; OL wrapX:false and constrained extent | Implemented; final world-edge visual check remains |
| 3 commits on different days (5%) | History currently contains 5 October and 9 October | Third distinct day still required |
| Overall quality (10%) | Consistent navigation, TR/EN, responsive layout, real personal/project content | Reviewed; grading remains instructor judgement |
| GitHub hosting | Public repo and live GitHub Pages site | Complete |
| Explain specific AI learning in README | Map events, wrapping, relative paths, language storage and assistance scope documented | Complete |
| Estimate total AI usage | README still awaits honest minutes/hours estimate | Pending user input |
| Research problems before AI | Brief requirement documented; do not invent past independent research | User should ensure account is accurate |
| Review-system registration | User successfully logged in | Complete |
| Register test link | Selecting test project causes loading error and form disappears in supplied screenshots | Not confirmed; report to instructor/assistant |
| Formal submission | Submit to project area when it opens Monday | Pending |
| Three anonymous peer reviews and detailed feedback | Required by brief; deadline 23 October | Pending |

## Portfolio content completed

- Education, contacts and MAPEG/YMN internship summaries and photographs.
- Separate Wadi As-Sirhan Crop Masking and GEOINSIGHT platform descriptions and PDF links; no Harran project.
- Personal Leaflet locations including Bozcaada and Cappadocia, plus photography/travel galleries, pottery and food preparation hobbies.
- English first-person README explanation of library choices, data/photo connections and AI assistance.

## Verification completed today

- Live Home, About, Projects, Leaflet and OpenLayers tested at 390 px browser width with no horizontal page overflow.
- Hobbies tested at 320 px; galleries stack and four new gallery photographs load.
- Maps dropdown and language changes work in tested flows.
- Leaflet tiles and Bozcaada/Cappadocia popups load; markers disappear at zoom 9 and appear at 10.
- OpenLayers MAPEG/YMN photo popups, study-area button, street basemap and crop toggle tested. Date selection changed displayed area to 5.21 km² (Jan 2020), 11.97 km² (Feb 2020), with 20.90 km² for Apr 2023.
- Both live PDFs returned HTTP 200 and application/pdf; downloaded PDFs parsed successfully: Crop Masking 16 pages, GEOINSIGHT 11 pages.
- Local HTML src/href paths checked: no missing local targets found.
- These are browser viewport checks, not physical-phone touch/pinch tests. No full accessibility audit or exhaustive device test is claimed.

## Saved implementation commits

Remote main verified on 9 October at d01abf17eff3fdaab95eb5d1ec53d505dd3a5ec5, matching local main before this review document.

| Date | Commit | Work |
| --- | --- | --- |
| 5 Oct | 48b3e67 | Initial commit |
| 5 Oct | f262845 | HTML structure |
| 9 Oct | 413e71b | Bilingual portfolio, maps, assignment documentation |
| 9 Oct | ba2742f | Personal places and interactive crop maps |
| 9 Oct | f40be99 | Internship profiles, photos, hobbies and navigation |
| 9 Oct | d01abf1 | Photography/travel galleries and Bozcaada/Cappadocia stories |

Multiple commits on 9 October count as one calendar day for the distinct-days requirement. Do meaningful work on a third day without changing old dates.

## Next session

1. Fill the honest total AI usage estimate.
2. Test on a physical phone and visually check world-edge wrapping / OpenLayers zoom threshold.
3. Make a meaningful improvement or document those completed checks on a third calendar day, then commit and push.
4. Resolve/report the review portal error and confirm the saved link; this is separate from the working portfolio website.
5. Submit to the formal project area, then complete the three required peer reviews by the deadline.

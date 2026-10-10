# GMT458 assignment review — updated 10 October 2026

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
| 3 commits on different days (5%) | History contains 5 and 9 October; gallery improvements made 10 October | Complete locally: d3ee79d (10 Oct); verify push |
| Overall quality (10%) | Consistent navigation, TR/EN, responsive layout, real personal/project content | Reviewed; grading remains instructor judgement |
| GitHub hosting | Public repo and live GitHub Pages site | Complete |
| Explain specific AI learning in README | Map events, wrapping, relative paths, language storage and assistance scope documented | Complete |
| Estimate total AI usage | Approximately 10 hours across multiple sessions, confirmed by Rabia; rough estimate, not timed | Complete |
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

## Verification completed on 9 October

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

The history now spans three calendar days: 5, 9 and 10 October. Third-day commit d3ee79d includes gallery improvements. No dates were changed.

## Next session

1. AI usage estimate completed: approximately 10 hours, confirmed by Rabia.
2. Test on a physical phone and visually check world-edge wrapping / OpenLayers zoom threshold.
3. Third-day commit d3ee79d is saved; publish the latest hobby additions and confirm the push.
4. Resolve/report the review portal error and confirm the saved link; this is separate from the working portfolio website.
5. Submit to the formal project area, then complete the three required peer reviews by the deadline.

## 10 October update

- Reorganized Photography as a full-width card with four desktop / two tablet / one mobile columns.
- Preserved all four photographs, personal captions and Bozcaada/Cappadocia map anchors.
- Desktop gallery visually inspected at 1280 px; mobile DOM check at 390 px found no horizontal overflow and one gallery column.
- Rechecked local HTML links/assets: no missing targets.
- Live OpenLayers and About loaded; no new claim is made for the outstanding world-edge or physical-phone tests.
- Include the unpushed 9 October audit commit and confirmed approximately 10-hour AI disclosure when publishing.

## Final local review — 10 October

Added tennis, cycling, mixology and skiing cards with four original photos, plus Ahal Teke, Eymir and Erciyes on Leaflet. OpenLayers regional view showed zoom 5.0 and the threshold message; study-area fit restored zoom 11.7 and the report interaction message. Zoom-out reached the minimum 3.0; eastward panning remained constrained without showing repeated continents. Source checks confirm wrapX:false and the global extent. Physical-phone testing and formal submission/peer review are still outstanding.

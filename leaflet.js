const map = L.map("leaflet-map", {
    center: [39.0, 35.0],
    zoom: 6,
    minZoom: 3,
    maxZoom: 18,
    worldCopyJump: false,
    maxBounds: [
        [-85, -180],
        [85, 180]
    ],
    maxBoundsViscosity: 1.0
});


L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,
        noWrap: true,
        attribution:
            '&copy; OpenStreetMap contributors'
    }
).addTo(map);


const projectLocations = [

    {
        name:
            "Çanakkale Fire Study Area",

        coordinates:
            [40.05, 26.60],

        description:
            "Sentinel-2 forest fire impact and recovery assessment."
    },

    {
        name:
            "Hacettepe University",

        coordinates:
            [39.867, 32.734],

        description:
            "Geomatics Engineering."
    },

    {
        name:
            "Wadi As-Sirhan Crop Masking",

        coordinates:
            [30.663, 38.150],

        description:
            "Sentinel-2 and NDVI crop masking; separate GEOINSIGHT follow-up platform."
    }

];


const markerLayer =
    L.layerGroup();


projectLocations.forEach(
    location => {

        const marker =
            L.marker(
                location.coordinates
            );


        marker.bindPopup(
            `
            <strong>
                ${location.name}
            </strong>

            <br><br>

            ${location.description}
            `
        );


        markerLayer.addLayer(marker);

    }
);


function updateMarkers() {

    const zoom =
        map.getZoom();


    document.getElementById(
        "leaflet-zoom"
    ).textContent =
        `${document.documentElement.lang === "tr" ? "Yakınlaştırma" : "Current zoom"}: ${zoom}`;


    if (zoom >= 10) {

        if (
            !map.hasLayer(
                markerLayer
            )
        ) {

            markerLayer.addTo(map);

        }

    }

    else {

        if (
            map.hasLayer(
                markerLayer
            )
        ) {

            map.removeLayer(
                markerLayer
            );

        }

    }

}


map.on(
    "zoomend",
    updateMarkers
);


updateMarkers();
document.addEventListener("languagechange", updateMarkers);

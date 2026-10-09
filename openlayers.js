const projectLocations = [

    {
        name:
            "Çanakkale Fire Study Area",

        coordinates:
            [26.60, 40.05],

        description:
            "Sentinel-2 forest fire impact and recovery assessment."
    },

    {
        name:
            "Hacettepe University",

        coordinates:
            [32.734, 39.867],

        description:
            "Geomatics Engineering."
    },

    {
        name:
            "Wadi As-Sirhan Crop Masking",

        coordinates:
            [38.150, 30.663],

        description:
            "Sentinel-2 and NDVI crop masking; separate GEOINSIGHT follow-up platform."
    }

];


const features =
    projectLocations.map(
        location => {

            const feature =
                new ol.Feature({

                    geometry:
                        new ol.geom.Point(
                            ol.proj.fromLonLat(
                                location.coordinates
                            )
                        ),

                    name:
                        location.name,

                    description:
                        location.description

                });


            return feature;

        }
    );


const vectorSource =
    new ol.source.Vector({
        features:
            features
    });


const markerStyle =
    new ol.style.Style({

        image:
            new ol.style.Circle({

                radius:
                    7,

                fill:
                    new ol.style.Fill({
                        color:
                            "#70e0ce"
                    }),

                stroke:
                    new ol.style.Stroke({
                        color:
                            "#0d141b",

                        width:
                            2
                    })

            })

    });


const vectorLayer =
    new ol.layer.Vector({

        source:
            vectorSource,

        style:
            markerStyle,

        visible:
            false

    });


const rasterLayer =
    new ol.layer.Tile({

        source:
            new ol.source.OSM({
                wrapX:
                    false
            })

    });


const map =
    new ol.Map({

        target:
            "openlayers-map",

        layers: [
            rasterLayer,
            vectorLayer
        ],

        view:
            new ol.View({

                center:
                    ol.proj.fromLonLat(
                        [35.0, 39.0]
                    ),

                zoom:
                    6,

                minZoom:
                    3,

                maxZoom:
                    18,

                extent:
                    ol.proj.get(
                        "EPSG:3857"
                    ).getExtent()

            })

    });


const zoomText =
    document.getElementById(
        "ol-zoom"
    );


function updateMarkerVisibility() {

    const zoom =
        map
        .getView()
        .getZoom();


    zoomText.textContent =
        `${document.documentElement.lang === "tr" ? "Yakınlaştırma" : "Current zoom"}: ${zoom.toFixed(1)}`;


    vectorLayer.setVisible(
        zoom >= 10
    );

}


map
.getView()
.on(
    "change:resolution",
    updateMarkerVisibility
);


updateMarkerVisibility();



const container =
    document.getElementById(
        "ol-popup"
    );


const content =
    document.getElementById(
        "ol-popup-content"
    );


const closer =
    document.getElementById(
        "ol-popup-closer"
    );


const overlay =
    new ol.Overlay({

        element:
            container,

        autoPan: {
            animation: {
                duration:
                    250
            }
        }

    });


map.addOverlay(
    overlay
);



map.on(
    "singleclick",
    function(event) {

        if (
            !vectorLayer.getVisible()
        ) {

            return;

        }


        const feature =
            map.forEachFeatureAtPixel(

                event.pixel,

                function(feature) {
                    return feature;
                }

            );


        if (feature) {

            const coordinates =
                feature
                .getGeometry()
                .getCoordinates();


            content.innerHTML =
                `
                <strong>
                    ${feature.get("name")}
                </strong>

                <br><br>

                ${feature.get("description")}
                `;


            overlay.setPosition(
                coordinates
            );

        }

    }
);



closer.onclick =
    function() {

        overlay.setPosition(
            undefined
        );

        closer.blur();

        return false;

    };
document.addEventListener("languagechange", updateMarkerVisibility);

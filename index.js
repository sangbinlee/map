import main from './main';

import 'ol/ol.css';
import Feature from 'ol/Feature';
// import Map from 'ol/Map';
// import View from 'ol/View'; 
import { Map, View } from 'ol';
import Point from 'ol/geom/Point';
import TileJSON from 'ol/source/TileJSON';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { fromLonLat } from 'ol/proj';


import Polyline from 'ol/format/Polyline';
import XYZ from 'ol/source/XYZ';
import {
    Circle as CircleStyle,
    Fill,
    Icon,
    Stroke,
    Style,
} from 'ol/style';
// import TileLayer from 'ol/layer/Tile';
// import { Tile, Vector } from 'ol/layer';
import { getVectorContext } from 'ol/render';


import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';


import { getUid } from 'ol';


import {
    DragRotateAndZoom,
    defaults as defaultInteractions,
} from 'ol/interaction';
import { FullScreen, defaults as defaultControls } from 'ol/control';

import { easeOut } from 'ol/easing';
import { unByKey } from 'ol/Observable';



main();


var Gangnam_gu = [127.0664091, 37.4959854];
var Gwangjin_gu = [127.0857528, 37.5481445];
var Seocho_gu = [127.0378103, 37.4769528];
var Nowon_gu = [127.0771201, 37.655264];
var Yongsan_gu = [126.9810742, 37.5311008];



var Seocho_gu_ = fromLonLat(Seocho_gu);



console.log(Gangnam_gu);




var markerList = [];


// var center = Yongsan_gu;


var Gangnam = new Feature({
    geometry: new Point(fromLonLat(Gangnam_gu)),
});

var Gwangjin = new Feature({
    geometry: new Point(fromLonLat(Gwangjin_gu)),
});

var Seocho = new Feature({
    geometry: new Point(fromLonLat(Seocho_gu)),
});
var Nowon = new Feature({
    geometry: new Point(fromLonLat(Nowon_gu)),
});
var Yongsan = new Feature({
    geometry: new Point(fromLonLat(Yongsan_gu)),
});

// var iconFeature = new Feature(new Point(Seocho_gu));
var iconFeature = new Feature(new Point(fromLonLat(Seocho_gu)));



function onClick(id, callback) {
    document.getElementById(id).addEventListener('click', callback);
}


var isHide = false;

function getZoomLevel() {
    var zoom = view.getZoom();
    console.log('zoom=', zoom);
    var zoomInfo = 'Zoom level = ' + zoom;
    $('#zoomlevel').val(zoomInfo);
}



function zoomChanged(e) {

    // var map = e.map;
    //getZoom 메소드로 현재 지도의 줌을 가져와 console창에 출력

    var zoom = view.getZoom();

    console.log(e, e);
    console.log(zoom);
    console.log(zoom);
    console.log(zoom);
    console.log(zoom);

}




function setEvent() {






    onClick('pan-to-Seocho', function() {
        zoom = 15;
        console.log('pan-to');

        function getZoomLevel(complete) {
            var zoom = view.getZoom();
            console.log('complete=', complete);
            console.log('zoom=', zoom);
            var zoomInfo = 'Zoom level = ' + zoom;
            $('#zoomlevel').val(zoomInfo);
        }
        view.animate({
                center: Seocho_gu_,
                duration: 1000,
                zoom: zoom,
            },
            getZoomLevel
        );
    });

    onClick('marker-zoom-in', function() {
        console.log('zomm-in');

        function getZoomLevel(complete) {
            var zoom = view.getZoom();
            console.log('complete=', complete);
            console.log('zoom=', zoom);
            var zoomInfo = 'Zoom level = ' + zoom;
            $('#zoomlevel').val(zoomInfo);
        }
        view.animate({
                // center: Seocho_gu_,
                // duration: 1000,
                zoom: ++zoom
            },
            getZoomLevel
        );
    });

    onClick('marker-zoom-out', function() {
        console.log('zomm-out');

        function getZoomLevel(complete) {
            var zoom = view.getZoom();
            console.log('complete=', complete);
            console.log('zoom=', zoom);
            var zoomInfo = 'Zoom level = ' + zoom;
            $('#zoomlevel').val(zoomInfo);
        }

        view.animate({
                // center: Seocho_gu_,
                // duration: 1000,
                zoom: --zoom
            },
            getZoomLevel
        );

    });


    onClick('marker-show-hide', function() {

        console.log('show and hide');
        // first hide start
        if (isHide) {
            show();
        } else {
            hide();
        }
        isHide = !isHide;

    });


    // onClick('full-size', function() {

    //     // $('.map').css('width', '100%').css('height', '100%').css('position', 'fixed');
    //     // setMap();
    // });
}




function show() {

    Gangnam.setStyle(
        new Style({
            image: new Icon({
                color: '#BADA55',
                crossOrigin: 'anonymous',
                // For Internet Explorer 11
                imgSize: [20, 20],
                src: 'https://openlayers.org/en/latest/examples/data/square.svg',
            }),
        })
    );

    Gwangjin.setStyle(
        new Style({
            image: new Icon({
                color: '#4271AE',
                crossOrigin: 'anonymous',
                src: 'https://openlayers.org/en/latest/examples/data/bigdot.png',
                scale: 0.2,
            }),
        })
    );

    Seocho.setStyle(
        new Style({
            image: new Icon({
                crossOrigin: 'anonymous',
                src: 'https://openlayers.org/en/latest/examples/data/bigdot.png',
                scale: 0.2,
            }),
        })
    );

    Nowon.setStyle(
        new Style({
            image: new Icon({
                color: '#8959A8',
                crossOrigin: 'anonymous',
                // For Internet Explorer 11
                imgSize: [20, 20],
                src: 'https://openlayers.org/en/latest/examples/data/dot.svg',
            }),
        })
    );

    Yongsan.setStyle(
        new Style({
            image: new Icon({
                crossOrigin: 'anonymous',
                // For Internet Explorer 11
                imgSize: [20, 20],
                src: 'https://openlayers.org/en/latest/examples/data/dot.svg',
            }),
        })
    );

    iconFeature.set('style', createStyle('https://openlayers.org/en/latest/examples/data/icon.png', undefined));


}


function hide() {

    Gangnam.setStyle(
        new Style({})
    );

    Gwangjin.setStyle(
        new Style({})
    );

    Seocho.setStyle(
        new Style({})
    );

    Nowon.setStyle(
        new Style({})
    );

    Yongsan.setStyle(
        new Style({})
    );

    iconFeature.set('style', new Style({}));


}

var rasterLayer = new TileLayer({
    source: new TileJSON({
        url: 'https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json',
        crossOrigin: '',
    }),
});



function createStyle(src, img) {
    return new Style({
        image: new Icon({
            anchor: [0.5, 0.96],
            crossOrigin: 'anonymous',
            src: src,
            img: img,
            imgSize: img ? [img.width, img.height] : undefined,
            // imgSize: [20, 20],
        }),
    });
}


var map, tileLayer, view;

var zoom = 12;

function setMap() {


    tileLayer = new TileLayer({
        source: new OSM({
            wrapX: false,
        }),
    });

    view = new View({
        center: fromLonLat(Seocho_gu),
        // zoom: 1,
        zoom: zoom,

        multiWorld: true,
    });

    map = new Map({
        layers: [
            tileLayer,
            // vectorLayer

            // new VectorLayer({
            //     style: function(feature) {
            //         return feature.get('style');
            //     },
            //     // source: new VectorSource({ features: [iconFeature] }),
            //     source: new VectorSource({ features: [Gangnam, Gwangjin, Seocho, Nowon, Yongsan, iconFeature] }),
            // })
        ],
        controls: defaultControls().extend([new FullScreen()]),
        interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
        target: 'map',
        // target: document.getElementById('map'),
        view: view,
    });


    getZoomLevel();
}




var source = new VectorSource({
    wrapX: false,
});






// var Gangnam_gu = [127.0664091, 37.4959854];
// var Gwangjin_gu = [127.0857528, 37.5481445];
// var Seocho_gu = [127.0378103, 37.4769528];
// var Nowon_gu = [127.0771201, 37.655264];
// var Yongsan_gu = [126.9810742, 37.5311008];




var guList = [];
guList.push(Yongsan_gu);
guList.push(Seocho_gu);
guList.push(Gangnam_gu);
guList.push(Gwangjin_gu);
guList.push(Nowon_gu);


var index = 0;

function addRandomFeature() {




    var x = Math.random() * 360 - 180;
    var y = Math.random() * 180 - 90;

    // console.log('index===', index);
    var geom = new Point(fromLonLat(guList[index]));
    var feature = new Feature(geom);
    source.addFeature(feature);

    // 0 부터 4 까지의 정수 난수를 만듭니다.
    // index = Math.floor(Math.random() * 5);
    ++index;
    if (index >= 5) {
        index = 0;
    }

}

var duration = 3000;

function flash(feature) {
    // console.log('flash feature=', feature);
    var start = new Date().getTime();
    var listenerKey = tileLayer.on('postrender', animate);

    function animate(event) {
        var vectorContext = getVectorContext(event);
        var frameState = event.frameState;
        var flashGeom = feature.getGeometry().clone();
        var elapsed = frameState.time - start;
        var elapsedRatio = elapsed / duration;
        // radius will be 5 at start and 30 at end.
        var radius = easeOut(elapsedRatio) * 25 + 5;
        var opacity = easeOut(1 - elapsedRatio);

        var style = new Style({
            image: new CircleStyle({
                radius: radius,
                stroke: new Stroke({
                    color: 'rgba(255, 0, 0, ' + opacity + ')',
                    width: 0.25 + opacity,
                }),
            }),
        });

        vectorContext.setStyle(style);
        vectorContext.drawGeometry(flashGeom);
        if (elapsed > duration) {
            unByKey(listenerKey);
            return;
        }
        // tell OpenLayers to continue postrender animation
        map.render();
    }
}
// map.getView().setCenter(center);

// map.getView().setCenter(center);
source.on('addfeature', function(e) {
    flash(e.feature);
});



function setLayer() {


    var vectorSource = new VectorSource({
        features: [Gangnam, Gwangjin, Seocho, Nowon, Yongsan, iconFeature],
    });

    var vectorLayer = new VectorLayer({
        style: function(feature) {
            return feature.get('style');
        },
        source: vectorSource,
    });
    map.addLayer(vectorLayer);






    // var mbr = vectorSource.getExtent();
    // map.getView().fit(mbr);




    // var pt = [100000, 200000];
    // map.getView().setCenter(pt);

    // map.getView().setZoom(10);
    // map.getView().setRotation(radianV);
    // map.getView().setResolution(123.12344);
}

window.setInterval(addRandomFeature, 1000);
setEvent();
setMap();

setLayer();
show();
// map.on('zoomend', zoomChanged);
map.on('moveend', zoomChanged);
// map.events.register("zoomend", map, zoomChanged);
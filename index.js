import main from './main';

import 'ol/ol.css';
import Feature from 'ol/Feature';
// import Map from 'ol/Map';
// import View from 'ol/View'; 
import { Map, View } from 'ol';
import Point from 'ol/geom/Point';
import TileJSON from 'ol/source/TileJSON';
import VectorSource from 'ol/source/Vector';
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
import { getUid } from 'ol';


import {
    DragRotateAndZoom,
    defaults as defaultInteractions,
} from 'ol/interaction';
import { FullScreen, defaults as defaultControls } from 'ol/control';


var Gangnam_gu = [127.0664091, 37.4959854];
var Gwangjin_gu = [127.0857528, 37.5481445];
var Seocho_gu = [127.0378103, 37.4769528];
var Nowon_gu = [127.0771201, 37.655264];
var Yongsan_gu = [126.9810742, 37.5311008];




main();


console.log(Gangnam_gu);



var guList = [];
guList.push('Gangnam_gu');
guList.push('Gwangjin_gu');
guList.push('Seocho_gu');
guList.push('Nowon_gu');
guList.push('Yongsan_gu');

var markerList = [];


var center = Yongsan_gu;


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
        }),
    });
}
// var iconFeature = new Feature(new Point(Seocho_gu));
var iconFeature = new Feature(new Point(fromLonLat(Seocho_gu)));
// iconFeature.set('style', createStyle('data/icon.png', undefined));
iconFeature.set('style', createStyle('https://openlayers.org/en/latest/examples/data/icon.png', undefined));


var vectorSource = new VectorSource({
    features: [Gangnam, Gwangjin, Seocho, Nowon, Yongsan, iconFeature],
});

var vectorLayer = new VectorLayer({
    source: vectorSource,
});

var map = new Map({
    layers: [
        new TileLayer({
            source: new OSM()
        }),
        // vectorLayer

        new VectorLayer({
            style: function(feature) {
                return feature.get('style');
            },
            // source: new VectorSource({ features: [iconFeature] }),
            source: new VectorSource({ features: [Gangnam, Gwangjin, Seocho, Nowon, Yongsan, iconFeature] }),
        })
    ],
    controls: defaultControls().extend([new FullScreen()]),
    interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
    target: 'map',
    // target: document.getElementById('map'),
    view: new View({
        center: fromLonLat(Seocho_gu),
        zoom: 10,
    }),
});




// map.getView().setCenter(center);

// map.getView().setCenter(center);
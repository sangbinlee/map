(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{406:function(e,a,n){"use strict";n.r(a);var t=n(3),r=n(9),w=n(5),c=n(2),i=n(81),o=new(n(133).a);fetch("data/WMTSCapabilities.xml").then((function(e){return e.text()})).then((function(e){var a=o.read(e),n=Object(i.b)(a,{layer:"layer-7328",matrixSet:"EPSG:3857"});new t.a({layers:[new w.a({source:new r.b,opacity:.7}),new w.a({opacity:1,source:new i.a(n)})],target:"map",view:new c.a({center:[19412406.33,-5050500.21],zoom:5})})}))}},[[406,0]]]);
//# sourceMappingURL=wmts-layer-from-capabilities.js.map
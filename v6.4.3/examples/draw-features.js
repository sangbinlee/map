(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{258:function(e,n,a){"use strict";a.r(n);var o,t=a(66),c=a(3),w=a(2),r=a(9),u=a(12),i=a(5),p=a(20),s=new i.a({source:new r.b}),d=new u.a({wrapX:!1}),m=new p.a({source:d}),v=new c.a({layers:[s,m],target:"map",view:new w.a({center:[-11e6,46e5],zoom:4})}),l=document.getElementById("type");function y(){"None"!==l.value&&(o=new t.c({source:d,type:l.value}),v.addInteraction(o))}l.onchange=function(){v.removeInteraction(o),y()},y()}},[[258,0]]]);
//# sourceMappingURL=draw-features.js.map
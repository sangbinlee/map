(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{289:function(e,n,t){"use strict";t.r(n);var o,r=t(31),a=t(3),i=t(20),w=t(12),c=t(2),l=t(10),s=t(21),f=t(17),g=t(67),u=new l.c({fill:new s.a({color:"rgba(255, 255, 255, 0.6)"}),stroke:new f.a({color:"#319FD3",width:1}),text:new g.a({font:"12px Calibri,sans-serif",fill:new s.a({color:"#000"}),stroke:new f.a({color:"#fff",width:3})})}),d=new i.a({source:new w.a({url:"data/geojson/countries.geojson",format:new r.a}),style:function(e){return u.getText().setText(e.get("name")),u}}),p=new a.a({layers:[d],target:"map",view:new c.a({center:[0,0],zoom:1})}),m=new l.c({stroke:new f.a({color:"#f00",width:1}),fill:new s.a({color:"rgba(255,0,0,0.1)"}),text:new g.a({font:"12px Calibri,sans-serif",fill:new s.a({color:"#000"}),stroke:new f.a({color:"#f00",width:3})})}),x=new i.a({source:new w.a,map:p,style:function(e){return m.getText().setText(e.get("name")),m}}),v=function(e){d.getFeatures(e).then((function(e){var n=e.length?e[0]:void 0,t=document.getElementById("info");e.length?t.innerHTML=n.getId()+": "+n.get("name"):t.innerHTML="&nbsp;",n!==o&&(o&&x.getSource().removeFeature(o),n&&x.getSource().addFeature(n),o=n)}))};p.on("pointermove",(function(e){if(!e.dragging){var n=p.getEventPixel(e.originalEvent);v(n)}})),p.on("click",(function(e){v(e.pixel)}))}},[[289,0]]]);
//# sourceMappingURL=hitdetect-vector.js.map
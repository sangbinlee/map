(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{278:function(e,t,n){"use strict";n.r(t);var o=n(10),r=n(51),i=n(21),a=n(3),s=n(2),p=n(22),c=n(80),l=n(9),w=n(12),d=n(26),u=n(5),m=n(20),v=n(4);Object(v.u)();var g=[-110,45],f=new d.a(g),y=new a.a({target:"map",view:new s.a({center:g,zoom:8}),layers:[new u.a({source:new l.b}),new m.a({source:new w.a({features:[new p.a(f)]}),style:new o.c({image:new r.a({radius:9,fill:new i.a({color:"red"})})})})]}),b=document.getElementById("popup"),h=new c.a({element:b,positioning:"bottom-center",stopEvent:!1,offset:[0,-10]});function x(e){return"\n    <table>\n      <tbody>\n        <tr><th>lon</th><td>"+e[0].toFixed(2)+"</td></tr>\n        <tr><th>lat</th><td>"+e[1].toFixed(2)+"</td></tr>\n      </tbody>\n    </table>"}y.addOverlay(h);var E=document.getElementById("info");y.on("moveend",(function(){var e=y.getView().getCenter();E.innerHTML=x(e)})),y.on("click",(function(e){var t=y.getFeaturesAtPixel(e.pixel)[0];if(t){var n=t.getGeometry().getCoordinates();h.setPosition(n),$(b).popover({container:b.parentElement,html:!0,sanitize:!1,content:x(n),placement:"top"}),$(b).popover("show")}else $(b).popover("dispose")})),y.on("pointermove",(function(e){y.hasFeatureAtPixel(e.pixel)?y.getViewport().style.cursor="pointer":y.getViewport().style.cursor="inherit"}))}},[[278,0]]]);
//# sourceMappingURL=geographic.js.map
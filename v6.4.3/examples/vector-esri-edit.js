(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{382:function(e,t,r){"use strict";r.r(t);var s=r(216),a=r(3),n=r(12),o=r(2),i=r(27),c=r(66),u=r(96),d=r(149),l=r(52),v=r(20),p=r(5),g=r(57),f=r(4),m=r(131),w="https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/PDX_Pedestrian_Districts/FeatureServer/",I=new s.a,y=new n.a({loader:function(e,t,r){var s=w+"0/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry="+encodeURIComponent('{"xmin":'+e[0]+',"ymin":'+e[1]+',"xmax":'+e[2]+',"ymax":'+e[3]+',"spatialReference":{"wkid":102100}}')+"&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&outSR=102100";$.ajax({url:s,dataType:"jsonp",success:function(e){if(e.error)alert(e.error.message+"\n"+e.error.details.join("\n"));else{var t=I.readFeatures(e,{featureProjection:r});t.length>0&&y.addFeatures(t)}}})},strategy:Object(m.c)(Object(g.b)({tileSize:512}))}),j=new v.a({source:y}),R=new p.a({source:new i.a({attributions:'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>',url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"})}),O=new c.c({source:y,type:"Polygon"}),S=new u.a;S.setActive(!1);var F=S.getFeatures(),b=new d.a({features:F});b.setActive(!1);var h=new a.a({interactions:Object(l.a)().extend([O,S,b]),layers:[R,j],target:document.getElementById("map"),view:new o.a({center:Object(f.g)([-122.619,45.512]),zoom:12})}),M=document.getElementById("type");M.onchange=function(){O.setActive("DRAW"===M.value),S.setActive("MODIFY"===M.value),b.setActive("MODIFY"===M.value)};var P={};F.on("add",(function(e){e.element.on("change",(function(e){P[e.target.getId()]=!0}))})),F.on("remove",(function(e){var t=e.element,r=t.getId();if(!0===P[r]){var s="["+I.writeFeature(t,{featureProjection:h.getView().getProjection()})+"]";$.post("https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/PDX_Pedestrian_Districts/FeatureServer/0/updateFeatures",{f:"json",features:s}).done((function(e){var t=JSON.parse(e);if(t.updateResults&&t.updateResults.length>0)if(!0!==t.updateResults[0].success){var s=t.updateResults[0].error;alert(s.description+" ("+s.code+")")}else delete P[r]}))}})),O.on("drawend",(function(e){var t=e.feature,r="["+I.writeFeature(t,{featureProjection:h.getView().getProjection()})+"]";$.post("https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/PDX_Pedestrian_Districts/FeatureServer/0/addFeatures",{f:"json",features:r}).done((function(e){var r=JSON.parse(e);if(r.addResults&&r.addResults.length>0)if(!0===r.addResults[0].success)t.setId(r.addResults[0].objectId),y.clear();else{var s=r.addResults[0].error;alert(s.description+" ("+s.code+")")}}))}))}},[[382,0]]]);
//# sourceMappingURL=vector-esri-edit.js.map
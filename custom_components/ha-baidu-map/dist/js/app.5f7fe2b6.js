(function(t){function e(e){for(var o,a,c=e[0],l=e[1],s=e[2],u=0,f=[];u<c.length;u++)a=c[u],i[a]&&f.push(i[a][0]),i[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},r=[];function a(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d2295d7":"2dbc5a87"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,o){n=i[t]=[e,o]});e.push(n[2]=o);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(t),r=function(e){l.onerror=l.onload=null,clearTimeout(s);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+o+": "+r+")");a.type=o,a.request=r,n[1](a)}i[t]=void 0}};var s=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0672":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("456d"),n("ac6a"),n("96cf");var o=n("3b8d"),i=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c=(n("7c55"),n("2877")),l={},s=Object(c["a"])(l,r,a,!1,null,null,null),u=s.exports,d=n("8c4f");n("bb51");i["a"].use(d["a"]);var f=new d["a"]({routes:[{path:"/",name:"home",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))}}]}),p=n("9483");Object(p["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var h=n("a6a6"),g=(n("b9f8"),n("4263")),v=(n("c51c"),n("de8e")),m=n("4878"),w=n.n(m);i["a"].config.productionTip=!1,i["a"].use(h["a"]),i["a"].use(g["a"]),i["a"].use(v["a"]),i["a"].use(w.a,{ak:"hNT4WeW0AGvh2GuzuO92OfM6hCW25HhX"}),top.document.body.style.overflow="hidden",window.noSleep=new NoSleep,window.hassMap={get hass(){return new Promise(function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e,n){var o,i,r,a,c,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,top.window.hassConnection;case 2:if(o=t.sent,null!=o){t.next=6;break}return n(new Error("请在Home Assistant中使用")),t.abrupt("return");case 6:i=o.conn,r=[],a=[],c=i._ent.state,Object.keys(c).forEach(function(t){var e=c[t];if(0===t.indexOf("zone.")){var n=e.attributes;n.latitude&&n.longitude&&r.push({id:e.entity_id,title:e.attributes.friendly_name,entity:e})}else if(0===t.indexOf("device_tracker.")){var o=e.attributes;o.latitude&&o.longitude&&a.push({id:e.entity_id,title:o.friendly_name,entity:e})}}),l=Object.create(null),l.zoneList=r,l.deviceList=a,e(l);case 15:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}())}},i["a"].prototype.registeredComponent=function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var o,r,a,c=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(o=c.length>1&&void 0!==c[1]?c[1]:{},r=null,"string"!==typeof e){t.next=16;break}if(a=null,"GPSLogger"!==e){t.next=8;break}return t.next=7,n.e("chunk-2d2295d7").then(n.bind(null,"dcac"));case 7:a=t.sent;case 8:if(null===a){t.next=12;break}r=i["a"].extend(a.default),t.next=14;break;case 12:return console.error("组件未定义"),t.abrupt("return");case 14:t.next=17;break;case 16:r=i["a"].extend(e);case 17:return t.abrupt("return",new Promise(function(t,e){var n=new r({router:f,propsData:o}).$mount(document.createElement("div"));n.$on("done",function(e){return t(e)})}));case 18:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),new i["a"]({router:f,render:function(t){return t(u)}}).$mount("#app")},"5c48":function(t,e,n){},7237:function(t,e,n){"use strict";var o=n("0672"),i=n.n(o);i.a},"7c55":function(t,e,n){"use strict";var o=n("5c48"),i=n.n(o);i.a},bb51:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100vh","z-index":"1000",position:"fixed",top:"0",left:"0",width:"100%"}},[n("baidu-map",{staticStyle:{height:"100vh",position:"fixed",top:"0",left:"0",width:"100%"},attrs:{center:t.center,zoom:t.zoom,"scroll-wheel-zoom":!0},on:{ready:t.ready}},[n("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_TOP_RIGHT"}}),n("bm-map-type",{attrs:{"map-types":["BMAP_NORMAL_MAP","BMAP_HYBRID_MAP"],anchor:"BMAP_ANCHOR_TOP_LEFT"}}),n("bm-control",[n("div",{staticStyle:{padding:"10px","margin-top":"30px"}},[n("mu-button",{attrs:{small:""},on:{click:function(e){t.open=!0}}},[t._v("更多功能")]),n("mu-bottom-sheet",{attrs:{open:t.open},on:{"update:open":function(e){t.open=e}}},[n("mu-list",[n("mu-sub-header",[t._v("选择监测设备")]),t._l(t.allList,function(e,o){return n("mu-list-item",{key:o,attrs:{button:""},on:{click:function(n){return t.selectDevice(e)}}},[n("mu-list-item-action",[n("mu-icon",{attrs:{value:"location_on",color:"blue"}})],1),n("mu-list-item-title",[t._v(t._s(e.title))])],1)})],2)],1)],1)]),t._l(t.zoneList,function(e,o){return[n("bm-circle",{key:o,attrs:{center:e.location,radius:100,"stroke-color":"#0f67b1","stroke-opacity":.5,"stroke-weight":2}}),n("my-overlay",{key:"zone"+o,attrs:{icon:{url:e.icon,size:{width:50,height:50},opts:{imageSize:{width:50,height:50}}},position:e.location}},[n("b",[t._v(t._s(e.title))]),n("br"),n("ul",{staticClass:"list-info"},[n("li",[t._v("\n            经度：\n            "),n("span",[t._v(t._s(e.location.lng))])]),n("li",[t._v("\n            纬度：\n            "),n("span",[t._v(t._s(e.location.lat))])])])])]}),t._l(t.deviceList,function(e,o){return[n("bm-circle",{key:"device-round"+o,attrs:{center:e.location,radius:30,"stroke-color":"blue","stroke-opacity":.5,"stroke-weight":2}}),n("my-overlay",{key:"device"+o,attrs:{icon:{url:e.icon,size:{width:50,height:50},opts:{imageSize:{width:50,height:50}}},position:e.location,animation:"BMAP_ANIMATION_BOUNCE"}},[n("b",[t._v(t._s(e.title))]),n("br"),n("ul",{staticClass:"list-info"},[n("li",[t._v("\n            经度：\n            "),n("span",[t._v(t._s(e.location.lng))])]),n("li",[t._v("\n            纬度：\n            "),n("span",[t._v(t._s(e.location.lat))])]),t._l(e.range,function(e,o){return n("li",{key:o},[t._v("\n            距离\n            "),n("b",{staticStyle:{color:"orange"}},[t._v(t._s(e.zone))]),n("span",[t._v(t._s(e.mi)+"米")])])})],2)])]})],2),n("LogInfo",{ref:"LogInfo"})],1)},i=[],r=(n("96cf"),n("3b8d")),a=(n("ac4d"),n("8a81"),n("6c7b"),n("ac6a"),n("75fc")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bm-marker",t._b({attrs:{dragging:!1},on:{click:t.infoWindowOpen}},"bm-marker",t.$attrs,!1),[n("bm-info-window",{attrs:{show:t.show},on:{close:t.infoWindowClose,open:t.infoWindowOpen}},[t._t("default")],2)],1)},l=[],s={data:function(){return{show:!1}},methods:{infoWindowOpen:function(){this.show=!0},infoWindowClose:function(){this.show=!1}}},u=s,d=(n("7237"),n("2877")),f=Object(d["a"])(u,c,l,!1,null,null,null),p=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mu-dialog",{attrs:{"full-width":"",transition:"slide-bottom",fullscreen:"",scrollable:"",open:t.openScroll},on:{"update:open":function(e){t.openScroll=e}}},[n("mu-appbar",{attrs:{color:"primary",title:"GPSLogger定位日志"}},[n("mu-button",{attrs:{slot:"left",icon:""},on:{click:t.close},slot:"left"},[n("mu-icon",{attrs:{value:"close"}})],1)],1),n("div",{staticStyle:{padding:"24px"}},[n("mu-text-field",{attrs:{readonly:"","multi-line":"",rows:15,"full-width":""},model:{value:t.log,callback:function(e){t.log=e},expression:"log"}})],1)],1)},g=[],v={data:function(){return{openScroll:!1,log:""}},methods:{show:function(){this.openScroll=!0},add:function(t){this.log="".concat((new Date).toLocaleString(),"\n").concat(t,"\n ").concat(this.log)},close:function(){this.openScroll=!1}}},m=v,w=Object(d["a"])(m,h,g,!1,null,null,null),b=w.exports,y={components:{MyOverlay:p,LogInfo:b},data:function(){return{open:!1,zoom:18,zoneList:[],deviceList:[],allList:[],center:{lng:121.848405,lat:31.739856},isStartLocation:!1,isSendLocation:!1}},created:function(){this.allList=[].concat(Object(a["a"])(this.deviceList),Object(a["a"])(this.zoneList))},methods:{ready:function(t){var e=this,n=t.map;t.BMap;window.hassMap.hass.then(function(t){var o=[],i=[];t.zoneList.forEach(function(t){var n=t.entity.attributes;o.push({title:t.title,location:{lng:n.longitude,lat:n.latitude},icon:"./img/home.png"}),i.push(new window.BMap.Point(n.longitude,n.latitude)),e.center={lng:n.longitude,lat:n.latitude}});var r=[];t.deviceList.forEach(function(t){var n=t.entity.attributes,o=e.getTextImage(t.title);r.push({title:t.title,location:{lng:n.longitude,lat:n.latitude},icon:n.picture||o,range:[]}),i.push(new window.BMap.Point(n.longitude,n.latitude))});var a=new window.BMap.Convertor;a.translate(i,0,5,function(t){if(0===t.status){t.points.forEach(function(t,n){n>=o.length?r[n-o.length].location={lng:t.lng,lat:t.lat}:(o[n].location={lng:t.lng,lat:t.lat},e.center={lng:t.lng,lat:t.lat})});for(var i=0,a=r;i<a.length;i++)for(var c=a[i],l=0,s=o;l<s.length;l++){var u=s[l],d=new window.BMap.Point(c.location.lng,c.location.lat),f=new window.BMap.Point(u.location.lng,u.location.lat);c.range.push({device:c.title,zone:u.title,mi:n.getDistance(d,f).toFixed(2)})}e.zoneList=o,e.deviceList=r,e.allList=[].concat(r,o),setInterval(function(){e.tick(n)},5e3)}else e.$toast.error("坐标转换出现异常！")})}).catch(function(t){e.$toast.error(t.message)})},getTextImage:function(t){if(!t)return"https://www.home-assistant.io/images/favicon-192x192.png";var e=document.createElement("canvas");e.width=50,e.height=50;var n=e.getContext("2d");return n.rect(0,0,50,50),n.fillStyle="white",n.fill(),n.save(),n.font="30px Georgia",n.textAlign="center",n.textBaseline="middle",n.strokeStyle="#0000ff",n.strokeText(t[0],e.width/2,e.width/2),e.toDataURL("image/png")},tick:function(t){var e=this;window.hassMap.hass.then(function(n){var o=[],i=[];n.deviceList.forEach(function(t){var n=t.entity.attributes,r=e.getTextImage(t.title);o.push({title:t.title,location:{lng:n.longitude,lat:n.latitude},icon:n.picture||r,range:[]}),i.push(new window.BMap.Point(n.longitude,n.latitude))});var r=new window.BMap.Convertor;r.translate(i,0,5,function(n){if(0===n.status){n.points.forEach(function(t,e){o[e].location={lng:t.lng,lat:t.lat}});for(var i=0,r=o;i<r.length;i++){var c=r[i],l=!0,s=!1,u=void 0;try{for(var d,f=e.zoneList[Symbol.iterator]();!(l=(d=f.next()).done);l=!0){var p=d.value,h=new window.BMap.Point(c.location.lng,c.location.lat),g=new window.BMap.Point(p.location.lng,p.location.lat);c.range.push({device:c.title,zone:p.title,mi:t.getDistance(h,g).toFixed(2)})}}catch(v){s=!0,u=v}finally{try{l||null==f.return||f.return()}finally{if(s)throw u}}}e.deviceList=o,e.allList=[].concat(o,Object(a["a"])(e.zoneList))}else e.$toast.error("坐标转换出现异常！")})})},selectDevice:function(t){var e=this;this.center={lng:121.346405,lat:31.131856},this.open=!1;var n=this.$loading();setTimeout(function(){e.center=t.location,n.close()},1e3)},gpsloggerClick:function(){var t=this;this.open=!1,this.registeredComponent("GPSLogger").then(function(){t.$toast.success("配置成功，点击右下角持续定位")})},logInfoClick:function(){this.open=!1,this.$refs["LogInfo"].show()},timerLocation:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,o,i,r,a,c,l,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.latitude,o=e.longitude,i=e.accuracy,r=e.speed,e.altitude,!this.isSendLocation){t.next=3;break}return t.abrupt("return");case 3:return this.isSendLocation=!0,a=100,t.prev=5,t.next=8,navigator.getBattery().catch(function(){});case 8:c=t.sent,a=100*c.level,t.next=14;break;case 12:t.prev=12,t.t0=t["catch"](5);case 14:try{l=JSON.parse(localStorage["map-gpslogger"]),fetch(l.webhook,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"latitude=".concat(n,"&longitude=").concat(o,"&device=").concat(l.device,"&accuracy=").concat(i||"","&battery=").concat(a,"&speed=").concat(r||"","&direction=0&altitude=0&provider=0&activity=0"),mode:"no-cors"}).then(function(t){return t.text()}).then(function(t){s.$refs["LogInfo"].add("经度：".concat(o," \n 纬度：").concat(n))}).catch(function(t){s.$toast.error("定位信息发送错误")}).finally(function(){setTimeout(function(){s.isSendLocation=!1},5e3)})}catch(u){}case 15:case"end":return t.stop()}},t,this,[[5,12]])}));function e(e){return t.apply(this,arguments)}return e}(),locationSuccess:function(t){var e=this,n=t.point;t.AddressComponent,t.marker;this.isStartLocation||(this.isStartLocation=!0,window.noSleep.enable(),console.log(n),this.$toast.success("开启持续定位中...打开日志查看"),navigator.geolocation.watchPosition(function(t){var n=t.coords;e.timerLocation(n)},function(t){e.$refs["LogInfo"].add("定位错误[".concat(t.code,"]：").concat(t.message))},{enableHighAccuracy:!0,maximumAge:6e4,timeout:15e3}))},locationError:function(t){var e=t.StatusCode;this.$toast.error("定位失败，错误码：".concat(e))}}},_=y,k=Object(d["a"])(_,o,i,!1,null,"774097ac",null);e["default"]=k.exports}});
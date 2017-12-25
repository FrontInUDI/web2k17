"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["2bccc731f17f773590a45397108eb667-1366.png","2bccc731f17f773590a45397108eb667"],["3fb0137a898a16a2480bfabd602bc261-1200.png","3fb0137a898a16a2480bfabd602bc261"],["7009307455d42dcc7be2906ef7d08c7f-1024.png","7009307455d42dcc7be2906ef7d08c7f"],["8ee1048eb113eb6a678ef24a0c16814c-920.png","8ee1048eb113eb6a678ef24a0c16814c"],["e5b81ae3b11cd95a2f8a483c50caccb2-600.png","e5b81ae3b11cd95a2f8a483c50caccb2"],["index.html","28a5f802de9ac6574d490b006d6efcca"],["service-worker.js","ac144760e9be2ca7db88b45a54ab708b"],["static/css/app.18c19dfdd93cc23e9507e68df142efc3.css","99d9c0a53eb8e50c7826e315f1f5cf60"],["static/fonts/montserrat-bold-webfont.03ec5f4.woff2","03ec5f46cb91086fdeba3970db9e0a04"],["static/fonts/montserrat-extralight-webfont.54ca851.woff2","54ca851cdc2101d33475537c4a6b5815"],["static/fonts/montserrat-medium-webfont.4cc1cec.woff2","4cc1cec3ea70473ebdcd68caa04e567c"],["static/fonts/montserrat-regular-webfont.133277f.woff2","133277fc6358c5b5b0838755c7c15fb9"],["static/fonts/montserrat-semibold-webfont.7dc35aa.woff2","7dc35aaa728a933e16a50f08399d183f"],["static/fonts/montserrat-thin-webfont.982099f.woff2","982099fc40e8c6d0649523be9b550b77"],["static/img/background.png","f775a241a355c3ddf6f5a77a3a8bc978"],["static/img/eduardo.jpg","e5e1319b1cc5e88496ee25857c8de204"],["static/img/facom.png","138a32e9dfaa729db4fba5849654417b"],["static/img/fernando.png","43c849debfb29b8052482ec41f09e6d9"],["static/img/frontinudi970x500.png","78db6e3670d1b78f98694fb7bec53def"],["static/img/icons/android-chrome-192x192.png","e771476710dde4d98a1ccd5572a0cf7c"],["static/img/icons/android-chrome-512x512.png","25658d0a8814ce8738b55a4b6eff97da"],["static/img/icons/apple-touch-icon-120x120.png","6e6c598cd6ed0e1b8ccacb453741fb7d"],["static/img/icons/apple-touch-icon-152x152.png","a3ef12b4925bb8176e50fdc94b0c07f0"],["static/img/icons/apple-touch-icon-180x180.png","6be146b36476088818716f75244e3f75"],["static/img/icons/apple-touch-icon-60x60.png","dd4bb2a9401c0c47258374570698578d"],["static/img/icons/apple-touch-icon-76x76.png","5865e855e63cca1f1713862e7c75b5ba"],["static/img/icons/apple-touch-icon.png","166d2b559db6f6185e66f3360196a14a"],["static/img/icons/favicon-16x16.png","76719e2b055e38d0b5c5602b550e1111"],["static/img/icons/favicon-32x32.png","f9a2132c19b3599e5a184616ec21bd82"],["static/img/icons/msapplication-icon-144x144.png","d539658218a7e4e963af35c16720ad58"],["static/img/icons/mstile-150x150.png","20bfcdf6043e09e5f57121238dd3ee70"],["static/img/icons/safari-pinned-tab.png","76719e2b055e38d0b5c5602b550e1111"],["static/img/icons/safari-pinned-tab.svg","f22d501a35a87d9f21701cb031f6ea17"],["static/img/lucas.jpg","5f71ad3624f48d19fd75c4f9368edfc1"],["static/img/pablo.jpg","7dd2fa26af80cc27b4d9d199030e7e0d"],["static/img/ufu.png","e6d3861326472ed8a6e1a4444068da38"],["static/img/ufu_logo.png","65d36fb0fa81981d8fae1d70b303c6e3"],["static/js/app.813c4c32be00e9e95d7e.js","cd5f7367c5adb77f3b5f54af927bf62e"],["static/js/manifest.824c8c229bdf8825fab4.js","a4a11992fcbfef7b3fc96352e93db5e3"],["static/js/vendor.af6df4dae9567bcca047.js","c99ab497034eaf0ab0c77223eff86ea9"]],cacheName="sw-precache-v3-my-vue-app-v5-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=c),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(c){return new Response(c,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,c,t,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var t=new URL(c).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,c){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return c.every(function(c){return!c.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],t=e[1],a=new URL(c,self.location),n=createCacheKey(a,hashParamName,t,!1);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!c.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(c){if(!c.ok)throw new Error("Request for "+t+" returned a response with status "+c.status);return cleanResponse(c).then(function(c){return e.put(t,c)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!c.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var c,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(c=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),c=urlsToCacheKeys.has(t));c&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(c){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,c),fetch(e.request)}))}});
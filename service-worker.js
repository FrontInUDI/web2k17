"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","96f274878b714c008e69d214eabf2869"],["service-worker.js","cda0f9a64afb1adf2dd10e65d616865b"],["static/css/app.54059bb30852809744b6e4700072c4c2.css","40057b4ad221e9b7db74223ee39c8fd9"],["static/fonts/montserrat-bold-webfont.03ec5f4.woff2","03ec5f46cb91086fdeba3970db9e0a04"],["static/fonts/montserrat-extralight-webfont.54ca851.woff2","54ca851cdc2101d33475537c4a6b5815"],["static/fonts/montserrat-medium-webfont.4cc1cec.woff2","4cc1cec3ea70473ebdcd68caa04e567c"],["static/fonts/montserrat-regular-webfont.133277f.woff2","133277fc6358c5b5b0838755c7c15fb9"],["static/fonts/montserrat-semibold-webfont.7dc35aa.woff2","7dc35aaa728a933e16a50f08399d183f"],["static/fonts/montserrat-thin-webfont.982099f.woff2","982099fc40e8c6d0649523be9b550b77"],["static/img/background.f775a24.png","f775a241a355c3ddf6f5a77a3a8bc978"],["static/img/background.png","f775a241a355c3ddf6f5a77a3a8bc978"],["static/img/eduardo.jpg","e5e1319b1cc5e88496ee25857c8de204"],["static/img/facom.png","138a32e9dfaa729db4fba5849654417b"],["static/img/fernando.jpg","fe88ba1d749d228a1988dd6e8b3386bd"],["static/img/frontinudi970x500.png","78db6e3670d1b78f98694fb7bec53def"],["static/img/icons/android-chrome-192x192.png","e771476710dde4d98a1ccd5572a0cf7c"],["static/img/icons/android-chrome-512x512.png","25658d0a8814ce8738b55a4b6eff97da"],["static/img/icons/apple-touch-icon-120x120.png","6e6c598cd6ed0e1b8ccacb453741fb7d"],["static/img/icons/apple-touch-icon-152x152.png","a3ef12b4925bb8176e50fdc94b0c07f0"],["static/img/icons/apple-touch-icon-180x180.png","6be146b36476088818716f75244e3f75"],["static/img/icons/apple-touch-icon-60x60.png","dd4bb2a9401c0c47258374570698578d"],["static/img/icons/apple-touch-icon-76x76.png","5865e855e63cca1f1713862e7c75b5ba"],["static/img/icons/apple-touch-icon.png","166d2b559db6f6185e66f3360196a14a"],["static/img/icons/favicon-16x16.png","76719e2b055e38d0b5c5602b550e1111"],["static/img/icons/favicon-32x32.png","f9a2132c19b3599e5a184616ec21bd82"],["static/img/icons/msapplication-icon-144x144.png","d539658218a7e4e963af35c16720ad58"],["static/img/icons/mstile-150x150.png","20bfcdf6043e09e5f57121238dd3ee70"],["static/img/icons/safari-pinned-tab.png","76719e2b055e38d0b5c5602b550e1111"],["static/img/icons/safari-pinned-tab.svg","f22d501a35a87d9f21701cb031f6ea17"],["static/img/lucas.jpg","5f71ad3624f48d19fd75c4f9368edfc1"],["static/img/pablo.jpg","7dd2fa26af80cc27b4d9d199030e7e0d"],["static/img/ufu.png","e6d3861326472ed8a6e1a4444068da38"],["static/img/ufu_logo.png","65d36fb0fa81981d8fae1d70b303c6e3"],["static/js/app.b134938c2317e16025f7.js","00282f39a67f1c6df0cb915fc658396d"],["static/js/manifest.f5d9d7990c875c607277.js","96523f64b4ed8bae8f5765e25a479e9b"],["static/js/vendor.86a581a63f2216bab91f.js","29d1c2abca6fa2558e382bc7fdf9e639"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
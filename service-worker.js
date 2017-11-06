"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","2b9cd0e053a52816e3628c15cda9d4cb"],["service-worker.js","f17286e33f27d3605773536014679bf1"],["static/css/app.21f87a3a8df6dc09c59716bea6341069.css","3601dd188a605eb24e87c22c186048a8"],["static/fonts/montserrat-bold-webfont.03ec5f4.woff2","03ec5f46cb91086fdeba3970db9e0a04"],["static/fonts/montserrat-extralight-webfont.54ca851.woff2","54ca851cdc2101d33475537c4a6b5815"],["static/fonts/montserrat-medium-webfont.4cc1cec.woff2","4cc1cec3ea70473ebdcd68caa04e567c"],["static/fonts/montserrat-regular-webfont.133277f.woff2","133277fc6358c5b5b0838755c7c15fb9"],["static/fonts/montserrat-semibold-webfont.7dc35aa.woff2","7dc35aaa728a933e16a50f08399d183f"],["static/fonts/montserrat-thin-webfont.982099f.woff2","982099fc40e8c6d0649523be9b550b77"],["static/img/eduardo.jpg","e5e1319b1cc5e88496ee25857c8de204"],["static/img/facom.png","138a32e9dfaa729db4fba5849654417b"],["static/img/fernando.jpg","fe88ba1d749d228a1988dd6e8b3386bd"],["static/img/icons/android-chrome-192x192.png","f130a0b70e386170cf6f011c0ca8c4f4"],["static/img/icons/android-chrome-512x512.png","0ff1bc4d14e5c9abcacba7c600d97814"],["static/img/icons/apple-touch-icon-120x120.png","936d6e411cabd71f0e627011c3f18fe2"],["static/img/icons/apple-touch-icon-152x152.png","1a034e64d80905128113e5272a5ab95e"],["static/img/icons/apple-touch-icon-180x180.png","c43cd371a49ee4ca17ab3a60e72bdd51"],["static/img/icons/apple-touch-icon-60x60.png","9a2b5c0f19de617685b7b5b42464e7db"],["static/img/icons/apple-touch-icon-76x76.png","af28d69d59284dd202aa55e57227b11b"],["static/img/icons/apple-touch-icon.png","66830ea6be8e7e94fb55df9f7b778f2e"],["static/img/icons/favicon-16x16.png","4bb1a55479d61843b89a2fdafa7849b3"],["static/img/icons/favicon-32x32.png","98b614336d9a12cb3f7bedb001da6fca"],["static/img/icons/msapplication-icon-144x144.png","b89032a4a5a1879f30ba05a13947f26f"],["static/img/icons/mstile-150x150.png","058a3335d15a3eb84e7ae3707ba09620"],["static/img/icons/safari-pinned-tab.svg","f22d501a35a87d9f21701cb031f6ea17"],["static/img/lucas.jpg","5f71ad3624f48d19fd75c4f9368edfc1"],["static/img/pablo.jpg","7dd2fa26af80cc27b4d9d199030e7e0d"],["static/img/ufu.png","e6d3861326472ed8a6e1a4444068da38"],["static/img/ufu_logo.png","65d36fb0fa81981d8fae1d70b303c6e3"],["static/js/app.5faaa32618a0ee27b45a.js","95db2918315c7790279a6b99b9074f6d"],["static/js/manifest.3b4015a4d2aa54e9b3a8.js","7c510c45c9c165b10afc827bbcda54b1"],["static/js/vendor.9ab0996cafa08b9b4819.js","4ef5b98d6986bc2b005a19d6be7a0bf6"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
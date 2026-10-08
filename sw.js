var C="lag-sst-v1";
self.addEventListener("install",function(e){self.skipWaiting();e.waitUntil(caches.open(C).then(function(c){return c.addAll(["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png"])}))});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){var r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
e.respondWith(fetch(r).then(function(x){var k=x.clone();caches.open(C).then(function(c){c.put(r,k)});return x}).catch(function(){return caches.match(r).then(function(m){return m||caches.match("./index.html")})}))});

self.addEventListener("install",e=>{
e.waitUntil(caches.open("cg-pos").then(c=>c.addAll(["/","/index.html","/icon.png"])));
});
self.addEventListener("fetch",e=>{
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});

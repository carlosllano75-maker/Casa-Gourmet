self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("cg-pos").then(c => {
      return c.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./logo-casa-gourmet.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

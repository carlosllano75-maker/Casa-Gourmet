const CACHE_NAME = 'casa-gourmet-v5';
const assets = ['./', './index.html', './manifest.json', './logo-casa-gourmet.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(assets)));
  self.skipWaiting(); // <--- ESTO DESPIERTA LOS BOTONES
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
  self.clients.claim(); // <--- ESTO TOMA CONTROL INMEDIATO DE LA APP
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});

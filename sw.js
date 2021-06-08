self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      'index.html',
      'ask.png',
      'index.js',
      'style.css',
      'ask1.jpg',
      'ask2.jpg',
      'ask3.jpg',
      'ask4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

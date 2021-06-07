yself.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      'index.html',
      'ask.png',
      'index.js',
      'style.css',
      'fox1.jpg',
      'fox2.jpg',
      'fox3.jpg',
      'fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

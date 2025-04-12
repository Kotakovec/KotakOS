const CACHE_NAME = 'kotakos-v1';
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME)
    .then(cache => cache.addAll(['index.html', 'manifest.json'])));
});
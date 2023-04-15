const cacheName = 'pwaTeste-v1.2';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll([
          'mapfit map/index.html',
          'mapfit map/academias.json',
          'mapfit map/Compaz.json',
          'mapfit map/Dadosrecife.json',
          'mapfit map/script.js',
          'mapfit map/style.css',
          'mapfit/inicio.html'
        ]);
      })
      .then(() => self.skipWaiting())
      .catch(error => console.log('Erro ao adicionar ao cache', error))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  // Responde com a solicitação de rede, se houver conexão disponível
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());
});

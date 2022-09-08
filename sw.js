/// <reference lib="WebWorker" />
// export empty type because of tsc --isolatedModules flag
//export type {};
//declare const self: ServiceWorkerGlobalScope;

self.addEventListener('install', (e) => {
    /*
    e.waitUntil(
      caches.open('mystore').then((cache) => cache.addAll([
      ])),
    );
*/
});

self.addEventListener('fetch', (e) => {
    /*
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
*/
});

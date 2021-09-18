const cacheName = 'v1';

const cacheAssets = [
    'index.html',
    'main.js'
]



self.addEventListener('install', e => {
    console.log('Service Worker: Installed');


    e.waitUntil(
        caches
        // opens cache "instance"
        .open(cacheName)
        // stores information in cache
        .then(cache => {
            console.log('Service worker: caching files');
            cache.addAll(cacheAssets)
        })
        .then(() => self.skipWaiting())
        );
});

self.addEventListener('activate', e => {
    console.log('Service Worker: Activated');

    // Remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})


self.addEventListener('fetch', e=> {
    console.log('Service Worker: Fetching');
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
        )
})
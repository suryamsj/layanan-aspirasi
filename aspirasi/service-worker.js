const CACHE_NAME = 'web-aspirasi';
const toCache = [
    '/',
    '/index.html',
    '/asset/css/bootstrap.min.css',
    '/asset/css/costume.css',
    '/manifest.json',
    '/asset/js/register.js',
    '/asset/img/icon.png',
    '/asset/js/main.js',
    '/asset/js/bootstrap.bundle.min.js',
    '/asset/img/logo.png',
    '/favicon.ico'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            return cache.addAll(toCache)
        })
        .then(self.skipWaiting())
    )
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request)
        .catch(() => {
            return caches.open(CACHE_NAME)
                .then((cache) => {
                    return cache.match(event.request)
                })
        })
    )
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys()
        .then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('Hapus cache lama', key)
                    return caches.delete(key)
                }
            }))
        })
        .then(() => self.clients.claim())
    )
});
const CACHE_NAME = "bulking-cache-v3"; // Naikkan versi lagi, jika v2 gagal
const urlsToCache = [
    "./index.html",
    "./manifest.json",
    "./iconBulking-192.png", // Tambah rujukan ikon baharu
    "./iconBulking-512.png"  // Tambah rujukan ikon baharu
];
self.addEventListener("install", e=>{ e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache))); });
self.addEventListener("fetch", e=>{ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("pwa-cache").then((cache) => {
      return cache.addAll([
        "/scratch-platformer/",
        "/scratch-platformer/index.html",
        "/scratch-platformer/manifest.json",
        "/scratch-platformer/android/android-launchericon-192-192.png",
        "/scratch-platformer/android/android-launchericon-512-512.png",
        "/scratch-platformer/ios/180.png",
        "/scratch-platformer/windows11/Square150x150Logo.scale-200.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

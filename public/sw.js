// Minimal Service Worker to prevent 404 errors
// This file prevents the browser from throwing 404 errors when looking for a service worker

self.addEventListener('install', function(event) {
  // Immediately take control
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  // Immediately claim all clients
  event.waitUntil(self.clients.claim());
});

// Optional: Handle fetch events (currently does nothing special)
self.addEventListener('fetch', function(event) {
  // Let the browser handle all requests normally
  return;
}); 
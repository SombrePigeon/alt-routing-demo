import {install as installAltRouting} from "https://alt-routing.releases.sombrepigeon.fr/2.0.0-alpha.7/serviceWorker.js";
//import {install as installAltRouting} from "http://alt-routing.dev.releases.sombrepigeon.fr/serviceWorker.js";
import "./dice/service.js";
//importScripts('./dice/service.js');

//setInterval(_=> {self.registration.update()}, 20000)

installAltRouting();

self.addEventListener('install', (event) => {
  console.log('[SW] Install');
  self.skipWaiting(); // ⚠️ force l'activation sans attendre
});
self.addEventListener('activate', (event) => {
  console.log('[SW] Activate');
  //self.clients.claim(); // ⚠️ prend le contrôle immédiat des pages ouvertes
});

self.addEventListener("fetch", (event) => {
  // Let the browser do its default thing
  // for non-GET requests.
  const url = new URL(event.request.url)
  const path = url.pathname;
  if(path == "/spell/content.html")
  {
    const spell = url.searchParams.get("name");
    event.respondWith(
    fetch(`/spelllist/${spell}.html`)
  );
  }

});

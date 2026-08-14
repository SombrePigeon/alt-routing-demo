import {init as initAltRouting} from "http://alt-routing.dev.releases.sombrepigeon.fr/serviceWorker/lib.js";
import {install as installAltRouting} from "http://alt-routing.dev.releases.sombrepigeon.fr/serviceWorker/routing.js";
import "./dice/service.js";

import config from "/js/configs/alt-routing.json" with {type : "json"};

const composition  = new URL("/js/configs/composition.json", import.meta.url).href;

setInterval(_=> {self.registration.update()}, 60000)

const routes = ['/', "/spell/", "/dice/"];

initAltRouting();


const version = "0.7-beta";

installAltRouting(routes, config, version, composition, import.meta.url);

self.addEventListener('install', (event) => {
  console.log('[SW] Install');
  self.skipWaiting(); // ⚠️ force l'activation sans attendre
});
self.addEventListener('activate', (event) => {
  console.log('[SW] Activate');
  self.clients.claim(); // ⚠️ prend le contrôle immédiat des pages ouvertes
});

self.addEventListener("fetch", (event) => {
  // Let the browser do its default thing
  // for non-GET requests.
  console.debug(`SW handle spell : `, event.request);
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

self.addEventListener("fetch", (event) => {
  // Let the browser do its default thing
  // for non-GET requests.
  console.debug(`SW handle redirect : `, event.request);
  const url = new URL(event.request.url)
  const path = url.pathname;
  if(path === "/redirect/content.html")
  {
    event.respondWith(
    Response.redirect("/content.html")
  );
  }

});


//addRoute fallback
self.addEventListener("fetch", (event) => {
  const request = event.request;
  console.debug(`SW handle fallback request : `, request);
    const getData = async () => {
      const cached = await caches.match(request);
      console.debug(`SW handle fallback request cached ? : `, cached != null );

      const response = cached ?? await fetch(request);
      console.debug(`SW handle fallback response : `, response.clone());
      return response;
    };
    event.respondWith(getData());
});

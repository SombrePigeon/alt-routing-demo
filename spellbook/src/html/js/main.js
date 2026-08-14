//polyfills
import "polyfills/custom-elements";
//alt-routing
import "alt-routing/route.js";
import "alt-routing/anchor.js";
import "alt-routing/router.js";
import "alt-routing/title.js";
import "alt-routing/form.js";
import "alt-routing/button.js";
import "alt-routing/input.js";
//import "alt-routing/source.js";

//import "alt-routing/source.js";

console.log("main");

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { type: "module", scope: "/", updateViaCache: "none"}).then(reg => {
    console.log("SW registered", reg);
  }).catch(err => {
    console.error("SW registration failed", err);
  });
}


//polyfills
import "polyfills/custom-elements";
//alt-routing submodules
import "alt-routing/features/shadow.js";
import "alt-routing/features/style.js";
import "alt-routing/features/target.js";
//alt-routing
import "alt-routing/route.js";
import "alt-routing/anchor.js";
import "alt-routing/router.js";
import "alt-routing/title.js";
import "alt-routing/slot.js";
import "alt-routing/form.js";
//import "alt-routing/source.js";

//import "alt-routing/source.js";
/*preload*/
import "alt-routing/namings.js";
import "alt-routing/config-base.js";
import "alt-routing/config";
//import "dev";

console.log("main");

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { /*type: "module",*/ scope: "/"}).then(reg => {
    console.log("SW registered", reg);
  }).catch(err => {
    console.error("SW registration failed", err);
  });
}
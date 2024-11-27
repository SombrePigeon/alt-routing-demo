import config from "alt-routing/config-base.js"

const newConfig = structuredClone(config);
newConfig.targetNavigation.origins = ["https://alt-routing-demo.sombrepigeon.fr"];
newConfig.targetNavigation.targets = ["https://alt-routing-demo.sombrepigeon.fr"];
newConfig.targetNavigation.timout = 50;
newConfig.route.localNav=true;
newConfig.route.staticNav=false;
export default newConfig;
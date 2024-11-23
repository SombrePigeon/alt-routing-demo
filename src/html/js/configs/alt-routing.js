import config from "alt-routing/config-base.js"

const newConfig = structuredClone(config);
newConfig.targetNavigation.origins = ["http://alt-routing-demo.sombrepigeon.fr"];
newConfig.targetNavigation.targets = ["http://alt-routing-demo.sombrepigeon.fr"];
newConfig.route.localNav=true;
newConfig.route.staticNav=true;
export default newConfig;
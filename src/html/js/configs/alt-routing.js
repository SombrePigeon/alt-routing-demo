import config from "../modules/alt-routing/config.js"

const newConfig = structuredClone(config);
newConfig.targetNavigation.origins = ["http://alt-routing-demo.sombrepigeon.fr.localhost"];
newConfig.targetNavigation.targets = ["http://alt-routing-demo.sombrepigeon.fr.localhost"];

export default newConfig;
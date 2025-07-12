import config from "alt-routing/config-base.js"

const newConfig = structuredClone(config);

newConfig.route.localNav = true;
newConfig.route.staticNav = false;

newConfig.anchor.showAttribute.locationMatch = true;

export default newConfig;
import config from "alt-routing/config-base.js"

const newConfig = structuredClone(config);
newConfig.targetNavigation.origins = ["http://alt-routing-demo.sombrepigeon.fr"];
newConfig.targetNavigation.targets = ["http://alt-routing-demo.sombrepigeon.fr"];
newConfig.targetNavigation.timout = 50;
newConfig.route.useShadow = true;
newConfig.route.style = "/css/shadowRoute.css";
newConfig.route.localNav = true;
//newConfig.route.staticNav = true;
newConfig.route.staticRouting = true;
newConfig.route.showAttribute.locationMatch = true;
newConfig.route.showAttribute.state = true;
newConfig.route.showAttribute.status = true;
newConfig.anchor.showAttribute.locationMatch = true;
newConfig.routeur.features.shadowRouting = true;
newConfig.routeur.features.styleShadowRouting = true;
newConfig.routeur.features.updateTarget = true;
newConfig.route.shadowRootInit.slotAssignment = "manual";
newConfig.route.shadowRootInit.mode = "open";
newConfig.route.navSelector= ":scope>:is(nav,a)"
newConfig.routeur.features.viewTransition = true;
export default newConfig;
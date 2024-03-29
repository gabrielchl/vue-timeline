import VueTimeline from "./VueTimeline.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueTimeline", VueTimeline);
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

VueTimeline.install = install;

export default VueTimeline;

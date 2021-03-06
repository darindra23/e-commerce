import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LoadScript from "vue-plugin-load-script";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vuetify from "./plugins/vuetify";
import GSignInButton from "vue-google-signin-button";

Vue.use(GSignInButton);
Vue.use(LoadScript);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.loadScript("./vendor/animsition/js/animsition.min.js");
Vue.loadScript("./vendor/select2/select2.min.js");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

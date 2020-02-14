
import Vue from 'vue';
import App from './App.vue';
import store from "./store"

import drizzleVuePlugin from "@drizzle/vue-plugin"
import drizzleOptions from "./drizzleOptions"
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(drizzleVuePlugin, { store, drizzleOptions })

new Vue({
  store,
  render: h => h(App)
}).$mount("#app")

// const vm = new Vue({
//   render: h => h(App),
// });

// vm.$mount('#app');
import Vue from "vue"; //Importa la libreria que se baja con npm
import App from "./App.vue"; //Importar componente app
import "@/assets/css/tailwind.css"; //El @ funciona para hacer referencia al directorio source
import Chartick from "vue-chartkick";
import Chart from "chart.js";
import { VueSpinners } from "@saeris/vue-spinners";

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";

Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart));
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  //Instancia de Vue
  router,
  render: h => h(App)
}).$mount("#app"); //Esta linea tiene el mismo proposito que el componente el:

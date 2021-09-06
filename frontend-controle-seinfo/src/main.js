import Vue from "vue";
import App from "./App";
import teste from "./router/teste";
import Admin from "./router/admin";
import Supervisor from "./router/supervisor";
import Login from "./router/login";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import SlideUpDown from "vue-slide-up-down";
import VueTheMask from "vue-the-mask";
import Usuario from "./router/usuario";

const app_url = process.env.VUE_APP_URL;

Vue.component("slide-up-down", SlideUpDown);
Vue.use(Antd);
Vue.use(VueTheMask);

let router;


const perm = [Usuario,Supervisor,Admin]

Vue.config.productionTip = false;

setTimeout(() => {
  teste.userData().then((res) => {
    router = res ?  perm[res.nivel]: Login;
    new Vue({
      el: "#app",
      router,
      components: { App },
      template: "<App/>",
    });
  });
}, 500);

export default app_url;

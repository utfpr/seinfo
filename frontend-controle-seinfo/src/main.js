import Vue from 'vue';
import App from './App';
import Admin from './router/admin';
import Login from './router/login';
import Usuario from './router/usuario';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import SlideUpDown from "vue-slide-up-down";
import VueTheMask from 'vue-the-mask';
import auth from './services/auth';

Vue.component('slide-up-down', SlideUpDown);
Vue.use(Antd);
Vue.use(VueTheMask);


var router; 

Vue.config.productionTip = false

setTimeout(async () => {
  await auth.getUser().then((res, err) => {
    router = res !== null ? (res.nivel === 1 ? Usuario : Admin) : Login;
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    });
  })
}, 500);

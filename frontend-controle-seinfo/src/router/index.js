import Vue from 'vue' 
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import Registrar from '@/components/registrar'
import Cad_evento from '@/components/cad_evento'
import adm from '@/components/adm'
import tabela from '@/components/tabela'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registrar',
      name: 'Registrar',
      component: Registrar
    },
    {
      path: '/cadEvento',
      name: 'Evento',
      component: Cad_evento
    },
    {
      path: '/adm',
      name: 'adm',
      component: adm
    },
    {
      path: '/tabela',
      name: 'tabela',
      component: tabela
    }
  ]
})

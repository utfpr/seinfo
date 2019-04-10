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
      path: '/adm',
      name: 'adm',
      component: adm,
      children: [
      {
        path: '',
        component: tabela
          },
      {
        path: 'tabela',
        component: tabela
      },
      {
        path: 'cadEvento',
        component: Cad_evento
      }
      ]
    },
  ],
  mode: 'history'
})

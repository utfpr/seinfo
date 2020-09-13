import Vue from 'vue';
import Router from 'vue-router';
import listInscricoes from '@/components/list_inscricoes';
import Logo from '@/components/logo';
import Usuario from '@/components/usuario';
import atvHome from '@/components/atv_usuario';
import UsuPerfil from '@/components/perfil_usuario';
import homeUsu from '@/components/home_usuario';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
      path: '/usuario',
      name: 'Usuario',
      component: Usuario,
      children: [
        {
          path: '',
          component: Logo
        },
        {
          path: 'homeUsu',
          component: homeUsu
        },
        {
          path: 'atvHome',
          component: atvHome
        },
        {
          path: 'listInsc',
          component: listInscricoes
        },
        {
          path: 'perfilUsu',
          component: UsuPerfil
        },
      ]
    },
    {
      path: '*',
      name: 'e404',
      component: Usuario,
    }],
});
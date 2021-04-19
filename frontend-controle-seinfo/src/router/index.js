import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import Registrar from '@/components/registrar';
import Cad_Pessoa from '@/components/cad_pessoa';
import listInscricoes from '@/components/list_inscricoes';
import Evento from '@/components/evento';
import Usuario from '@/components/usuario';
import atvHome from '@/components/atv_usuario';
import UsuPerfil from '@/components/perfil_usuario';
import not_found from '@/components/not_found';
import Cad_Aluno from '@/components/cad_aluno';
import homeUsu from '@/components/home_usuario';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cadastroteste',
      name: 'cadastroteste',
      component : cadastroAtv
    },
    {
      path: '/usuario',
      name: 'Usuario',
      component: Usuario,
      children: [
        {
          path: '',
          component: homeUsu
        },
        {
          path: 'homeUsu',
          component: homeUsu
        },
        {
          path: 'atvHome/:idEvento/:CPF',
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
      path: '/registrar',
      name: 'Registrar',
      component: Registrar
    },
    {
      path: '/evento/:id',
      name: 'Evento',
      component: Evento
    },{
      path: '/cadastro',
      name: 'Cad_Aluno',
      component: Cad_Aluno
    },{
      path: '/cadPessoa',
      name: 'Cad_Pessoa',
      component: Cad_Pessoa
    },

    {
      path: '*',
      name: 'e404',
      component: not_found
    }
  ]
});

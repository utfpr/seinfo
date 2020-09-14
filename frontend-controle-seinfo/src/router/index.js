import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import Registrar from '@/components/registrar';
import adm from '@/components/adm';
import tabela from '@/components/tabela';
import Cad_evento from '@/components/cad_evento';
import Cad_Receita from '@/components/cad_receita';
import Cad_Despesa from '@/components/cad_despesa';
import Cad_Pessoa from '@/components/cad_pessoa';
import Cad_Carousel from '@/components/con_carousel';
import Cad_Atividade from '@/components/adm_atividade';
import listInscricoes from '@/components/list_inscricoes';
import Cad_Categoria from '@/components/adm_categoria';
import Logo from '@/components/logo';
import Evento from '@/components/evento';
import ADMevento from '@/components/adm_evento';
import funcPessoa from '@/components/func_pessoa';
import Teste from '@/components/teste';
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
      path: '/teste',
      name: 'Teste',
      component: Teste
    },
    {
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
          path: 'atvHome/:idEvento',
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
      path: '/adm',
      name: 'adm',
      component: adm,
      children: [
        {
          path: '',
          component: Logo
        },
        {
          path: 'tabela',
          component: tabela
        },
        {
          path: 'cadEvento',
          component: Cad_evento
        },
        {
          path: 'conCarousel',
          component: Cad_Carousel
        },
        {
          path: 'cadReceita',
          component: Cad_Receita
        },
        {
          path: 'cadDespesa',
          component: Cad_Despesa
        },
        {
          path: 'cadPessoa',
          component: Cad_Pessoa
        },
        {
          path: 'atividade',
          component: Cad_Atividade
        },
        {
          path: 'categoria',
          component: Cad_Categoria
        },
        {
          path: 'ADMevento',
          component: ADMevento
        },
        {
          path: 'funcPessoa',
          component: funcPessoa
        }
      ]
    },
    {
      path: '*',
      name: 'e404',
      component: not_found
    }
  ]
});

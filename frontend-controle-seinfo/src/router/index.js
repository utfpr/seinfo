import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import Registrar from '@/components/registrar';
import adm from '@/components/adm';
import tabela from '@/components/tabela';
import Cad_evento from '@/components/cad_evento';
import Cad_Receita from '@/components/cad_receita';
import Cad_Despesa from '@/components/cad_despesa';
import Cad_Palestrante from '@/components/cad_palestrante';
import Cad_Adm from '@/components/cad_adm';
import Cad_Ministrante from '@/components/cad_ministrante';
import Cad_Aluno from '@/components/cad_aluno';
import Cad_Convidado from '@/components/cad_convidado';
import Cad_Atividade from '@/components/cad_atividade';
import Cad_Categoria from '@/components/cad_categoria';
import Logo from '@/components/logo';
import Evento from '@/components/evento';
import ADMevento from '@/components/adm_evento';
import Teste from '@/components/teste';


Vue.use(Router);

export default new Router({
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
      path: '/registrar',
      name: 'Registrar',
      component: Registrar
    },
    {
      path: '/evento',
      name: 'Evento',
      component: Evento
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
          path: 'cadReceita',
          component: Cad_Receita
        },
        {
          path: 'cadDespesa',
          component: Cad_Despesa
        },
        {
          path: 'cadPalestrante',
          component: Cad_Palestrante
        },
        {
          path: 'cadAdm',
          component: Cad_Adm
        },
        {
          path: 'cadMinistrante',
          component: Cad_Ministrante
        },
        {
          path: 'cadAluno',
          component: Cad_Aluno
        },
        {
          path: 'cadConvidado',
          component: Cad_Convidado
        },
        {
          path: 'cadAtividade',
          component: Cad_Atividade
        },,
        {
          path: 'cadCategoria',
          component: Cad_Categoria
        },
        {
          path: 'ADMevento',
          component: ADMevento
        }
        ]
    },
  ],
  mode: 'history'
});

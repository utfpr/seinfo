import Vue from 'vue';
import Router from 'vue-router';
import adm from '@/components/adm';
import tabela from '@/components/tabela';
import Cad_evento from '@/components/cad_evento';
import Cad_Receita from '@/components/cad_receita';
import Cad_Despesa from '@/components/cad_despesa';
import Cad_Pessoa from '@/components/cad_pessoa';
import Cad_Carousel from '@/components/con_carousel';
import Cad_Atividade from '@/components/adm_atividade';
import Cad_Categoria from '@/components/adm_categoria';
import Logo from '@/components/logo';
import ADMevento from '@/components/adm_evento';
import funcPessoa from '@/components/func_pessoa';
import cadastroAtividade from '@/components/adm/atividades/cadastro/cadastro.vue';
import Eventos from '@/components/adm/eventos/index/eventos.vue';
import Atividades from '@/components/adm/atividades/index/atividades.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/adm',
      name: 'adm',
      component: adm,
      children: [
        {
          path: '',
          component: Cad_evento
        },
        {
          path: 'eventos',
          component: Eventos
        },
        {
          path: 'atividades',
          component: Atividades
        },
        {
          path: 'teste',
          component: cadastroAtividade
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
    }, {
      path: '*',
      name: 'e404',
      component: adm,
    }],
});
import Vue from 'vue';
import Router from 'vue-router';
import navSupervisor from '@/components/navSupervisor';
import Cad_Receita from '@/components/cad_receita';
import Cad_Despesa from '@/components/cad_despesa';
import Cad_Pessoa from '@/components/cad_pessoa';
import Cad_Carousel from '@/components/adm/carousel/con_carousel.vue';
import Cad_Categoria from '@/components/adm_categoria';
import funcPessoa from '@/components/func_pessoa';
import Eventos from '@/components/adm/eventos/index/eventos.vue';
import Relatorios from '@/components/adm/relatorios/index/relatorios.vue';
import Atividades from '@/components/adm/atividades/index/atividades.vue';
import Detalhes from '@/components/adm/atividades_detalhes/index/detalhes.vue';
import perfil_usuario from '@/components/perfil_usuario';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/supervisor',
      name: 'supervisor',
      component: navSupervisor,
      children: [
        {
          path: '',
          component: Eventos
        },
        {
          path: 'eventos',
          component: Eventos
        },
        {
          path: 'atividades',
          component: Atividades,
        },
        {
          path: 'detalhes/:idEvento/:idAtividade',
          name: 'detalhes',
          component: Detalhes
        },
        {
          path: 'conCarousel',
          component: Cad_Carousel
        },
        {
          path: 'tabela',
          component: Relatorios
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
          path: 'categoria',
          component: Cad_Categoria
        },
        {
          path: 'funcPessoa',
          component: funcPessoa
        },
        {
          path: 'perfil',
          component: perfil_usuario
        }
      ]
    }, {
      path: '*',
      name: 'e404',
      component: navSupervisor,
    }],
});
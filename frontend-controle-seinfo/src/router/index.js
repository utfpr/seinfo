import Vue from 'vue' 
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import Registrar from '@/components/registrar'
import adm from '@/components/adm'
import tabela from '@/components/tabela'
import Cad_evento from '@/components/cad_evento'
import Cad_Minicurso from '@/components/cad_minicurso' 
import Cad_Palestra from '@/components/cad_palestra'
import Cad_Receita from '@/components/cad_receita'
import Cad_Despesa from '@/components/cad_despesa'
import Cad_Palestrante from '@/components/cad_palestrante'
import Cad_Adm from '@/components/cad_adm'
import Cad_Ministrante from '@/components/cad_ministrante'
import Cad_Aluno from '@/components/cad_aluno'
import Cad_Convidado from '@/components/cad_convidado'
import Logo from '@/components/logo'

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
          path: 'cadMinicurso',
          component: Cad_Minicurso
        },
        {
          path: 'cadPalestra',
          component: Cad_Palestra
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
        }
        ]
    },
  ],
  mode: 'history'
})

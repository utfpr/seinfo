<template>
  <div>
    <navSimples></navSimples>
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed" width="256px">
        <a-menu mode="inline" :defaultSelectedKeys="['1']">
          <a-menu-item key="1">
            <router-link to="/adm/tabela">
              <a-icon type="table"/>
              <span>Eventos Disponiveis</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/adm"></router-link>
            <a-icon type="bank"/>
            <span>Controle de Caixa</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="form"/><span>Cadastro de Pessoas</span></span>
              <a-menu-item key="3">Palestrante
                <router-link to="/adm/cadPalestrante"></router-link>
              </a-menu-item>
              <a-menu-item key="4">Ministrante
                <router-link to="/adm/cadMinistrante"></router-link>
              </a-menu-item>
              <a-menu-item key="5">Convidado
                <router-link to="/adm/cadConvidado"></router-link>
              </a-menu-item>
              <a-menu-item key="6">Aluno
                <router-link to="/adm/cadAluno"></router-link>
              </a-menu-item>
              <a-menu-item key="7">Administrador
                <router-link to="/adm/cadAdm"></router-link>
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title"><a-icon type="form"/><span>Cadastro de Eventos</span></span>
              <a-menu-item key="8">
                Evento
                <router-link to="/adm/cadEvento"></router-link>
              </a-menu-item>
              <a-menu-item key="9">
                Minicurso
                <router-link to="/adm/cadMinicurso"></router-link>
              </a-menu-item>
              <a-menu-item key="10">Palestra
                <router-link to="/adm/cadPalestra"></router-link>
              </a-menu-item>
              <a-menu-item key="11">Receita
                <router-link to="/adm/cadReceita"></router-link>
              </a-menu-item>
              <a-menu-item key="12">Despesa
                <router-link to="/adm/cadDespesa"></router-link>
              </a-menu-item>
            </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed"/>
        </a-layout-header>
        <a-layout-content>
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import navSimples from "./navSimples.vue";
export default {
  data() {
    return {
      collapsed: false
    };
  },
  components: {
    navSimples
  },
};
</script>
<style>

.ant-layout {
  background: transparent;
}

.ant-layout-sider {
  background: transparent;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #ff5918;
}
</style>

<template>
  <div>
    <navSimples></navSimples>
    <a-layout>
      <a-menu class="menu" mode="horizontal">
        <a-menu-item key="14">
          <a-icon type="global"/>Eventos
          <router-link to="/supervisor/eventos"></router-link>
        </a-menu-item>
        <a-sub-menu key="sub3">
          <span slot="title">
            <a-icon type="form"/>
            <span>Atividades/Categorias</span>
          </span>
          <a-menu-item key="13">
            Atividades
            <router-link to="/supervisor/atividades"></router-link>
          </a-menu-item>
          <a-menu-item key="10">
            Categorias
            <router-link to="/supervisor/categoria"></router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="bank"/>
            <span>Fluxo de Caixa</span>
          </span>
          <a-menu-item key="11">
            Receita
            <router-link to="/supervisor/cadReceita"></router-link>
          </a-menu-item>
          <a-menu-item key="12">
            Despesa
            <router-link to="/supervisor/cadDespesa"></router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="7">
          <a-icon type="form"/>Visitante
          <router-link to="/supervisor/cadPessoa"></router-link>
        </a-menu-item>
        <a-menu-item key="15">
          <a-icon type="bars"/>Relatório
          <router-link to="/supervisor/tabela"></router-link>
        </a-menu-item>
        <a-sub-menu key="sub6">
          <span slot="title">
            <a-icon type="tool"/>
            <span>Configurações</span>
          </span>
          <a-menu-item key="18">
            Carousel Home
            <router-link to="/supervisor/conCarousel"></router-link>
          </a-menu-item>
          <a-menu-item key="19">
            Funções de Pessoas
            <router-link to="/supervisor/funcPessoa"></router-link>
          </a-menu-item>
        </a-sub-menu>
      <a-menu-item>
        <a-icon type="user" />
        Seu Perfil
        <router-link to="/supervisor/perfil"> </router-link>    
        </a-menu-item>
      </a-menu>
      <a-layout>
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
  }
};
</script>
<style>
.ant-layout {
  background: transparent;
}

.ant-layout-sider {
  background: transparent;
}

.menu {
  text-align: center;
}
</style>

<template>
  <div>
    <navSimples></navSimples>
    <a-layout>
      <a-menu class="menu" v-model="current" mode="horizontal">
        <a-menu-item key="14">
          <a-icon type="global"/>Eventos
          <router-link to="/adm/cadEvento"></router-link>
        </a-menu-item>
        <a-sub-menu key="sub3">
          <span slot="title">
            <a-icon type="form"/>
            <span>Cadastro de Atividades</span>
          </span>
          <a-menu-item key="13">
            Atividade
            <router-link to="/adm/cadAtividade"></router-link>
          </a-menu-item>
          <a-menu-item key="10">
            Categoria
            <router-link to="/adm/cadCategoria"></router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="form"/>
            <span>Cadastro de Pessoas</span>
          </span>
          <a-menu-item key="7">
            Pessoa
            <router-link to="/adm/cadPessoa"></router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="bank"/>
            <span>Cadastro de Caixa</span>
          </span>
          <a-menu-item key="11">
            Receita
            <router-link to="/adm/cadReceita"></router-link>
          </a-menu-item>
          <a-menu-item key="12">
            Despesa
            <router-link to="/adm/cadDespesa"></router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="15">
          <a-icon type="bars"/>Relatório
          <router-link to="/adm/tabela"></router-link>
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

<template>
  <div>
    <navSimples></navSimples>
    <a-layout>
        <a-menu class="menu" v-model="current" mode="horizontal">
          <a-sub-menu key="sub0">
            <span slot="title"><a-icon type="ordered-list"/><span>Listagem</span></span>
            <router-link to="/adm/tabela"></router-link>
          </a-sub-menu>
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="bank"/><span>Cadastro de Caixa</span></span>
            <a-menu-item key="11">Receita
                <router-link to="/adm/cadReceita"></router-link>
              </a-menu-item>
              <a-menu-item key="12">Despesa
                <router-link to="/adm/cadDespesa"></router-link>
              </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
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
            <a-sub-menu key="sub3">
              <span slot="title"><a-icon type="form"/><span>Cadastro de Atividades</span></span>
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
              <a-menu-item key="13">Outros
                <router-link to="/adm/cadOutros"></router-link>
              </a-menu-item>
            </a-sub-menu>
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

.menu{
  text-align: center;
}

</style>

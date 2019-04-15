<template>
  <div>
    <navSimples></navSimples>
    <a-layout>
      <a-layout-sider  width="256px">
        <div class="menu">
          <a-menu :defaultSelectedKeys="['1']" mode="inline">
            <a-menu-item key="1">
              <router-link to="/adm/tabela">
                <a-icon type="table"/>
                <span>Eventos Disponíveis</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <router-link to="/adm"></router-link>
              <a-icon type="bank"/>
              <span>Controle de Caixa</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
              <span slot="title">
                <a-icon type="form"/>
                <span>Cadastro de Pessoas</span>
              </span>
              <a-menu-item key="3">Palestrante
                <router-link to="/adm/cadPalestrante"></router-link>
              </a-menu-item>
              <a-menu-item key="4">Ministrante</a-menu-item>
              <a-menu-item key="5">Convidado</a-menu-item>
              <a-menu-item key="6">Aluno</a-menu-item>
              <a-menu-item key="7">Administrador
                <router-link to="/adm/cadAdm"></router-link>
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title">
                <a-icon type="form"/>
                <span>Cadastro de Eventos</span>
              </span>
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
        </div>
      </a-layout-sider>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import navSimples from "./navSimples.vue";
export default {
  components: {
    navSimples
  }
};
</script>

<style scoped>

.menu {
  width: 256px;
  text-align: left;
}

.ant-layout-sider {
  background: transparent;
}
.ant-layout {
  background: transparent;
}

</style>
<template>
<div>
<navSimples></navSimples>
<a-layout id="components-layout-demo-trigger">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
  <div class="menu">
    <a-menu
      :defaultSelectedKeys="['1']"
      mode="inline"
      :inlineCollapsed="collapsed"
    >
      <a-menu-item key="1">
        <router-link to="/login"> 
        <a-icon type="table" />
        <span>Eventos Disponíveis</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="bank" />
        <span>Controle de Caixa</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="form" /><span>Cadastro de Pessoas</span></span>
        <a-menu-item key="5">Palestrante</a-menu-item>
        <a-menu-item key="6">Ministrante</a-menu-item>
        <a-menu-item key="6">Convidado</a-menu-item>
        <a-menu-item key="8">Aluno</a-menu-item>
        <a-menu-item key="8">Administrador</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="form" /><span>Cadastro de Eventos</span></span>
        <a-menu-item key="5">Evento</a-menu-item>
        <a-menu-item key="6">Minicurso</a-menu-item>
        <a-menu-item key="6">Palestra</a-menu-item>
        <a-menu-item key="8">Receita</a-menu-item>
        <a-menu-item key="8">Despesa</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</a-layout-sider>
        <a-layout>
            <a-layout-content>
                <router-view/>
            </a-layout-content>
        </a-layout>
    </a-layout>
</div>
</template>

<script>
export default {
  data() {
    return {
      collapsed:false
    };
  } ,
    methods: {
      logOut () {
            localStorage.clear();
            this.$router.push('/');
      }
  }
};
</script>

<style scoped>


.menu{
  width: 256px;
  text-align: left;
}



</style>
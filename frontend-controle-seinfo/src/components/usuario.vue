<template>
<div>
  <a-layout id="components-layout-demo-custom-trigger" style="height:100vh;">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="4">
          <a-icon type="home" />
          <span>Home</span>
        </a-menu-item>
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>Perfil</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="global" />
          <span>Eventos</span>
          <router-link to="/usuario/listEvent"></router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="logout" />
          <span>Sair</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</div>
</template>
<script>
export default {
  data(){
    return {
      collapsed: false,
    }
  },
}
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>

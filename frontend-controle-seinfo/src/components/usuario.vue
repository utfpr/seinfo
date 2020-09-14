<template>
  <AuthConsumer>
    <div slot-scope="{ signOut }">
      <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider style="height:100vh" :trigger="null" collapsible v-model="collapsed">
          <div class="logo" />
          <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['/']">
            <a-menu-item key="1">
              <a-icon type="home" />
              <span>Home</span>
              <router-link to="/usuario/homeUsu"></router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="user" />
              <span>Perfil</span>
              <router-link to="/usuario/perfilUsu"></router-link>
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="profile" />
              <span>Minhas inscrições</span>
              <router-link to="/usuario/listInsc"></router-link>
            </a-menu-item>
            <a-menu-item key="4" @click="logOut(signOut)">
              <a-icon type="logout" />
              <span>Sair</span>
              <router-link to="/"></router-link>
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
          <a-layout-content
            :style="{  margin: '24px 16px', padding: '20px', background: '#fff', height: '100%' }"
          >
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </div>
  </AuthConsumer>
</template>
<script>
import AuthConsumer from '../contexts/authConsumer';
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  components: {
    AuthConsumer
  },
  methods: {
    logOut(signOut){
      signOut();
      window.location.replace('http://localhost:8080/');
    }
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>

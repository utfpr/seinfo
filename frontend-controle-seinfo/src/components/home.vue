<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
       <div class="logo"><a href="http://localhost:8080/"><h5>SEINFO</h5></a></div>
      <a-menu class="menu" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">LOGIN
          <router-link to="/login"></router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <workspace></workspace>
    </a-layout-content>
  </a-layout>
</template>

<script>
import workspace from "./workspace.vue";
export default {
  components: {
    workspace
  }
};
</script>

<style>

.menu{
  text-align: end;
}

h5{
  color: white;
  margin: 0;
}

#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  margin: 20px 24px 10px;
  float: left;
}

</style>


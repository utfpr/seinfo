<template>
  <div id="app">
    <router-view/><a-layout id="components-layout-demo-top" class="layout">
      <div>
    <app-footer></app-footer>
  </div>
  </a-layout>
  </div>
</template>

<script>
import Home from "./components/home.vue";
import Footer from "./components/footer.vue";

export default {
  name: 'App',
  components:{
    Home,
     'app-footer' : Footer
  }
}
</script>

<style>
#app {
  height: 100%;
}

 html, body {
  width: 100%;
  height: 100%;
}

body{
  background-color: rgb(255, 255, 255);
}

</style>



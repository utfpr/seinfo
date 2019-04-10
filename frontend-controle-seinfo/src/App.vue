<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from "./components/home.vue";

export default {
  name: 'App',
  component:{
    Home
  }
}
</script>

<style>
#app {
  height: 100%;
}

body{
  margin: 0;
  padding: 0;
  background-color: rgb(255, 255, 255);
  height: 100vh;
}

</style>

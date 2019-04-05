<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Dashboard from "./components/dashboard.vue";

export default {
  name: 'App',
  component:{
    Dashboard
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

body{
  margin: 0;
  padding: 0;
  background-color: rgb(255, 255, 255);
  height: 100vh;
}

</style>

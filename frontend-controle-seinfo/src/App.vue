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

 html, body {
  width: 100%;
  height: 100%;
}

body{
  background-color: rgb(255, 255, 255);
}

</style>

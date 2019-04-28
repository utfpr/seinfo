<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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

.row{
  margin-right: 0;
  margin-left: 0;
}

</style>



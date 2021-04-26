<template>
  <div id="app">
    <AuthProvider>
      <router-view/>
    </AuthProvider>
  </div>
</template>

<script>
import AuthProvider from './contexts/authProvider';
export default {
  name: 'App',
  components: {
    AuthProvider,
  },
}
</script>

<style>
#app {
  height: 100%;
}

html, body, #page, header {
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



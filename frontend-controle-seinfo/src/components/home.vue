<template>
  <a-layout id="components-layout-demo-top" class="layout">
      <div>
    <nav class="navbar navbar-expand-sm navi">
        <div class="navbar-collapse justify-content-end">
            <a class="nav-link" href="http://localhost:8080/login"><b>LOGIN</b></a>
        </div>
    </nav>
  </div>
    <a-layout-content>
      <carousel></carousel>
      <workspace></workspace>
    </a-layout-content>
  </a-layout>
</template>

<script>
import workspace from "./workspace.vue";
import carousel from "./carousel.vue";
export default {
  components: {
    workspace,
    carousel
  }
};
</script>

<style>

.nav-link{
  color: rgb(0, 0, 0);
}

.navi{
  background-color: rgb(255, 255, 255);
  box-shadow: 6px 3px 10px rgb(202, 202, 202);
  
}

</style>


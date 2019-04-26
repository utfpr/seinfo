<template>
  <a-layout id="components-layout-demo-top" class="layout">
      <div>
    <navHome></navHome>
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
import navHome from "./navHome.vue";
export default {
  components: {
    workspace,
    carousel,
    navHome
  }
};
</script>

<style>

</style>


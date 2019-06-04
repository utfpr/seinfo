<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <div>
      <navHome></navHome>
    </div>
    <a-layout-content>
      <evento_component></evento_component>
      <ft></ft>
    </a-layout-content>
  </a-layout>
</template>

<script>
import evento_component from "./evento_component.vue";
import navHome from "./navHome.vue";
import ft from "./footer.vue";
export default {
  components: {
    evento_component,
    navHome,
    ft
  }
};
</script>

<style>
#layout {
  height: 100%;
}
</style>
<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <div>
      <navHome></navHome>
    </div>
    <a-layout-content>
      <evento></evento>
      <ft></ft>
    </a-layout-content>
  </a-layout>
</template>

<script>
import navHome from "./navHome.vue";
import evento from "./evento_component.vue";
import ft from "./footer.vue"; 
export default {
  components: {
    navHome,
    evento,
    ft
  }
};
</script>

<style >
#layout {
  height: 100%;
}
</style>
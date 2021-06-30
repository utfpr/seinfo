<template>
  <a-layout
    id="components-layout-demo-top"
    class="layout"
  >
    <navHome />
    <a-layout-content>
      <carousel />
      <box />
      <ft />
    </a-layout-content>
  </a-layout>
</template>

<script>
import navHome from './navHome.vue';
import carousel from './carousel.vue';
import box from './box_evt.vue';
import ft from './footer.vue';

export default {
  components: {
    navHome,
    carousel,
    box,
    ft,
  },
};
</script>

<style>
</style>

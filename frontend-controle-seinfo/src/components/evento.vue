<template>
<div>
  <navSimples></navSimples>
  <a-carousel>
    <div><img src="../assets/banner.png"></div>
  </a-carousel>
</div>
</template>
<script>
import navSimples from "./navSimples.vue";
export default {
  data() {
    return {
      collapsed: false
    };
  },
  components: {
    navSimples
  }
};
</script>
<style>

.ant-carousel >>> .slick-slide {
  text-align: center;
  min-height: 500px;
  max-height: 500px;
  line-height: 160px;
  background: #000000;
  overflow: hidden;
}

img{
  max-width: 50%;
  min-width: 50%;
  max-height:250px;
  min-height: 250px;
  border: 1px solid black;
  border-top: transparent;
}
</style>

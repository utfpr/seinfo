<template>
<div>
  <a-carousel effect="fade" autoplay >
    <div><img src="../assets/banner.png"></div>
    <div><img src="../assets/banner.png"></div>
    <div><img src="../assets/banner.png"></div>
    <div><img src="../assets/banner.png"></div>
  </a-carousel>
</div>
</template>
<script>
export default {
}
</script>
<style scoped>

.ant-carousel{
  margin-top: 60px;
  border: 1px solid rgba(12, 12, 12, 0.863);
}

.ant-carousel >>> .slick-slide {
  text-align: center;
  min-height: 500px;
  max-height: 500px;
  line-height: 160px;
  background: #000000;
  overflow: hidden;
}

img{
  max-width: 100%;
  min-width: 100%;
  max-height:500px;
  min-height: 500px;
  border-top: transparent;
}

</style>

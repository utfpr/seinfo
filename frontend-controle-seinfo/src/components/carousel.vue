<template>
  <a-carousel autoplay>
    <div><h3><img src="../assets/banner.png"  style="max-height:500px;"></h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
</template>
<script>
export default {
}
</script>
<style scoped>

.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 500px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.ant-carousel .slick-dots li button {
  
}

</style>

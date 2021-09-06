<template>
<div>
  <a-carousel effect="fade" autoplay arrows  >
    <div
      slot="prevArrow"
      class="custom-slick-arrow"
      style="left: 10px;zIndex: 1"
    >
      <a-icon type="left"/>
    </div>
    <div
      slot="nextArrow" 
      class="custom-slick-arrow"
      style="right: 10px"
    >
      <a-icon type="right" />
    </div>

    <div v-if="imagens">
        <img src="../assets/banner.png">
    </div>
    <div v-else>
      <div :v-for="img in imagens" :key="img.idImagem">
        <img :src="img.Imagem.url">
      </div>
    </div>
  
  </a-carousel>
</div>
</template>



<script>
import axios from '../config/axiosConfig';
export default {
  data() {
    return {
      imagens: [],
    }
  },
  mounted() {
    this.getAllImages();
  },
  methods: {
    async getAllImages(){
      try {
        const {data} = await axios.get('/public/getAllCarrosselAvailables');
        this.imagens = data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31,45,61,.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel{
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
  object-fit: cover;
  max-width: 100%;
  min-width: 100%;
  max-height:500px;
  min-height: 500px;
  border-top: transparent;
}

</style>

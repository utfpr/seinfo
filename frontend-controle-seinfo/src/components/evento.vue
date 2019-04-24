<template>
<div class="">
  <div>
      <div class="title">Seinfo</div>
      <div class="desc"><h6>A Semana de Informática da UTFPR-CM, atualmente em sua sexta edição, é um evento voltado aos estudantes e profissionais na área de Informática da cidade de Campo Mourão e região, direcionado, principalmente, aos acadêmicos dos cursos de Tecnologia em Sistemas para Internet e Ciência da Computação da UTFPR-CM. O evento propicia aos participantes uma visão do mercado de trabalho, por meio do contato com palestrantes de outros estados e grandes empresas do país, além da troca de experiências com professores e egressos dos cursos de Informática da UTFPR-CM. Além disso, os participantes também conseguem adquirir uma visão da área acadêmica, graças à participação em seminários, palestras e minicursos.</h6></div>
  </div>
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

.title{
  text-align: center;
  opacity: 0.60;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
}

.desc{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
}


.ant-carousel >>> .slick-slide {
  text-align: center;
  min-height: 500px;
  max-height: 500px;
  line-height: 160px;
  background: #000000;
}

img{
  max-width: 100%;
  min-width: 100%;
  max-height:500px;
  min-height: 500px;
  border-top: transparent;
}
</style>

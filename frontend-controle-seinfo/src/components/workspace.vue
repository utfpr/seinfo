<template>
<div id="app" class="row justify-content-center body"  style="
	height:100%;
	font-family: 'Open Sans', sans-serif;
	background: #092756;
	background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );">
  <div >
<a-card
  hoverable
  class="box-1"
>
  <img
    class="box-2"
    alt="example"
    src="../assets/banner.png"
    slot="cover"
  />
  <template class="ant-card-actions" slot="actions">
    <a-button class="bt" href="http://localhost:8080/evento">INFORMAÇÕES</a-button>
  </template>
  <a-card-meta
    title="SEINFO 2019"
    description="A Semana de Informática da UTFPR-CM, atualmente em sua sexta edição, é um evento voltado aos estudantes e profissionais na área de Informática da cidade de Campo Mourão e região, direcionado, principalmente, aos acadêmicos dos cursos de Tecnologia em Sistemas para Internet e Ciência da Computação da UTFPR-CM. O evento propicia aos participantes uma visão do mercado de trabalho, por meio do contato com palestrantes de outros estados e grandes empresas do país, além da troca de experiências com professores e egressos dos cursos de Informática da UTFPR-CM. Além disso, os participantes também conseguem adquirir uma visão da área acadêmica, graças à participação em seminários, palestras e minicursos.">
  </a-card-meta>
</a-card>
</div>
<div>
<a-card
  hoverable
  class="box-1"
>
  <img
    class="box-2"
    src="../assets/banner.png"
    slot="cover"
    
  />
  <template class="ant-card-actions" slot="actions">
    <a-button class="bt" href="http://localhost:8080/evento">INFORMAÇÕES</a-button>
  </template>
  <a-card-meta
    title="SEINFO 2019"
    description="A Semana de Informática da UTFPR-CM, atualmente em sua sexta edição, é um evento voltado aos estudantes e profissionais na área de Informática da cidade de Campo Mourão e região, direcionado, principalmente, aos acadêmicos dos cursos de Tecnologia em Sistemas para Internet e Ciência da Computação da UTFPR-CM. O evento propicia aos participantes uma visão do mercado de trabalho, por meio do contato com palestrantes de outros estados e grandes empresas do país, além da troca de experiências com professores e egressos dos cursos de Informática da UTFPR-CM. Além disso, os participantes também conseguem adquirir uma visão da área acadêmica, graças à participação em seminários, palestras e minicursos.">
  </a-card-meta>
</a-card>
</div>
</div>
</template>

<script>
export default {
};
</script>

<style scoped>

.texto{
  text-align: center;
}

.box-1{
  height: 450px;
  width: 450px;
  padding: 5px;
  margin: 50px;
  margin-top: 30px;
  background: transparent;
  border: transparent;
}

.ant-card-actions > li > span a{
  line-height:28px;
}

.ant-card-meta-title {
  text-align: center;
}

.bt{
  border-color:blue;
  color: blue;
}

.box-2{
  min-height: 260px;
  max-height: 260px;
  min-width: 440px;
  max-width: 440px;
}

</style>

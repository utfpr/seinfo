<template>
<div class="row justify-content-center">
  <div >
<a-card
  hoverable
  class="box-1"
>
  <img
    class="box-2"
    alt="example"
    src="../assets/se.jpeg"
    slot="cover"
  />
  <template class="ant-card-actions" slot="actions">
    <a-button class="bt">INFORMAÇÕES</a-button>
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
    alt="example"
    src="../assets/se.jpeg"
    slot="cover"
  />
  <template class="ant-card-actions" slot="actions">
    <a-button class="bt">INFORMAÇÕES</a-button>
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

<template>
  <div style="margin-top: 60px">
    <div id="work">
      <a-layout-content>
        <div class="grid-container">
          <div class="parent" style="max-width: 700px;">
            <img class="child" src="../assets/banner.png">
          </div>
          <div style="min-width: 600px">
            <a-card title="Nome">
              <p>Placeholder</p>
            </a-card>
            <a-card title="Data">
              <p>Placeholder</p>
            </a-card>
            <a-card title="Preço">
              <p>Placeholder</p>
            </a-card>
            <a-card title="Lotes">
              <p>Placeholder</p>
            </a-card>
          </div>
        </div>
      </a-layout-content>
      <br>
      <a-card title="Descrição">
        <p>A Semana de Informática da UTFPR-CM, atualmente em sua sexta edição, é um evento voltado aos estudantes e profissionais na área de Informática da cidade de Campo Mourão e região, direcionado, principalmente, aos acadêmicos dos cursos de Tecnologia em Sistemas para Internet e Ciência da Computação da UTFPR-CM. O evento propicia aos participantes uma visão do mercado de trabalho, por meio do contato com palestrantes de outros estados e grandes empresas do país, além da troca de experiências com professores e egressos dos cursos de Informática da UTFPR-CM. Além disso, os participantes também conseguem adquirir uma visão da área acadêmica, graças à participação em seminários, palestras e minicursos.</p>
      </a-card>
      <br>
      <div>
        <a-card title="Minicursos">
          <p>Minicurso 1</p>
          <p>Minicurso 2</p>
          <p>Minicurso 3</p>
        </a-card>
      </div>
      <br>
      <div>
        <a-card title="Palestras">
          <p>Palesta 1</p>
          <p>Palesta 2</p>
          <p>Palesta 3</p>
        </a-card>
      </div>
      <br>
    </div>
    <a-calendar @panelChange="onPanelChange" @select="onSelect">
      <!--
        setar validRange para a range do evento
        disabledDate também
      -->
      <template slot="dateCellRender"></template>
      <template slot="monthCellRender"></template>
    </a-calendar>
  </div>
</template>

<script>
import moment from "moment";
import "moment/locale/pt-br";
moment.locale("pt-br");
export default {};
</script>

<style scoped>
#work {
  background: #092756;
  background: -moz-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -moz-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
            42,
            60,
            87,
            0.4
          )
          100%),
    -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -o-radial-gradient(
      0% 100%,
      ellipse cover,
      rgb(9, 21, 26) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -o-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -ms-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(6, 26, 34, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -ms-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(11, 28, 36, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    linear-gradient(
      to bottom,
      rgba(57, 173, 219, 0.25) 0%,
      rgba(42, 60, 87, 0.4) 100%
    ),
    linear-gradient(135deg, #670d10 0%, #092756 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
  height: 100%;
  width: 100%;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 8px;
  padding: 8px;
}

.grid-container > div {
  text-align: center;
}

.parent {
  margin: auto;
  display: flex;
  height: 100%;
  width: 100%;
}
.child {
  width: 100%;
  margin: auto;
}
</style>

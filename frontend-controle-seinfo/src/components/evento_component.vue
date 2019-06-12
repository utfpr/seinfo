<template>
  <div style="margin-top: 60px">
    <div id="work">
      <a-layout-content>
        <div>
          <div>
            <br><br>
            <img class="child" src="../assets/banner.png">
          </div>
          <div class="box">
          <a-row :gutter="16">
            <a-col :span="6">
              <a-card class="title" title="Data de Inicio" :bordered=false>
                <p>15/05/2019</p>
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card class="title" title="Data de Fim" :bordered=false>
                <p>15/06/2019</p>
              </a-card> 
            </a-col>
            <a-col :span="6">
              <a-card class="title" title="Valor do Evento" :bordered=false>
                <p>800$</p>
              </a-card>   
            </a-col>
            <a-col :span="6">
              <a-card class="title" title="Local" :bordered=false>
                <p>Casa das Primas</p>
              </a-card>   
            </a-col>
          </a-row>
        </div>

        <a-card class="layer" title="Descrição do evento">
          <p class="para">A Semana de Informática da UTFPR-CM, atualmente em sua sexta edição, é um evento voltado aos estudantes e profissionais na área de Informática da cidade de Campo Mourão e região, direcionado, principalmente, aos acadêmicos dos cursos de Tecnologia em Sistemas para Internet e Ciência da Computação da UTFPR-CM. O evento propicia aos participantes uma visão do mercado de trabalho, por meio do contato com palestrantes de outros estados e grandes empresas do país, além da troca de experiências com professores e egressos dos cursos de Informática da UTFPR-CM. Além disso, os participantes também conseguem adquirir uma visão da área acadêmica, graças à participação em seminários, palestras e minicursos .</p>
        </a-card>

        <a-card class="layer" title="Palestras">
          <p class="para">A Semana de Informática da UTFPR-CM, atualmente em sua sexta edição, é um evento voltado aos estudantes e profissionais na área de Informática da cidade de Campo Mourão e região, direcionado, principalmente, aos acadêmicos dos cursos de Tecnologia em Sistemas para Internet e Ciência da Computação da UTFPR-CM. O evento propicia aos participantes uma visão do mercado de trabalho, por meio do contato com palestrantes de outros estados e grandes empresas do país, além da troca de experiências com professores e egressos dos cursos de Informática da UTFPR-CM. Além disso, os participantes também conseguem adquirir uma visão da área acadêmica, graças à participação em seminários, palestras e minicursos .</p>
        </a-card>

        <a-card class="layer" title="Atividades">
          <p class="para">A Semana de Informática da UTFPR-CM, atualmente em sua sexta edição, é um evento voltado aos estudantes e profissionais na área de Informática da cidade de Campo Mourão e região, direcionado, principalmente, aos acadêmicos dos cursos de Tecnologia em Sistemas para Internet e Ciência da Computação da UTFPR-CM. O evento propicia aos participantes uma visão do mercado de trabalho, por meio do contato com palestrantes de outros estados e grandes empresas do país, além da troca de experiências com professores e egressos dos cursos de Informática da UTFPR-CM. Além disso, os participantes também conseguem adquirir uma visão da área acadêmica, graças à participação em seminários, palestras e minicursos .</p>
        </a-card>

        <a-card class="layer" title="Cronograma">
          <p> <a-calendar/></p>
        </a-card>

        <br><br>
    </div>
      </a-layout-content>
  </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
#work {
  background: #092756;
	background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -o-radial-gradient(0% 100%, ellipse cover, rgb(9, 21, 26) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(6, 26, 34, 0.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(11, 28, 36, 0.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
}

.para{
  text-align: left;
}

.layer{
  margin-top: 3%;
  width: 90%;
  margin-left: 5%;
  text-align: center;
}

.child {
  max-width: 70%;
  min-width: 70%;
  max-height: 70%;
  min-height: 70%;
  margin-left: 15%;
}

.paraCale{
  max-height: 200px;
}

.title{
  text-align: center;
  border: 0.1px solid black;
  cursor: pointer;
  position: relative;
}

.box{
  margin-top: 3%;
  width: 90%;
  margin-left: 5%;
}

</style>

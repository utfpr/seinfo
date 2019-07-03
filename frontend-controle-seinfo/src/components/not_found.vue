<template>
  <div id="work" class="row justify-content-center layout">
    <div class="error" id="error">
      <h1>404</h1>
      <h2 style="text-align: center">Página não encontrada!</h2>
      <p>A página que você tentou acessar encontra-se atualmente indisponível, removida ou temporariamente desabilitada.</p>
      <p>Aperte no botão abaixo para voltar ao início</p>
      <a-button href="/" type="primary">Voltar para o início</a-button>
    </div>
  </div>
</template>

<script>
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
}

h1 {
  font-size: 16em;
  margin: 0.2em 0.5em;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0px;
}

h2 {
  font-size: 1.7em;
  margin: 0.2em 0.5em;
  color: rgba(255, 255, 255, 0.6);
}

p {
  font-size: 1.7em;
  margin: 0.2em 0.5em;
  color: rgba(255, 255, 255, 0.6);
}

div.error {
  position: absolute;
  top: 20%;
  margin-top: -8em;
  width: 100%;
  text-align: center;
}
</style>
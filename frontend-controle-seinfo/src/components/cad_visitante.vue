<template>
  <a-layout id="login" class="layout">
    <navHome></navHome>
    <a-layout-content>
    <div class="login">
      <h1>Visitante</h1>
      <a-form  class="form" action="http://localhost:3000/api/convidado" method="post">
        <label class="ant-form-item-required" style="color:white;">Nome Completo:</label>
        <input  type="text" name="nome_visi" placeholder="Nome" required="required">
        <label class="ant-form-item-required" style="color:white;">Email:</label>
        <input type="text" name="email_visi" placeholder="Email" required="required">
        <label class="ant-form-item-required" style="color:white;">Senha:</label>
        <input  type="text" name="senha_visi" placeholder="Senha" required="required">
        <label class="ant-form-item-required" style="color:white;">CPF:</label>
        <input type="password" name="cpf_visi" placeholder="CPF" required="required">
        <button type="submit" class="btn-large">Entrar</button>
      </a-form>
    </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import navHome from "./navHome.vue";
export default {
  components: {
    navHome
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

#login{
  width: 100%;
	height:100%;
	font-family: 'Open Sans', sans-serif;
	background: #092756;
	background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
}

.btn-large {
  padding: 9px 14px;
  font-size: 15px;
  line-height: normal;
  background: transparent;
  color: white;
  border-color: white;
  margin-left: 42%;
  border: 1px solid white;
}

.btn-large:hover{
  background-color: transparent;
  border-color: aqua;
}

.login {
  position: absolute;
  top: 35%;
  left: 38%;
  margin: -150px 0 0 -150px;
  width: 600px;
  height: 300px;
}
.login h1 {
  color: rgb(255, 255, 255);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
  text-align: center;
}

input {
  width: 100%;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  padding: 10px;
  font-size: 13px;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
    0 1px 1px rgba(255, 255, 255, 0.2);
  -webkit-transition: box-shadow 0.5s ease;
  -moz-transition: box-shadow 0.5s ease;
  -o-transition: box-shadow 0.5s ease;
  -ms-transition: box-shadow 0.5s ease;
  transition: box-shadow 0.5s ease;
}
input:focus {
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4),
    0 1px 1px rgba(255, 255, 255, 0.2);
}

</style>

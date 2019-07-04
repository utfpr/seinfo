<template>
<div>
  <nav class="navbar navbar-light justify-content-between" >
  <a :href="'/'" class="navbar-brand"><img src="../assets/logo_com_nome.jpg" style="height:50px;"></a>
  <a-form class="form" layout="inline"  method="post" @submit.prevent="realizar_login" encType="multipart/form-data">
    <a-form-item>
    <input v-model="obj_login.username" type="text" placeholder="Número do Ra" class="lg" required="required"/>
    </a-form-item>
    <a-form-item>
      <input v-model="obj_login.password" type="password" placeholder="Senha" class="lg" required="required"/>
    </a-form-item>
    <a-form-item>
      <a-button class="bt" html-type="submit" >Entrar</a-button>
    </a-form-item>
  </a-form>
</nav>
</div>
</template>

<script>
const axios = require("axios");
export default {
  mounted() {
    this.pegar_tabela("pessoas");
  },
  methods: {
    realizar_login() {
      console.log("LOGIN - OK")
      console.log(this.obj_login)

      axios.post('http://localhost:3000/api/login', this.obj_login).then(response => {gravar_cookie(response.data())}).catch(error => {console.log(error.response)});
      console.log("FEZ O LOGIN")
      console.log(this.obj_usuario_logado)
    },
    gravar_cookie(data) {
      localStorage = data
    }
  },
  data() {
    return {
      obj_usuario_logado: {},
      obj_login: {
        username : '',
        password: ''
      }
    };
  }
};
</script>

<style scoped>
.bt {
  background: transparent;
  height: 30px;
  color:white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.navbar{
  width: 100%;
  position: fixed;
  z-index: 1050;
  padding: 0;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Open Sans', sans-serif;
	background: #092756;
	background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -o-radial-gradient(0% 100%, ellipse cover, rgb(9, 21, 26) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(6, 26, 34, 0.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(11, 28, 36, 0.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
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

.navi {
  background-color: rgb(34, 34, 34);
  box-shadow: 6px 3px 10px rgb(202, 202, 202);
}

.lg{
  width: 160px;
  height: 30px;
  margin-top: 5px;
}

</style>

<template>
<div class="title">
  <h5 style="text-align:center">Cadastro de Aluno</h5>
  <div class="box">
    <form class="form">
      <div class="row justify-content-center">
        <a-form-item class="space_2">
          <label class="ant-form-item-required">Nome do Aluno:</label>
          <a-input maxlength="255" placeholder="Nome"  v-model="obj_cadastroInterno.nome" type="text" id="disabledInput" disabled="">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
      <a-form-item class="space_2">
          <label class="ant-form-item-required">RA do Aluno:</label>
          <a-input placeholder="RA" v-model="obj_cadastroInterno.RA" type="text" id="disabledInput" disabled="">
            <a-icon slot="prefix" type="tag" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
      <a-form-item class="space_2">
          <label class="ant-form-item-required">Email do Aluno:</label>
          <a-input maxlength="255" placeholder="Email" v-model="obj_cadastroInterno.email" type="text">
            <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
          <a-form-item class="space_2">
            <label class="ant-form-item-required">CPF do Aluno:</label>
            <the-mask v-model="obj_cadastroInterno.cpf" placeholder="000.000.000-00" class="ant-input" :mask="['###.###.###-##']" />
          </a-form-item>
        </div>
      <div class="row justify-content-center">
      <button type="submit"  @click="Btn_Cadastrar" class="btn btn-outline-primary btn-sm">Cadastrar</button>
      </div>
    </form>
  </div>
</div>
</template>


<script>
import axios from 'axios';
import {TheMask} from 'vue-the-mask';
export default 
{
  mounted(){
    this.obj_cadastroInterno.RA = this.$route.query.ra;
    this.obj_cadastroInterno.nome = this.$route.query.nome;
    this.obj_cadastroInterno.email = this.$route.query.email;
    console.log(this.obj_cadastroInterno.RA);
  },
   data() {
    return {
      obj_cadastroInterno : 
      {
        nome: '',
        RA: '',
        cpf: '',
        email: '',
      },
      
    }
  },
  components: {
    TheMask
  },
  methods:
  {
    Btn_Cadastrar() 
    {
      console.log(this.obj_cadastroInterno)

      axios
        .post('http://localhost:3000/api/pessoa', this.obj_cadastroInterno)
        .then(response => {
          console.log(response)
          alert(response.data);
          window.location = "http://localhost:8080/";  
           }).catch(error => {
            alert(error);
          });
      console.log("FEZ O LOGIN INTERNO")
    }
  }



};

</script>
<style scoped>

.box {
  border: solid 1px rgba(161, 161, 161, 0.233); 
  margin-left: 25%;
  margin-top: 10px;
  margin-right: 25%;
  padding: 20px;
}

.title{
  margin-top: 30px;
}

.space {
  padding: 2px;
  width: 221px;
}

label {
  margin-bottom: 0;
}

.ant-form-item {
  margin-bottom: 0;
}

.space_2 {
  padding: 2px;
  width: 444px;
}

</style>
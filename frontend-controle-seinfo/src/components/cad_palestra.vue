<template>
<div class="title">
  <h5 style="text-align:center">Cadastro de Palestra</h5>
  <div class="box">
    <form class="form" action="http://localhost:3000/api/palestra" method="post">
      <div class="row justify-content-center">
        <a-form-item class="space">
          <label class="ant-form-item-required">Nome da Palestra:</label>
          <a-input placeholder="Nome" name="nome_pale" type="text">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item class="space">
          <label class="ant-form-item-required">Data de Inicio:</label>
          <a-input name="data_ini_pale" type="date">
            <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
        <a-form-item class="space">
          <label class="ant-form-item-required">Hora de Inicio:</label>
          <a-input  name="hora_ini_pale" type="time">
            <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item class="space">
          <label class="ant-form-item-required">Hora de Fim:</label>
          <a-input  name="hora_fim_pale" type="time">
            <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
      <a-form-item class="space">
          <label class="ant-form-item-required">Local da Palestra:</label>
          <a-input placeholder="Local" name="local_pale" type="text">
            <a-icon slot="prefix" type="home" style="color:rgba(0,0,0,.25)"/>
          </a-input>
      </a-form-item>
      <a-form-item class="space">
          <label class="ant-form-item-required">Selecione o Evento:</label>
        <a-select defaultValue="...">
      <a-select-option v-for="tabela in tabelas" :key="tabela.idEvento" :value="tabela.idEvento" >{{tabela.nome}}</a-select-option>
    </a-select>
      </a-form-item>
      </div>
      <div class="row justify-content-center">
        <a-form-item class="space_2">
          <label class="ant-form-item-required">Descrição:</label>
          <a-textarea type="text" name="descricao_pale" placeholder="Descrição" :rows="4"/>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
      <button type="submit" class="btn btn-outline-primary btn-sm">Cadastrar</button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
export default {
data () {
     return {
       tabelas: {}
     }
   },
   created(){
     console.log("Entrou para Listar");
   axios.get('http://localhost:3000/api/eventos')
     .then( (response) => {
       console.log("Listou Eventos!");
       this.tabelas = response.data;
       //console.log(this.tabelas);
     })
     .catch(function (error) {
       console.log(error);
     });


   },
};

const axios = require('axios');
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
<template>
<div class="title">
  <h5 style="text-align:center">Cadastro de Minicurso</h5>
  <div class="box">
    <form class="form" action="http://localhost:3000/minicurso" method="post">
      <div class="row justify-content-center">
        <a-form-item class="space">
          <label class="ant-form-item-required">Nome do Minicurso:</label>
          <a-input maxlength="255" placeholder="Nome" name="nome_min" type="text">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item class="space">
          <label class="ant-form-item-required">Valor do Minicurso:</label>
          <a-input placeholder="Valor" name="valor_min" type="number">
            <a-icon slot="prefix" type="dollar" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
        <a-form-item class="space">
          <label class="ant-form-item-required">Data de Inicio:</label>
          <a-input name="data_ini_min" type="date">
            <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item class="space">
          <label class="ant-form-item-required">Hora de Inicio:</label>
          <a-input  name="hora_ini_min" type="time">
            <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
        <a-form-item class="space">
          <label class="ant-form-item-required">Data de Fim:</label>
          <a-input  name="data_fim_min" type="date">
            <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item class="space">
          <label class="ant-form-item-required">Hora de Fim:</label>
          <a-input  name="hora_fim" type="time">
            <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
      <a-form-item class="space_2">
          <label class="ant-form-item-required">Local do Minicurso:</label>
          <a-input maxlength="255" placeholder="Local" name="local_min" type="text">
            <a-icon slot="prefix" type="home" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
        <a-form-item class="space_2">
          <label class="ant-form-item-required">Descrição:</label>
          <a-textarea maxlength="5000" type="text" name="descricao_min" placeholder="Descrição" :rows="4"/>
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
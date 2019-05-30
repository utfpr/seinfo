<template>
<div class="title">
  <h5 style="text-align:center">Cadastro de Pessoa</h5>
  <div class="box">
    <form class="form" action="http://localhost:3000/api/pessoa" method="post">
      <div class="row justify-content-center">
        <a-form-item class="space">
          <label class="ant-form-item-required">Nome da Pessoa:</label>
          <a-input maxlength="255" placeholder="Nome" name="nome_pe" type="text">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item class="space">
          <label class="ant-form-item-required">Senha da Pessoa:</label>
          <a-input placeholder="Senha" name="senha_pe" type="password">
            <a-icon slot="prefix" type="key" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
      <a-form-item class="space_2">
          <label class="ant-form-item-required">Email da Pessoa:</label>
          <a-input maxlength="255" placeholder="Email" name="email_pe" type="text">
            <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
        <a-form-item class="space">
          <label class="ant-form-item-required">CPF da Pessoa:</label>
          <a-input type="text" name="cpf_pe" class="ls-mask-cpf" placeholder="000.000.000-00" />
        </a-form-item>
        <a-form-item class="space">
            <label class="ant-form-item-required">Nivel da Pessoa:</label>
            <a-select name="nivel_pe" defaultValue="0">
              <a-select-option value="0">Usuário</a-select-option>
              <a-select-option value="1">Adm Basico</a-select-option>
              <a-select-option value="2">Super Adm</a-select-option>
            </a-select>
          </a-form-item>
      </div>
      <div class="row justify-content-center">
        <a-form-item class="space">
            <label class="ant-form-item-required">Classificação da Pessoa:</label>
            <a-select name="class_pe" defaultValue="0">
              <a-select-option value="0">Aluno</a-select-option>
              <a-select-option value="1">Professor</a-select-option>
              <a-select-option value="2">Visitante</a-select-option>
            </a-select>
          </a-form-item>
        <a-form-item class="space">
            <label class="ant-form-item-required">Atuação da Pessoa:</label>
            <a-select name="atu_pe" defaultValue="0">
              <a-select-option value="0">Participante</a-select-option>
              <a-select-option value="1">Palestrante</a-select-option>
              <a-select-option value="2">Ministrante</a-select-option>
            </a-select>
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
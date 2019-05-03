<template>
<div class="title">
  <h5 style="text-align:center">Cadastro de Administrador</h5>
  <div class="box">
    <form class="form" action="http://localhost:3000/adm" method="post">
      <div class="row justify-content-center">
        <a-form-item class="space_2">
          <label maxlength="255" class="ant-form-item-required">Nome do Administrador:</label>
          <a-input placeholder="Nome" name="nome_adm" type="text">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
        <a-form-item class="space_2">
          <label class="ant-form-item-required">Senha do Administrador:</label>
          <a-input type="password" name="senha_adm" placeholder="Senha">
          <a-icon slot="prefix" type="key" style="color:rgba(0,0,0,.25)"/>
          </a-input>
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
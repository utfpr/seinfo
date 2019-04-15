<template>
<div class="title">
  <h5 style="text-align:center">Cadastro de Aluno</h5>
  <div class="box">
    <form class="form" action="http://localhost:3000/aluno" method="post">
      <div class="row justify-content-center">
        <a-form-item class="space">
          <label class="ant-form-item-required">Nome do Aluno:</label>
          <a-input placeholder="Nome" name="nome_aluno" type="text">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item class="space">
          <label class="ant-form-item-required">Senha do Aluno:</label>
          <a-input placeholder="Senha" name="nome_aluno" type="password">
            <a-icon slot="prefix" type="key" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
      <a-form-item class="space_2">
          <label class="ant-form-item-required">RA do Aluno:</label>
          <a-input placeholder="RA" name="email_aluno" type="text">
            <a-icon slot="prefix" type="tag" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
      <a-form-item class="space_2">
          <label class="ant-form-item-required">Email do Aluno:</label>
          <a-input placeholder="Email" name="email_aluno" type="text">
            <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
        <a-form-item class="space_2">
          <label class="ant-form-item-required">CPF do Aluno:</label>
          <a-input type="number" name="cpf_aluno" placeholder="CPF"/>
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
  margin-top: 10px;
  border-left: solid 1px rgba(161, 161, 161, 0.233);
  border-right: solid 1px rgba(161, 161, 161, 0.233);
  margin-left: 25%;
  margin-right: 25%;
  padding: 20px;
}

.title{
  margin-top: 10px;
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
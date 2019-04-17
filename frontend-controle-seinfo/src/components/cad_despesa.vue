<template>
<div class="title">
  <h5 style="text-align:center">Cadastro de Despesa</h5>
  <div class="box">
    <form class="form" action="http://localhost:3000/despesa" method="post">
      <div class="row justify-content-center">
        <a-form-item class="space_2">
          <label class="ant-form-item-required">Nome da Despesa:</label>
          <a-input placeholder="Nome" name="nome_desp" type="text">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
       <a-form-item class="space">
          <label class="ant-form-item-required">Quantidade:</label>
          <a-input placeholder="Quantidade" name="quantidade_desp" type="number">
            <a-icon slot="prefix" type="shopping" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item class="space">
          <label class="ant-form-item-required">Valor da Despesa:</label>
          <a-input placeholder="Valor" name="valor_desp" type="number">
            <a-icon slot="prefix" type="dollar" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
        <a-form-item class="space_2">
          <label class="ant-form-item-required">Descrição:</label>
          <a-textarea type="text" name="descricao_desp" placeholder="Descrição" :rows="4"/>
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
  data() {
    return {};
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
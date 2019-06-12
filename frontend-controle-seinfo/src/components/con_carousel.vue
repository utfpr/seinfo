<template>
<div class="title">
  <h5 style="text-align:center">Imagem de Carousel</h5>
  <div class="box">
    <form class="form" action="http://localhost:3000/api/carrossel" method="post" encType="multipart/form-data">
      <div class="row justify-content-center">
        <a-form-item class="space_2">
              <label class="ant-form-item-required">Imagem do carousel:</label>
              <a-input name="urlImagem" type="file">
              </a-input>
        </a-form-item>
      
          <a-form-item class="space">
            <label class="ant-form-item-required">Status da Imagem:</label>
            <select name="select_status" defaultValue="1">
              <option value="1">Disponivel</option>
              <option value="0">Indisponivel</option>
            </select>
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
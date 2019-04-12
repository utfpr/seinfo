<template>
  <div class="box">
    <form class="form" action="http://localhost:3000/evento" method="post">
      <div class="row justify-content-center">
        <a-form-item class="space">
          <label class="ant-form-item-required">Nome do Evento:</label>
          <a-input placeholder="Nome" name="nome" type="text">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item class="space">
          <label class="ant-form-item-required">Valor do Evento:</label>
          <a-input placeholder="Valor" name="valor" type="number">
            <a-icon slot="prefix" type="dollar" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
        <a-form-item class="space_2">
          <label class="ant-form-item-required">Descrição:</label>
          <a-textarea type="text" name="descricao" placeholder="Descrição" :rows="4"/>
        </a-form-item>
      </div>
    </form>
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
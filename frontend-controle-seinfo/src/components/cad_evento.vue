<template>
  <div class="box">
    <form class="form" action="http://localhost:3000/evento" method="post">
      <div class="row justify-content-center">
        <a-form-item class="space">
          <a-input placeholder="Nome" name="nome" type="text">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item class="space">
          <a-input placeholder="Valor" name="valor" type="number">
            <a-icon slot="prefix" type="dollar" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
        <a-form-item class="space">
          <a-input placeholder="Nome" name="data_ini" type="date">
            <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item class="space">
          <a-input placeholder="Nome" name="hora_ini" type="time">
            <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
        <a-form-item class="space">
          <a-input placeholder="Nome" name="data_fim" type="date">
            <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item class="space">
          <a-input placeholder="Nome" name="hora_fim" type="time">
            <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
        <div class="space_2">
          <a-textarea  type="text" name="descricao" placeholder="Descrição" :rows="4"/>
        </div>
      </div>
      <div class="row justify-content-center">
      <a-button type="submit" class="bt">Cadastrar</a-button>
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
.box {
  margin-top: 20px;
}

.space {
  padding: 2px;
  width: 221px;
}

.space_2 {
  padding: 2px;
  width: 444px;
}

.bt{
  margin-top: 10px;
  background-color: rgb(224, 224, 224);
}

</style>

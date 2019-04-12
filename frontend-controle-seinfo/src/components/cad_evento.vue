<template>
    <div class="box">
      <form class="form" action="http://localhost:3000/api/evento" method="post">
        <div class="form-row justify-content-center">
          <div class="form-group col-md-3">
          <a-form-item
    >
      <a-input
        v-decorator="[
          'userName',
          {rules: [{ required: true, message: 'Please input your username!' }]}
        ]"
        placeholder="Username"
        name = "nome"
      >
        <a-icon
          slot="prefix"
          type="user"
          style="color:rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
          </div>
          <div class="form-group col-md-3">
            <label for="inputValor">Valor</label>
            <input type="number" class="form-control" id="inputValor" name="valor" placeholder="Valor">
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="form-group col-md-3">
            <label for="inputDateStart">Data de Inicio</label>
            <input type="date" class="form-control" id="inputDateStart" name="data_ini">
          </div>
          <div class="form-group col-md-3">
            <label for="inputTimeStart">Hora de Inicio</label>
            <input type="time" class="form-control" id="inputTimeStart" name="hora_ini">
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="form-group col-md-3">
            <label for="inputDateStart">Data de Fim</label>
            <input type="date" class="form-control" id="inputDateStart" name="data_fim">
          </div>
          <div class="form-group col-md-3">
            <label for="inputTimeStart">Hora de Fim</label>
            <input type="time" class="form-control" id="inputTimeStart" name="hora_fim">
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="form-group col-md-6">
            <label for="inputDescricao">Descrição</label>
            <input type="text" class="form-control" id="inputDescricao" placeholder="Descrição" name="descricao">
          </div>
        </div>
        <button type="submit" class="btn btn-dark">Cadastrar</button>
      </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style scoped>

.box{
  margin-right: 20px;
  margin-left: 20px;
  padding: 50px;
  border-radius: 5px;
}
.novo{
  color:red;
}
</style>

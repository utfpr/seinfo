<template>
  <div>
    <a-form>
      <h5>Perfil</h5>
      <a-row :gutter="24">
        <a-col
          :span="12">
          <a-form-item >
            <label>Ra:</label>
          <a-input maxlength="255" placeholder="Ra" name="ra" type="text">
            <a-icon slot="prefix" type="tag" style="color:rgba(0,0,0,.25)"/>
          </a-input>
          </a-form-item>
          <a-form-item >
            <label>Nome:</label>
          <a-input maxlength="255" placeholder="Nome" name="nome" type="text">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
          </a-input>
          </a-form-item>
        </a-col>
        <a-col
          :span="12">
          <a-form-item >
            <label>CPF</label>
          <a-input maxlength="255" placeholder="Nome" name="cpf" type="number">
            <a-icon slot="prefix" type="idcard" style="color:rgba(0,0,0,.25)"/>
          </a-input>
          </a-form-item>
          <a-form-item >
            <label>Email:</label>
          <a-input maxlength="255" placeholder="Nome" name="email" type="text">
            <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)"/>
          </a-input>
          </a-form-item>
        </a-col>
        

      </a-row>
    </a-form>

        <div>
        <a-card title="Eventos Cadastrados">
            <p>qweqwe</p>
        </a-card>
      </div>

  </div>
</template>
<script>

export default {

};
</script>
<style>


</style>
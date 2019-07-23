<template>
  <div>
    <a-form>
      <h5>Perfil</h5>
      <a-row :gutter="24">
        <a-col :span="12">
          <a-form-item>
            <label>Ra:</label>
            <a-input maxlength="255" placeholder="Nome" name="nome" type="text">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
            </a-input>
            <label></label>
          </a-form-item>
          <a-form-item>
            <label>Nome:</label>
            <a-input maxlength="255" placeholder="Nome" name="nome" type="text">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item>
            <label>CPF</label>
            <a-input maxlength="255" placeholder="CPF" name="cpf" type="number">
              <a-icon slot="prefix" type="idcard" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item>
            <label>Email:</label>
            <a-input maxlength="255" placeholder="e-mail" name="email" type="text">
              <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>

    <div>
      
    </div>
  </div>
</template>
<script>


export default {
  mounted(){
    this.pegar_tabela ("eventosD"),
    this.pega_usuario ("pessoas")
  },
  methods: {
    openModal (data) {
      this.modalData = data
      this.modalVisible = true
    },
    pegar_tabela (name) {
      axios.get('http://localhost:3000/api/' + name)
      .then((response) => {
       console.log("Listou " + name);
       console.log(response.data);
       this.res_localizar_Eventos = response.data
     })
     .catch(function (error) {
       console.log(error);
     })
    },
    pega_usuario(name){
      axios.get('http://localhost:3000/api/' + name)
      .then((response) => {
       console.log("Listou " + name);
       console.log(response.data);
       this.res_localizar_Pessoas = response.data
     })
     .catch(function (error) {
       console.log(error);
     })
    }
  },
  data() {
    return {
      res_localizar_Eventos: [{"SS":"ss"}],
      res_localizar_Pessoas: [],
      columns,
      tabelas: [],
      modalVisible: false,
      modalData: ''
    
    }
  }
}
</script>
<style>
.ic {
  background-color: rgb(240, 93, 93);
  cursor: pointer;
}
.ic:hover {
  color: white;
  border-color: white;
  background-color: rgb(231, 34, 34);
}
</style>
<template>
  <div>
    <a-form>
      <h5>Perfil</h5>
      <a-row :gutter="24">
        <a-col :span="12">
          <a-form-item>
            <label>Ra:</label>
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
            <a-input maxlength="255" placeholder="Nome" name="cpf" type="number">
              <a-icon slot="prefix" type="idcard" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item>
            <label>Email:</label>
            <a-input maxlength="255" placeholder="Nome" name="email" type="text">
              <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>

    <div>
      <h5>Eventos que você participa</h5>
      <div id="list" class="row">
        <div class="table-responsive ">
          <table class="table table-striped" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th style="width:35%">Nome</th>
                <th style="text-align: left;">Valor</th>
                <th style="text-align: left;">Status</th>
                <th style="text-align:center" class="actions">Ações</th>
              </tr>
            </thead>
            <tbody v-for="(res, i) in res_localizar_Eventos" :key="res.idEvento">
              <tr style="background-color:white">
                <td>{{res.nomeEventoe}}</td>
                <td>R$ {{res.lotes[0].valor}}</td>
                <td>
                  <a-tag style="width:100px;text-align:center;" color="#3BCA34">Pago</a-tag>
                </td>
                <td style="text-align:center" class="actions">
                    <a-button style="text-align:right" type="button" class="ic">CANCELAR</a-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const axios = require('axios');
const columns = [{
  title: 'Nome do Evento',
  dataIndex: 'nomeEvento',
  width: 200,
}, {
  title: 'Data do Evento',
  dataIndex: 'data',
  width: 200,
}, {
  title: 'Status do Evento',
  dataIndex: 'status',
},{
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 200,
    scopedSlots: { customRender: 'action' },
},{
  title: 'Valor',
  dataIndex: ''
},{
  title: 'Nome',
  dataIndex: 'nome'
}
];

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
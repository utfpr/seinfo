<template>
<div>
<h5>Eventos que você participa</h5>
      <div id="list" class="row">
        <div class="table-responsive">
          <table class="table table-striped" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th style="width:35%">Nome</th>
                <th style="text-align: center;">Valor</th>
                <th style="text-align: center;">Status</th>
              </tr>
            </thead>
            <tbody v-for="(res/*, i*/) in res_localizar_Eventos" :key="res.idEvento">
              <tr style="background-color:white">
                <td>{{res.nome}}</td>
                <td style="text-align:center;">R$ {{res.lotes[0].valor}}</td>
                <td style="text-align:center;"> 
                  <a-tag style="width:130px;text-align:center;" color="#3BCA34">Pago</a-tag>
                </td>
              </tr>
            </tbody>
          </table>
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

</style>
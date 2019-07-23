<template>
  <div>
    <h3>Eventos Disponíveis</h3>
    <div id="list" class="row">
      <div class="table-responsive col-md-12">
        <table class="table table-striped" cellspacing="0" cellpadding="0">
          <thead>
            <tr >
              <th style="width:35%">Nome</th>
              <th style="text-align: left;">Valor</th>
              <th style="text-align: left;" >Status</th>
              <th style="text-align:center" class="actions">Ações</th>
            </tr>
          </thead>
          <tbody v-for="(res/*,i*/) in res_localizar" :key="res.idEvento">
            <tr style="background-color:white;">
              <td>{{res.nome}}</td>
              <td>R$ {{res.lotes[0].valor}}</td>
              <td><a-progress type="circle" :percent="100" status="success" :width="33" /></td>
              <td style="text-align:center" class="actions">
                  <a-button style="text-align:right" type="button" class="ic">  INSCREVER-SE</a-button>
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
  dataIndex: 'nome',
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
}
];

export default {
  mounted(){
    this.pegar_tabela ("eventosD")
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
       this.res_localizar = response.data
     })
     .catch(function (error) {
       console.log(error);
     })
    },
  },
  data() {
    return {
      res_localizar: [],
      columns,
      tabelas: [],
      modalVisible: false,
      modalData: ''
    
    }
  }
}
</script>

<style scoped>

.ic{
  background-color: rgb(69, 236, 69);
  cursor: pointer;
} 
.ic:hover{
  color: black;
  border-color: white;
  background-color:   rgb(69, 236, 69);
}

</style>

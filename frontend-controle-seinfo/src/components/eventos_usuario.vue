<template>
  <div>
    <h3>Eventos Disponíveis</h3>
    <div id="list" class="row">
      <div class="table-responsive col-md-12">
        <table class="table table-striped" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th style="width:35%">Nome</th>
              <th style="text-align: left;">Valor</th>
              <th style="text-align: left;" >Status</th>
              <th style="text-align:center" class="actions">Ações</th>
            </tr>
          </thead>
          <tbody v-for="(res, i) in res_localizar" :key="res.idEvento">
            <tr>
              <td>{{res.nome}}</td>
              <td>500$</td>
              <td><a-progress type="circle" :percent="100" status="success" :width="33" /></td>
              <td style="text-align:center" class="actions">
                <a-popconfirm placement="top" okText="Sim" cancelText="Não" @cancel="cancel" @confirm="confirm">
                  <template slot="title">
                    <p>Gostaria de se inscrever-se neste evento.</p>
                  </template>
                  <a-button style="text-align:right" type="button" class="ic">  INSCREVER-SE</a-button>
                </a-popconfirm>
              </td>
            </tr>

            <tr>
              <td>{{res.nome}}</td>
              <td>500$</td>
              <td><a-progress type="circle" :percent="100" status="success" :width="33" /></td>
              <td style="text-align:center" class="actions">
                <a-popconfirm placement="top" okText="Sim" cancelText="Não" @cancel="cancel" @confirm="confirm">
                  <template slot="title">
                    <p>Gostaria de se inscrever-se neste evento.</p>
                  </template>
                  <a-button style="text-align:right" type="button" class="ic">  INSCREVER-SE</a-button>
                </a-popconfirm>
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
},{
  title: 'Status do Evento',
  dataIndex: 'status',
},{
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 200,
    scopedSlots: { customRender: 'action' },
  },
];

export default {
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
    confirm (e) {
      console.log(e)
      this.$message.success('Inscricao com sucesso')
    },
    cancel (e) {
      console.log(e)
      this.$message.error('Inscricao cancelada')
    },
  },
  data() {
    return {
      res_localizar: [{"idEvento":1,"nome":"SEINFO 2019","descricao":"VSIIGZRZJIDKZHHGFYXWIPJTZHXZQU","status":1}],
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
  color: white;
  border-color: white;
  background-color:   rgb(240, 93, 93);
}


.eve{
  left: 85%;
  margin-top: 2%;
}

.ant-input {
  border-radius: 0;
}

.box {
  border: solid 1px rgba(161, 161, 161, 0.233);
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 10px;
  padding: 20px;
}

label {
  margin-bottom: 0;
}

.title {
  margin-top: 30px;
}

.ant-form-item {
  margin-bottom: 0;
}

.space {
  border-radius: 0;
  padding: 2px;
  width: 221px;
}

.space_2 {
  padding: 2px;
  width: 444px;
}

.ant-select-selection{
  border-radius: 0;
}

.space_3 {
  border-radius: 0;
  padding: 2px;
  width: 222px;
}
</style>

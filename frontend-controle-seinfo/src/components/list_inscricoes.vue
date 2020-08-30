<template>
  <div>
    <h3>Meus eventos</h3>
    <div id="list" class="row">
      <div class="table-responsive col-md-12">
        <table class="table table-striped" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th style="width:35%">Nome</th>
              <th style="text-align: left;">Status</th>
              <th style="text-align:center" class="actions">Ações</th>
            </tr>
          </thead>
          <tbody v-for="(res/*,i*/) in res_localizar" :key="res.idEvento">
            <tr style="background-color:white;">
              <td>{{res.eventoInsc.nome}}</td>
              <td>
                <a-progress type="circle" :percent="100" status="success" :width="33" />
              </td>
              <td style="text-align:center" class="actions">
                <a-button style="text-align:right" type="button" class="ic" :href="'/Usuario/atvHome'" >VER ATIVIDADES </a-button>
                <a-button type="button" class="dl" @click="showDeleteConfirm(res.idEvento)">CANCELAR INSCRIÇÃO</a-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
const axios = require("axios");
const columns = [
  {
    title: "Nome do Evento",
    dataIndex: "nome",
    width: 200, //teste1
  },
  {
    title: "Data do Evento",
    dataIndex: "data",
    width: 200,
  },
  {
    title: "Status do Evento",
    dataIndex: "status",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 200,
    scopedSlots: { customRender: "action" },
  },
  {
    title: "Valor",
    dataIndex: "",
  },
];

const pessoa = {
  CPF: "1",
};

export default {
  mounted() {
    this.pegar_tabela("eventosD");
  },
  methods: {
    exclusao(id) {
      axios
        .delete(`http://localhost:3000/api/inscEv/${id}/${pessoa.CPF}`)
        .then((response) => {
          console.log(response.data);
          this.pegar_tabela("eventosD");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    showDeleteConfirm(id) {
      this.$confirm({
        title: "Deseja remover sua inscrição?",
        content: "Essa ação não poderá ser desfeita!",
        okText: "Sim",
        okType: "danger",
        cancelText: "Voltar",
        onOk() {
          axios
            .delete(`http://localhost:3000/api/inscEv/${id}/${pessoa.CPF}`)
            .then((response) => {
              console.log(response.data);
              document.location.reload(true);
            })
            .catch(function (error) {
              console.log(error);
            });
          
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    },
    openModal(data) {
      this.modalData = data;
      this.modalVisible = true;
    },
    pegar_tabela(name) {
      axios
        .get("http://localhost:3000/api/inscEvP/1")
        .then((response) => {
          console.log("Listou " + name);
          console.log(response.data);
          this.res_localizar = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  data() {
    return {
      res_localizar: [],
      columns,
      tabelas: [],
      modalVisible: false,
      modalData: "",
      pessoa,
    };
  },
};
</script>

<style scoped>
.ic {
  background-color: rgb(69, 236, 69);
  cursor: pointer;
}
.ic:hover {
  color: black;
  border-color: white;
  background-color: rgb(69, 236, 69);
}
.dl {
  background-color: rgb(236, 69, 69);
  cursor: pointer;
}
.dl:hover {
  color: black;
  border-color: white;
  background-color: rgb(236, 69, 69);
}
</style>
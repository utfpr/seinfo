<template>
  <div>
    <h3>Meus eventos</h3>
    <div id="list" class="row">
      <div class="table-responsive col-md-12">
        <table class="table table-striped" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th style="width:35%">
                Nome
              </th>
              <th style="text-align: left;">
                Status
              </th>
              <th style="text-align:center" class="actions">
                Ações
              </th>
            </tr>
          </thead>
          <tbody v-for="res in res_localizar" :key="res.idEvento">
            <tr style="background-color:white;">
              <td>{{ res.eventoInsc.nome }}</td>
              <td>
                <!-- <a-progress type="circle" :percent="100" status="success" :width="33" /> -->
                <a-icon
                  type="check-circle"
                  theme="twoTone"
                  two-tone-color="#52c41a"
                  style="font-size: 32px; margin-left: 5px;"
                />
              </td>
              
              <td style="text-align:center;" class="actions">
                <button
                  type="button"
                  class="btn btn-success"
                  @click="redirectAtv(res.idEvento, CPF,res.eventoInsc.idAgenda)"
                >
                  VER ATIVIDADES
                </button>
                <!-- <a-button style="text-align:right" type="button" class="ic" @click="teste(res.idEvento)" >VER ATIVIDADES </a-button> -->
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="showDeleteConfirm(res.idEvento)"
                >
                  CANCELAR INSCRIÇÃO
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../config/axiosConfig";
const columns = [
  {
    title: "Nome do Evento",
    dataIndex: "nome",
    width: 200, // test
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
const auth = require("../services/auth");

export default {
  components: {
  },
  data() {
    return {
      res_localizar: [],
      columns,
      tabelas: [],
      modalVisible: false,
      modalData: "",
      CPF: "",
    };
  },
  mounted() {
    this.pegarPerfil();
    this.pegar_tabela();
  },
  methods: {
    redirectAtv(idEvento, CPF,idAgenda) {
      this.$router.push({ path: `/usuario/atvHome/${idEvento}/${btoa(CPF)}/${idAgenda}` });
    },
    exclusao(id) {
      axios
        .delete(`/api/inscEv/${id}/${btoa(this.CPF)}`)
        .then((resp) => {
          console.log(resp)
          this.pegar_tabela("eventosD");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async pegarPerfil() {
      await auth.default.getUser().then((res) => {
        this.CPF = res.CPF;
        this.pegar_tabela();
      });
      // this.CPF = user.CPF;
    },
    showDeleteConfirm(id) {
      const cpfPessoa = this.CPF;
      this.$confirm({
        title: "Deseja remover sua inscrição?",
        content: "Essa ação não poderá ser desfeita!",
        okText: "Sim",
        okType: "danger",
        cancelText: "Voltar",
        onOk() {
          axios
            .delete(`/api/inscEv/${id}/${btoa(cpfPessoa)}`)
            .then(() => {
              document.location.reload(true);
            })
            .catch((error) => {
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
    pegar_tabela() {
      axios
        .get(`/api/inscEvP/${btoa(this.CPF)}`)
        .then((response) => {
          this.res_localizar = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.ic {
  font-weight: 600;
  letter-spacing: 0.8px;
  background-color: rgba(157, 211, 157, 0.5);
  border: 2px solid rgb(64, 212, 64);
  color: black;
  cursor: pointer;
}
.ic:hover {
  color: white;
  background-color: rgb(64, 212, 64);
}
.dl {
  font-weight: 600;
  letter-spacing: 0.8px;
  background-color: rgba(236, 69, 69, 0.5);
  border: 2px solid rgb(236, 69, 69);
  color: black;
  cursor: pointer;
  padding-top: 1.3px;
}
.dl:hover {
  color: white;
  background-color: rgb(236, 69, 69);
}
</style>

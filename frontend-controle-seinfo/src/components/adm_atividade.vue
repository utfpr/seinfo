// Eu não me orgulho nem um pouco das gambiarras que eu fiz aqui....
<template>
  <div class="title">
    <h5 style="text-align: center">Controle de Atividade</h5>
    <br />
    <!-- Começo Inserção -->
    <slide-up-down :active="active">
      <div class="box">
        <form
          class="form"
          @submit.prevent="handleSubmit"
          method="post"
          enctype="multipart/form-data"
        >
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required">Selecione o Evento:</label>
              <a-select v-model="idEvento" defaultValue="...">
                <a-select-option
                  id="idEvento"
                  name="idEvento"
                  v-for="evento in eventos"
                  :key="evento.idEvento"
                  :value="evento.idEvento"
                  >{{ evento.nome }}</a-select-option
                >
              </a-select>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required">Nome da Atividade:</label>
              <a-input
                maxlength="255"
                placeholder="Nome"
                v-model="titulo"
                autocomplete="off"
                type="text"
              >
                <a-icon
                  slot="prefix"
                  type="user"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required">Data de Inicio:</label>
              <a-input
                v-model="data_ini_atv"
                type="date"
                id="data_ini_atv"
                name="data_ini_atv"
              >
                <a-icon
                  slot="prefix"
                  type="calendar"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required">Hora de Inicio:</label>
              <a-input
                v-model="hora_ini_atv"
                type="time"
                name="hora_ini_atv"
                id="hora_ini_atv"
              >
                <a-icon
                  slot="prefix"
                  type="clock-circle"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required">Data de Fim:</label>
              <a-input
                v-model="data_fim_atv"
                type="date"
                id="data_fim_atv"
                name="data_fim_atv"
              >
                <a-icon
                  slot="prefix"
                  type="calendar"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required">Hora de Fim:</label>
              <a-input
                id="hora_fim_atv"
                v-model="hora_fim_atv"
                type="time"
                name="hora_fim_atv"
              >
                <a-icon
                  slot="prefix"
                  type="clock-circle"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required"
                >Horas de Participação:</label
              >
              <a-input
                id="horasParticipacao"
                v-model="horasParticipacao"
                type="time"
                name="horasParticipacao"
              >
                <a-icon
                  slot="prefix"
                  type="dashboard"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required">Quantidade de Vagas:</label>
              <a-input
                v-model="quantidadeVagas"
                autocomplete="off"
                type="number"
              >
                <a-icon
                  slot="prefix"
                  type="read"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required">Local da Atividade:</label>
              <a-input
                maxlength="255"
                autocomplete="off"
                placeholder="Local"
                v-model="local_atv"
                type="text"
              >
                <a-icon
                  slot="prefix"
                  type="home"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required">Valor da Atividade:</label>
              <a-input
                placeholder="Valor"
                autocomplete="off"
                v-model="valor"
                type="number"
                id="valor"
                name="valor"
                min="0"
              >
                <a-icon
                  slot="prefix"
                  type="dollar"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center"></div>
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required"
                >Selecione uma Categoria:</label
              >
              <a-select v-model="idCategoria" defaultValue="...">
                <a-select-option
                  id="idCategoria"
                  name="idCategoria"
                  v-for="categoria in categorias"
                  :key="categoria.idCategoria"
                  :value="categoria.idCategoria"
                  >{{ categoria.nome }}</a-select-option
                >
              </a-select>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required"
                >Selecione um Protagonista:</label
              >
              <a-select v-model="idPessoa" defaultValue="...">
                <a-select-option
                  id="idPessoa"
                  name="idPessoa"
                  v-for="protagonista in protagonistas"
                  :key="protagonista.idPessoa"
                  :value="protagonista.idPessoa"
                  >{{ protagonista.aPes.nome }}</a-select-option
                >
              </a-select>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space_2">
              <label class="ant-form-item-required">Descrição:</label>
              <a-textarea
                autocomplete="off"
                maxlength="5000"
                type="text"
                v-model="descricao"
                placeholder="Descrição"
                :rows="4"
              />
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <button type="submit" class="btn btn-outline-primary mr-5">
              Cadastrar
            </button>
            <button
              type="reset"
              class="btn btn-outline-danger btn-sm-2 reset"
              @click.prevent="onCancel"
              v-on:click="toggle"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
      <br />
    </slide-up-down>
    <!-- Fim Inserção -->
    
    <!-- MODAL VER EDITAR (FIM) -->

    <!-- MODAL VER MAIS (EXCLUIR) -->
    
    <!-- MODAL VER MAIS (EXCLUIR) -->
  </div>
</template>

<script>
const axios = require("axios");
import moment from "moment";
moment.locale("pt-br");
export default {
  props: {
    disabled: Boolean,
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  created() {
    axios
      .get("http://localhost:3000/api/eventos")
      .then((response) => {
        this.eventos = response.data;
        // console.log(this.eventos);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:3000/api/categorias")
      .then((response) => {
        this.categorias = response.data;
        // console.log(this.categorias);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:3000/api/protagonistas")
      .then((response) => {
        this.protagonistas = response.data;
        // console.log(this.protagonistas);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.pegar_tabela();
  },
  methods: {
    onCancel() {
      console.log("CANCEL SUBMIT");
      this.show = false;
      this.titulo = "";
      this.valor = "";
      this.data_ini_atv = "";
      this.data_fim_atv = "";
      this.hora_ini_atv = "";
      this.hora_fim_atv = "";
      this.horasParticipacao = "";
      this.quantidadeVagas = "";
      this.local_atv = "";
      this.idEvento = "";
      this.idCategoria = "";
      this.idPessoa = "";
      this.descricao = "";
    },
    moment: function (date) {
      return moment(date);
    },
    pegar_tabela() {
      this.$router.replace("/adm/atividade");
      axios
        .get("http://localhost:3000/api/atividades/")
        .then((response) => {
          // console.log(response.data);
          this.res = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getEvtNome(idEvt) {
      for (var i = 0; i < this.eventos.length; i++) {
        if (this.eventos[i].idEvento == idEvt) return this.eventos[i].nome;
      }
    },
    openModal(data) {
      this.pegar_tabela();
      this.modalData = data;
      this.modalVisible = true;
      // console.log(data);
      for (var i = 0; i < this.eventos.length; i++) {
        if (this.eventos[i].idEvento == this.modalData.idEvento) {
          this.nomeEvento = this.eventos[i].nome;
          this.modalData.local_atv = this.eventos[i].agendamento.local;
          var datahorainicio = this.eventos[i].agendamento.dataHoraInicio;
          var datahorafim = this.eventos[i].agendamento.dataHoraFim;
          this.modalData.data_ini_atv = moment(datahorainicio).format(
            "YYYY-MM-DD"
          );
          this.modalData.data_fim_atv = moment(datahorafim).format(
            "YYYY-MM-DD"
          );
          this.modalData.hora_ini_atv = moment(datahorainicio).format("HH:mm");
          this.modalData.hora_fim_atv = moment(datahorafim).format("HH:mm");
        }
      }
      for (var i = 0; i < this.protagonistas.length; i++) {
        if (this.modalData.idAtividade == this.protagonistas[i].idAtividade) {
          this.modalData.idPessoa = this.protagonistas[i].aPes.nome;
        }
      }
      this.modalData.idCategoria = data.categoriaAtv.nome;
      this.modalData.horasParticipacao = data.horasParticipacao.slice(0, 5);
    },
    handleSubmit(e) {
      var erros = [];
      if (!this.titulo) erros.push("Título é obrigatório!");
      if (!this.valor) erros.push("Valor é obrigatório!");
      if (!this.data_ini_atv) erros.push("Data de Início é obrigatório!");
      if (!this.data_fim_atv) erros.push("Data de Fim é obrigatório!");
      if (!this.hora_ini_atv) erros.push("Hora de Início é obrigatório!");
      if (!this.hora_fim_atv) erros.push("Hora de Fim é obrigatório!");
      if (!this.horasParticipacao)
        erros.push("Horas de Participação é obrigatório!");
      if (!this.quantidadeVagas)
        erros.push("Quantidade de Vagas é obrigatório!");
      if (!this.local_atv) erros.push("Local da Atividade é obrigatório!");
      if (!this.idEvento) erros.push("Selecione o Evento!");
      if (!this.idCategoria) erros.push("Selecione a Categoria!");
      if (!this.idPessoa) erros.push("Selecione o Protagonista!");
      if (!this.descricao) erros.push("Descrição é obrigatório!");
      e.preventDefault();
      if (!erros.length) {
        (this.obj_Resource.titulo = this.titulo),
          (this.obj_Resource.valor = this.valor),
          (this.obj_Resource.data_ini_atv = this.data_ini_atv),
          (this.obj_Resource.data_fim_atv = this.data_fim_atv),
          (this.obj_Resource.hora_ini_atv = this.hora_ini_atv),
          (this.obj_Resource.hora_fim_atv = this.hora_fim_atv),
          (this.obj_Resource.horasParticipacao = this.horasParticipacao),
          (this.obj_Resource.quantidadeVagas = this.quantidadeVagas),
          (this.obj_Resource.local_atv = this.local_atv),
          (this.obj_Resource.idEvento = this.idEvento),
          (this.obj_Resource.idCategoria = this.idCategoria),
          (this.obj_Resource.idPessoa = this.idPessoa),
          (this.obj_Resource.descricao = this.descricao),
          axios
            .post("http://localhost:3000/api/atividade", this.obj_Resource)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error.response);
            });
        this.$router.replace("/adm/atividade");
        location.reload();
      } else {
        alert(erros.join("\n"));
      }
    },
    patch(dados) {
      var erros = [];
      if (!this.modalData.titulo) erros.push("Título é obrigatório!");
      if (!this.modalData.valor) erros.push("Valor é obrigatório!");
      if (!this.modalData.horasParticipacao)
        erros.push("Horas de Participação é obrigatório!");
      if (!this.modalData.quantidadeVagas)
        erros.push("Quantidade de Vagas é obrigatório!");
      if (!this.modalData.descricao) erros.push("Descrição é obrigatório!");
      console.log(dados);
      if (!erros.length) {
        axios
          .patch(
            "http://localhost:3000/api/atividade/" + dados.idAtividade,
            dados
          )
          .then((response) => {
            console.log("Editou!");
            console.log(response);
            this.$router.replace("/adm/atividade");
            location.reload();
          });
      } else {
        alert(erros.join("\n"));
        this.$router.replace("/adm/atividade");
      }
    },
    deletar(dados) {
      console.log("ID " + dados);
      axios
        .delete(
          "http://localhost:3000/api/atividade/" +
            dados.idAtividade +
            "/" +
            dados.idEvento
        )
        .then((response) => {
          console.log("Deletou!");
          console.log(response);
          this.$router.replace("/adm/atividade");
          location.reload();
        });
    },
    toggle() {
      this.active = !this.active;
    },
  },
  data() {
    return {
      res: [],
      eventos: [],
      categorias: [],
      protagonistas: [],
      titulo: "",
      valor: "",
      data_ini_atv: "",
      data_fim_atv: "",
      hora_ini_atv: "",
      hora_fim_atv: "",
      horasParticipacao: "",
      quantidadeVagas: "",
      local_atv: "",
      idEvento: "",
      idCategoria: "",
      idPessoa: "",
      descricao: "",
      pegou: false,
      modalVisible: false,
      active: false,
      nomeEvento: "",
      nomeCat: "",
      modalData: {
        titulo: "",
        valor: "",
        data_ini_atv: "",
        data_fim_atv: "",
        hora_ini_atv: "",
        hora_fim_atv: "",
        horasParticipacao: "",
        quantidadeVagas: "",
        local_atv: "",
        idEvento: "",
        idCategoria: "",
        idPessoa: "",
        descricao: "",
      },
      obj_Resource: {
        titulo: "",
        valor: "",
        data_ini_atv: "",
        data_fim_atv: "",
        hora_ini_atv: "",
        hora_fim_atv: "",
        horasParticipacao: "",
        quantidadeVagas: "",
        local_atv: "",
        idEvento: "",
        idCategoria: "",
        idPessoa: "",
        descricao: "",
      },
    };
  },
};
</script>
<style scoped>
.box {
  border: solid 1px rgba(161, 161, 161, 0.233);
  margin-left: 25%;
  margin-top: 10px;
  margin-right: 25%;
  padding: 20px;
}

.title {
  margin-top: 30px;
}

.space {
  padding: 2px;
  width: 221px;
}

label {
  margin-bottom: 0;
}

.ant-form-item {
  margin-bottom: 0;
}

.space_2 {
  padding: 2px;
  width: 444px;
}

.ic {
  background: transparent;
  border: none;
  cursor: pointer;
  color: black;
}

.teste {
  /* position: absolute; */
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
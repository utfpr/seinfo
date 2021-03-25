<template>
  <div class="title">
    <h5 style="text-align: center">Controle de Atividade</h5>
    <br />
    <!-- Começo Inserção -->
    <slide-up-down :active="active">
      <cadastro></cadastro>
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
import cadastro from "./adm/atividades/cadastro/cadastro.vue";
moment.locale("pt-br");
export default {
  props: {
    disabled: Boolean,
  },
  components: {
    cadastro
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
    renderHourValidateStatus() {
      const error = this.onChangeHour();
      if (error === 2 || error === 4) {
        return "error";
      }
      return "";
    },
    renderHourHelpText() {
      const error = this.onChangeHour();
      if (error === 2) {
        return "Hora de Fim deve ser maior que o Hora de Inicio";
      } else if (error === 4) {
        return "Horario da atividade deve estar entre o horário do evento";
      }
      return "";
    },
    renderDateValidateStatus() {
      const error = this.onChangeDate();
      if (error === 1 || error === 3) {
        return "error";
      }
      return "";
    },
    renderDateHelpText() {
      const error = this.onChangeDate();
      if (error === 1) {
        return "Data de Fim deve ser maior que a Data de Inicio";
      } else if (error === 3) {
        return "Data de Inicio e de Fim devem estar entre a data do evento";
      }
      return "";
    },
    onChangeDate() {
      const error = this.verifyDate();
      return error;
    },
    onChangeHour() {
      
      if (!this.idEvento) return 0;

      const evento = this.eventos[this.idEvento];

      const data_ini_evento = moment(evento.agendamento.dataHoraInicio);
      const data_fim_evento = moment(evento.agendamento.dataHoraFim);
      
      const data_ini_atv = new Date(
        this.data_ini_atv + " " + this.hora_ini_atv
      );
      const data_fim_atv = new Date(
        this.data_fim_atv + " " + this.hora_fim_atv
      );
      
      const isDayEqual = moment(data_ini_atv).isSame(data_fim_atv, "day");

      if (!isDayEqual) return null;

      let error = 0;

      const isStartHourLessThanEnd = moment(data_ini_atv).isBefore(
        data_fim_atv,
        "hour"
      );

      if (!isStartHourLessThanEnd) {
        error = 2;
      }

      const isStartHoursBetweenEvent = moment(data_ini_atv).isBetween(
        data_ini_evento,
        data_fim_evento,
        undefined,
        "hour"
      );

      const isEndHoursBetweenEvent = moment(data_fim_atv).isBetween(
        data_ini_evento,
        data_fim_evento,
        undefined,
        "hour"
      );
      
      if (!isStartHoursBetweenEvent || !isEndHoursBetweenEvent) {
        error = 4;
      }

      return error;
    },
    verifyDate() {

      if (!this.idEvento) return 0;

      const evento = this.eventos[this.idEvento];

      const data_ini_atv = moment(this.data_ini_atv + " " + this.hora_ini_atv);
      const data_fim_atv = moment(this.data_fim_atv + " " + this.hora_fim_atv);
      const data_ini_evento = moment(evento.agendamento.dataHoraInicio);
      const data_fim_evento = moment(evento.agendamento.dataHoraFim);

      const time1 = moment(data_ini_atv).format('YYYY-MM-DD');
      const time2 = moment(data_fim_atv).format('YYYY-MM-DD');
      const time3 = moment(data_ini_evento).format('YYYY-MM-DD');
      const time4 = moment(data_fim_evento).format('YYYY-MM-DD');

      const isStartDateBetweenEvent = moment(time1).isBetween(
        time3,
        time4,
        undefined,
        "[]"
      );
      const isEndDateBetweenEvent = moment(time2).isBetween(
        time3,
        time4,
        undefined,
        "[]"
      );

      let error = 0;

      if (!isStartDateBetweenEvent || !isEndDateBetweenEvent) {
        error = 3;
      }

      const isStartDateSameOrBeforeThanEnd = moment(
        time1
      ).isSameOrBefore(moment(time2));

      if (!isStartDateSameOrBeforeThanEnd) {
        error = 1;
      }

      return error;
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
  transform: translateX(-50%)
}
</style>
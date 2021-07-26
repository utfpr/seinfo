import axios from '../../../../config/axiosConfig';
import moment from "moment";
moment.locale("pt-br");
export default {
  props: {
    data: Object,
    eventos: Array,
    categorias: Array,
    protagonistas: Array
  },
  methods: {
    moment: function (date) {
      return moment(date);
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

      const isStartDateBetweenEvent = moment(time1).isBetween(time3, time4, undefined, "[]");
      const isEndDateBetweenEvent = moment(time2).isBetween(time3, time4, undefined, "[]");

      let error = 0;
      if (!isStartDateBetweenEvent || !isEndDateBetweenEvent) {
        error = 3;
      }

      const isStartDateSameOrBeforeThanEnd = moment(time1).isSameOrBefore(moment(time2));

      if (!isStartDateSameOrBeforeThanEnd) {
        error = 1;
      }
      return error;
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
      
      const data_ini_atv = new Date(this.data_ini_atv + " " + this.hora_ini_atv);
      const data_fim_atv = new Date(this.data_fim_atv + " " + this.hora_fim_atv);
      
      const isDayEqual = moment(data_ini_atv).isSame(data_fim_atv, "day");

      if (!isDayEqual) return null;

      let error = 0;

      const isStartHourLessThanEnd = moment(data_ini_atv).isBefore(data_fim_atv,"hour");

      if (!isStartHourLessThanEnd) {
        error = 2;
      }

      const isStartHoursBetweenEvent = moment(data_ini_atv).isBetween(data_ini_evento,data_fim_evento,undefined,"hour");
      const isEndHoursBetweenEvent = moment(data_fim_atv).isBetween(data_ini_evento,data_fim_evento,undefined,"hour");
      
      if (!isStartHoursBetweenEvent || !isEndHoursBetweenEvent) {
        error = 4;
      }

      return error;
    },
    patch(dados) {
      var erros = [];
      if (!this.data.titulo) erros.push("Título é obrigatório!");
      if (!this.data.valor) erros.push("Valor é obrigatório!");
      if (!this.data.horasParticipacao) erros.push("Horas de Participação é obrigatório!");
      if (!this.data.quantidadeVagas) erros.push("Quantidade de Vagas é obrigatório!");
      if (!this.data.descricao) erros.push("Descrição é obrigatório!");
      if (!erros.length) {
        axios
          .patch(
            "/api/atividade/" + dados.idAtividade,
            dados
          )
          .then((response) => {
            console.log("Editou!");
            console.log(response);
            this.$router.replace("./atividades");
            location.reload();
          });
      } else {
        alert(erros.join("\n"));
        this.$router.replace("./atividades");
      }
    },
  },
  data() {
    return {
      res: [],
      titulo: "",
      valor: "",
      data_ini_atv: "2020-06-17",
      data_fim_atv: "2020-06-16",
      hora_ini_atv: "08:04",
      hora_fim_atv: "09:04",
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
        data_ini_atv: "2020-06-17",
        data_fim_atv: "2020-06-16",
        hora_ini_atv: "08:04",
        hora_fim_atv: "09:04",
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
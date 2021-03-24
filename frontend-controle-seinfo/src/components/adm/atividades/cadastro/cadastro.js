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
    console.log("aaaaaaaaaaaa");
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
        console.log(this.protagonistas);
      })
      .catch(function (error) {
        console.log(error);
      });
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
    getEvtNome(idEvt) {
      for (var i = 0; i < this.eventos.length; i++) {
        if (this.eventos[i].idEvento == idEvt) return this.eventos[i].nome;
      }
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
        this.$router.replace("/adm/teste");
        location.reload();
      } else {
        alert(erros.join("\n"));
      }
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
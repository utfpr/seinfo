import axios from 'axios'
import moment from "moment";
moment.locale("pt-br");

import modalExcluir from '../modalExlcuir/modalExcluir.vue';
let id = 0;
let flag = 0;
export default {
  mounted() { // v
    this.pegar_tabela()
  },
  components: { modalExcluir },
  props: {
    disabled: Boolean
  },

  data() {
    return {
      res: [],
      active: false,
      data_ini_eve: "",
      data_fim_eve: "",
      hora_ini_eve: "",
      hora_fim_eve: "",
      local_eve: "",
      idEvento: "",
      descricao: "",
      pegou: false,
      modalVisible: false,
      modalVisible2: false,
      active: false,
      nomeEvento: "",
      modalData: {
        idEvento: "",
        nome: "",
        data_ini_eve: "",
        data_fim_eve: "",
        hora_ini_eve: "",
        hora_fim_eve: "",
        status: "",
        local_eve: "",
        descricao: ""
      },
      objeto_lote: [],
      formItemLayout: {
        labelCol: {
        },
        wrapperCol: {
        },
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
        },
      },
      obj_Resource: {
        nome: "",
        data_ini: "",
        hora_ini: "",
        data_fim: "",
        hora_fim: "",
        local_eve: "",
        select_status: "",
        urlImagem: "",
        descricao: "",
      },
    };
  },

  beforeCreate() {
    this.form = this.$form.createForm(this);
    this.form.getFieldDecorator('keys', { initialValue: [], preserve: true });
  },
  
  pegar_tabela() { // v
    axios
      .get("http://localhost:3000/api/eventos")
      .then(response => {
        // console.log(response.data);
        this.res = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  methods: {
    onCancel() {
      console.log('CANCEL SUBMIT');
      this.nome = "";
      this.data_ini = "";
      this.data_fim = "";
      this.hora_ini = "";
      this.hora_fim = "";
      this.local_eve = "";
      this.select_status = "";
      this.descricao = "";
      this.obj_Resource = {
        nome: "",
        data_ini: "",
        hora_ini: "",
        data_fim: "",
        hora_fim: "",
        local_eve: "",
        select_status: "",
        urlImagem: "",
        descricao: "",
      };
    },
    openModal(data) {
      this.pegar_tabela();
      this.modalData = data;
      this.modalVisible = true;
      this.modalData.nome = data.nome;
      this.modalData.local_eve = data.agendamento.local;
      this.modalData.data_ini_eve = moment(data.agendamento.dataHoraInicio).format("YYYY-MM-DD");
      this.modalData.data_fim_eve = moment(data.agendamento.dataHoraFim).format("YYYY-MM-DD");
      this.modalData.hora_ini_eve = moment(data.agendamento.dataHoraInicio).format("HH:mm");
      this.modalData.hora_fim_eve = moment(data.agendamento.dataHoraFim).format("HH:mm");
    },
    pegar_tabela() { // v
      axios
        .get("http://localhost:3000/api/eventos")
        .then(response => {
          // console.log(response.data);
          this.res = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    toggle() {
      this.active = !this.active;
    },

    deletar(dados) {
      axios
        .delete(
          `http://localhost:3000/api/evento/${dados.idEvento}`
        )
        .then(response => {

          console.log("Deletou!");
          console.log(response);
          location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });

    },
  
  },

}
import axios from 'axios';
import moment from 'moment';

moment.locale("pt-br");

import modalVerMais from '../modalVerMais/modalVerMais.vue';
import modalEditar from '../modalEditar/modalEditar.vue';
import modalExcluir from '../modalExlcuir/modalExcluir.vue';

let id = 0;
let flag = 0;
export default {
  components: { modalExcluir, modalVerMais, modalEditar },
  mounted() {
    this.pegar_tabela()
  },
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
        cpfOrganizador: "",
        idEvento: "",
        nome: "",
        cpfOrganizador: "",
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
  methods: {
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
      //Chamar funcao do componente modalVerMais
      this.$root.$emit('loadAtividades', this.modalData.idEvento);
    },

    pegar_tabela() { 
      axios
        .get("http://localhost:3000/api/eventos")
        .then(response => {
          this.res = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deletarModal(modalData){
      console.log(modalData);
    }, 
  },

};

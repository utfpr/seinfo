import axios from '../../../../config/axiosConfig';
import moment from "moment";

moment.locale("pt-br");
let id = 0;

export default {
  props: {
    disabled: Boolean
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
    this.form.getFieldDecorator('keys', { initialValue: [], preserve: true });
  },
  created() {
    axios.get('/api/obtemTodasAsPessoas').then(response => {
      this.pessoas = response.data;
    }).catch(error => {
      console.log(error);
    })
  },
  mounted() {
    this.pegar_tabela()
  },
  data() {
    return {
      res: [],
      pessoas: [],
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
        cpfOrganizador: "",
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
      this.form.resetFields();
      id = 0;
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
    pegar_tabela() { // v
      axios
        .get("/public/evento")
        .then(response => {
          // console.log(response.data);
          this.res = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    toggle() {
      this.$emit('child_toggle');
    },

    //o metodo add aciona um novo campo no form
    add() {
      const { form } = this; //pega a referencia do form no html
      const keys = form.getFieldValue('keys'); //a lista de Keys (id) da lista de inputs 
      // console.log("hello", keys);
      const nextKeys = keys.concat(++id); // soma 1 a ultima key
      form.setFieldsValue({
        keys: nextKeys,                   // coloca a referenicia da key na ultima key criada
      });
    },
    //o metodo remove um lote no form
    cancelLote(k) {
      const { form } = this;

      var loteVals = {
        keys: form.getFieldValue('keys'),
        data_fim_lote: form.getFieldValue('data_fim_lote'),
        valor_lote: form.getFieldValue('valor_lote'),
        data_inicio_lote: form.getFieldValue('data_inicio_lote')
      };

      loteVals.data_fim_lote.splice(k, 1);
      loteVals.data_inicio_lote.splice(k, 1);
      loteVals.keys.splice(k, 1);
      loteVals.valor_lote.splice(k, 1);

      loteVals.valor_lote[loteVals.valor_lote.length] = null;
      loteVals.data_fim_lote[loteVals.data_fim_lote.length] = null;
      loteVals.data_inicio_lote[loteVals.data_inicio_lote.length] = null;

      for (var i = k; i < loteVals.keys.length; i++) {
        loteVals.keys[i]--;
      }

      id--;
      form.setFieldsValue(loteVals);
    },
    info() {
      const h = this.$createElement
      this.$info({
        title: 'Cadastrar Evento',
        content: h('div', {}, [
          h('p', 'Cadastro feito com Sucesso!'),
        ]),
        onOk() { location.reload(); },
      });

    },
    renderHourValidateStatus() {
      const error = this.onChangeHour();
      if (error === 2) return "error";
      return "";
    },
    renderHourHelpText() {
      const error = this.onChangeHour();
      if (error === 2) return "Hora de Fim deve ser maior que o Hora de Inicio";
      return "";
    },
    onChangeHour() {

      if (!this.obj_Resource.hora_ini || !this.obj_Resource.hora_fim) return 0;

      const data_ini_eve = new Date(
        this.obj_Resource.data_ini + " " + this.obj_Resource.hora_ini
      );
      const data_fim_eve = new Date(
        this.obj_Resource.data_fim + " " + this.obj_Resource.hora_fim
      );

      const isDayEqual = moment(data_ini_eve).isSame(data_fim_eve, "day");

      if (!isDayEqual) return null;

      let error = 0;

      let isStartHourLessThanEnd = undefined;
      isStartHourLessThanEnd = moment(data_ini_eve).isBefore(
        data_fim_eve,
        "hour"
      );

      if (!isStartHourLessThanEnd) {
        error = 2;
      }

      return error;
    },
    onChangeDate() {
      const error = this.verifyDate();
      return error;
    },
    verifyDate() {
      const startDate = new Date(this.obj_Resource.data_ini);
      const endDate = new Date(this.obj_Resource.data_fim);
      if (endDate - startDate < 0) {
        return 1;
      } else if (endDate - startDate > 0) {
        return 0;
      } else {
        const completeStartDate = new Date(this.obj_Resource.data_ini + " " + this.obj_Resource.hora_ini);
        const completeEndDate = new Date(this.obj_Resource.data_fim + " " + this.obj_Resource.hora_fim);
        if (completeEndDate - completeStartDate < 0) {
          return 2;
        } else if (completeEndDate - completeStartDate > 0) {
          return 0;
        } else {
          return 2;
        }
      }
    },
    handleSubmit(e) {
      var erros = [];
      const errorDate = this.verifyDate();
      if (errorDate === 1) {
        erros.push('Data de Fim deve ser maior que Data de Início.')
      } else if (errorDate === 2) {
        erros.push('Hora de Fim deve ser maior que Hora de Início.');
      }
      if (!this.obj_Resource.nome) erros.push("Nome é obrigatório!");
      if (!this.obj_Resource.cpfOrganizador) erros.push("Organizador é obrigatório!");
      if (!this.obj_Resource.data_ini) erros.push("Data de Início é obrigatório!");
      if (!this.obj_Resource.data_fim) erros.push("Data de Fim é obrigatório!");
      if (!this.obj_Resource.hora_ini) erros.push("Hora de Início é obrigatório!");
      if (!this.obj_Resource.hora_fim) erros.push("Hora de Fim é obrigatório!");
      if (!this.obj_Resource.local_eve) erros.push("Local do Evento é obrigatório!");
      if (!this.obj_Resource.select_status) erros.push("Status é obrigatório!");
      if (!this.obj_Resource.descricao) erros.push("Descrição é obrigatório!");
      e.preventDefault();
      if (!erros.length) {
        this.form.validateFields((err, values) => {
          if (!err) {
            var i = 0;
            for (i = 0; i < values.keys.length; i++) {
              var obj_temp = {
                data_inicio_lote: '',
                data_fim_lote: '',
                valor_lote: ''
              }
              obj_temp.data_inicio_lote = values.data_inicio_lote[i]
              obj_temp.data_fim_lote = values.data_fim_lote[i]
              obj_temp.valor_lote = values.valor_lote[i]
              this.objeto_lote.push(obj_temp)
            }
            this.obj_Resource.lote = values.keys.length !== 0 ? this.objeto_lote : [];
            axios.post('/api/evento', this.obj_Resource).then(response => { console.log(response); this.info(); this.toggle() }).catch(error => { console.log(error.response) });

          }
        });
      }
      else {
        alert(erros.join("\n"));
      }
    },
    patch(dados) {
      var erros = [];
      if (!dados.nome) erros.push("Nome é obrigatório!");
      if (!dados.local_eve) erros.push("Local é obrigatório!");
      if (!dados.status) erros.push("Status é obrigatório!");
      if (!dados.descricao) erros.push("Descrição é obrigatório!");
      console.log(dados);
      if (!erros.length) {
        axios
          .patch(
            `/api/evento/${dados.idEvento}`, dados
          )
          .then(response => {
            console.log("Editou!");
            console.log(response);
            this.$router.replace("./cadEvento");
            location.reload();
          });
      } else {
        alert(erros.join("\n"));
        this.$router.replace("./cadEvento");
      }
    },
  },
};
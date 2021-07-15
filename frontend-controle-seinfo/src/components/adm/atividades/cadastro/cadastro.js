const axios = require('../../../../config/axiosConfig');
import moment from "moment";
moment.locale("pt-br");
let id = 0;
export default {
  props: {
    disabled: Boolean,
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
    this.form.getFieldDecorator('keys', { initialValue: [], preserve: true });
  },
  created() {
    axios
      .get("/api/eventos")
      .then((response) => {
        this.eventos = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("/api/categorias")
      .then((response) => {
        this.categorias = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("/api/protagonistas")
      .then((response) => {
        this.protagonistas = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    onCancel() {
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
      if (!this.horasParticipacao)
        erros.push("Horas de Participação é obrigatório!");
      if (!this.quantidadeVagas)
        erros.push("Quantidade de Vagas é obrigatório!");
      if (!this.idEvento) erros.push("Selecione o Evento!");
      if (!this.idCategoria) erros.push("Selecione a Categoria!");
      if (!this.idPessoa) erros.push("Selecione o Protagonista!");
      if (!this.descricao) erros.push("Descrição é obrigatório!");
      e.preventDefault();
      if (!erros.length) {
        this.form.validateFields((err, values) => {
          if (!err) {
            var i = 0;
            for (i = 0; i < values.keys.length; i++) {
              var obj_temp = {
                data_inicio_subatividade: '',
                hora_inicio_subatividade: '',
                data_fim_subatividade: '',
                hora_fim_subatividade: '',
                local_subatividade: ''
              }
              obj_temp.data_inicio_subatividade = values.data_inicio_subatividade[i]
              obj_temp.hora_inicio_subatividade = values.hora_inicio_subatividade[i]
              obj_temp.data_fim_subatividade = values.data_fim_subatividade[i]
              obj_temp.hora_fim_subatividade = values.hora_fim_subatividade[i]
              obj_temp.local_subatividade = values.local_subatividade[i]
              this.objeto_subAtividade.push(obj_temp)
            }
            this.obj_Resource.subatividade = values.keys.length !== 0 ? this.objeto_subAtividade : [];
          }
        });
        (this.obj_Resource.titulo = this.titulo),
        (this.obj_Resource.valor = this.valor),
        (this.obj_Resource.horasParticipacao = this.horasParticipacao),
        (this.obj_Resource.quantidadeVagas = this.quantidadeVagas),
        (this.obj_Resource.idEvento = this.idEvento),
        (this.obj_Resource.idCategoria = this.idCategoria),
        (this.obj_Resource.idPessoa = this.idPessoa),
        (this.obj_Resource.descricao = this.descricao),
        axios
          .post("/api/atividade", this.obj_Resource)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error.response);
          });
        location.reload();
      } else {
        alert(erros.join("\n"));
      }
    },
    toggle() {
      this.$emit('child_toggle');
    },
  
    //o metodo add aciona um novo campo no form
    addSubatividade() {
      const { form } = this; //pega a referencia do form no html
      const keys = form.getFieldValue('keys'); //a lista de Keys (id) da lista de inputs 
      // console.log("hello", keys);
      const nextKeys = keys.concat(++id); // soma 1 a ultima key
      form.setFieldsValue({
        keys: nextKeys,                   // coloca a referenicia da key na ultima key criada
      });
    },
    //o metodo remove um lote no form
    cancelSubatividade(k) {
      const { form } = this;

      var subatividadeVals = {
        keys: form.getFieldValue('keys'),
        local_subatividade: form.getFieldValue('local_subatividade'),
        data_inicio_subatividade: form.getFieldValue('data_inicio_subatividade'),
        hora_inicio_subatividade: form.getFieldValue('hora_inicio_subatividade'),
        data_fim_subatividade: form.getFieldValue('data_fim_subatividade'),
        hora_fim_subatividade: form.getFieldValue('hora_fim_subatividade')
      };

      subatividadeVals.keys.splice(k, 1);
      subatividadeVals.local_subatividade.splice(k, 1);
      subatividadeVals.data_inicio_subatividade.splice(k, 1);
      subatividadeVals.hora_inicio_subatividade.splice(k, 1);
      subatividadeVals.data_fim_subatividade.splice(k, 1);
      subatividadeVals.hora_fim_subatividade.splice(k, 1);

      subatividadeVals.local_subatividade[subatividadeVals.local_subatividade.length] = null;
      subatividadeVals.data_inicio_subatividade[subatividadeVals.data_inicio_subatividade.length] = null;
      subatividadeVals.hora_inicio_subatividade[subatividadeVals.hora_inicio_subatividade.length] = null;
      subatividadeVals.data_fim_subatividade[subatividadeVals.data_fim_subatividade.length] = null;
      subatividadeVals.hora_fim_subatividade[subatividadeVals.hora_fim_subatividade.length] = null;

      for (var i = k; i < subatividadeVals.keys.length; i++) {
        subatividadeVals.keys[i]--;
      }

      id--;
      form.setFieldsValue(subatividadeVals);
    }

  },
  data() {
    return {
      res: [],
      eventos: [],
      categorias: [],
      protagonistas: [],
      titulo: "",
      valor: "",
      objeto_subAtividade: [],
      horasParticipacao: "",
      quantidadeVagas: "",
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
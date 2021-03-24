<template>
     
    <!-- Inicio da Listagem -->
    <div id="list" class="row">
      <div class="table-responsive">
        <table
          class="table table-striped"
          cellspacing="0"
          cellpadding="0"
          style="text-align: center;"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th style="text-align: left;">Nome</th>
              <th style="text-align: left;">Descrição</th>
              <th style="text-align: left;">Status</th>
              <th style="text-align: left;">ID Agenda</th>
              <th class="actions">Ações</th>
            </tr>
          </thead>
          <tbody v-for="resp in res" :key="resp.idEvento">
            <tr>
              <td>{{resp.idEvento}}</td>
              <td style="text-align: left;">{{resp.nome}}</td>
              <td style="text-align: left;">{{resp.descricao}}</td>
              <td style="text-align: left;">{{resp.status}}</td>
              <td style="text-align: left;">{{resp.idAgenda}}</td>
              <td class="actions">
                <a-tooltip placement="top">
                  <template slot="title">Ver Mais</template>
                  <a-button
                    class="ic"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg-ver-mais"
                    @click="openModal(resp)"
                  >
                    <a-icon type="eye" />
                  </a-button>
                </a-tooltip>
                <a-tooltip placement="top">
                  <template slot="title">Editar</template>
                  <a-button
                    class="ic"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg-editar"
                    @click="openModal(resp)"
                  >
                    <a-icon type="edit" />
                  </a-button>
                </a-tooltip>
                <a-tooltip placement="top">
                  <template slot="title">Excluir</template>
                  <a-button
                    class="ic"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg-ver-excluir"
                    @click="openModal(resp)"
                  >
                    <a-icon type="delete" />
                  </a-button>
                </a-tooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Fim Listagem -->


</template>

<script>
import axios from 'axios'
import moment from "moment";
moment.locale("pt-br");
let id = 0;
let flag = 0;
export default {
  mounted(){ // v
    this.pegar_tabela ()
    },
  props: {
    disabled: Boolean
  },
  
  data () {
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
  beforeCreate () {
    this.form = this.$form.createForm(this);
    this.form.getFieldDecorator('keys', { initialValue: [], preserve: true });
  },
    methods: {

    pegar_tabela() { // v
      axios
        .get("http://localhost:3000/api/eventos")
        .then(response => {
          // console.log(response.data);
          this.res = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

 
  },
  
};
</script>
                                  
<style>
.ant-input {
  border-radius: 0;
}
.box {
  border: solid 1px rgba(161, 161, 161, 0.233);
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 10px;
  padding: 20px;
}
label {
  margin-bottom: 0;
}
.title {
  margin-top: 30px;
}
.ant-form-item {
  margin-bottom: 0;
}
.space {
  padding: 2px;
  width: 221px;
}
.space_2 {
  padding: 2px;
  width: 444px;
}
.ant-select-selection{
  border-radius: 0;
}
.space_3 {
  border-radius: 0;
  padding: 2px;
  width: 222px;
}
.teste {
  /* position: absolute; */
  left: 50%;
  transform: translate(-50%, -50%);
}
.ic {
  background: transparent;
  border: none;
  cursor: pointer;
  color: black;
}
.reset {
  color : red;
}
</style>
<template>
  <div class="title">
    <h5 style="text-align:center">Cadastro de Evento</h5>
    <br />
    <a-button type="primary" class="teste" v-on:click="toggle">Inserir Evento</a-button>
   
   <!-- Inicio da inserção -->
    <slide-up-down :active="active">
      <div class="box">
        <form 
          class="form"  
          @submit.prevent="handleSubmit" 
          method="post" 
          encType="multipart/form-data" 
        >
         <div class="row justify-content-center">
            <a-form-item class="space_2">
              <label class="ant-form-item-required">Nome do Evento:</label>
              <a-input v-model="obj_Resource.nome" maxlength="255" placeholder="Nome" name="nome" type="text">
                <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required">Data de Inicio do Evento:</label>
              <a-input v-model="obj_Resource.data_ini" name="data_ini" type="date">
                <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required">Hora de Inicio do Evento:</label>
              <a-input v-model="obj_Resource.hora_ini" name="hora_ini" type="time">
                <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required">Data de Fim do Evento:</label>
              <a-input v-model="obj_Resource.data_fim" name="data_fim" type="date">
                <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required">Hora de Fim do Evento:</label>
              <a-input v-model="obj_Resource.hora_fim" name="hora_fim" type="time">
                <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required">Local do evento:</label>
              <a-input v-model="obj_Resource.local_eve" maxlength="255" name="local_eve" type="text" placeholder="Local">
                <a-icon slot="prefix" type="home" style="color:rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required">Status do evento:</label>
              <a-select v-model="obj_Resource.select_status" name="select_status" defaultValue="0">
                <a-select-option value="1">Evento disponivel</a-select-option>
                <a-select-option value="0">Evento indisponivel</a-select-option>
              </a-select>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form :form="form"  class="space_2"> 
              <label class="ant-form-item-required">Lotes:</label>
              <a-form-item
                v-for="(k, index) in form.getFieldValue('keys')"
                :key="k"
                v-bind="index === 0 ? formItemLayout : formItemLayoutWithOutLabel"
                :label="index === 0 ? '' : ''"
                :required="false"
              >
              <a-input type="date" v-decorator="[`data_inicio_lote[${k}]`, {validateTrigger: ['change', 'blur'],preserve: true}]" placeholder="Data Inicio do Lote " style="width: 49%; margin-right: 4px"/>
              <a-input type="date" v-decorator="[`data_fim_lote[${k}]`, {validateTrigger: ['change', 'blur'],preserve: true}]" placeholder="Data Fim do Lote " style="width: 50%; margin-right: 0px"/>
              <a-input v-decorator="[`valor_lote[${k}]`, {validateTrigger: ['change', 'blur'],preserve: true}]" placeholder="Valor do Lote R$:00,0" />
              <hr/>
              </a-form-item>
              <a-form-item v-bind="formItemLayoutWithOutLabel">
                <a-button type="default" style="width: 100%" @click="add">Adicionar Lote</a-button>
              </a-form-item>
            </a-form>
            </div>
            <!--
            <div class="row justify-content-center" >
              <a-form-item class="space_2" >
                <label class="ant-form-item-required">Imagem do evento:</label>
                <a-input v-model="obj_Resource.urlImagem" name="urlImagem"  type="file" class="">
                </a-input>
              </a-form-item>
            </div> !-->
            <div class="row justify-content-center">
              <a-form-item class="space_2">
                <label class="ant-form-item-required">Descrição:</label>
                <a-textarea v-model="obj_Resource.descricao"
                  maxlength="5000"
                  type="text"
                  name="descricao"
                  placeholder="Descrição"
                  :rows="4"
                />
              </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space_2">
              <a-input name="hora_part" value="0" type="hidden"></a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <button type="submit" class="btn btn-outline-primary btn-sm">Cadastrar</button>
             <button type="reset" class="btn btn-outline-primary btn-sm" v-on:click="toggle">Cancela</button>
          </div>
        </form>
      </div>
      <br />
    </slide-up-down> 
    <!-- Fim da Inserção -->
    
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

    <!-- MODAL VER MAIS (INICIO) -->
    
    <div
      class="modal fade bd-example-modal-lg-ver-mais"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ver Mais</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="text-align: center">
          <label>ID Evento: {{modalData.idEvento}}</label>
            <br />
            <label>Nome do Evento: {{modalData.nome}}</label>
            <br />
            <label>Local do Evento: {{modalData.local_eve}}</label>
            <br />
            <label>Data de Início: {{modalData.data_ini_eve}}</label>
            <br />
            <label>Data de Fim: {{modalData.data_fim_eve}}</label>
            <br />
            <label>Horário de Início: {{modalData.hora_ini_eve}}</label>
            <br />
            <label>Horário de Fim: {{modalData.hora_fim_eve}}</label>
            <br />      
            <label>Status: {{modalData.status}}</label>
            <br />
            <label>Descrição: {{modalData.descricao}}</label>
            <br />
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL VER MAIS (FIM) -->

<!-- MODAL VER EDITAR (INICIO) -->
    <div
      class="modal fade bd-example-modal-lg-editar"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form">
              <div class="row justify-content-center">
                <div class="row justify-content-center">
                  <a-form-item class="space_2">
                    <label class="ant-form-item-required">Nome do Evento:</label>
                    <a-input
                      maxlength="255"
                      placeholder="Nome"
                      v-model="modalData.nome"
                      autocomplete="off"
                      type="text"
                    >
                      <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>
                </div>

                <div class="row justify-content-center">
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Data de Inicio:</label>
                    <a-input
                      v-model="modalData.data_ini_eve"
                      type="date"
                      id="data_ini_eve"
                      name="data_ini_eve"
                      v-bind:disabled="false"
                    >
                      <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Hora de Inicio:</label>
                    <a-input
                      v-model="modalData.hora_ini_eve"
                      type="time"
                      name="hora_ini_eve"
                      id="hora_ini_eve"
                      v-bind:disabled="false"
                    >
                      <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>
                </div>
                <div class="row justify-content-center">
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Data de Fim:</label>
                    <a-input
                      v-model="modalData.data_fim_eve"
                      type="date"
                      id="data_fim_eve"
                      name="data_fim_eve"
                      v-bind:disabled="false"
                    >
                      <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item class="space">
                    <label class="ant-form-item-required">Hora de Fim:</label>
                    <a-input
                      id="hora_fim_eve"
                      v-model="modalData.hora_fim_eve"
                      type="time"
                      name="hora_fim_eve"
                      v-bind:disabled="false"
                    >
                      <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>
                </div>
                <div class="row justify-content-center">
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Local do Evento:</label>
                    <a-input
                      maxlength="255"
                      autocomplete="off"
                      placeholder="Local"
                      v-model="modalData.local_eve"
                      type="text"
                    >
                      <a-icon slot="prefix" type="home" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Status do Evento:</label>
                    <a-select 
                      v-model="obj_Resource.select_status"
                      name="select_status"
                      defaultValue="0">
                      <a-select-option value="1">Evento disponivel</a-select-option>
                      <a-select-option value="0">Evento indisponivel</a-select-option>
                    </a-select>
                  </a-form-item>
                </div>
                <div class="row justify-content-center"></div>

                <div class="row justify-content-center">
                  <a-form-item class="space_2">
                    <label class="ant-form-item-required">Lotes:</label>
                    <a-select 
                      v-model="obj_Resource.select_status"
                      name="select_status"
                      defaultValue="0">
                      <a-select-option value="1">Lote 1</a-select-option>
                      <a-select-option value="0">Lote 1</a-select-option>
                    </a-select>
                  </a-form-item>
                </div>
                <div class="row justify-content-center"></div>

                <div class="row justify-content-center">
                  <a-form-item class="space_2">
                    <label class="ant-form-item-required">Descrição:</label>
                    <a-textarea
                      autocomplete="off"
                      maxlength="5000"
                      type="text"
                      v-model="modalData.descricao"
                      placeholder="Descrição"
                      :rows="4"
                    >{{modalData.descricao}}</a-textarea>
                  </a-form-item>
                </div>
              </div>
              <br />
              <div class="row justify-content-center">
                <button
                  type="submit"
                  v-on:click="patch(modalData)"
                  class="btn btn-outline-primary btn-sm"
                >Editar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL VER EDITAR (FIM) -->

    <!-- MODAL VER MAIS (EXCLUIR) -->
    <div
      class="modal fade bd-example-modal-lg-ver-excluir"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Excluir</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="text-align: center">
            <h4>Voce realmente deseja excluir este item?</h4>
            <br />
            <label>ID Evento: {{modalData.idEvento}}</label>
            <br />
            <label>Nome do Evento: {{modalData.nome}}</label>
            <br />
            <label>Local do Evento: {{modalData.local_eve}}</label>
            <br />
            <label>Data de Início: {{modalData.data_ini_eve}}</label>
            <br />
            <label>Data de Fim: {{modalData.data_fim_eve}}</label>
            <br />
            <label>Horário de Início: {{modalData.hora_ini_eve}}</label>
            <br />
            <label>Horário de Fim: {{modalData.hora_fim_eve}}</label>
            <br />      
            <label>Status: {{modalData.status}}</label>
            <br />
            <label>Descrição: {{modalData.descricao}}</label>
            <br />
            <a-button
              v-on:click="deletar(modalData)"
              type="danger"
              data-dismiss="modal"
              block
            >Excluir item</a-button>
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL VER MAIS (EXCLUIR) -->

  </div>

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
        .catch(function(error) {
          console.log(error);
        });
    },

    toggle() {
      this.active = !this.active;
    },
    remove  (k) {
      const { form } = this;
      const keys = form.getFieldValue('keys');
      if (keys.length === 1) {
        return;
      }
      form.setFieldsValue({
        keys: keys.filter(key => key !== k),
      });
    },
    //o metodo add aciona um novo campo no form
    add  () {
      const { form } = this; //pega a referencia do form no html
      const keys = form.getFieldValue('keys'); //a lista de Keys (id) da lista de inputs 
      // console.log("hello", keys);
      const nextKeys = keys.concat(++id); // soma 1 a ultima key
      form.setFieldsValue({
        keys: nextKeys,                   // coloca a referenicia da key na ultima key criada
      });
    },

    info() {
      const h = this.$createElement
      this.$info({
        title: 'Cadastrar Evento',
        content: h('div',{}, [
          h('p', 'Cadastro feito com Sucesso!'),
        ]),
        onOk() {location.reload();},
      });
      
    },

   
    handleSubmit(e) {
      var erros = [];
      if (!this.obj_Resource.nome) erros.push("Nome é obrigatório!");
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
            for(i = 1; i < values.keys.length+1; i++){
              var obj_temp = {
                data_inicio_lote : '',
                data_fim_lote : '',
                valor_lote : ''
              }
              obj_temp.data_inicio_lote = values.data_inicio_lote[i]
              obj_temp.data_fim_lote = values.data_fim_lote[i]
              obj_temp.valor_lote = values.valor_lote[i]
              this.objeto_lote.push(obj_temp)
            }
            this.obj_Resource.lote = values.keys.length !== 0 ? this.objeto_lote : [];
            axios.post('http://localhost:3000/api/evento', this.obj_Resource).then(response => {console.log(response);this.info();this.toggle()}).catch(error => {console.log(error.response)});
            
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
            `http://localhost:3000/api/evento/${dados.idEvento}`, dados
          )
          .then(response => {
            console.log("Editou!");
            console.log(response);
            this.$router.replace("/adm/cadEvento");
            location.reload();
          });
      } else {
        alert(erros.join("\n"));
        this.$router.replace("/adm/cadEvento");
      }
  },
  deletar(dados) {
    axios
        .delete(
          `http://localhost:3000/api/evento/${dados.idEvento}`
        )
        .then(response => {
          console.log("Deletou!");
          console.log(response);
          this.$router.replace("/adm/cadEvento");
          this.info2(response.data.msg);
        })
        .catch(function(error) {
          console.log(error);
        });
        
    },
    openModal2(data) {
      this.modalData = data;
      this.modalVisible2 = true;
      this.modalData.idEvento = data.idEvento;
      this.modalData.nome = data.nome;
      this.modalData.local_eve = data.agendamento.local;
      this.modalData.data_ini_eve = moment(data.agendamento.dataHoraInicio).format("YYYY-MM-DD");
      this.modalData.data_fim_eve = moment(data.agendamento.dataHoraFim).format("YYYY-MM-DD");
      this.modalData.hora_ini_eve = moment(data.agendamento.dataHoraInicio).format("HH:mm");
      this.modalData.hora_fim_eve = moment(data.agendamento.dataHoraFim).format("HH:mm");      
    },

    info2(msg) {
      const h = this.$createElement
      this.$info({
      title: 'Excluir Evento',
      content: h('div',{}, [
            h('p', msg),
        ]),
        onOk() {location.reload();},
      })
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

</style>
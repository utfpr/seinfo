<template>
  <div class="title">
    <h5 style="text-align:center">Cadastro de Atividade</h5>
    <div class="box">
      <form class="form" @submit.prevent="handleSubmit" method="post" enctype="multipart/form-data">
        <div class="row justify-content-center">
          <a-form-item class="space">
            <label class="ant-form-item-required">Nome da Atividade:</label>
            <a-input maxlength="255" placeholder="Nome" v-model="titulo" type="text">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item class="space">
            <label class="ant-form-item-required">Valor da Atividade:</label>
            <a-input placeholder="Valor" v-model="valor" type="number">
              <a-icon slot="prefix" type="dollar" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space">
            <label class="ant-form-item-required">Data de Inicio:</label>
            <a-input v-model="data_ini_atv" type="date" id="data_ini_atv" nome="data_ini_atv">
              <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item class="space">
            <label class="ant-form-item-required">Data de Fim:</label>
            <a-input v-model="data_fim_atv" type="date" id="data_fim_atv" nome="data_fim_atv">
              <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space">
            <label class="ant-form-item-required">Hora de Inicio:</label>
            <a-input v-model="hora_ini_atv" type="time" nome="hora_ini_atv" id="hora_ini_atv">
              <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item class="space">
            <label class="ant-form-item-required">Hora de Fim:</label>
            <a-input id="hora_fim_atv" v-model="hora_fim_atv" type="time" nome="hora_fim_atv">
              <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space">
            <label class="ant-form-item-required">Hora de Participação:</label>
            <a-input
              id="horasParticipacao"
              v-model="horasParticipacao"
              type="time"
              nome="horasParticipacao"
            >
              <a-icon slot="prefix" type="dashboard" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item class="space">
            <label class="ant-form-item-required">Quantidade de Vagas:</label>
            <a-input v-model="vagas" type="number">
              <a-icon slot="prefix" type="read" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space">
            <label class="ant-form-item-required">Local da Atividade:</label>
            <a-input maxlength="255" placeholder="Local" v-model="local_atv" type="text">
              <a-icon slot="prefix" type="home" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item class="space">
            <label class="ant-form-item-required">Selecione o Evento:</label>
            <a-select v-model="idEvento" defaultValue="...">
              <a-select-option
                id="idEvento"
                name="idEvento"
                v-for="tabela in eventos"
                :key="tabela.idEvento"
                :value="tabela.idEvento"
              >{{tabela.nome}}</a-select-option>
            </a-select>
          </a-form-item>
        </div>
        <div class="row justify-content-center"></div>
        <div class="row justify-content-center">
          <a-form-item class="space">
            <label class="ant-form-item-required">Selecione uma Categoria:</label>
            <a-select v-model="idCategoria" defaultValue="...">
              <a-select-option
                id="idCategoria"
                name="idCategoria"
                v-for="tabela in categorias"
                :key="tabela.idCategoria"
                :value="tabela.idCategoria"
              >{{tabela.nome}}</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item class="space">
            <label class="ant-form-item-required">Selecione um Protagonista:</label>
            <a-select v-model="idPessoa" defaultValue="...">
              <a-select-option
                id="idPessoa"
                name="idPessoa"
                v-for="tabela in protagonistas"
                :key="tabela.idPessoa"
                :value="tabela.idPessoa"
              >{{tabela.idPessoa}}</a-select-option>
            </a-select>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <label class="ant-form-item-required">Descrição:</label>
            <a-textarea
              maxlength="5000"
              type="text"
              v-model="descricao"
              placeholder="Descrição"
              :rows="4"
            />
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <button type="submit" class="btn btn-outline-primary btn-sm">Cadastrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          (this.obj_Resource.titulo = this.titulo),
            (this.obj_Resource.valor = this.valor),
            (this.obj_Resource.data_ini_atv = this.data_ini_atv),
            (this.obj_Resource.data_fim_atv = this.data_fim_atv),
            (this.obj_Resource.hora_ini_atv = this.hora_ini_atv),
            (this.obj_Resource.hora_fim_atv = this.hora_fim_atv),
            (this.obj_Resource.horasParticipacao = this.horasParticipacao),
            (this.obj_Resource.vagas = this.vagas),
            (this.obj_Resource.local_atv = this.local_atv),
            (this.obj_Resource.idEvento = this.idEvento),
            (this.obj_Resource.idCategoria = this.idCategoria),
            (this.obj_Resource.idPessoa = this.idPessoa),
            (this.obj_Resource.descricao = this.descricao),
            axios
              .post("http://localhost:3000/api/atividade", this.obj_Resource)
              .then(response => {
                console.log(response);
              })
              .catch(error => {
                console.log(error.response);
              });
          location.reload();
        }
      });
    }
  },
  data() {
    return {
      eventos: {},
      categorias: {},
      protagonistas: {},
      titulo: "",
      valor: "",
      data_ini_atv: "",
      data_fim_atv: "",
      hora_ini_atv: "",
      hora_fim_atv: "",
      horasParticipacao: "",
      vagas: "",
      local_atv: "",
      idEvento: "",
      idCategoria: "",
      idPessoa: "",
      descricao: "",
      obj_Resource: {
        titulo: "",
        valor: "",
        data_ini_atv: "",
        data_fim_atv: "",
        hora_ini_atv: "",
        hora_fim_atv: "",
        horasParticipacao: "",
        vagas: "",
        local_atv: "",
        idEvento: "",
        idCategoria: "",
        idPessoa: "",
        descricao: ""
      }
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  created() {
    axios
      .get("http://localhost:3000/api/eventosD")
      .then(response => {
        this.eventos = response.data;
        //console.log(this.eventos);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get("http://localhost:3000/api/categorias")
      .then(response => {
        this.categorias = response.data;
        //console.log(this.categorias);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get("http://localhost:3000/api/protagonistas")
      .then(response => {
        this.protagonistas = response.data;
        //console.log(this.protagonistas);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
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
</style>
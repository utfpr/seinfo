<template>
  <div class="title">
    <h5 style="text-align:center">Controle de Categoria</h5>
    <br />
    <a-button type="primary" class="teste" v-on:click="toggle">Inserir Categoria</a-button>
    <!-- Começo Inserção -->
    <slide-up-down :active="active">
      <div class="box">
        <form
          class="form"
          @submit.prevent="handleSubmit"
          method="post"
          enctype="multipart/form-data"
        >
          <div class="row justify-content-center">
            <a-form-item class="space_2">
              <label class="ant-form-item-required">Nome da Categoria:</label>
              <a-input
                maxlength="255"
                placeholder="Nome"
                name="nome"
                id="nome"
                v-model="nome"
                type="text"
                autocomplete="off"
              >
                <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <button type="submit" class="btn btn-outline-primary mr-5">Cadastrar</button>
            <button type="reset" class="btn btn-outline-danger btn-sm-2 reset" @click.prevent="onCancel" v-on:click="toggle">Cancelar</button>
          </div>
        </form>
      </div>
      <br />
    </slide-up-down>
    <!-- Fim Inserção -->

    <!-- Listagem -->
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
              <th style="text-align: left;">Categoria</th>
              <th class="actions">Ações</th>
            </tr>
          </thead>
          <tbody v-for="res in res" :key="res.idCategoria">
            <tr>
              <td>{{res.idCategoria}}</td>
              <td style="text-align: left;">{{res.nome}}</td>
              <td class="actions">
                <a-tooltip placement="top">
                  <template slot="title">Editar</template>
                  <a-button
                    class="ic"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg-editar"
                    @click="openModal(res)"
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
                    @click="openModal(res)"
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
    <!-- Listagem -->

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
                <a-form-item class="space_2">
                  <label class="ant-form-item-required">Categoria:</label>
                  <input
                    autocomplete="off"
                    type="text"
                    v-model="modalData.nome"
                    class="form-control"
                    id="exampleFormControlInput1"
                  />
                </a-form-item>
              </div>

              <div class="row justify-content-center">
                <button type="submit" v-on:click="patch(modalData)" class="btn btn-outline-primary mr-5">Cadastrar</button>
                <button type="submit" data-dismiss="modal" class="btn btn-outline-danger btn-sm">Cancelar</button>
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
            <label>ID: {{modalData.idCategoria}}</label>
            <br />
            <label>Categoria: {{modalData.nome}}</label>
            <br />

            <br />
            <a-button
              v-on:click="deletar(modalData.idCategoria)"
              type="danger"
              block
              onClick="window.location.reload();"
            >Eu desejo Excluir este item</a-button>
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL VER MAIS (EXCLUIR) -->
  </div>
</template>

<script>
const axios = require('../config/axiosConfig.js');

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  created() {
    this.pegar_tabela();
  },
  methods: {
    onCancel(){
      console.log('CANCEL SUBMIT');
      this.nome = "";
  },
    openModal(data) {
      this.pegar_tabela();
      this.modalData = data;
      this.modalVisible = true;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          if (nome.value.length == 0) {
            alert("Nome da Categoria não pode ser vazio!");
            return;
          } else {
            this.obj_Resource.nome = this.nome;
            axios
              .post("/api/categoria", this.obj_Resource)
              .then(response => {
                console.log(response);
                this.$router.push("1");
                this.$router.replace("/adm/categoria");
              })
              .catch(error => {
                console.log(error.response);
              });
          }
        }
      });
    },
    pegar_tabela() {
      this.$router.push("1");
      this.$router.replace("/adm/categoria");
      axios
        .get("/api/categorias")
        .then(response => {
          // console.log(response.data);
          this.res = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    patch(dados) {
      console.log(dados);
      axios
        .patch(
          "/api/categoria/" + dados.idCategoria,
          dados
        )
        .then(response => {
          console.log(response);
          this.$router.push("1");
          this.$router.replace("/adm/categoria");
        });
    },
    deletar(pos) {
      console.log("ID " + pos);
      axios
        .delete("/api/categoria/" + pos)
        .then(response => {
          console.log(response);
          this.$router.push("1");
          this.$router.replace("/adm/categoria");
        });
    },
    toggle() {
      this.active = !this.active;
    }
  },
  data() {
    return {
      nome: "",
      res: [],
      modalVisible: false,
      active: false,
      modalData: {
        id: "",
        nome: ""
      },
      obj_Resource: {
        nome: ""
      }
    };
  }
};
</script>

<style scoped>
.box {
  border: solid 1px rgba(161, 161, 161, 0.233);
  margin-left: 25%;
  margin-top: 10px;
  margin-right: 25%;
  margin-bottom: 10px;
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
  transform: translate(-50%, -50%);
}
</style>
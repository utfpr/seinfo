<template>
  <div class="title">
    <h5 style="text-align:center">Cadastro de Categoria</h5>
    <div class="box">
      <form class="form" @submit.prevent="handleSubmit" method="post" enctype="multipart/form-data">
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
            >
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
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
import axios from "axios";

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
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
              .post("http://localhost:3000/api/categoria", this.obj_Resource)
              .then(response => {
                console.log(response);
              })
              .catch(error => {
                console.log(error.response);
              });
            location.reload();
          }
        }
      });
    }
  },
  data() {
    return {
      nome: "",
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
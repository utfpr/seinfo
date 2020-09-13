<template>
  <AuthConsumer >
    <div class="title" slot-scope="{ updateUser, getToken }">
      <h5 style="text-align:center">Perfil</h5>
      <div class="box">
        <form method="post">
          <a-form-item>
            <label>CPF:</label>
            <a-input type="text" v-model="obj.CPF" placeholder="000.000.000-00" disabled />
          </a-form-item>
          <a-form-item>
            <label>RA:</label>
            <a-input type="text" v-model="obj.idPessoa" placeholder="RA" disabled />
          </a-form-item>
          <a-form-item>
            <label>Nome:</label>
            <a-input maxlength="255" placeholder="Nome" v-model="obj.nome" type="text">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <label>Email:</label>
            <a-input maxlength="255" placeholder="Email" v-model="obj.email" type="text">
              <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <div class="StyleButton">
            <a-form-item> 
              <a-button  type="submit" @click="alterarPerfil(updateUser, getToken)">Alterar Perfil</a-button>
            </a-form-item>
          </div>
        </form>
      </div>
    </div>
  </AuthConsumer>
</template>
<script>
import AuthConsumer from "../contexts/authConsumer";
const axios = require("axios");
const auth = require("../services/auth");

export default {
  mounted() {
    this.pegarPerfil();
  },
  methods: {
    async pegarPerfil() {
      const user = await auth.default.getUser();
      console.log("USER:", user)
      this.obj.nome = user.nome;
      this.obj.CPF = user.CPF;
      this.obj.email = user.email;
      this.obj.idPessoa = user.idPessoa;
      this.obj.classificacao = user.classificacao;
      this.obj.nivel = user.nivel;
    },
    alterarPerfil(atualizaDados, token) {
      axios.patch("http://localhost:3000/api/pessoa/" + this.obj.CPF, {
        nome: this.obj.nome,
        email: this.obj.email,
      })
      .then(response => {
        console.log(response.data);
        alert(response.data);
        atualizaDados({token: token, user: this.obj});
        window.location.reload();
      })
      .catch(err => {
        alert(err);
      });
    },
  },
  components: {
    AuthConsumer,
  },
  data() {
    return {
      obj: {
        nome: "",
        CPF: "",
        email: "",
        idPessoa: "",
        classificacao:"",
        nivel:"",
      },
    };
  },
};
</script>
<style scoped>
.box {
  border: solid 1px rgba(161, 161, 161, 0.233);
  margin-left: 25%;
  margin-top: 10px;
  margin-right: 25%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}

.title {
  margin-top: 30px;
}

.StyleButton {
  margin-top: 30px;
  text-align: center;
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
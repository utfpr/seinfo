<template>
  <AuthConsumer>
    <div
      slot-scope="{ updateUser, getToken }"
      class="title"
    >
      <h5 style="text-align:center">
        Perfil
      </h5>
      <div class="box">
        <form method="post">
          <a-form-item>
            <label>CPF:</label>
            <the-mask
              v-model="obj.CPF"
              placeholder="000.000.000-00"
              class="ant-input ant-input-disabled"
              :mask="['###.###.###-##']"
              disabled
            />
          </a-form-item>
          <a-form-item>
            <label>RA:</label>
            <a-input
              v-model="obj.idPessoa"
              type="text"
              placeholder="RA"
              disabled
            />
          </a-form-item>
          <a-form-item>
            <label>Nome:</label>
            <a-input
              v-model="obj.nome"
              maxlength="255"
              placeholder="Nome"
              type="text"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color:rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <label>Email:</label>
            <a-input
              v-model="obj.email"
              maxlength="255"
              placeholder="Email"
              type="text"
            >
              <a-icon
                slot="prefix"
                type="mail"
                style="color:rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <div class="StyleButton">
            <a-form-item>
              <a-button
                type="submit"
                @click="alterarPerfil(updateUser, getToken)"
              >
                Alterar Perfil
              </a-button>
            </a-form-item>
          </div>
        </form>
      </div>
    </div>
  </AuthConsumer>
</template>
<script>
import { TheMask } from 'vue-the-mask';
import AuthConsumer from '../contexts/authConsumer';

import axios from '../config/axiosConfig';
const auth = require('../services/auth');

export default {
  components: {
    TheMask,
    AuthConsumer,
  },
  data() {
    return {
      obj: {
        nome: '',
        CPF: '',
        email: '',
        idPessoa: '',
        classificacao: '',
        nivel: '',
      },
    };
  },
  mounted() {
    this.pegarPerfil();
  },
  methods: {
    async pegarPerfil() {
      const user = await auth.default.getUser();
      console.log('USER:', user);
      this.obj.nome = user.nome;
      this.obj.CPF = user.CPF;
      this.obj.email = user.email;
      this.obj.idPessoa = user.idPessoa;
      this.obj.classificacao = user.classificacao;
      this.obj.nivel = user.nivel;
    },
    alterarPerfil(atualizaDados, token) {
      axios.patch(`/api/pessoa/${this.obj.CPF}`, {
        nome: this.obj.nome,
        email: this.obj.email,
      })
        .then((response) => {
          console.log(response.data);
          alert(response.data);
          atualizaDados({ token, user: this.obj });
          window.location.reload();
        })
        .catch((err) => {
          alert(err);
        });
    },
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

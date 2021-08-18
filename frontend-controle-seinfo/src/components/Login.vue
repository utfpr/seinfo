<template>
  <div class="wrapper ">
    <div id="image">
      <img src="../assets/logo_com_nome.jpg" alt="" />
    </div>
    <div class="card row" style="width: 18rem;">
      <div class="card-body">
        <div
          class="alert alert-danger"
          id="credenciaisIncorretas"
          role="alert"
          v-if="crenciaisIncorretas"
        >
          Login ou senha incorretos
        </div>
        <h5 class="card-title">Login</h5>
        <p class="card-text">
          <input v-bind="login" type="text" class="form-control" />
          <input v-bind="senha" type="password" class="form-control " />
        </p>
        <a @click="entrarNoSistema" class="btn btn-primary">Entrar</a>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../config/axiosConfig";
import auth from "../services/auth";
export default {
  props: {
    urlDeRedirecionamento: String,
  },
  data() {
    return {
      login: String,
      senha: String,
      crenciaisIncorretas: false,
    };
  },
  methods: {
    async entrarNoSistema() {
      try {
        const credenciais = await axios.post("/public/login", this.obj_login);
        document.getElementById("credenciaisIncorretas").remove();
        this.crenciaisIncorretas = false;
        if (credenciais.status) {
          auth.login(credenciais.data.token, credenciais.data.pessoa);
          if (this.urlDeRedirecionamento) {
            this.$routes.push(this.urlDeRedirecionamento);
          }
          // window.location.replace(
          //   credenciais.data.pessoa.nivel
          //     ? perm[credenciais.data.pessoa.nivel]
          //     : "usuario"
          // );
          return;
        }
      } catch (error) {
        console.log(error);
        this.crenciaisIncorretas = true;
      }
    },
  },
};
</script>
<style>
.wrapper {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to right, #173055, #583342);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#credenciaisIncorretas {
  animation: tremer 0.2s;
  animation-iteration-count: 4;
}
@keyframes tremer {
  0% {
    margin-left: 0;
  }
  25% {
    margin-left: 7px;
  }
  50% {
    margin-left: 0;
  }
  75% {
    margin-left: -7px;
  }
  100% {
    margin-left: 0;
  }
}
input {
  margin-top: 1.5em;
}
</style>

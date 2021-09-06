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
          <input v-model="login" type="text" class="form-control" />
          <input v-model="password" type="password" class="form-control " />
          <a href="/">voltar para home</a>
        </p>
        <a @click="entrarNoSistema()" class="btn btn-primary">Entrar</a>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../config/axiosConfig";
import auth from "../services/auth";
const perm = ["usuario", "supervisor", "adm"];
export default {
  props: {},
  data() {
    return {
      login: "",
      password: "",
      crenciaisIncorretas: false,
    };
  },
  methods: {
    async entrarNoSistema() {
      try {
        const obj_login = {
          username: this.login,
          password: this.password,
        };
        const credenciais = await axios.post("/public/login/", obj_login);
        const credInc = document.getElementById("credenciaisIncorretas");
        if (credInc) credInc.remove();
        this.crenciaisIncorretas = false;
        if (credenciais) {
          auth.login(credenciais.data.token, credenciais.data.pessoa);
          window.location.replace(
            credenciais.data.pessoa.nivel
              ? perm[credenciais.data.pessoa.nivel]
              : "usuario"
          );
          this.$router.push("/");
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

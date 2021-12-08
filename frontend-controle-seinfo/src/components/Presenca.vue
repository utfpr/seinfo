<template>
  <div>
    <div>
      <div v-if="!tokew">
        <div>
          <h2>Login</h2>
          <input type="text" name="login" id="login" />
        </div>
        <div>
          <h2>senha</h2>
          <input type="text" name="senha" id="senha" />
        </div>
        <div>
          <button v-on:click="loginUser()">
            login
          </button>
        </div>
      </div>
      <div v-else>
        Sua presença foi confirmada
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../config/axiosConfig";
export default {
  data() {
    return {
      pessoa: {},
      senha: String,
      login: String,
      tokew: String,
      idAtividade: String,
      idAgenda: String,
      idEvento: String,
      cpf: String,
    };
  },
  methods: {
    loginUser: function() {
      axios
        .post("/api/login", {
          username: this.login,
          password: this.senha,
        })
        .then((resp) => {
          const { pessoa, token } = resp;
          this.pessoa = pessoa;
          this.tokew = token;
        });
    },
  },
  async mounted() {
    this.tokew = localStorage.getItem("@TOKEN");
    if (this.tokew) {
      const { idAtividade, idAgenda, idEvento, cpf  } = this.$route.params;
      await axios
        .post("/api/presenca", { idAtividade, idAgenda, idEvento, cpf })
        .catch((resp) => {
          console.log(resp);
        });
    }
  },
};
</script>

<style lang="css" scoped></style>

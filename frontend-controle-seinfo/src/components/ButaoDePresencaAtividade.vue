<template>
  <div id="PresencaAtividade" class="button-info row">
    <div v-if="!presencaConfirmada">
      <button @click="comfirmaPresenca()" class="btn btn-primary">
        Confirma presença
      </button>
    </div>
    <div v-else>
      <div v-if="!blyat" class="alert alert-primary" role="alert">
        Presenca confirmada !
      </div>
      <div v-else id="blyat" class="alert alert-warning" role="alert">
        Algo aconteceu camarada! porfavor contate o suporte
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../config/axiosConfig";
import Auth from "../services/auth";
export default {
  props: { idEvento: String, idAtividade: String, idAgenda: String },
  data() {
    return {
      user: {},
      presencaConfirmada: false,
      blyat: false,
    };
  },
  async mounted() {
    this.user = await Auth.getUser();
  },
  methods: {
    async comfirmaPresenca() {
      const resp = await axios
        .post("/api/presenca", {
          idEvento: this.idEvento,
          idAtividade: this.idAtividade,
          cpf: this.user.CPF,
          idAgenda: this.idAgenda,
          presenca  : 1,
        })
        .catch((err) => {
          console.log(err);
          this.blyat = true;
          setTimeout(() => {
            this.$route.push("/");
          }, 10000);
          return err;
        });
      if (resp) this.presencaConfirmada = true;
    },
  },
};
</script>

<style scoped>
#blyat {
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

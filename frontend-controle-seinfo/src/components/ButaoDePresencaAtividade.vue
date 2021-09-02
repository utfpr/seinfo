<template>
  <div id="PresencaAtividade" class="button-info row">
    <div v-if="!presente">
      <button @click="confirmaPresenca()" class="btn btn-primary">
        Confirma presença
      </button>
    </div>
    <div v-else>
      <button @click="cancelarPresenca()" class="btn btn-danger">
        Cancelar presença
      </button>
    </div>
  </div>
</template>
<script>
import axios from "../config/axiosConfig";
import Auth from "../services/auth";
export default {
  props: { 
    idEvento: String, 
    idAtividade: String, 
    idAgenda: String, 
    cpf: String,
    presente: Boolean
    },
  data() {
    return {
      user: {},
      blyat: false,
    };
  },
  async mounted() {
    this.user = await Auth.getUser();
  },
  methods: {
    async confirmaPresenca() {
      try{
        const resp = await axios.post("/api/presenca", {
          idEvento: this.idEvento,
          idAtividade: this.idAtividade,
          cpf: this.cpf,
          idAgenda: this.idAgenda,
          presenca: true,
        });

        if (resp) this.presente = true;
      }catch(err){
        this.blyat = true;
        setTimeout(() => {
          this.$route.push("/");
        }, 10000);
      }
    },
    async cancelarPresenca() {
      try{
        const resp = await axios.post("/api/presenca", {
          idEvento: this.idEvento,
          idAtividade: this.idAtividade,
          cpf: this.cpf,
          idAgenda: this.idAgenda,
          presenca: false,
        });

        if (resp) this.presente = false;
      }catch(err){
        this.blyat = true;
        setTimeout(() => {
          this.$route.push("/");
        }, 10000);
      }
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

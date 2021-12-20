<template>
  <div class="wrapper ">
    <div id="image">
      <img src="../assets/logo_com_nome.jpg" alt="" />
    </div>
    <div class="card" style="padding-bottom: 0.25rem;">
     
      <div class="card-body">
         
        <div v-if="!usuario">      
          <div
            class="alert alert-danger"
            id="credenciaisIncorretas"
            role="alert"
          >
            Você precisa estar logado !
            <a v-bind:href="redirect_url" >Ir para login</a>
          </div>
        </div>
        <div v-if="!permission">      
          <div
            class="alert alert-danger"
            id="credenciaisIncorretas"
            role="alert"
          >
            Sem permissão para participar da atividade
            <a v-bind:href="redirect_url" >Ir para login</a>
          </div>
        </div>
        <div v-else id="condirmarPresenca">
           <ButaoDePresencaAtividade
             v-bind:idEvento="idEvento"
              v-bind:idAtividade="idAtividade"
              v-bind:idAgenda="idAgenda"
              v-bind:cpf="usuario.CPF"
              v-bind:presente="presente"
            />
                
        </div>
       
      </div>
    </div>
  </div>
</template>
<script>
import auth from "../services/auth";
import ButaoDePresencaAtividade from "./ButaoDePresencaAtividade.vue";
import axios from '../config/axiosConfig';

export default {
  components: {
    ButaoDePresencaAtividade,
  },
  props: {
    urlDeRedirecionamento: String,
  },
  data() {
    return {
      usuario: String,
      idEvento: String,
      idAtividade: String,
      idAgenda: String,
      redirect_url: String,
      presente: Boolean,
      permission: Boolean,

    };

  },
  async mounted() {
    await this.veridicarParametros();
    await this.verificarPresenca();
    this.redirect_url = `/login?redirect=${window.location.href}`;
  },
  methods: {
    async veridicarParametros() {
      const { idEvento, idAtividade, idAgenda } = this.$route.params;
      this.idEvento = idEvento
      this.idAtividade = idAtividade
      this.idAgenda = idAgenda
      this.usuario = await auth.getUser();
    },
    async verificarPresenca(){
      const { data: { presente, permission } } =  await axios.get(`api/presenca/verificar/${this.idEvento}/${this.idAtividade}`);
      this.presente = presente;
      this.permission = permission;
    }
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


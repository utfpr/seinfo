const axios = require("axios");
import listagem from '../../atividades/listagem/listagem.vue';
export default {
  components: {
    listagem
  },
  props: {
    data: Object,
  },
  mounted() {

    //Funcao chamada quando OpenModal() é chamada em evento/listagem.js
    this.$root.$on('loadAtividades', (idEvento) => {
      axios
        .get("http://localhost:3000/api/atividade/" + idEvento)
        .then((response) => {
          this.res = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    })
  },
  data(){
    return{
        res: []
    }
},
};
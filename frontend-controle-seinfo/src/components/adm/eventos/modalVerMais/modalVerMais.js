import axios from '../../../../config/axiosConfig';
import lotes from "./listagemLotes/listagemLotes.vue";
import listagem from '../../atividades/listagem/listagem.vue';
export default {
  components: {
    lotes,
    listagem
  },
  props: {
    data: Object,
  },
  mounted() {
    //Funcao chamada quando OpenModal() é chamada em evento/listagem.js
    this.$root.$on('loadAtividades', (idEvento) => {
      axios
      .get("/public/atividade/" + idEvento)
      .then((response) => {
        this.res = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
      
      //chama os lotes pelo id do evento
      axios.get("/api/lote/evento/" + idEvento)
      .then((response) => {
        this.dataLotes = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    })
  },
  data(){
    return{
        dataLotes: [],
        res: []
    }
  },
};
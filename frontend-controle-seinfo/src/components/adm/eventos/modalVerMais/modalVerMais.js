import axios from "../../../../config/axiosConfig";
import lotes from "./listagemLotes/listagemLotes.vue";
import listagem from "../../atividades/listagem/listagem.vue";
import marcarPresencaQrcode from "../marcarPresenca/marcarPresencaQrcode.vue";
export default {
  components: {
    lotes,
    listagem,
    marcarPresencaQrcode,
  },
  props: {
    data: Object,
  },
  data: {
    dataLotes: [],
    res: [],
    idEvento: Number,
    idAtividade: Number,
    idAgenda: Number,
  },
  mounted() {
    //Funcao chamada quando OpenModal() é chamada em evento/listagem.js
    this.$root.$on("loadAtividades", (idEvento) => {
      this.idEvento = idEvento;
      axios
        .get("/public/atividade/" + idEvento)
        .then((response) => {
          const {data } = response
          console.log(data[0].atvAgenda[0].idAgenda)
          this.res = data;
          this.idAtividade = data[0].idAtividade
          this.idAgenda = data[0].atvAgenda[0].idAgenda
        })
        .catch(function(error) {
          console.log(error);
        });
      //chama os lotes pelo id do evento
      axios
        .get("/api/lote/evento/" + idEvento)
        .then((response) => {
          this.dataLotes = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  },
};

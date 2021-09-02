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
  data() {
    return {
      dataLotes: [],
      res: [],
      idEvento: "",
      idAtividade: "",
      idAgenda: "",
    }
  },
  mounted() {
    //Funcao chamada quando OpenModal() é chamada em evento/listagem.js
    this.$root.$on("loadAtividades", async (idEvento) => {
      try{
        
        this.idEvento = idEvento;
        const { data } = await axios.get("/public/atividade/" + idEvento);
        this.res = data;
        this.idAtividade = data[0].idAtividade
        this.idAgenda = data[0].atvAgenda[0].idAgenda
        
        
        const response = axios.get("/api/lote/evento/" + idEvento)
        this.dataLotes = response.data;
      }catch(error){
        console.log(error)
      }

    });
  },
};

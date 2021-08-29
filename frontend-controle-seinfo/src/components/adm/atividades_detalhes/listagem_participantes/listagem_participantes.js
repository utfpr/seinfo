import axios from "../../../../config/axiosConfig";
import ButaoDePresencaAtividade from "../../../ButaoDePresencaAtividade.vue";
import moment from "moment";
moment.locale("pt-br");

export default {
  components: {
    ButaoDePresencaAtividade,
  },
  props: {
    idEvento: String,
    idAtividade: String,
    idAgenda: String,
  },
  mounted() {
     axios
      .get(`/api/inscAtv/${this.idEvento}/${this.idAtividade}`)
      .then((response) => {
        this.participantes = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    moment: function(date) {
      return moment(date);
    },
    confirmarPresenca(dados) {
      console.log(dados);
    },
  },
  data() {
    return {
      participantes: [],
    };
  },
};

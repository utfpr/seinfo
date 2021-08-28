import moment from "moment";
import axios from "../../../../config/axiosConfig";
import listagemParticipantes from "../../atividades_detalhes/listagem_participantes/listagem_participantes.vue";
moment.locale("pt-br");

export default {
  components: {
    listagemParticipantes,
  },
  props: {
    modalData: Object,
  },
  methods: {
    moment: function(date) {
      return moment(date);
    },
    cancel() {
      this.active = false;
      this.remove = false;
    },
    toggleExcluir(data) {
      this.dataEdita = data;
      this.remove = !this.remove;
      this.active = false;
    },
    excluir() {
      axios
        .delete("/api/agenda/" + this.dataEdita.idAgenda)
        .then(() => {
          location.reload();
        });
    },
  },
  data() {
    return {
      active: false,
      remove: false,
      dataEdita: [],
    };
  },
};

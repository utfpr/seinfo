import axios from "../../../config/axiosConfig";
import moment from "moment";

moment.locale("pt-br");

export default {
  mounted() {
    this.listar_carousel();
  },

  data() {
    return {
      carrossel: [],
    };
  },

  methods: {
    formatarStatus(status) {
      if (status == 1) return "Disponível";
      else return "Indisponível";
    },

    async listar_carousel() {
      try {
        const response = await axios.get("/api/getAllCarrossel");
        this.carrossel = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

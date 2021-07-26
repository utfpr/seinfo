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
      // imagemUrl: "",
      // status: '',
      // asd: [],
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

    async salvar(idCarrossel, idImagem) {
      try {
        const novoStatus = document.getElementById(idCarrossel).value;

        await axios.post(
          "/api/carrossel/",
          { status: novoStatus, idImagem: idImagem, idCarrossel: idCarrossel },
          { params: idCarrossel }
        );
      } catch (error) {
        console.log(error);
      }
    },

    // async cadastrarImagem() {
    //   console.log(this.imagemUrl);
    //   console.log(this.status);

    //   const body = {
    //     select_status: this.status,
    //     body: this.imagemUrl
    //   }

    //   const { data } = await axios.post("/api/carrossel", body)

    // const form_data = new FormData();
    // form_data.append("file", this.imagemUrl);
    // const request_config = {
    //   method: "post",
    //   url: "/api/carrossel",
    //   data: {file:form_data, select_status:this.status},
    // };
    // await axios(request_config);

    // await axios.post(
    //   "/api/carrossel",
    //   {
    //     file: this.imagemUrl,
    //     select_status: this.status,
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   }
    // );
    // },
  },
};

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
      requestData: {
        file: "",
        status: 1,
      },
    };
  },

  methods: {
    formatarStatus(status) {
      if (status == 1) return "Disponível";
      else return "Indisponível";
    },

    async listar_carousel() {
      try {
        const response = await axios.get("/api/carrossel/getAllCarrossel");
        this.carrossel = response.data;
      } catch (error) {
        // console.log(error);
      }
    },
    imageChange(file){
      this.requestData.file = file[0];
    },

    async handleSubmit() {
      try {
        
        if(!this.requestData.file) 
        return alert("Insira uma Imagem");

        const image = new FormData();
        image.append('urlImagem', this.requestData.file);
        image.append("select_status", this.requestData.status);

        const response = await axios.post('/api/carrossel', image)

        if(response.status === 200) 
          return alert("Imagem cadastrada com sucesso!");
        else 
          return alert("Houve um erro durante o cadastro!");

      } catch (error) {
        console.log(error);
      }
    },

    async handleChangeStatus(newStatus, idCarrossel) {
      try {
        const response  = await axios.put(`/api/carrossel/${idCarrossel}`, {
          status: newStatus,
          idCarrossel
        });

        if(response.status === 200) 
          return alert("Status alterado com sucesso!");
        else 
          return alert("Houve um erro durante o processo!");
        } catch (error) {
        console.log(error);
      }
    },
    async deleteCarrossel(idCarrossel) {
      try {
        const response  = await axios.delete(`/api/carrossel/${idCarrossel}`, {
          idCarrossel
        });

        if(response.status === 200) 
          return alert("Imagem deletada com sucesso!");
        else 
          return alert("Houve um erro durante o processo!");

      } catch (error) {
        console.log(error);

      }
    }

    
  },
};

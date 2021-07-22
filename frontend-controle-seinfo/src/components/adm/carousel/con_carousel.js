import axios from '../../../config/axiosConfig';
import moment from 'moment';

moment.locale("pt-br");

export default{

    mounted() {
        this.listar_carousel()
      },

      data() {
        return {
          res: []}
        },

      methods: {

        formatarStatus(status){
            if(status == 1)
                return "Disponível";
            else
                return "Indisponível";

        },
          
      listar_carousel() { 
        axios
          .get("/api/carrossel")
          .then(response => {
            this.res = response.data;
              console.log(this.res);
          })
          .catch(function (error) {
            console.log(error);
          });

      },
    },






};
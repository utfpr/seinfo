import moment from 'moment';
const axios = require("axios");
moment.locale("pt-br");

export default {
    props: {
      modalData: Object,
    },
    methods: {
      moment: function (date) {
          return moment(date);
      },
      cancel(){
        this.active = false;
        this.remove = false;
      },
      toggleExcluir(data){
        this.dataEdita = data;
        this.remove = !this.remove;
        this.active = false;
      },
      excluir(){
        axios.delete("http://localhost:3000/api/agenda/"+ this.dataEdita.idAgenda)
        .then((response) => {
          console.log("Deletou!",response);
          location.reload();
        });
      },
    },
    data() {
        return {
            active: false,
            remove: false,
            dataEdita: [],
        }
    }
}
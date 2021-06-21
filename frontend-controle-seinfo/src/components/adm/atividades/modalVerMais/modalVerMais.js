import moment from 'moment';
import listagemSubAtividades from "../listagemSubAtividades/listagemSubAtividades.vue";
moment.locale("pt-br");
export default {
    components: { listagemSubAtividades },
    props: {
      data: Object,
    },
    data(){
        return{
            active: false
        }
    },
    methods: {
        moment: function (date) {
            return moment(date);
        },
        toggle() {
            this.active = !this.active;
        },
        closeMostrar() {
            this.active = false;
        }
    },
}
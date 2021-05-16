import moment from 'moment';
import listagemSubatividades from "./listagemSubatividades/listagemSubatividades.vue";
moment.locale("pt-br");
export default {
    components: { listagemSubatividades },
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
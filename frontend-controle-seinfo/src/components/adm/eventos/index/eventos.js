import axios from 'axios'
import moment from "moment";
moment.locale("pt-br");
//imports dos componentes
import cadastro from '../cadastro/cadastro.vue';

export default{
    components: { cadastro },
    data(){
        return{
            res: [],
            active: false,
        }
    },
    methods: {
        toggle() {
            this.active = !this.active;
        },
    }

}
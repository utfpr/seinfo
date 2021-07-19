import axios from '../../../../config/axiosConfig';
import moment from "moment";
moment.locale("pt-br");
//imports dos componentes
import cadastro from '../cadastro/cadastro.vue';
import listagem from '../listagem/listagem.vue';

export default{
    components: { cadastro, listagem },
    created(){
        axios
            .get("/api/atividades/")
            .then((response) => {
                this.res = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    },
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
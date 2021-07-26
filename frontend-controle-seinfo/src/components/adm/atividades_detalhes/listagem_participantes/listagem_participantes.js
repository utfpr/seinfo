import axios from '../../../../config/axiosConfig';
import moment from "moment";
moment.locale("pt-br");
export default {
    props: {
        idEvento: String,
        idAtividade: String,
    },
    async mounted(){
        await axios.get(`/api/inscAtv/${this.idEvento}/${this.idAtividade}`)
            .then((response) => {
                this.participantes = response.data;
            })
            .catch(function (error) {
                console.log(error);
        });
    },
    method: {
        moment: function (date) {
            return moment(date);
        },
    },
    data(){
        return {
            participantes: [],
        }
    }
}
import moment from 'moment';
import axios from '../../../../config/axiosConfig';

export default {
    props: {
        modalData: Object,
    },
    mounted() {
    },
    methods: {
        moment: function (date) {
            return moment(date);
        },
        deletar() {
            console.log("ID " + this.modalData.idAtividade);
            axios
                .delete(
                    "/api/atividade/" +
                    this.modalData.idAtividade +
                    "/" +
                    this.modalData.idEvento
                )
                .then((response) => {
                    console.log("Deletou!");
                    console.log(response);
                    this.$emit('deletarModal');
                });
        },
    },
}

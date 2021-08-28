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
            axios
                .delete(
                    "/api/atividade/" +
                    this.modalData.idAtividade +
                    "/" +
                    this.modalData.idEvento
                )
                .then(() => {
                    this.$emit('deletarModal');
                });
        },
    },
}

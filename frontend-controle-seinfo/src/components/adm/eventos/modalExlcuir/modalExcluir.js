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
        deletar(modalData) {
            axios
                .delete(
                    `/api/evento/${modalData.idEvento}`
                )
                .then(() => {

                    location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
            this.$emit('deletarModal', modalData);
        },
    },
}
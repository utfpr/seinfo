import moment from 'moment';
const axios = require('../../../../config/axiosConfig');

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
                .then(response => {

                    console.log("Deletou!");
                    console.log(response);
                    location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
            this.$emit('deletarModal', modalData);
        },
    },
}
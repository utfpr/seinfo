import moment from 'moment';
import axios from "axios";

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
                    `http://localhost:3000/api/evento/${modalData.idEvento}`
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
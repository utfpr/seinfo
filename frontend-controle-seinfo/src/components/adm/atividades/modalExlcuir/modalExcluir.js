import moment from 'moment';
const axios = require("axios");

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
            console.log("ID " + this.modalData.idAtividade);
            axios
                .delete(
                    "http://localhost:3000/api/atividade/" +
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

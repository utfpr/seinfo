import moment from 'moment';

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
        deletar(modalData){
            this.$emit('deletarModal', modalData);
        },
    },
}

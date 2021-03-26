export default {
    props: {
        data: Object,
    },
    mounted() {
    },
    methods: {
        moment: function (date) {
            return moment(date);
        },
        deletar(modalData){
            this.$emit('deletarModal', data);
        },
    },
}

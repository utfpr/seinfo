import moment from 'moment';

export default {
    props: {
      data: Object,
    },
    mounted(){
    },
    methods: {
        moment: function (date) {
            return moment(date);
        },
    }
}
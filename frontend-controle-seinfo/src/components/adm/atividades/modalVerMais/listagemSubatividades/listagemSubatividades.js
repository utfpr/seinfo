import moment from 'moment';

export default {
    props: {
      modalData: Object,
    },
    methods: {
        moment: function (date) {
            return moment(date);
        },
    }
}
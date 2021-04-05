import moment from 'moment';

export default {
    props: {
      data: Object,
    },
    methods: {
        moment: function (date) {
            return moment(date);
        },
    }
}
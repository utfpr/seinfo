const axios = require("axios");
import moment from 'moment';
moment.locale("pt-br");
let id = 0;
let flag = 0;
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
const axios = require('../../../../config/axiosConfig');

export default {
  props: {
    modalData: Object,
  },
  methods: {
    openModal(data) {
      this.modalData = data
      this.modalVisible = true
    },
    deletar_evento(pos) {
      axios.delete('/api/evento/' + pos)
        .then(response => {
          console.log("Deletou!");
          console.log(response);
        });

      location.reload();
    },
  },
  data() {
    return {
      modalVisible: false,
    }
  }
}
const axios = require('axios');

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
      console.log("ID " + pos);
      axios.delete('http://localhost:3000/api/evento/' + pos)
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
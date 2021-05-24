export default {
  props: {
    modalData: Object,
  },
  methods: {
    openModal(data) {
      this.modalData = data
      this.modalVisible = true
    },
  },
  data() {
    return {
      modalVisible: false,
    }
  }
}
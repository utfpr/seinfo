<template>
  <div>
    <div>
      <sweet-modal>This is an alert.</sweet-modal>
      <div v-if="isHidden">
        <vue-qrcode v-bind:value="urlPresenca" />
      </div>
      <button type="button" class="btn btn-primary" @click="fuck()">
        Gerar QR code
      </button>
    </div>
  </div>
</template>
<script>
import VueQrcode from "vue-qrcode";
import { SweetModal } from "sweet-modal-vue";

export default {
  components: {
    VueQrcode,
    SweetModal,
  },
  props: {
    idEvento: Number,
    idAtividade: Number,
    idAgenda: Number
  },
  data() {
    return {
      url: "",
      isHidden: false,
      urlPresenca: "",
    };
  },
  mounted: {},
  methods: {
    async fuck() {
      this.isHidden = !this.isHidden;
      this.urlPresenca = `localhost:8080/presenca/${this.idAgenda}/${this.idEvento}/${this.idAtividade}`;
    },
  },
};
</script>
<style scoped></style>

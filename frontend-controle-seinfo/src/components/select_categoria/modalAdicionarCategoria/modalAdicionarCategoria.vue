<template>
  <a-modal
    v-model="this.isModalVisible"
    title="Adicionar categoria"
    :footer="null"
    style="z-index: 999"
    @cancel="this.closeModal"
  >
    <form
      class="form"
      @submit.prevent="handleSubmit"
      method="post"
      enctype="multipart/form-data"
    >
      <div class="row justify-content-center">
        <a-form-item class="space_2">
          <label class="ant-form-item-required">Nome da Categoria:</label>
          <a-input
            maxlength="255"
            placeholder="Nome"
            name="nome"
            id="nome"
            v-model="nome"
            type="text"
            autocomplete="off"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
      </div>
      <div class="row justify-content-center">
        <button type="submit" class="btn btn-outline-primary mr-5">
          Cadastrar
        </button>
        <button
          type="reset"
          class="btn btn-outline-danger btn-sm-2 reset"
          @click="closeModal()"
          data-dismiss="modal"
        >
          Cancelar
        </button>
      </div>
    </form>
  </a-modal>
</template>

<script src="./modalAdicionarCategoria.js"></script>
<style scoped src="./modalAdicionarCategoria.css"></style>
<template>
  <div>
    <a-select v-model="idCategoria" defaultValue="..." style="z-index: 998">
      <div slot="dropdownRender" slot-scope="categoria" style="z-index: 998">
        <v-nodes :vnodes="categoria" />
        <a-divider style="margin: 4px 0" />
        <div
          class="ic"
          data-toggle="modal"
          data-target=".bd-example-modal-lg-adicionar-categoria"
          style="padding: 4px 8px; cursor: pointer"
          @mousedown="(e) => e.preventDefault()"
          @click="openModal"
        >
          <a-icon type="plus" /> Adicionar categoria
        </div>
      </div>

      <a-select-option
        style="z-index: 998"
        id="idCategoria"
        name="idCategoria"
        v-for="categoria in categorias"
        :key="categoria.idCategoria"
        :value="categoria.idCategoria"
      >
        {{ categoria.nome }}
      </a-select-option>
    </a-select>
    <ModalAdicionarCategoria :isModalVisible="this.isModalVisible" :closeModal="closeModal" :getCategorias="getCategorias" @created="handleModalCreate" />
  </div>
</template>

<script src="./selectCategoria.js"></script>
<style scoped src="./selectCategoria.css"></style>
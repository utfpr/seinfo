<template>
  <div
    class="modal fade bd-example-modal-lg-adicionar-categoria"
    role="dialog"
    aria-labelledby="myLargeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" 
    style="z-index:999">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Adicionar categoria
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
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
                data-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./modalAdicionarCategoria.js"></script>
<style scoped src="./modalAdicionarCategoria.css"></style>
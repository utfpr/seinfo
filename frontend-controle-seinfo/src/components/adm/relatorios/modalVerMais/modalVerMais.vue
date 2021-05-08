<template>
  <div
    class="modal fade bd-example-modal-lg-ver-mais"
    role="dialog"
    aria-labelledby="myLargeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ver Mais</h5>
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
          <label>ID: {{ modalData.idEvento }}</label>
          <br />
          <label>Nome: {{ modalData.nome }}</label>
          <br />
          <label>Descição: {{ modalData.descricao }}</label>
          <br />
          <label>Status: {{ modalData.status }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./modalVerMais.js" />

<style src="./modalVerMais.css" />

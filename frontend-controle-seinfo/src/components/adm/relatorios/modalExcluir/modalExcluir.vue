<template>
  <div
    class="modal fade bd-example-modal-lg-ver-excluir"
    role="dialog"
    aria-labelledby="myLargeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Excluir</h5>
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
          <h4>Voce realmente deseja excluir este item:</h4>
          <br />
          <label>ID: {{ modalData.idEvento }}</label>
          <br />
          <label>Nome: {{ modalData.nome }}</label>
          <br />
          <label>Descição: {{ modalData.descricao }}</label>
          <br />
          <label>Status: {{ modalData.status }}</label
          >,
          <br />
          <br />
          <a-button
            v-on:click="deletar_evento(modalData.idEvento)"
            type="danger"
            block
            >Eu desejo Excluir este item</a-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
 
<script src="./modalExcluir.js" />
<style src="./modalExcluir.css" />

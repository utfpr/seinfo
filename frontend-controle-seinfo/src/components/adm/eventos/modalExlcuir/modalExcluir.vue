<template>
        <!-- MODAL VER MAIS (EXCLUIR) -->
    <div
      class="modal fade bd-example-modal-lg-ver-excluir"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="false"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Excluir</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="text-align: center">
            <h4>Voce realmente deseja excluir este item?</h4>
            <br />
            <label>ID Evento: {{modalData.idEvento}}</label>
            <br />
            <label>Nome do Evento: {{modalData.nome}}</label>
            <br />
            <label>Local do Evento: {{modalData.local_eve}}</label>
            <br />
            <label>Data de Início: {{modalData.data_ini_eve}}</label>
            <br />
            <label>Data de Fim: {{modalData.data_fim_eve}}</label>
            <br />
            <label>Horário de Início: {{modalData.hora_ini_eve}}</label>
            <br />
            <label>Horário de Fim: {{modalData.hora_fim_eve}}</label>
            <br />      
            <label>Status: {{modalData.status}}</label>
            <br />
            <label>Descrição: {{modalData.descricao}}</label>
            <br />
            <a-button
              v-on:click="deletar(modalData)"
              type="danger"
              block
            >Excluir item</a-button>
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL VER MAIS (EXCLUIR) -->
</template>

<script src="./modalExcluir.js"/>
<style scoped src="./modalExcluir.css"/>
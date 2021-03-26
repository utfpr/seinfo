<template>
  <!-- MODAL VER MAIS (EXCLUIR) -->
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
        <div class="modal-body" style="text-align: center">
          <h4>Voce realmente deseja excluir este item?</h4>
          <br />
          <label>ID Atividade: {{ modalData.idAtividade }}</label>
          <br />
          <label>Valor: R$ {{ modalData.valor }}</label>
          <br />
          <label
            >Data de Início:
            {{ moment(modalData.data_ini_atv).format("DD/MM/YYYY") }}</label
          >
          <br />
          <label
            >Data de Fim:
            {{ moment(modalData.data_fim_atv).format("DD/MM/YYYY") }}</label
          >
          <br />
          <label>Horário de Início: {{ modalData.hora_ini_atv }}</label>
          <br />
          <label>Horário de Fim: {{ modalData.hora_fim_atv }}</label>
          <br />
          <label
            >Horas de Participação: {{ modalData.horasParticipacao }}</label
          >
          <br />
          <label>Quantidade de Vagas: {{ modalData.quantidadeVagas }}</label>
          <br />
          <label>Local da Atividade: {{ modalData.local_atv }}</label>
          <br />
          <label>Evento: {{ modalData.nomeEvento }}</label>
          <br />
          <label>Categoria: {{ modalData.idCategoria }}</label>
          <br />
          <label>Protagonista: {{ modalData.idPessoa }}</label>
          <br />
          <label>Descrição: {{ modalData.descricao }}</label>
          <br />
          <a-button v-on:click="deletar(modalData)" type="danger" block
            >Eu desejo Excluir este item</a-button
          >
        </div>
      </div>
    </div>
  </div>
  <!-- MODAL VER MAIS (EXCLUIR) -->
</template>

<script src="./modalExcluir.js"/>
<style scoped src="./modalExcluir.css"/>
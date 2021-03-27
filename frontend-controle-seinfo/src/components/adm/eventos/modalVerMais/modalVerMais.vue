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
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="text-align: center">
            <label>ID Evento: {{data.idEvento}}</label>
            <br />
            <label>Nome do Evento: {{ data.nome }}</label>
            <br />
            <label>Local do Evento: {{ data.local_eve }}</label>
            <br />
            <label>Data de Início: {{ data.data_ini_eve }}</label>
            <br />
            <label>Data de Fim: {{ data.data_fim_eve }}</label>
            <br />
            <label>Horário de Início: {{ data.hora_ini_eve }}</label>
            <br />
            <label>Horário de Fim: {{ data.hora_fim_eve }}</label>
            <br />      
            <label>Status: {{ data.status }}</label>
            <br />
            <label>Descrição: {{data.descricao }}</label>
            <br />
          </div>
        </div>
      </div>
    </div>
</template>


<script src="./modalVerMais.js">
                                  
<style src="./modalVerMais.css" />
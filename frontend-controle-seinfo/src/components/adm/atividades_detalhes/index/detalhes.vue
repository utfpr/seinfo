<template>
  <div>
    <br/>
    <div class="justify-content-center Center col-md-6 box">
      <div class="line">
        <label>ID Atividade: {{ dataDetalhes.idAtividade }}</label>
      </div>
      <div class="row justify-content-center form-group">
        <div class="col-md-6">
          <br/>
          <label>Categoria: {{ dataDetalhes.nomeCategoria }}</label>
          <br/>
          <label>Data de Início: {{ moment(dataDetalhes.data_ini_atv).format("DD/MM/YYYY") }}</label>
          <br/>
          <label>Horário de Início: {{ dataDetalhes.hora_ini_atv }}</label>
          <br/>
          <label>Horas de Participação: {{ dataDetalhes.horasParticipacao }}</label>
          <br/>
          <label>Protagonista: {{ dataDetalhes.idPessoa }}</label>
          <br/>
          <label>Local da Atividade: {{ dataDetalhes.local_atv }}</label>
          <br/>
        </div>
        <div class="col-md-6">
          <br/>
          <label>Evento: {{ dataDetalhes.nomeEvento }}</label>
          <br/>
          <label>Data de Fim: {{ moment(dataDetalhes.data_fim_atv).format("DD/MM/YYYY") }}</label>
          <br/>
          <label>Horário de Fim: {{ dataDetalhes.hora_fim_atv }}</label>
          <br/>
          <label>Quantidade de Vagas: {{ dataDetalhes.quantidadeVagas }}</label>
          <br/>
          <label>Valor: R$ {{ dataDetalhes.valor }}</label>
          <br/>
          <label>Descrição: {{ dataDetalhes.descricao }}</label>
        </div>
      </div>
    </div>
    <div>
      <listagemSubAtividades v-bind:modalData="this.dataDetalhes"/>
    </div>
  </div>
</template>

<script src="./detalhes.js" />
<style src="./detalhes.css" />
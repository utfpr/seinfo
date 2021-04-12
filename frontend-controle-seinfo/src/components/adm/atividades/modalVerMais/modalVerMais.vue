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
            <h5 class="modal-title" id="exampleModalLabel">
              Ver Mais
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
          <div class="modal-body" style="text-align: center">
            <label>ID Atividade: {{ data.idAtividade }}</label>
            <br />
            <label>Valor: R$ {{ data.valor }}</label>
            <br />
            <label
              >Data de Início:
              {{ moment(data.data_ini_atv).format("DD/MM/YYYY") }}</label
            >
            <br />
            <label
              >Data de Fim:
              {{ moment(data.data_fim_atv).format("DD/MM/YYYY") }}</label
            >
            <br />
            <label>Horário de Início: {{ data.hora_ini_atv }}</label>
            <br />
            <label>Horário de Fim: {{ data.hora_fim_atv }}</label>
            <br />
            <label
              >Horas de Participação: {{ data.horasParticipacao }}</label
            >
            <br />
            <label>Quantidade de Vagas: {{ data.quantidadeVagas }}</label>
            <br />
            <label>Local da Atividade: {{ data.local_atv }}</label>
            <br />
            <label>Evento: {{ data.nomeEvento }}</label>
            <br />
            <label>Categoria: {{ data.idCategoria }}</label>
            <br />
            <label>Protagonista: {{ data.idPessoa }}</label>
            <br />
            <label>Descrição: {{ data.descricao }}</label>
            <br />
          </div>
          <div class="row justify-content-center">
            <router-link :to="{name: 'detalhes', params:{idAtividade:data.idAtividade, idEvento:data.idEvento, data:data}}"
              data-dismiss="modal"
              class="router-link">
              <button type="button" class="btn">Detalhes da atividade</button>
            </router-link>
          </div>
          <br/>
        </div>
      </div>
    </div>
</template>
<script src="./modalVerMais.js"/>
<style scoped src="./modalVerMais.css"/>
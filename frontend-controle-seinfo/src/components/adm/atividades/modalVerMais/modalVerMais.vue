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
              @click="closeMostrar"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="text-align: center">
            <br/>
            <label>ID Atividade: {{ data.idAtividade }}</label>
            <div class="row justify-content-center form-group">
              <div class="col-md-6">
                <label>Protagonista: {{ data.idPessoa }}</label>
                <br/>
                <label>Horas de Participação: {{ data.horasParticipacao }}</label>
                <br/>
                <label>Data de Início: {{ moment(data.data_ini_atv).format("DD/MM/YYYY") }}</label>
                <br/>
                <label>Horário de Início: {{ data.hora_ini_atv }}</label>
                <br/>
                <label>Data de Fim: {{ moment(data.data_fim_atv).format("DD/MM/YYYY") }}</label>
                <br/>
                <label>Horário de Fim: {{ data.hora_fim_atv }}</label>
                <br/>
              </div>
              <div class="col-md-6">
                <label>Valor: R$ {{ data.valor }}</label>
                <br/>
                <label>Quantidade de Vagas: {{ data.quantidadeVagas }}</label>
                <br/>
                <label>Local da Atividade: {{ data.local_atv }}</label>
                <br/>
                <label>Categoria: {{ data.idCategoria }}</label>
                <br/>
                <label>Evento: {{ data.nomeEvento }}</label>
                <br/>
                <label>Descrição: {{ data.descricao }}</label>
                <br />
              </div>
            </div>
          </div>
          <div style="text-align: center">
            <a-button type="button" class="btn" @click="toggle">Mostrar Subatividades</a-button>
            <slide-up-down :active="this.active">
              <div>
                <listagemSubatividades v-bind:modalData="this.data"/>
              </div>
            </slide-up-down>
          </div>
          <br />
          <div class="row justify-content-center">
            <router-link :to="{name: 'detalhes', params:{idEvento:data.idEvento, idAtividade:data.idAtividade, data:data}}"
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
<template>
  <div>
    <div class="Participantes">
      Participantes inscritos:
    </div>
    <div v-if="participantes.length == 0">
      <div class="notfound">
        Não tem participantes inscritos nessa atividade.
      </div>
    </div>
    <div class="">
      <div class="row border border-dark">
        <div class="col-3 border border-dark" style="text-align: center">
          Nome
        </div>
        <div class="col-3 border border-dark" style="text-align: center">
          Email
        </div>
        <div class="col-3 border border-dark" style="text-align: center">
          Data Inscrição
        </div>
        <div class="col-3 border border-dark" style="text-align: center"></div>
      </div>
      <div
        v-for="listData in participantes"
        class="row"
        :key="listData.dataInscricao"
      >
        <div class="col-3 border border-dark">
          {{ listData.eventoInsc.pessoaInsc.nome }}
        </div>
        <div class="col-3 border border-dark">
          {{ listData.eventoInsc.pessoaInsc.email }}
        </div>
        <div class="col-3 border border-dark">
          {{ listData.eventoInsc.dataInscricao }}
        </div>
        <div class="col-3 border border-dark">
          <ButaoDePresencaAtividade
            v-bind:idEvento="idEvento"
            v-bind:idAtividade="idAtividade"
            v-bind:idAgenda="idAgenda"
            v-bind:cpf="listData.eventoInsc.pessoaInsc.CPF"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./listagem_participantes.js" />
<style src="./listagem_participantes.css" />

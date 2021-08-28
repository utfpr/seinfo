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
    <table class="table text-center">
      <thead class="thead-dark">
        <tr>
          <th class="col-3">Nome</th>
          <th class="col-3">Email</th>
          <th class="col-3">Data Inscrição</th>
          <th class="col-1"></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">
            {{ listData.eventoInsc.pessoaInsc.nome }}
          </th>
          <th>
            {{ listData.eventoInsc.pessoaInsc.email }}
          </th>
          <th>
            {{ listData.eventoInsc.dataInscricao }}
          </th>
          <th>
            <ButaoDePresencaAtividade
              v-bind:idEvento="idEvento"
              v-bind:idAtividade="idAtividade"
              v-bind:idAgenda="idAgenda"
              v-bind:cpf="listData.eventoInsc.pessoaInsc.CPF"
            />
          </th>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./listagem_participantes.js" />
<style src="./listagem_participantes.css" />

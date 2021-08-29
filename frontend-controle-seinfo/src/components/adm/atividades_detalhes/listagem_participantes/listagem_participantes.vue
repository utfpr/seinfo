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

      <tbody v-for="res in participantes" :key="res.CPF">
        <tr>
          <th scope="row">
            {{ res.eventoInsc.pessoaInsc.nome }}
          </th>
          <th>
            {{ res.eventoInsc.pessoaInsc.email }}
          </th>
          <th>
            {{ res.eventoInsc.dataInscricao }}
          </th>
          <th>
            <ButaoDePresencaAtividade
              v-bind:idEvento="idEvento"
              v-bind:idAtividade="idAtividade"
              v-bind:idAgenda="idAgenda"
              v-bind:cpf="res.CPF"
            />
          </th>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./listagem_participantes.js" />
<style src="./listagem_participantes.css" />

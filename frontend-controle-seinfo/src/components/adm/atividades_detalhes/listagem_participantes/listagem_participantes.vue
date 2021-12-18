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
        <tr v-for="res in participantes" :key="res.CPF">
          <th scope="row">
            {{ res.eventoInsc.pessoaInsc.nome }}
          </th>
          <th>
            {{ res.eventoInsc.pessoaInsc.email }}
          </th>
          <th>
            {{
              moment(res.eventoInsc.dataInscricao).format(
                "D [de] MMMM [de] YYYY"
              )
            }}
          </th>
          <th>
            <ButaoDePresencaAtividade
              v-bind:presente="res.presente"
              v-bind:idEvento="res.idEvento"
              v-bind:idAtividade="res.idAtividade"
              v-bind:idAgenda="res.eventoInsc.eventoInsc.idAgenda"
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

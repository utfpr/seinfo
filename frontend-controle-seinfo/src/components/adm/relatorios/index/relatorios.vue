<template>
  <div>
    <a-select defaultValue="Selecione uma Opção" class="space">
      <a-select-option
        name="administradores"
        value="administradores"
        v-on:click="pegar_tabela('administradores')"
        >Administradores</a-select-option
      >
      <a-select-option
        name="alunos"
        value="alunos"
        v-on:click="pegar_tabela('alunos')"
        >Alunos</a-select-option
      >
      <a-select-option
        name="convidados"
        value="convidados"
        v-on:click="pegar_tabela('convidados')"
        >Convidados</a-select-option
      >
      <a-select-option
        name="eventos"
        value="eventos"
        v-on:click="pegar_tabela('eventos')"
        >Eventos</a-select-option
      >
      <a-select-option
        name="palestrantes"
        value="palestrantes"
        v-on:click="pegar_tabela('palestrantes')"
        >Palestrantes</a-select-option
      >
      <a-select-option
        name="ministrantes"
        value="ministrantes"
        v-on:click="pegar_tabela('ministrantes')"
        >Ministrantes</a-select-option
      >
    </a-select>
    <div id="list" class="row">
      <div class="table-responsive col-md-12">
        <table
          class="table table-striped"
          cellspacing="0"
          cellpadding="0"
          style="text-align: center"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Status</th>
              <th class="actions">Ações</th>
            </tr>
          </thead>
          <tbody v-for="res in res_localizar" :key="res.idEvento">
            <tr>
              <td>{{ res.idEvento }}</td>
              <td>{{ res.nome }}</td>
              <td>{{ res.descricao }}</td>
              <td>{{ res.status }}</td>
              <td class="actions">
                <button
                  type="button"
                  class="ic"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg-editar"
                  @click="openModal(res)"
                >
                  <a-icon type="edit" />
                </button>
                <button
                  type="button"
                  class="ic"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg-ver-excluir"
                  @click="openModal(res)"
                >
                  <a-icon type="delete" />
                </button>
                <button
                  type="button"
                  class="ic"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg-ver-mais"
                  @click="openModal(res)"
                >
                  <a-icon type="eye" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <modal-ver-mais v-bind:modalData="this.modalData" />
    <modal-editar v-bind:modalData="this.modalData" />
    <modal-excluir v-bind:modalData="this.modalData" />
  </div>
</template>

<script src="./relatorios.js" />
<style src="./relatorios.css" />
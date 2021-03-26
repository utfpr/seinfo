<template>
     
    <!-- Inicio da Listagem -->
    <div id="list" class="row">
      <div class="table-responsive">
        <table
          class="table table-striped"
          cellspacing="0"
          cellpadding="0"
          style="text-align: center;"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th style="text-align: left;">Nome</th>
              <th style="text-align: left;">Descrição</th>
              <th style="text-align: left;">Status</th>
              <th style="text-align: left;">ID Agenda</th>
              <th class="actions">Ações</th>
            </tr>
          </thead>
          <tbody v-for="resp in res" :key="resp.idEvento">
            <tr>
              <td>{{resp.idEvento}}</td>
              <td style="text-align: left;">{{resp.nome}}</td>
              <td style="text-align: left;">{{resp.descricao}}</td>
              <td style="text-align: left;">{{resp.status}}</td>
              <td style="text-align: left;">{{resp.idAgenda}}</td>
              <td class="actions">
                <a-tooltip placement="top">
                  <template slot="title">Ver Mais</template>
                  <a-button
                    class="ic"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg-ver-mais"
                    @click="openModal(resp)"
                  >
                    <a-icon type="eye" />
                  </a-button>
                </a-tooltip>
                <a-tooltip placement="top">
                  <template slot="title">Editar</template>
                  <a-button
                    class="ic"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg-editar"
                    @click="openModal(resp)"
                  >
                    <a-icon type="edit" />
                  </a-button>
                </a-tooltip>
                <a-tooltip placement="top">
                  <template slot="title">Excluir</template>
                  <a-button
                    class="ic"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg-ver-excluir"
                    @click="openModal(resp)"
                  >
                    <a-icon type="delete" />
                  </a-button>
                </a-tooltip>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
      <modal-ver-mais v-bind:data="this.modalData" />
    </div>
    <div>
      <modal-excluir v-bind:modalData="this.modalData" v-on:deletarModal="deletarModal"/>
    </div>
      </div>
    </div>

    <!-- Fim Listagem -->


</template>

<script src="./listagem.js"/>                
<style scoped src="./listagem.css"/>
<template>
    <div id="list" class="row">
      <div class="table-responsive">
        <table
          class="table table-striped"
          cellspacing="0"
          cellpadding="0"
          style="text-align: center"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th style="text-align: left">Evento</th>
              <th style="text-align: left">Título</th>
              <th style="text-align: left">Valor</th>
              <th style="text-align: left">Categoria</th>
              <th style="text-align: left">Vagas</th>
              <th style="text-align: left">Horas</th>
              <th class="actions">Ações</th>
            </tr>
          </thead>
          <tbody v-for="resp in res" :key="resp.idAtividade">
            <tr>
              <td>{{ resp.idAtividade }}</td>
              <td style="text-align: left">
                ID:{{ resp.idEvento }} | {{ getEvtNome(resp.idEvento) }}
              </td>
              <td style="text-align: left">{{ resp.titulo }}</td>
              <td style="text-align: left">R$ {{ resp.valor }}</td>
              <td style="text-align: left">
                ID:{{ resp.categoriaAtv.idCategoria }} |
                {{ resp.categoriaAtv.nome }}
              </td>
              <td style="text-align: left">{{ resp.quantidadeVagas }}</td>
              <td style="text-align: left">
                {{ resp.horasParticipacao.slice(0, 5) }}
              </td>
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
      </div>
        <modal-ver-mais @data="this.modalData" @evento="this.evento"/>
    </div>
</template>

<script src="./listagem.js"/>
<style scoped src="./listagem.css"/>
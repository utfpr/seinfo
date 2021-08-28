<template>
  <div style="text-align: center row">
    <div class="">
      <h5>
        <b>
          SubAtividades:
        </b>
      </h5>
    </div>
    <div>
      <slide-up-down :active="remove">
        <div class="alert alert-danger" role="alert">
          <h5>Deseja realmente Excluir essa subatividade?</h5>
          <div class="row justify-content-center">
            <button
              type="edit"
              class="btn btn-outline-primary mr-5"
              v-on:click="excluir"
            >
              Excluir
            </button>
            <button
              type="reset"
              class="btn btn-outline-danger btn-sm-2 reset"
              v-on:click="toggleExcluir"
            >
              Cancelar
            </button>
          </div>
        </div>
      </slide-up-down>
    </div>
    <div id="list" class="dropdown">
      <div
        v-for="subatividades in modalData.atvAgenda"
        :key="subatividades.idAgenda"
      >
        <div class="row border border-dark">
          <div class="col-1 border border-dark">ID</div>
          <div class="col-2 border border-dark">Data Inicio</div>
          <div class="col-2 border border-dark">Hora Inicio</div>
          <div class="col-2 border border-dark">Data Fim</div>
          <div class="col-2 border border-dark">Hora Fim</div>
          <div class="col-2 border border-dark">Local</div>
          <div class="col-1 border border-dark"></div>
        </div>
        <div class="row border border-dark">
          <div class="col-1 border border-dark">
            {{ subatividades.idAgenda }}
          </div>
          <div class="col-2 border border-dark">
            {{ moment(subatividades.dataHoraInicio).format("DD/MM/YYYY") }}
          </div>
          <div class="col-2 border border-dark">
            {{ moment(subatividades.dataHoraInicio).format("HH:mm") }}
          </div>
          <div class="col-2 border border-dark">
            {{ moment(subatividades.dataHoraFim).format("DD/MM/YYYY") }}
          </div>
          <div class="col-2 border border-dark">
            {{ moment(subatividades.dataHoraFim).format("HH:mm") }}
          </div>
          <div class="col-2 border border-dark">
            {{ subatividades.local }}
          </div>
          <div class="col-1 border border-dark">
            <a-tooltip placement="top">
              <template slot="title">Excluir</template>
              <a-button
                style="background: divansparent; border: none; cursor: pointer; color: black;"
                @click="toggleExcluir(subatividades)"
              >
                <a-icon type="delete" />
              </a-button>
            </a-tooltip>
          </div>
        </div>
        <div>
          <listagemParticipantes
            v-bind:idEvento="modalData.idEvento.toString()"
            v-bind:idAtividade="modalData.idAtividade.toString()"
            v-bind:idAgenda="subatividades.idAgenda.toString()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./listagemSubAtividades.js" />
<style scoped src="./listagemSubAtividades.css"></style>

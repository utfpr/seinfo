<template>
  <div style="text-align: center row">
    <h2 class="subatividades-title">SubAtividades:</h2>
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
        <div class="p-3 text-left">
          <a-tooltip placement="top">
            <template slot="title">Excluir</template>
            <a-button 
              style="background: divansparent; border: none; cursor: pointer; color: black;"
              @click="toggleExcluir(subatividades)"
            >
              <a-icon type="delete" />
            </a-button>
          </a-tooltip>

          <span class="subatividade">Subatividade {{subatividades.idAgenda}}</span>
          <span>
            dia {{moment(subatividades.dataHoraInicio).format("DD/MM/YYYY")}} 
            das {{moment(subatividades.dataHoraInicio).format("HH:mm")}} às 
            {{moment(subatividades.dataHoraInicio).format("HH:mm")}}
          </span>
          <div>
          <span class="subatividade-local-title">
            Local:
          </span>
          <span>{{ subatividades.local }}</span>

          </div>
          <!-- <table class="table text-center">
            <thead class="thead-dark">
              <tr>
                <th class="col-1">ID</th>
                <th class="col-2">Data Inicio</th>
                <th class="col-2">Hora Inicio</th>
                <th class="col-2">Hora Fim</th>
                <th class="col-2">Local</th>
                <th class="col-1"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  {{ subatividades.idAgenda }}
                </th>
                <th>
                  {{
                    moment(subatividades.dataHoraInicio).format("DD/MM/YYYY")
                  }}
                </th>
                <th>
                  {{ moment(subatividades.dataHoraInicio).format("HH:mm") }}
                </th>
                <th>
                  {{ moment(subatividades.dataHoraFim).format("HH:mm") }}
                </th>
                <th>
                  {{ subatividades.local }}
                </th>
                <th class="col-1 ">
                  
                </th>
              </tr>
            </tbody>
          </table> -->
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
  </div>
</template>

<script src="./listagemSubAtividades.js" />
<style scoped src="./listagemSubAtividades.css"></style>

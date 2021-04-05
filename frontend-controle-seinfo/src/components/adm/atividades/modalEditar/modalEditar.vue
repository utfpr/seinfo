<template>
     <div class="modal fade bd-example-modal-lg-editar" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form">
              <div class="row justify-content-center">
                <div class="row justify-content-center">
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Nome da Atividade:</label>
                    <a-input
                      maxlength="255"
                      placeholder="Nome"
                      v-model="data.titulo"
                      autocomplete="off"
                      type="text"
                    >
                      <a-icon
                        slot="prefix"
                        type="user"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                    </a-input>
                  </a-form-item>
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Valor da Atividade:</label>
                    <a-input
                      placeholder="Valor"
                      autocomplete="off"
                      v-model="data.valor"
                      type="number"
                      id="valor"
                      name="valor"
                      min="0"
                    >
                      <a-icon
                        slot="prefix"
                        type="dollar"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                    </a-input>
                  </a-form-item>
                </div>
                <div class="row justify-content-center">
                  <a-form-item
                    class="space"
                    :validate-status="onChangeDate() === 1 ? 'error' : ''"
                    :help="
                      onChangeDate() === 1
                        ? 'Data de Fim deve ser maior que a Data de Inicio'
                        : ''
                    "
                  >
                    <label class="ant-form-item-required">Data de Inicio:</label>
                    <a-input
                      v-model="data.data_ini_atv"
                      type="date"
                      id="data_ini_atv"
                      name="data_ini_atv"
                    >
                      <a-icon
                        slot="prefix"
                        type="calendar"
                        style="color: rgba(0, 0, 0, 0.25)"
                        :validate-status="onChangeDate() === 1 ? 'error' : ''"
                        :help="
                          onChangeDate() === 1
                            ? 'Data de Fim deve ser maior que a Data de Inicio'
                            : ''
                        "
                      />
                    </a-input>
                  </a-form-item>
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Data de Fim:</label>
                    <a-input
                      v-model="data.data_fim_atv"
                      type="date"
                      id="data_fim_atv"
                      name="data_fim_atv"
                    >
                      <a-icon
                        slot="prefix"
                        type="calendar"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                    </a-input>
                  </a-form-item>
                </div>
                <div class="row justify-content-center">
                  <a-form-item
                    class="space"
                    :validate-status="onChangeHour() === 2 ? 'error' : ''"
                    :help="
                      onChangeHour() === 2
                        ? 'Hora de Fim deve ser maior que a Hora de Inicio'
                        : ''
                    "
                  >
                    <label class="ant-form-item-required">Hora de Inicio:</label>
                    <a-input
                      v-model="data.hora_ini_atv"
                      type="time"
                      name="hora_ini_atv"
                      id="hora_ini_atv"
                    >
                      <a-icon
                        slot="prefix"
                        type="clock-circle"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                    </a-input>
                  </a-form-item>
                  <a-form-item
                    class="space"
                    :validate-status="onChangeHour() === 2 ? 'error' : ''"
                    :help="
                      onChangeHour() === 2
                        ? 'Hora de Fim deve ser maior que a Hora de Inicio'
                        : ''
                    "
                  >
                    <label class="ant-form-item-required">Hora de Fim:</label>
                    <a-input
                      id="hora_fim_atv"
                      v-model="data.hora_fim_atv"
                      type="time"
                      name="hora_fim_atv"
                    >
                      <a-icon
                        slot="prefix"
                        type="clock-circle"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                    </a-input>
                  </a-form-item>
                </div>
                <div class="row justify-content-center">
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Horas de Participação:</label>
                    <a-input
                      id="horasParticipacao"
                      v-model="data.horasParticipacao"
                      type="time"
                      name="horasParticipacao"
                    >
                      <a-icon
                        slot="prefix"
                        type="dashboard"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                      {{ data.horasParticipacao }}
                    </a-input>
                  </a-form-item>
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Quantidade de Vagas:</label>
                    <a-input
                      v-model="data.quantidadeVagas"
                      autocomplete="off"
                      placeholder="Quantidade de Vagas"
                      type="number"
                      min="0"
                    >
                      <a-icon
                        slot="prefix"
                        type="read"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                      {{ data.quantidadeVagas }}
                    </a-input>
                  </a-form-item>
                </div>
                <div class="row justify-content-center">
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Local da Atividade:</label>
                    <a-input
                      maxlength="255"
                      autocomplete="off"
                      placeholder="Local"
                      v-model="data.local_atv"
                      type="text"
                    >
                      <a-icon
                        slot="prefix"
                        type="home"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                    </a-input>
                  </a-form-item>
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Selecione o Evento:</label>
                    <a-select
                      v-model="nomeEvento"
                      defaultValue="..."
                    >
                      <a-select-option
                        id="idEvento"
                        name="idEvento"
                        v-for="evento in eventos"
                        :key="evento.idEvento"
                        :value="evento.idEvento">
                        {{ evento.nome }}
                      </a-select-option>
                    </a-select>
                  </a-form-item>
                </div>
                <div class="row justify-content-center"></div>
                <div class="row justify-content-center">
                  <a-form-item class="space">
          <label class="ant-form-item-required">Selecione uma Categoria:</label>
          <a-select v-model="idCategoria" defaultValue="...">
            <a-select-option
              id="idCategoria"
              name="idCategoria"
              v-for="categoria in categorias"
              :key="categoria.idCategoria"
              :value="categoria.idCategoria"
              >{{ categoria.nome }}</a-select-option
            >
          </a-select>
        </a-form-item>
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Selecione um Protagonista:</label>
                    <a-select
                      v-model="data.idPessoa"
                      defaultValue="..."
                    >
                      <a-select-option
                        id="idPessoa"
                        name="idPessoa"
                        v-for="protagonista in protagonistas"
                        :key="protagonista.aPes.idPessoa"
                        :value="protagonista.aPes.idPessoa"
                        >{{ protagonista.aPes.nome }}
                      </a-select-option>
                    </a-select>
                  </a-form-item>
                </div>
                <div class="row justify-content-center">
                  <a-form-item class="space_2">
                    <label class="ant-form-item-required">Descrição:</label>
                    <a-textarea
                      autocomplete="off"
                      maxlength="5000"
                      type="text"
                      v-model="data.descricao"
                      placeholder="Descrição"
                      :rows="4"
                      >{{ data.descricao }}</a-textarea
                    >
                  </a-form-item>
                </div>
              </div>
              <br />
              <div class="row justify-content-center">
                <button
                  type="submit"
                  v-on:click="patch(data)"
                  class="btn btn-outline-primary mr-5"
                >
                  Editar
                </button>
                <button
                  type="reset"
                  data-dismiss="modal"
                  class="btn btn-outline-danger btn-sm"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script src="./modalEditar.js"></script>
<style scoped src="./modalEditar.css"></style>
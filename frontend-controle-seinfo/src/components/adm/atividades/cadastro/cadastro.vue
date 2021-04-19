<template>
    <!-- Começo Inserção -->

      <div class="box">
        <form
          class="form"
          @submit.prevent="handleSubmit"
          method="post"
          enctype="multipart/form-data"
        >
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required">Selecione o Evento:</label>
              <a-select v-model="idEvento" defaultValue="...">
                <a-select-option
                  id="idEvento"
                  name="idEvento"
                  v-for="evento in eventos"
                  :key="evento.idEvento"
                  :value="evento.idEvento"
                  >{{ evento.nome }}</a-select-option
                >
              </a-select>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required">Nome da Atividade:</label>
              <a-input
                maxlength="255"
                placeholder="Nome"
                v-model="titulo"
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
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required">Data de Inicio:</label>
              <a-input
                v-model="data_ini_atv"
                type="date"
                id="data_ini_atv"
                name="data_ini_atv"
              >
                <a-icon
                  slot="prefix"
                  type="calendar"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required">Hora de Inicio:</label>
              <a-input
                v-model="hora_ini_atv"
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
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required">Data de Fim:</label>
              <a-input
                v-model="data_fim_atv"
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
            <a-form-item class="space">
              <label class="ant-form-item-required">Hora de Fim:</label>
              <a-input
                id="hora_fim_atv"
                v-model="hora_fim_atv"
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
              <label class="ant-form-item-required"
                >Horas de Participação:</label
              >
              <a-input
                id="horasParticipacao"
                v-model="horasParticipacao"
                type="time"
                name="horasParticipacao"
              >
                <a-icon
                  slot="prefix"
                  type="dashboard"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required">Quantidade de Vagas:</label>
              <a-input
                v-model="quantidadeVagas"
                autocomplete="off"
                type="number"
                min="0"
              >
                <a-icon
                  slot="prefix"
                  type="read"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
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
                v-model="local_atv"
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
              <label class="ant-form-item-required">Valor da Atividade:</label>
              <a-input
                placeholder="Valor"
                autocomplete="off"
                v-model="valor"
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
          <div class="row justify-content-center"></div>
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required"
                >Selecione uma Categoria:</label
              >
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
              <label class="ant-form-item-required"
                >Selecione um Protagonista:</label
              >
              <a-select v-model="idPessoa" defaultValue="...">
                <a-select-option
                  id="idPessoa"
                  name="idPessoa"
                  v-for="protagonista in protagonistas"
                  :key="protagonista.aPes.idPessoa"
                  :value="protagonista.aPes.idPessoa"
                  >{{ protagonista.aPes.nome }}</a-select-option
                >
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
                v-model="descricao"
                placeholder="Descrição"
                :rows="4"
              />
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <button type="submit" class="btn btn-outline-primary mr-5">
              Cadastrar
            </button>
            <button
              type="reset"
              class="btn btn-outline-danger btn-sm-2 reset"
              @click.prevent="onCancel"
              v-on:click="toggle"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    <!-- Fim Inserção -->
</template>

<script src="./cadastro.js"></script>
<style scoped src="./cadastro.css"></style>
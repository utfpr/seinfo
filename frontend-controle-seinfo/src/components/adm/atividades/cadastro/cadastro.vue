<template>
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
                  type="clock-circle"
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
                  v-for="(protagonista, i) in protagonistas"
                  :key="i"
                  :value="protagonista.CPF"
                  >{{ protagonista.nome }}</a-select-option
                >
              </a-select>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
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
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required">Data de Inicio:</label>
              <a-input
                placeholder="Data de Inicio"
                autocomplete="off"
                v-model="dataInicio"
                type="date"
                id="dataInicio"
                name="dataInicio"
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
                placeholder="Hora de Inicio"
                autocomplete="off"
                v-model="horaInicio"
                type="time"
                id="horaInicio"
                name="horaInicio"
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
            <a-form :form="form" class="space_2">
              <label class="ant-form-item-required">SubAtividades:</label>
              <a-form-item
                v-for="(k, index) in form.getFieldValue('keys')"
                :key="index"
                v-bind="index === 0 ? formItemLayout : formItemLayoutWithOutLabel"
                :label="index === 0 ? '' : ''"
                :required="false"
              >
                <a-input
                  type="date"
                  v-decorator="[
                    `data_inicio_subatividade[${index}]`,
                    { validateTrigger: ['change', 'blur'], preserve: true },
                  ]"
                  placeholder="Data Inicio da subAtividade "
                  style="width: 49%; margin-right: 4px"
                />
                <a-input
                  type="time"
                  v-decorator="[
                    `hora_inicio_subatividade[${index}]`,
                    { validateTrigger: ['change', 'blur'], preserve: true },
                  ]"
                  placeholder="Hora Inicio da subAtividade "
                  style="width: 50%; margin-right: 0px"
                />
                <a-input
                  type="date"
                  v-decorator="[
                    `data_fim_subatividade[${index}]`,
                    { validateTrigger: ['change', 'blur'], preserve: true },
                  ]"
                  placeholder="Data Fim da subAtividade "
                  style="width: 50%; margin-right: 0px"
                />
                <a-input
                  type="time"
                  v-decorator="[
                    `hora_fim_subatividade[${index}]`,
                    { validateTrigger: ['change', 'blur'], preserve: true },
                  ]"
                  placeholder="Hora Fim da subAtividade "
                  style="width: 50%; margin-right: 0px"
                />
                <a-input
                  v-decorator="[
                    `local_subatividade[${index}]`,
                    { validateTrigger: ['change', 'blur'], preserve: true },
                  ]"
                  placeholder="Local da subAtividade"
                />
                <a-button
                  type="default"
                  style="width: 50%"
                  @click="cancelSubatividade(index)"
                  >Cancelar SubAtividade
                </a-button>
                <hr />
              </a-form-item>
              <a-form-item v-bind="formItemLayoutWithOutLabel">
                <a-button type="default" style="width: 100%" @click="addSubatividade"
                  >Adicionar SubAtividade
                </a-button>
              </a-form-item>
            </a-form>
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
</template>

<script src="./cadastro.js"></script>
<style scoped src="./cadastro.css"></style>
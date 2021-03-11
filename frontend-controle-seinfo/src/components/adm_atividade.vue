// Eu não me orgulho nem um pouco das gambiarras que eu fiz aqui....
<template>
  <div class="title">
    <h5 style="text-align:center">Controle de Atividade</h5>
    <br />
    <a-button type="primary" class="teste" v-on:click="toggle">Inserir Atividade</a-button>

    <!-- Começo Inserção -->
    <slide-up-down :active="active">
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
                >{{evento.nome}}</a-select-option>
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
                <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required">Data de Inicio:</label>
              <a-input v-model="data_ini_atv" type="date" id="data_ini_atv" name="data_ini_atv">
                <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required">Hora de Inicio:</label>
              <a-input v-model="hora_ini_atv" type="time" name="hora_ini_atv" id="hora_ini_atv">
                <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required">Data de Fim:</label>
              <a-input v-model="data_fim_atv" type="date" id="data_fim_atv" name="data_fim_atv">
                <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required">Hora de Fim:</label>
              <a-input id="hora_fim_atv" v-model="hora_fim_atv" type="time" name="hora_fim_atv">
                <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required">Horas de Participação:</label>
              <a-input
                id="horasParticipacao"
                v-model="horasParticipacao"
                type="time"
                name="horasParticipacao"
              >
                <a-icon slot="prefix" type="dashboard" style="color:rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required">Quantidade de Vagas:</label>
              <a-input v-model="quantidadeVagas" autocomplete="off" type="number">
                <a-icon slot="prefix" type="read" style="color:rgba(0,0,0,.25)" />
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
                <a-icon slot="prefix" type="home" style="color:rgba(0,0,0,.25)" />
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
                <a-icon slot="prefix" type="dollar" style="color:rgba(0,0,0,.25)" />
              </a-input>
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
                >{{categoria.nome}}</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required">Selecione um Protagonista:</label>
              <a-select v-model="idPessoa" defaultValue="...">
                <a-select-option
                  id="idPessoa"
                  name="idPessoa"
                  v-for="protagonista in protagonistas"
                  :key="protagonista.idPessoa"
                  :value="protagonista.idPessoa"
                >{{protagonista.aPes.nome}}</a-select-option>
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
            <button type="submit" class="btn btn-outline-primary btn-sm">Cadastrar</button>
          </div>
        </form>
      </div>
      <br />
    </slide-up-down>
    <!-- Fim Inserção -->

    <!-- Listagem -->
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
              <th style="text-align: left;">Evento</th>
              <th style="text-align: left;">Título</th>
              <th style="text-align: left;">Valor</th>
              <th style="text-align: left;">Categoria</th>
              <th style="text-align: left;">Vagas</th>
              <th style="text-align: left;">Horas</th>
              <th class="actions">Ações</th>
            </tr>
          </thead>
          <tbody v-for="resp in res" :key="resp.idAtividade">
            <tr>
              <td>{{resp.idAtividade}}</td>
              <td style="text-align: left;">ID:{{resp.idEvento}} | {{getEvtNome(resp.idEvento)}}</td>
              <td style="text-align: left;">{{resp.titulo}}</td>
              <td style="text-align: left;">R$ {{resp.valor}}</td>
              <td style="text-align: left;">ID:{{resp.categoriaAtv.idCategoria}} | {{resp.categoriaAtv.nome}}</td>
              <td style="text-align: left;">{{resp.quantidadeVagas}}</td>
              <td style="text-align: left;">{{resp.horasParticipacao.slice(0, 5)}}</td>
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
    </div>
    <!-- Listagem -->

    <!-- MODAL VER MAIS (INICIO) -->
    <div
      class="modal fade bd-example-modal-lg-ver-mais"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ver Mais</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="text-align: center">
            <label>ID Atividade: {{modalData.idAtividade}}</label>
            <br />
            <label>Valor: R$ {{modalData.valor}}</label>
            <br />
            <label>Data de Início: {{moment(modalData.data_ini_atv).format("DD/MM/YYYY")}}</label>
            <br />
            <label>Data de Fim: {{moment(modalData.data_fim_atv).format("DD/MM/YYYY")}}</label>
            <br />
            <label>Horário de Início: {{modalData.hora_ini_atv}}</label>
            <br />
            <label>Horário de Fim: {{modalData.hora_fim_atv}}</label>
            <br />
            <label>Horas de Participação: {{modalData.horasParticipacao}}</label>
            <br />
            <label>Quantidade de Vagas: {{modalData.quantidadeVagas}}</label>
            <br />
            <label>Local da Atividade: {{modalData.local_atv}}</label>
            <br />
            <label>Evento: {{nomeEvento}}</label>
            <br />
            <label>Categoria: {{modalData.idCategoria}}</label>
            <br />
            <label>Protagonista: {{modalData.idPessoa}}</label>
            <br />
            <label>Descrição: {{modalData.descricao}}</label>
            <br />
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL VER MAIS (FIM) -->

    <!-- MODAL VER EDITAR (INICIO) -->
    <div
      class="modal fade bd-example-modal-lg-editar"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                      v-model="modalData.titulo"
                      autocomplete="off"
                      type="text"
                    >
                      <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Valor da Atividade:</label>
                    <a-input
                      placeholder="Valor"
                      autocomplete="off"
                      v-model="modalData.valor"
                      type="number"
                      id="valor"
                      name="valor"
                      min="0"
                    >
                      <a-icon slot="prefix" type="dollar" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>
                </div>
                <div class="row justify-content-center">
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Data de Inicio:</label>
                    <a-input
                      v-model="modalData.data_ini_atv"
                      type="date"
                      id="data_ini_atv"
                      name="data_ini_atv"
                      v-bind:disabled="true"
                    >
                      <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Data de Fim:</label>
                    <a-input
                      v-model="modalData.data_fim_atv"
                      type="date"
                      id="data_fim_atv"
                      name="data_fim_atv"
                      v-bind:disabled="true"
                    >
                      <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>
                </div>
                <div class="row justify-content-center">
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Hora de Inicio:</label>
                    <a-input
                      v-model="modalData.hora_ini_atv"
                      type="time"
                      name="hora_ini_atv"
                      id="hora_ini_atv"
                      v-bind:disabled="true"
                    >
                      <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Hora de Fim:</label>
                    <a-input
                      id="hora_fim_atv"
                      v-model="modalData.hora_fim_atv"
                      type="time"
                      name="hora_fim_atv"
                      v-bind:disabled="true"
                    >
                      <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>
                </div>
                <div class="row justify-content-center">
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Horas de Participação:</label>
                    <a-input
                      id="horasParticipacao"
                      v-model="modalData.horasParticipacao"
                      type="time"
                      name="horasParticipacao"
                    >
                      <a-icon slot="prefix" type="dashboard" style="color:rgba(0,0,0,.25)" />
                      {{modalData.horasParticipacao}}
                    </a-input>
                  </a-form-item>
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Quantidade de Vagas:</label>
                    <a-input v-model="modalData.quantidadeVagas" autocomplete="off" type="number">
                      <a-icon slot="prefix" type="read" style="color:rgba(0,0,0,.25)" />
                      {{modalData.quantidadeVagas}}
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
                      v-model="modalData.local_atv"
                      type="text"
                      v-bind:disabled="true"
                    >
                      <a-icon slot="prefix" type="home" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Selecione o Evento:</label>
                    <a-select
                      v-model="nomeEvento"
                      v-bind:disabled="true"
                      defaultValue="..."
                    >
                      <a-select-option
                        id="idEvento"
                        name="idEvento"
                        v-for="evento in eventos"
                        :key="evento.idEvento"
                        :value="evento.idEvento"
                      >{{evento.nome}}</a-select-option>
                    </a-select>
                  </a-form-item>
                </div>
                <div class="row justify-content-center"></div>
                <div class="row justify-content-center">
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Selecione uma Categoria:</label>
                    <a-select
                      v-model="modalData.idCategoria"
                      defaultValue="..."
                      v-bind:disabled="true"
                    >
                      <a-select-option
                        id="idCategoria"
                        name="idCategoria"
                        v-for="categoria in categorias"
                        :key="categoria.idCategoria"
                        :value="categoria.idCategoria"
                      >{{categoria.nome}}</a-select-option>
                    </a-select>
                  </a-form-item>
                  <a-form-item class="space">
                    <label class="ant-form-item-required">Selecione um Protagonista:</label>
                    <a-select
                      v-bind:disabled="true"
                      v-model="modalData.idPessoa"
                      defaultValue="..."
                    >
                      <a-select-option
                        id="idPessoa"
                        name="idPessoa"
                        v-for="protagonista in protagonistas"
                        :key="protagonista.idPessoa"
                        :value="protagonista.idPessoa"
                      >{{protagonista.aPes.nome}}</a-select-option>
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
                      v-model="modalData.descricao"
                      placeholder="Descrição"
                      :rows="4"
                    >{{modalData.descricao}}</a-textarea>
                  </a-form-item>
                </div>
              </div>
              <br />
              <div class="row justify-content-center">
                <button
                  type="submit"
                  v-on:click="patch(modalData)"
                  class="btn btn-outline-primary btn-sm"
                >Editar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL VER EDITAR (FIM) -->

    <!-- MODAL VER MAIS (EXCLUIR) -->
    <div
      class="modal fade bd-example-modal-lg-ver-excluir"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Excluir</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="text-align: center">
            <h4>Voce realmente deseja excluir este item?</h4>
            <br />
            <label>ID Atividade: {{modalData.idAtividade}}</label>
            <br />
            <label>Valor: R$ {{modalData.valor}}</label>
            <br />
            <label>Data de Início: {{moment(modalData.data_ini_atv).format("DD/MM/YYYY")}}</label>
            <br />
            <label>Data de Fim: {{moment(modalData.data_fim_atv).format("DD/MM/YYYY")}}</label>
            <br />
            <label>Horário de Início: {{modalData.hora_ini_atv}}</label>
            <br />
            <label>Horário de Fim: {{modalData.hora_fim_atv}}</label>
            <br />
            <label>Horas de Participação: {{modalData.horasParticipacao}}</label>
            <br />
            <label>Quantidade de Vagas: {{modalData.quantidadeVagas}}</label>
            <br />
            <label>Local da Atividade: {{modalData.local_atv}}</label>
            <br />
            <label>Evento: {{nomeEvento}}</label>
            <br />
            <label>Categoria: {{modalData.idCategoria}}</label>
            <br />
            <label>Protagonista: {{modalData.idPessoa}}</label>
            <br />
            <label>Descrição: {{modalData.descricao}}</label>
            <br />
            <a-button
              v-on:click="deletar(modalData)"
              type="danger"
              block
            >Eu desejo Excluir este item</a-button>
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL VER MAIS (EXCLUIR) -->
  </div>
</template>

<script>
const axios = require("axios");
import moment from "moment";
moment.locale("pt-br");
export default {
  props: {
    disabled: Boolean
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  created() {
    axios
      .get("http://localhost:3000/api/eventos")
      .then(response => {
        this.eventos = response.data;
        // console.log(this.eventos);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get("http://localhost:3000/api/categorias")
      .then(response => {
        this.categorias = response.data;
        // console.log(this.categorias);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get("http://localhost:3000/api/protagonistas")
      .then(response => {
        this.protagonistas = response.data;
        // console.log(this.protagonistas);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.pegar_tabela();
  },
  methods: {
    moment: function(date) {
      return moment(date);
    },
    pegar_tabela() {
      this.$router.replace("/adm/atividade");
      axios
        .get("http://localhost:3000/api/atividades/")
        .then(response => {
          // console.log(response.data);
          this.res = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getEvtNome(idEvt) {
      for (var i = 0; i < this.eventos.length; i++) {
        if (this.eventos[i].idEvento == idEvt) return this.eventos[i].nome;
      }
    },
    openModal(data) {
      this.pegar_tabela();
      this.modalData = data;
      this.modalVisible = true;
      // console.log(data);
      for (var i = 0; i < this.eventos.length; i++) {
        if (this.eventos[i].idEvento == this.modalData.idEvento) {
          this.nomeEvento = this.eventos[i].nome;
          this.modalData.local_atv = this.eventos[i].agendamento.local;
          var datahorainicio = this.eventos[i].agendamento.dataHoraInicio;
          var datahorafim = this.eventos[i].agendamento.dataHoraFim;
          this.modalData.data_ini_atv = moment(datahorainicio).format(
            "YYYY-MM-DD"
          );
          this.modalData.data_fim_atv = moment(datahorafim).format(
            "YYYY-MM-DD"
          );
          this.modalData.hora_ini_atv = moment(datahorainicio).format("HH:mm");
          this.modalData.hora_fim_atv = moment(datahorafim).format("HH:mm");
        }
      }
      for (var i = 0; i < this.protagonistas.length; i++) {
        if (this.modalData.idAtividade == this.protagonistas[i].idAtividade) {
          this.modalData.idPessoa = this.protagonistas[i].aPes.nome;
        }
      }
      this.modalData.idCategoria = data.categoriaAtv.nome;
      this.modalData.horasParticipacao = data.horasParticipacao.slice(0, 5);
    },
    handleSubmit(e) {
      var erros = [];
      if (!this.titulo) erros.push("Título é obrigatório!");
      if (!this.valor) erros.push("Valor é obrigatório!");
      if (!this.data_ini_atv) erros.push("Data de Início é obrigatório!");
      if (!this.data_fim_atv) erros.push("Data de Fim é obrigatório!");
      if (!this.hora_ini_atv) erros.push("Hora de Início é obrigatório!");
      if (!this.hora_fim_atv) erros.push("Hora de Fim é obrigatório!");
      if (!this.horasParticipacao)
        erros.push("Horas de Participação é obrigatório!");
      if (!this.quantidadeVagas)
        erros.push("Quantidade de Vagas é obrigatório!");
      if (!this.local_atv) erros.push("Local da Atividade é obrigatório!");
      if (!this.idEvento) erros.push("Selecione o Evento!");
      if (!this.idCategoria) erros.push("Selecione a Categoria!");
      if (!this.idPessoa) erros.push("Selecione o Protagonista!");
      if (!this.descricao) erros.push("Descrição é obrigatório!");
      e.preventDefault();
      if (!erros.length) {
        (this.obj_Resource.titulo = this.titulo),
          (this.obj_Resource.valor = this.valor),
          (this.obj_Resource.data_ini_atv = this.data_ini_atv),
          (this.obj_Resource.data_fim_atv = this.data_fim_atv),
          (this.obj_Resource.hora_ini_atv = this.hora_ini_atv),
          (this.obj_Resource.hora_fim_atv = this.hora_fim_atv),
          (this.obj_Resource.horasParticipacao = this.horasParticipacao),
          (this.obj_Resource.quantidadeVagas = this.quantidadeVagas),
          (this.obj_Resource.local_atv = this.local_atv),
          (this.obj_Resource.idEvento = this.idEvento),
          (this.obj_Resource.idCategoria = this.idCategoria),
          (this.obj_Resource.idPessoa = this.idPessoa),
          (this.obj_Resource.descricao = this.descricao),
          axios
            .post("http://localhost:3000/api/atividade", this.obj_Resource)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error.response);
            });
        this.$router.replace("/adm/atividade");
        location.reload();
      } else {
        alert(erros.join("\n"));
      }
    },
    patch(dados) {
      var erros = [];
      if (!this.modalData.titulo) erros.push("Título é obrigatório!");
      if (!this.modalData.valor) erros.push("Valor é obrigatório!");
      if (!this.modalData.horasParticipacao)
        erros.push("Horas de Participação é obrigatório!");
      if (!this.modalData.quantidadeVagas)
        erros.push("Quantidade de Vagas é obrigatório!");
      if (!this.modalData.descricao) erros.push("Descrição é obrigatório!");
      console.log(dados);
      if (!erros.length) {
        axios
          .patch(
            "http://localhost:3000/api/atividade/" + dados.idAtividade,
            dados
          )
          .then(response => {
            console.log("Editou!");
            console.log(response);
            this.$router.replace("/adm/atividade");
            location.reload();
          });
      } else {
        alert(erros.join("\n"));
        this.$router.replace("/adm/atividade");
      }
    },
    deletar(dados) {
      console.log("ID " + dados);
      axios
        .delete(
          "http://localhost:3000/api/atividade/" +
            dados.idAtividade +
            "/" +
            dados.idEvento
        )
        .then(response => {
          console.log("Deletou!");
          console.log(response);
          this.$router.replace("/adm/atividade");
          location.reload();
        });
    },
    toggle() {
      this.active = !this.active;
    }
  },
  data() {
    return {
      res: [],
      eventos: [],
      categorias: [],
      protagonistas: [],
      titulo: "",
      valor: "",
      data_ini_atv: "",
      data_fim_atv: "",
      hora_ini_atv: "",
      hora_fim_atv: "",
      horasParticipacao: "",
      quantidadeVagas: "",
      local_atv: "",
      idEvento: "",
      idCategoria: "",
      idPessoa: "",
      descricao: "",
      pegou: false,
      modalVisible: false,
      active: false,
      nomeEvento: "",
      nomeCat: "",
      modalData: {
        titulo: "",
        valor: "",
        data_ini_atv: "",
        data_fim_atv: "",
        hora_ini_atv: "",
        hora_fim_atv: "",
        horasParticipacao: "",
        quantidadeVagas: "",
        local_atv: "",
        idEvento: "",
        idCategoria: "",
        idPessoa: "",
        descricao: ""
      },
      obj_Resource: {
        titulo: "",
        valor: "",
        data_ini_atv: "",
        data_fim_atv: "",
        hora_ini_atv: "",
        hora_fim_atv: "",
        horasParticipacao: "",
        quantidadeVagas: "",
        local_atv: "",
        idEvento: "",
        idCategoria: "",
        idPessoa: "",
        descricao: ""
      }
    };
  }
};
</script>
<style scoped>
.box {
  border: solid 1px rgba(161, 161, 161, 0.233);
  margin-left: 25%;
  margin-top: 10px;
  margin-right: 25%;
  padding: 20px;
}

.title {
  margin-top: 30px;
}

.space {
  padding: 2px;
  width: 221px;
}

label {
  margin-bottom: 0;
}

.ant-form-item {
  margin-bottom: 0;
}

.space_2 {
  padding: 2px;
  width: 444px;
}

.ic {
  background: transparent;
  border: none;
  cursor: pointer;
  color: black;
}

.teste {
  /* position: absolute; */
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
<template>
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
              <a-form-item class="space_2">
                <label class="ant-form-item-required">Nome do Evento:</label>
                <input
                  type="text"
                  v-model="modalData.nome"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </a-form-item>
            </div>
            <div class="row justify-content-center">
              <a-form-item class="space">
                <label class="ant-form-item-required"
                  >Data de Inicio do Evento:</label
                >
                <a-input name="data_ini" type="date">
                  <a-icon
                    slot="prefix"
                    type="calendar"
                    style="color: rgba(0, 0, 0, 0.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item class="space">
                <label class="ant-form-item-required"
                  >Hora de Inicio do Evento:</label
                >
                <a-input name="hora_ini" type="time">
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
                  >Data de Fim do Evento:</label
                >
                <a-input name="data_fim" type="date">
                  <a-icon
                    slot="prefix"
                    type="calendar"
                    style="color: rgba(0, 0, 0, 0.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item class="space">
                <label class="ant-form-item-required"
                  >Hora de Fim do Evento:</label
                >
                <a-input name="hora_fim" type="time">
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
                <label class="ant-form-item-required">Local do evento:</label>
                <a-input
                  maxlength="255"
                  name="local_eve"
                  type="text"
                  placeholder="Local"
                >
                  <a-icon
                    slot="prefix"
                    type="home"
                    style="color: rgba(0, 0, 0, 0.25)"
                  />
                </a-input>
              </a-form-item>
              <a-form-item class="space">
                <label class="ant-form-item-required">Status do evento:</label>
                <a-select name="sta_evento" defaultValue="0">
                  <a-select-option value="1">Evento disponivel</a-select-option>
                  <a-select-option value="0"
                    >Evento indisponivel</a-select-option
                  >
                </a-select>
              </a-form-item>
            </div>

            <div class="row justify-content-center">
              <a-form-item class="space_2">
                <label class="ant-form-item-required">Descrição:</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="modalData.descricao"
                ></textarea>
              </a-form-item>
            </div>
            <div class="row justify-content-center">
              <a-form-item class="space_2">
                <a-input name="hora_part" value="0" type="hidden"></a-input>
              </a-form-item>
            </div>
            <div class="row justify-content-center">
              <button type="submit" class="btn btn-outline-primary btn-sm">
                Editar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./modalEditar.js" />
<style src="./modalEditar.css" />


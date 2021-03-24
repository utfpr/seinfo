<template>
  <div class="title">
    <h5 style="text-align:center">Cadastro de Evento</h5>
    <br />
  
   <!-- Inicio da inserção -->
   
      <div class="box">
        <form 
          class="form"  
          @submit.prevent="handleSubmit" 
          method="post" 
          encType="multipart/form-data" 
        >
         <div class="row justify-content-center">
            <a-form-item class="space_2">
              <label class="ant-form-item-required">Nome do Evento:</label>
              <a-input v-model="obj_Resource.nome" maxlength="255" placeholder="Nome" name="nome" type="text">
                <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space" :validate-status="onChangeDate() === 1 ? 'error' : ''"
            :help="onChangeDate() === 1 ? 'Data de Fim deve ser maior que a Data de Inicio' : ''"
            >
              <label class="ant-form-item-required">Data de Inicio do Evento:</label>
              <a-input v-model="obj_Resource.data_ini" name="data_ini" type="date">
                <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item class="space" 
              :validate-status="onChangeHour() === 2 ? 'error' : ''"
              :help="
              onChangeHour() === 2
                ? 'Hora de Fim deve ser maior que a Hora de Inicio'
                : ''
              ">
              <label class="ant-form-item-required">Hora de Inicio do Evento:</label>
              <a-input v-model="obj_Resource.hora_ini" name="hora_ini" type="time">
                <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space" :validate-status="onChangeDate() === 1 ? 'error' : ''"
            :help="onChangeDate() === 1 ? 'Data de Fim deve ser maior que a Data de Inicio' : ''">
              <label class="ant-form-item-required">Data de Fim do Evento:</label>
              <a-input v-model="obj_Resource.data_fim" name="data_fim" type="date">
                <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item class="space" 
              :validate-status="onChangeHour() === 2 ? 'error' : ''"
              :help="
                onChangeHour() === 2
                ? 'Hora de Fim deve ser maior que a Hora de Inicio'
                : ''
              ">
              <label class="ant-form-item-required">Hora de Fim do Evento:</label>
              <a-input v-model="obj_Resource.hora_fim" name="hora_fim" type="time">
                <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space">
              <label class="ant-form-item-required">Local do evento:</label>
              <a-input v-model="obj_Resource.local_eve" maxlength="255" name="local_eve" type="text" placeholder="Local">
                <a-icon slot="prefix" type="home" style="color:rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item class="space">
              <label class="ant-form-item-required">Status do evento:</label>
              <a-select v-model="obj_Resource.select_status" name="select_status" defaultValue="0">
                <a-select-option value="1">Evento disponivel</a-select-option>
                <a-select-option value="0">Evento indisponivel</a-select-option>
              </a-select>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form :form="form"  class="space_2"> 
              <label class="ant-form-item-required">Lotes:</label>
              <a-form-item
                v-for="(k, index) in form.getFieldValue('keys')"
                :key="k"
                v-bind="index === 0 ? formItemLayout : formItemLayoutWithOutLabel"
                :label="index === 0 ? '' : ''"
                :required="false"
              >
              <a-input type="date" v-decorator="[`data_inicio_lote[${k}]`, {validateTrigger: ['change', 'blur'],preserve: true}]" placeholder="Data Inicio do Lote " style="width: 49%; margin-right: 4px"/>
              <a-input type="date" v-decorator="[`data_fim_lote[${k}]`, {validateTrigger: ['change', 'blur'],preserve: true}]" placeholder="Data Fim do Lote " style="width: 50%; margin-right: 0px"/>
              <a-input v-decorator="[`valor_lote[${k}]`, {validateTrigger: ['change', 'blur'],preserve: true}]" placeholder="Valor do Lote R$:00,0" />
              <hr/>
              </a-form-item>
              <a-form-item v-bind="formItemLayoutWithOutLabel">
                <a-button type="default" style="width: 100%" @click="add">Adicionar Lote</a-button>
              </a-form-item>
            </a-form>
            </div>
            <!--
            <div class="row justify-content-center" >
              <a-form-item class="space_2" >
                <label class="ant-form-item-required">Imagem do evento:</label>
                <a-input v-model="obj_Resource.urlImagem" name="urlImagem"  type="file" class="">
                </a-input>
              </a-form-item>
            </div> !-->
            <div class="row justify-content-center">
              <a-form-item class="space_2">
                <label class="ant-form-item-required">Descrição:</label>
                <a-textarea v-model="obj_Resource.descricao"
                  maxlength="5000"
                  type="text"
                  name="descricao"
                  placeholder="Descrição"
                  :rows="4"
                />
              </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space_2">
              <a-input name="hora_part" value="0" type="hidden"></a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <button type="submit" class="btn btn-outline-primary btn-sm  mr-5">Cadastrar</button>
            <button type="reset" data-dismiss="modal" class="btn btn-outline-danger btn-sm-2" @click.prevent="onCancel" v-on:click="toggle">Cancelar</button>
          </div>
        </form>
      </div>
      <br />
    
    <!-- Fim da Inserção -->
    

  </div>

</template>

<script src="./cadastro.js"/>
                
<style src="./cadastro.css"/>

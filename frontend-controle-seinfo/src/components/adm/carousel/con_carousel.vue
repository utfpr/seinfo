<template>
  <div class="title">
    <h5 style="text-align:center">Imagem de Carousel</h5>
    <div class="box">
      <form
        class="form"
        @submit.prevent="handleSubmit"
        method="post"
        encType="multipart/form-data"
      >
        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <label class="ant-form-item-required">Cadastrar Imagem:</label>
            <a-input name="urlImagem" accept="image/*" type="file" @change="imageChange($event.target.files)" />
          </a-form-item>

          <a-form-item class="space">
            <label class="ant-form-item-required">Status da Imagem:</label>
            <select name="select_status" :value="requestData.status" v-model="requestData.status">
              <option value="1">Disponivel</option>
              <option value="0">Indisponivel</option>
            </select>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <button type="submit" class="btn btn-outline-primary btn-sm">Cadastrar</button>
        </div>
      </form>
    </div>
    
  <div>
    <table
      class="table table-striped"
      cellspacing="0"
      cellpadding="0"
      style="text-align: center;"
      >

        <thead>
          <tr>
            <th>Imagem</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody v-for="resp in carrossel" :key="resp.idCarrossel">
          <tr class="linhaCarrossel">
            <td><img class="imgCarrossel" :src="resp.Imagem.url" alt=""></td>
            <td> <select @change="handleChangeStatus($event.target.value, resp.idCarrossel)" name="select_status" :value="resp.status" :id="resp.idCarrossel">
              <option value="1">Disponivel</option>
              <option value="0">Indisponivel</option>
            </select>
            </td>
            <td>
              <div class="row justify-content-center">
                <button type="button" v-on:click="deleteCarrossel(resp.idCarrossel)" class="btn btn-outline-primary btn-sm">DELETAR</button>
              </div>
            </td>
          </tr>

        </tbody>




    </table>
    
  </div>
  </div>
</template>

<script src="./con_carousel.js"/>

<style scoped src="./con_carousel.css" />
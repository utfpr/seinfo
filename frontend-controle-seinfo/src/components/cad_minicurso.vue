<template>
    <div class="box">
    <h3>Cadastro de Minicursos</h3> 
      <form class="form" action="http://localhost:3000/evento" method="post">
        <div class="form-row justify-content-center">
          <div class="form-group col-md-5">
            <label for="nome" title="Nome do Minicurso:" class="ant-form-item-required">Nome do Minicurso:</label>
            <a-input placeholder="Nome:"/>
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="form-group col-md-5">
            <label for="value:" title="Valor" class="ant-form-item-required">Valor:</label><br />
            <a-input-number
            :defaultValue="0"
            :formatter="value => `R$: ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
            :parser="value => value.replace(/\$\s?|(,*)/g, '')"
            @change="onChange"
            />
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="form-group col-md-5">
            <label for="descricao:" title="Descrição" class="ant-form-item-required">Descrição:</label><br />
            <a-textarea placeholder="Basic usage" :rows="4"/>
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="form-group col-md-5">
            <label for="descricao:" title="Descrição" class="ant-form-item-required">Descrição:</label><br />
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="form-group col-md-5">
            <label for="descricao:" title="Descrição" class="ant-form-item-required">Data e Hora:</label><br />
            <a-range-picker
            :defaultValue="[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]"
            :format="dateFormat"
            />
            <a-time-picker :defaultValue="moment('12:08', 'HH:mm')" format="HH:mm" />
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import moment from 'moment';
export default {
  data(){
    return {
      dateFormat: 'YYYY/MM/DD',
      monthFormat: 'YYYY/MM',
    }
  },
  methods: {
    moment,
  }
}
</script>
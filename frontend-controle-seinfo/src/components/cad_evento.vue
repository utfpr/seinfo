<template>
  <div class="title">
    <h5 style="text-align:center">Cadastro de Evento</h5>
    <div class="box">
      <form class="form" action="http://localhost:3000/api/evento" @submit="handleSubmit" method="post">
        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <label class="ant-form-item-required">Nome do Evento:</label>
            <a-input maxlength="255" placeholder="Nome" name="nome" type="text">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space">
            <label class="ant-form-item-required">Data de Inicio do Evento:</label>
            <a-input name="data_ini" type="date">
              <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item class="space">
            <label class="ant-form-item-required">Hora de Inicio do Evento:</label>
            <a-input name="hora_ini" type="time">
              <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space">
            <label class="ant-form-item-required">Data de Fim do Evento:</label>
            <a-input name="data_fim" type="date">
              <a-icon slot="prefix" type="calendar" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item class="space">
            <label class="ant-form-item-required">Hora de Fim do Evento:</label>
            <a-input name="hora_fim" type="time">
              <a-icon slot="prefix" type="clock-circle" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space">
            <label class="ant-form-item-required">Local do evento:</label>
            <a-input maxlength="255" name="local_eve" type="text" placeholder="Local">
              <a-icon slot="prefix" type="home" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item class="space">
            <label class="ant-form-item-required">Status do evento:</label>
            <a-select name="sta_evento" defaultValue="0">
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
            <a-input v-decorator="[`data_inicio_lote[${k}]`, {validateTrigger: ['change', 'blur'],preserve: true}]" placeholder="Data Inicio do Lote " style="width: 49%; margin-right: 4px"/>
            <a-input v-decorator="[`data_fim_lote[${k}]`, {validateTrigger: ['change', 'blur'],preserve: true}]" placeholder="Data Fim do Lote " style="width: 50%; margin-right: 0px"/>
            <a-input v-decorator="[`valor_lote[${k}]`, {validateTrigger: ['change', 'blur'],preserve: true}]" placeholder="Valor do Lote R$:00,0" />
            <hr/>
            </a-form-item>
            <a-form-item v-bind="formItemLayoutWithOutLabel">
              <a-button type="dashed" style="width: 100%" @click="add">Adicionar Lote</a-button>
            </a-form-item>
          </a-form>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space_2">
              <label class="ant-form-item-required">Imagem do evento:</label>
              <a-input name="file" type="file" class="">
              </a-input>
            </a-form-item>
          </div>
          <div class="row justify-content-center">
            <a-form-item class="space_2">
              <label class="ant-form-item-required">Descrição:</label>
              <a-textarea
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
          <button type="submit" class="btn btn-outline-primary btn-sm">Cadastrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
let id = 0;
export default {
  data () {
    return {
      objeto_lote: [],
      formItemLayout: {
        labelCol: {
        },
        wrapperCol: {
        },
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
        },
      },
    };
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
    this.form.getFieldDecorator('keys', { initialValue: [], preserve: true });
  },
    methods: {
    remove  (k) {
      const { form } = this;
      const keys = form.getFieldValue('keys');
      if (keys.length === 1) {
        return;
      }
      form.setFieldsValue({
        keys: keys.filter(key => key !== k),
      });
    },
    //o metodo add aciona um novo campo no form
    add  () {
      const { form } = this; //pega a referencia do form no html
      const keys = form.getFieldValue('keys'); //a lista de Keys (id) da lista de inputs 
      const nextKeys = keys.concat(++id); // soma 1 a ultima key
      form.setFieldsValue({
        keys: nextKeys,                   // coloca a referenicia da key na ultima key criada
      });
    },
   
    handleSubmit  (e) { 
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          var i = 0;
          for(i = 1; i < values.keys.length+1; i++){
            var obj_temp = {
              data_inicio_lote : '',
              data_fim_lote : '',
              valor_lote : ''
            }
            obj_temp.data_inicio_lote = values.data_inicio_lote[i]
            obj_temp.data_fim_lote = values.data_fim_lote[i]
            obj_temp.valor_lote = values.valor_lote[i]
            this.objeto_lote.push(obj_temp)
          }
          console.log(this.objeto_lote)
        }
      });
    },
  },
};
</script>
<style>

.ant-input {
  border-radius: 0;
}

.box {
  border: solid 1px rgba(161, 161, 161, 0.233);
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 10px;
  padding: 20px;
}

label {
  margin-bottom: 0;
}

.title {
  margin-top: 30px;
}

.ant-form-item {
  margin-bottom: 0;
}

.space {
  border-radius: 0;
  padding: 2px;
  width: 221px;
}

.space_2 {
  padding: 2px;
  width: 444px;
}

.ant-select-selection{
  border-radius: 0;
}

.space_3 {
  border-radius: 0;
  padding: 2px;
  width: 222px;
}
</style>
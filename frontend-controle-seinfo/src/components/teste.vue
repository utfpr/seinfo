<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item
      v-for="(k, index) in form.getFieldValue('keys')"
      :key="k"
      v-bind="index === 0 ? formItemLayout : formItemLayoutWithOutLabel"
      :label="index === 0 ? 'Passengers' : ''"
      :required="false"
    >
    <a-input v-decorator="[`data_inicio_lote[${k}]`, {validateTrigger: ['change', 'blur'],preserve: true}]" placeholder="Data Inicio do Lote" style="width: 30%; margin-right: 0px"/>
    <a-input v-decorator="[`data_fim_lote[${k}]`, {validateTrigger: ['change', 'blur'],preserve: true}]" placeholder="Data Fim do Lote" style="width: 30%; margin-right: 8px"/>
    <a-input v-decorator="[`valor_lote[${k}]`, {validateTrigger: ['change', 'blur'],preserve: true}]" placeholder="Valor do Lote" style="width: 60%; margin-right: 8px"/>
    
    </a-form-item>

    <a-form-item v-bind="formItemLayoutWithOutLabel">
      <a-button type="dashed" style="width: 60%" @click="add">+</a-button>
    </a-form-item>

    <a-form-item v-bind="formItemLayoutWithOutLabel">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>

  </a-form>
</template>

<script>
let id = 0;
export default {
  data () {
    return {
      objeto_lote: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 },
        },
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 },
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
          for(i = 1; i < 3; i++){
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
        }
      });
    },
  },
};
</script>
<style>

</style>
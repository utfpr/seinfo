<template>
  <div class="title">
    <h5 style="text-align:center">Cadastro de Visitante</h5>
    <div class="box">
      <form class="form" method="post">
        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <label class="ant-form-item-required">Nome:</label>
            <a-input maxlength="255" placeholder="Nome" v-model="obj_cadastro.nome" type="text">
             <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/> 
            </a-input>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <label class="ant-form-item-required">Email:</label>
            <a-input maxlength="255" placeholder="Email" v-model="obj_cadastro.email" type="text">
              <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <label class="ant-form-item-required">CPF:</label>
            <the-mask v-model="obj_cadastro.cpf" placeholder="000.000.000-00" class="ant-input" :mask="['###.###.###-##']" />
          </a-form-item>
        </div>
        <div class="row justify-content-center">
        <a-form-item>
          <a-button type="submit" @click="Btn_Cadastrar" class="btn btn-outline-primary btn-sm">Cadastrar</a-button>
        </a-form-item>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from '../config/axiosConfig';
import {TheMask} from 'vue-the-mask';
export default 
{
   data() {
    return {
      obj_cadastro : 
      {
        nome: '',
        cpf: '',
        email: '',
      },
      
    }
  },
  components: {
    TheMask
  },
  methods:
  {
    Btn_Cadastrar() 
    {
      console.log(this.obj_cadastro)

      axios
        .post('/api/pessoa', this.obj_cadastro)
        .then(response => {
          console.log(response)
          alert(response.data);
          window.location = '/';  
           }).catch(error => {
            alert(error);
          });
      console.log("FEZ O LOGIN")
    }
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

.teste {
  padding: 4px 11px 4px 30px;
}
</style>
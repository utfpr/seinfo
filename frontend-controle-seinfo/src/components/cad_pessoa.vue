<template>
  <div class="title">
    <h3 style="text-align:center">Usuário externo à UTFPR</h3>
    <h6 style="text-align:center">Se você é aluno, técnico ou docente da UTFPR utilize seus dados do sistema acadêmico para o login na página principal</h6>
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
            <a-input maxlength="255" placeholder="Email" v-model="obj_cadastro.email" type="email">
              <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <label class="ant-form-item-required">Confirmar email:</label>
            <a-input maxlength="255" placeholder="Email" v-model="obj_confirmar.email" type="email">
              <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
          <a-form-item class="space_2">
            <label class="ant-form-item-required">CPF:</label>
            <the-mask v-model="obj_cadastro.cpf" placeholder="000.000.000-00" class="ant-input" :mask="['###.###.###-##']"/>
          </a-form-item>
        </div>
        <div class="row justify-content-center">
        <a-form-item>
          <a-button type="submit" @click="Btn_Cadastrar" class="btn btn-outline-primary btn-sm">Cadastrar</a-button>
        </a-form-item>
        </div>
        <div class="row justify-content-center">
        <a-form-item>
          <a-button type="submit" @click="showModalRecuperacao" class="btn btn-outline-primary btn-sm">Recuperar senha!</a-button>
        </a-form-item>
        </div>
      </form>
    </div>
    <a-modal
              title="Recuperar Senha"
              v-model="recuperacao"
              @ok="handleOkRecuperacao"
              @cancel="handleCancel"
            >
            <p>Para recuperar sua conta, por favor digite o seu CPF para enviarmos um email com uma nova senha.</p>
              <the-mask v-model="obj_rec.cpf" placeholder="000.000.000-00" class="ant-input tp" :mask="['###.###.###-##']" />
              <br/>
        </a-modal>
  </div>
</template>

<script>
import axios from '../config/axiosConfig';
import {TheMask} from 'vue-the-mask';
import { isCpf } from 'iscpf';

export default 
{
   data() {
    return {
      visible: false,
      recuperacao: false,
      obj_cadastro : 
      {
        nome: '',
        cpf: '',
        email: '',
      },
      obj_confirmar : 
      {
        email: '',
      },
      obj_rec:
      {
        cpf: ''
      },
    }
  },
  components: {
    TheMask
  },
  methods:
  { 
    showModalRecuperacao()
    {
      this.recuperacao = true;
      this.visible = false;
      this.obj_rec.cpf = "";
    },
    handleCancel() {
      console.log('Clicked cancel button');
      this.visible = false
      this.recuperacao = false
    },
    handleOkRecuperacao() 
    {
      this.recuperacao = false
      
      axios
      
        .post('/public/recuperarSenha/'+btoa(this.obj_rec.cpf))
        .then(response => {
            console.log(response.data)
            alert("Sua nova senha foi enviada ao email cadastrado.");
          }).catch(error => {
            console.log(error.response)
            alert("Pedido inválido.");
          });      
    },
    Btn_recuperarSenha(){},
    Btn_Cadastrar() 
    {
      console.log(this.obj_cadastro)

      const { cpf, email, nome } = this.obj_cadastro;
      const { email: email_confirmacao } = this.obj_confirmar;

      if(!isCpf(cpf)) return alert('CPF inválido!');
      if(!email) return alert('E-Mail inválido!');
      if(email !== email_confirmacao) return alert('Os e-mails fornecidos devem ser iguais!');
      if(!nome) return alert('Nome inválido!');

      axios
        .post('/public/pessoa', this.obj_cadastro)
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
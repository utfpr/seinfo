<template>
  <AuthConsumer>
    <div slot-scope="{ signIn }">
      <nav class="navbar navbar-light justify-content-between" >
        <a :href="'/'" class="navbar-brand"><img src="../assets/logo_com_nome.jpg" style="height:50px;"></a>
        <a-form class="form" layout="inline"  method="post" @submit.prevent="realizar_login" encType="multipart/form-data">
          <a-form-item>
          <input v-model="obj_login.username" class="lg st" name="username" placeholder="Usuário" required="required" />
          </a-form-item>
          <a-form-item>
            <input v-model="obj_login.password" name="password" type="password" placeholder="Senha" class="lg st" required="required" />
          </a-form-item>
          <a-form-item>
            <a-button class="bt" @click="LoginUser(signIn)" >Entrar</a-button>
          </a-form-item>
          <a-form-item>
            <a-button class="bti" href="cadPessoa">Cadastro de usuário externo</a-button>
          </a-form-item>   
        </a-form>
        <a-modal
            title="Cadastrar-se como aluno"
            v-model="visible"
            @ok="passaValor"
            @cancel="handleCancel"
          >
            <a-input v-model="obj_userInterno.username"  type ="text" placeholder="RA" class="tp" required="required"/>
            <a-input v-model="obj_userInterno.password"  type ="password" placeholder="Senha" class="tp" required="required"/>
            <br/>
            <a href="cadPessoa" style=color:#3366BB>&bull; Cadastrar-se como visitante </a>
            <br/>
            <a @click="showModalRecuperacao" style=color:#3366BB >&bull; Recuperar Senha</a>
        </a-modal>
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

      </nav>
    </div>
  </AuthConsumer>
</template>

<script>
import axios from '../config/axiosConfig';
import AuthConsumer from '../contexts/authConsumer';
import {TheMask} from 'vue-the-mask';
const perm = ['usuario','supervisor','adm']
export default {
  data() {
    return {
      visible: false,
      recuperacao: false,
      obj_userInterno : {
        nome: '',
        username: '',
        password: '',
        email: ''
      },
      obj_login : {
        username: '',
        password: ''
      },
      obj_rec:
      {
        cpf: ''
      }
    }
  },
  components: {
    AuthConsumer,
    TheMask
  },
  methods: {
    passaValor()
    {
      //PASSA O USUÁRIO PARA A PÁGINA DE CADASTRO

    axios
    .post('/public/loginLDAP',{ 
      username: this.obj_userInterno.username, 
      password: this.obj_userInterno.password
      })
    .then(response => {
            // obj_userInterno.nome = response.data.name;
            // obj_userInterno.email = response.data.email;
            this.$router.push({ name: `Cad_Aluno`, query:{
              ra: this.obj_userInterno.username, 
              nome: response.data.name, email: response.data.email
            }}) 
            //mandar os outros dados do LDAP para a página de cadastro
            //this.$router.push({ name: `Cad_Aluno`, query:{usuario: this.obj_userInterno.nome}})
            
          }).catch(error => {
            console.log(error.response)
          });
     
    
    ////window.location = "/cad_aluno?username="+username;
    //this.$router.push({ name: `Cad_Aluno`, query:{usuario: this.obj_userInterno.username}})
    },
    showModalRecuperacao()
    {
      this.recuperacao = true;
      this.visible = false;
      this.obj_rec.cpf = "";
    },
    showModal() {      
      this.obj_userInterno.username = "";
      this.obj_userInterno.password = "";
      this.visible = true;
    },
    async LoginUser(signIn) {

      try {
        const response = await axios.post('/public/login', this.obj_login)
        signIn({token: response.data.token, user: response.data.pessoa});
        window.location.replace(
          response.data.pessoa.nivel ? perm[response.data.pessoa.nivel]: 'usuario'
        );  
      } catch (error) {
        console.log(error)
      }
    },
    handleOk() {
      this.visible = false

      axios
        .post('/public/login', this.obj_userInterno)
        .then(response => {
            console.log(response.data)
          }).catch(error => {
            console.log(error.response)
          });

    },
    handleCancel() {
      this.visible = false
      this.recuperacao = false
    },
    handleOkRecuperacao() 
    {
      this.recuperacao = false
      

      axios
      
        .post('/public/recuperarSenha/'+this.obj_rec.cpf)
        .then(response => {
            console.log(response.data)
            alert("Sua nova senha foi enviada ao email cadastrado.");
          }).catch(error => {
            console.log(error.response)
            alert("Pedido inválido.");
          });
      
    }
  }
}
</script>

<style scoped>
.bt {
  background: transparent;
  height: 30px;
  color:white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.bti {
  background: transparent;
  border: 0px;
  padding: 0;
  height: 30px;
  color:white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.st{
  background: rgba(0, 0, 0, 0.3);
  border: none; outline: none; 
  padding: 10px; font-size: 13px; 
  color: #fff;text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3); 
  border: 1px solid rgba(0, 0, 0, 0.3); border-radius: 4px; 
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2);
}

.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 1050;
  padding: 0;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Open Sans', sans-serif;
	background: #092756;
	background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -o-radial-gradient(0% 100%, ellipse cover, rgb(9, 21, 26) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(6, 26, 34, 0.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(11, 28, 36, 0.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
}

.navi {
  background-color: rgb(34, 34, 34);
  box-shadow: 6px 3px 10px rgb(202, 202, 202);
}

.lg{
  width: 160px;
  height: 30px;
  margin-top: 5px;
}

.tp{
  width: 230px;
}

</style>

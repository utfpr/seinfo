<template>
  <AuthConsumer>
    <div slot-scope="{ getUser }">
      <div>
        <a-alert
          v-if="visible"
          message="Inscrito com sucesso!"
          type="success"
          closable
          :after-close="handleClose"
        />
        <a-alert
          v-if="visible2"
          message="Não foi possível realizar a inscrição!"
          type="error"
          closable
          :after-close="handleClose"
        />
        </div>
        
        <a-table :columns="columns" :data-source="res_localizar" :pagination="false">
          <div slot="expandedRowRender" slot-scope="record" style="margin: 0">
            <div class="table-responsive col-md-12">
              <p class="atividade">Atividades: {{record.nome}} <a-button type="button" class="ic" @click="inscricao(getUser.CPF, record.idEvento)" > INSCREVER-SE  </a-button></p>
              <a-modal v-model="visibleInsc" title="Inscrição bem sucedida!" ok-text="Sair" cancel-text="Ir para avitivades" @ok="handleOk">
                <p>Deseja se inscrever em alguma(s) atividade(s)?</p>
              </a-modal>
              <table class="table table-striped" cellspacing="0" cellpadding="0">
                <thead>
                  <tr>
                    <th style="width:25%">Nome</th>
                    <th style="text-align: left;">Valor</th>
                    <th style="text-align: left;">Vagas</th>
                    <th style="text-align: left;">Horas de participação</th>
                    <th style="text-align: left; width:40%">Descrição</th>
                  </tr>
                </thead>
                <tbody v-for="response in res_atividades" :key="response.idEvento">
                  <tr style="background-color:white;" v-if="response.idEvento == record.idEvento">
                    <td>{{response.titulo}}</td>
                    <td>R$ {{response.valor}}</td>
                    <td style="padding-left:20px;">{{response.quantidadeVagas}}</td>
                    <td style="padding-left:54px;">{{response.horasParticipacao}}</td>
                    <td>{{response.descricao}}</td>
                  </tr>          
                </tbody>
              </table>
            </div>

        </div>
      </a-table>

    </div>
  </AuthConsumer>
</template>


<script>

import AuthConsumer from '../contexts/authConsumer';

const axios = require('axios');
const columns = [{
  title: 'Nome do Evento',
  dataIndex: 'nome',
  width: 600,
},{
  title: 'Local do Evento',
  dataIndex: 'agendamento.local',
},{
  title: 'Descrição',
  dataIndex: 'descricao'
}];

export default {
  mounted(){
    this.pegar_tabela_eventos ("eventosD")
    this.pegar_tabela_atividades ("atividades")
  },
  components: {
    AuthConsumer
  },
  methods: {
    pegar_tabela_eventos (name) {
      axios.get('http://localhost:3000/api/' + name)
      .then((response) => {
        // console.log("Listou " + name);
        // console.log(response.data);
        this.res_localizar = response.data
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    pegar_tabela_atividades (name) {
      axios.get('http://localhost:3000/api/' + name)
      .then((response) => {
        this.res_atividades = response.data
      })
    },
    showModal() {
      this.visibleInsc = true;
      
    },
    handleOk(e) {
      console.log(e);
      this.visibleInsc = false;
    },
    inscricao(CPF, idEvento) {
      console.log(CPF, idEvento);
      axios
        .post(`http://localhost:3000/api/inscEv/${idEvento}/${CPF}` , {dataInscricao:'2020-08-09'})
        .then((response) => {
          console.log(response.data);
          this.showModal();
          //this.pegar_tabela("eventosD");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
    
  data() {
    return {
      res_localizar: [],
      res_atividades: [],
      columns,
      loading: false,
      visible: false,
      visible2: false,
      visibleInsc: false,
      confirmLoading: false,
    }
  }
}
</script>

<style scoped>

.ic{
  float: right;
  font-weight: 600;
  letter-spacing: 0.8px;
  background-color: rgba(157, 211, 157, 0.5);
  border: 2px solid rgb(64, 212, 64);
  color: black;
  cursor: pointer;
} 
.ic:hover{
  color: white;
  background-color: rgb(64, 212, 64);
}
.ic-close {
  background-color: rgb(255, 99, 99);
  color: black;
  cursor: pointer;
}
.ic-close:hover {
  color: black;
  border-color: white;
  background-color:   rgb(224, 89, 89);
}
.article h4 {
  margin-bottom: 16px;
}
.article button {
  margin-top: 16px;
}
.atividade {
  margin-bottom: 18px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: .8px;
}

</style>

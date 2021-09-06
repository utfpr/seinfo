<template>
  <AuthConsumer>
    <div>
      <a-table
        :columns="columns"
        :data-source="res_localizar"
        :pagination="false"
      >
        <div
          slot="expandedRowRender"
          slot-scope="record"
          style="margin: 0"
        >
          <div class="table-responsive col-md-12">
            <div class="button-wrapper">
              <a-button
                v-if="record.estaInscrito == false && record.lotesDisponiveis != 0"
                type="button"
                class="ic"
                @click="showModal(record.idEvento,record.lotesDisponiveis)"
              >
                INSCREVER-SE
              </a-button>
              <a-button
                v-if="record.estaInscrito == true && record.lotesDisponiveis != 0"
                type="button"
                class="ic-yellow"
                @click="redirectAtv(record.idEvento, obj.cpf)"
              >
                VER INSCRIÇÕES EM ATIVIDADES
              </a-button>
              <a-modal v-if="record.estaInscrito == false && record.lotesDisponiveis != 0" v-model="visible" title="Aviso" @ok="handleOk">
                <p>Você ira se inscrever nessa atividade pelo lote de<b> {{dateConverter(record.lotesDisponiveis[0].dataAbertura)}} até {{dateConverter(record.lotesDisponiveis[0].dataFechamento)}} com valor de {{record.lotesDisponiveis[0].valor}}R$</b> </p>
              </a-modal>            
              <p v-if="record.lotesDisponiveis.length == 0" >As inscrições do evento acabaram</p>
            </div>
            <DetalhesEvento v-bind:id="record.idEvento"/>
          </div>
        </div>
      </a-table>
    </div>
  </AuthConsumer>
</template>

<script>
import moment from "moment";
import AuthConsumer from '../contexts/authConsumer.vue';
import DetalhesEvento from './eventoCard.vue'

import auth from '../services/auth';
import axios from '../config/axiosConfig';

const columns = [{
  title: 'Nome do Evento',
  dataIndex: 'nome',
  width: 600,
}, {
  title: 'Local do Evento',
  dataIndex: 'agendamento.local',
}, {
  title: 'Descrição',
  dataIndex: 'descricao',
}];

export default {
  components: {
    AuthConsumer,
    DetalhesEvento
  },

  data() {
    return {
      res_localizar: [],
      columns,
      loading: false,
      visible: false,
      loteDisponivel:'',
      obj: {
        CPF: '',
        idEvento:''
      }
    };
  },
  mounted() {
    this.pegar_tabela_eventos('eventosD');
  },
  methods: {
    redirectAtv(idEvento, CPF) {
      this.$router.push({ path: `/usuario/atvHome/${idEvento}/${btoa(CPF)}` });
    },
    async pegarPerfil() {
      const user = await auth.getUser();
      this.obj.CPF = user.CPF;
    },
    async pegar_tabela_eventos(name) {
      try{
      await this.pegarPerfil()
        const response = await axios.post(`/api/${name}`, {CPF: btoa(this.obj.CPF)})
            this.res_localizar = response.data;
         } catch(error) {
            console.log(error);
          }
    },
    dateConverter(date){
      return moment(date).format('DD [de] MMMM [de] YYYY')
    },  
    inscricao(CPF, idEvento, idLote) {
      axios
        .post(`/api/inscEv/${idEvento}/${idLote}/${btoa(CPF)}`)
        .then(() => {

          this.redirectAtv(idEvento, idLote, CPF);
        })
        .catch((error) => {
          alert('Você já está inscrito nesse evento!');
          console.log(error);
        });
    },
    showModal(idEvento,test){
      this.visible = true
      this.obj.idEvento = idEvento
      this.loteDisponivel = test[0].idLote
    },
    handleOk(){
      this.inscricao(this.obj.CPF, this.obj.idEvento, this.loteDisponivel)
    }

  },
};
</script>

<style scoped>

.button-wrapper{
  display: flex;
  justify-content: center;
}

.ic{
  font-weight: 600;
  letter-spacing: 0.8px;
  background-color: rgba(157, 211, 157, 0.5);
  border: 2px solid rgb(64, 212, 64);
  color: black;
  cursor: pointer;
  height: 60px;
}
.ic-yellow{
  font-weight: 600;
  letter-spacing: 0.8px;
  background-color: rgba(251, 253, 100, 0.5);
  border: 2px solid rgb(212, 202, 64);
  color: black;
  height: 60px;
  cursor: pointer;
}
.ic-yellow:hover{
  color: white;
  background-color: rgba(236, 87, 28, 0.5);
  border: 2px solid rgb(223, 104, 89);

}
.ic:hover{
  color: white;
  background-color: rgb(127, 206, 127);
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

</style>

<template>
  <AuthConsumer>
    <div slot-scope="{ getUser }">
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
            <p class="atividade">
              Atividades: {{ record.nome }} <a-button
                type="button"
                class="ic"
                @click="inscricao(getUser.CPF, record.idEvento)"
              >
                INSCREVER-SE
              </a-button>
            </p>
            <table
              class="table table-striped"
              cellspacing="0"
              cellpadding="0"
            >
              <thead>
                <tr>
                  <th style="width:25%">
                    Nome
                  </th>
                  <th style="text-align: left;">
                    Valor
                  </th>
                  <th style="text-align: left;">
                    Vagas
                  </th>
                  <th style="text-align: left;">
                    Horas de participação
                  </th>
                  <th style="text-align: left; width:40%">
                    Descrição
                  </th>
                </tr>
              </thead>
              <tbody
                v-for="response in res_atividades"
                :key="response.idEvento"
              >
                <tr
                  v-if="response.idEvento == record.idEvento"
                  style="background-color:white;"
                >
                  <td>{{ response.titulo }}</td>
                  <td>R$ {{ response.valor }}</td>
                  <td style="padding-left:20px;">
                    {{ response.quantidadeVagas }}
                  </td>
                  <td style="padding-left:54px;">
                    {{ response.horasParticipacao }}
                  </td>
                  <td>{{ response.descricao }}</td>
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

import AuthConsumer from '../contexts/authConsumer.vue';

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
  },

  data() {
    return {
      res_localizar: [],
      res_atividades: [],
      columns,
      loading: false,
      confirmLoading: false,
    };
  },
  mounted() {
    this.pegar_tabela_eventos('eventosD');
    this.pegar_tabela_atividades('atividades');
  },
  methods: {
    redirectAtv(idEvento, CPF) {
      this.$router.push({ path: `/usuario/atvHome/${idEvento}/${CPF}` });
    },
    pegar_tabela_eventos(name) {
      axios.get(`/api/${name}`)
        .then((response) => {
        // console.log("Listou " + name);
          console.log('eventos', response.data);
          this.res_localizar = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    pegar_tabela_atividades(name) {
      axios.get(`/api/${name}`)
        .then((response) => {
          this.res_atividades = response.data;
        });
    },
    inscricao(CPF, idEvento) {
      console.log(CPF, idEvento);
      axios
        .post(`/api/inscEv/${idEvento}/${CPF}`, { dataInscricao: '2020-08-09' })
        .then((response) => {
          this.redirectAtv(idEvento, CPF);
          console.log(response.data);
          // this.pegar_tabela("eventosD");
        })
        .catch((error) => {
          alert('Você já está inscrito nesse evento!');
          console.log(error);
        });
    },
  },
};
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

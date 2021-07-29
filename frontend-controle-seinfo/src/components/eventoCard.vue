<template>
      <a-layout-content id="container" v-if="this.res.status===1">
          <img class="banner" src="../assets/banner.png" />

          <a-card class="layer" :title="res.nome">
            <a-card-grid style="width:100%;text-align:center">
              <p class="para" style="text-align: center">{{res.descricao}}</p>
            </a-card-grid>

            <a-card-grid style="width:50%;text-align:center">
              <div class="card-body">
                <h5 class="card-title">Data de Inicio</h5>
                <p class="card-text">
                  {{
                    moment(res.agendamento.dataHoraInicio).format(
                      "dddd, D [de] MMMM [de] YYYY"
                    )
                  }}
                </p>
                <p>
                  {{
                    moment(res.agendamento.dataHoraInicio).format(
                      "[Horário de Início:] hh:mm"
                    )
                  }}
                </p>
              </div>
            </a-card-grid>

            <a-card-grid style="width:50%;text-align:center">
              <div class="card-body">
                <h5 class="card-title">Data de Fim</h5>
                <p>{{moment(res.agendamento.dataHoraFim).format('dddd, D [de] MMMM [de] YYYY')}}</p>
                <p>{{moment(res.agendamento.dataHoraFim).format('[Horário de Fim:] hh:mm')}}</p>
              </div>
            </a-card-grid>

            <a-card-grid style="width:100%;text-align:center">
              <div class="card-body">
                <h5 class="card-title">Local</h5>
                <p>{{res.agendamento.local}}</p>
              </div>            
            </a-card-grid>

            <a-card-grid style="width:100%;text-align:center">
              <div class="card-body">
              <h5 class="card-title">Lotes</h5>
              <p v-for="(lotes, i) in lotes" :key="i">
                <span
                  v-if="res.lotes[i].dataAbertura !== res.lotes[i].dataFechamento"
                >{{moment(res.lotes[i].dataAbertura).format('DD [de] MMMM [de] YYYY')}} até {{moment(res.lotes[i].dataFechamento).format('DD [de] [de] YYYY')}} - Valor R$: {{res.lotes[i].valor}}</span>
                <span
                  v-else-if="i!== res.lotes.length-1"
                >{{moment(res.lotes[i].dataAbertura).format('DD [de] [de] YYYY')}} até {{moment(res.lotes[i+1].dataAbertura).subtract(1, 'days').format('DD [de] [de] YYYY')}} - Valor R$: {{res.lotes[i].valor}}</span>
                <span
                  v-else
                >{{moment(res.lotes[i].dataAbertura).format('DD [de] [de] YYYY')}} - Valor R$: {{res.lotes[i].valor}}</span>
              </p>
              </div>        
            </a-card-grid>



             <!-- manter palestras e atividades ou só atividades? o que diferencia?
              listar tudo?-->
            <a-card-grid style="width:100%;text-align:center" v-if="palestras.length!==0">
              <div class="card-body">
              <h5 class="card-title">Palestras</h5>
              <p
                v-for="(atv, i) in palestras"
                :key="i"
              >
                {{atv.titulo}} ({{atv.categoriaAtv.nome}}) - {{atv.descricao}} Vagas: {{atv.quantidadeVagas}} R${{atv.valor}}
              </p>
              </div>        
            </a-card-grid>

            <a-card-grid style="width:100%;text-align:center">
              <div class="card-body">
              <h5 class="card-title">Atividades</h5>
              <p
                v-for="(atv, i) in atividades"
                :key="i"
              >
                {{atv.titulo}} ({{atv.categoriaAtv.nome}}) - {{atv.descricao}} 
                Vagas: {{atv.quantidadeVagas}} R${{atv.valor}}
              </p>
              <p v-if="atividades.length == 0">
                Nenhuma atividade cadastrada!
              </p>
              </div>        
            </a-card-grid>

            <a-card-grid style="width:100%;text-align:center">
              <div class="card-body">
              <h5 class="card-title">Cronograma</h5>
              <p>
                <a-table
                  :columns="columns"
                  :dataSource="data"
                  :bordered="true"
                  :pagination="false"
                ></a-table>
              </p>
              </div>        
            </a-card-grid>

          </a-card >
          
      </a-layout-content>
</template>

<script>

import moment from "moment";
moment.locale("pt-br");
import axios from '../config/axiosConfig';


const columns = [
  {
    title: "Horários",
    dataIndex: "horarios",
    key: "horarios",
    width: 150,
    scopedSlots: { customRender: "horarios" }
  },
  {
    title: "Segunda",
    width: 200,
    dataIndex: "segunda"
  },
  {
    title: "Terça",
    width: 200,
    dataIndex: "terca"
  },
  {
    title: "Quarta",
    width: 200,
    dataIndex: "quarta"
  },
  {
    title: "Quinta",
    width: 200,
    dataIndex: "quinta"
  },
  {
    title: "Sexta",
    width: 200,
    dataIndex: "sexta"
  }
];
const data = [
  {
    key: "1",
    horarios: "13:00hrs",
    segunda: "a",
    terca: "a",
    quarta: "a",
    quinta: "a",
    sexta: "a"
  },
  {
    key: "2",
    horarios: "13:50hrs",
    segunda: "a",
    terca: "a",
    quarta: "a",
    quinta: "a",
    sexta: "a"
  },
  {
    key: "3",
    horarios: "15:30hrs",
    segunda: "a",
    terca: "a",
    quarta: "a",
    quinta: "a",
    sexta: "a"
  },
  {
    key: "4",
    horarios: "17:30hrs",
    segunda: "a",
    terca: "a",
    quarta: "a",
    quinta: "a",
    sexta: "a"
  },
  {
    key: "5",
    horarios: "19:30hrs",
    segunda: "a",
    terca: "a",
    quarta: "a",
    quinta: "a",
    sexta: "a"
  },
  {
    key: "6",
    horarios: "21:10hrs",
    segunda: "a",
    terca: "a",
    quarta: "a",
    quinta: "a",
    sexta: "a"
  }
];
export default {
  props: {
    fetch: { type: Boolean },
    id: {type: Number},
  },
  async beforeMount() {
    const id = this.id || this.$route.params.id;
    console.log(this.id, this.$route.params.id, id);
    this.pegar_tabela("evento/" + id);

    const response = await axios.get("/public/atividade/" + id);
    for (var i = 0; i < response.data.length; i++) {
      if (
        (response.data[i].categoriaAtv.nome > "Minicurso") -
          (response.data[i].categoriaAtv.nome < "Minicurso") ==
        0
      ) {
        this.minicursos.push(response.data[i]);
      } else if (
        (response.data[i].categoriaAtv.nome > "Palestra") -
          (response.data[i].categoriaAtv.nome < "Palestra") ==
        0
      ) {
        this.palestras.push(response.data[i]);
      } else {
        this.atividades.push(response.data[i]);
      }
    }
  },

  methods: {
    moment: function(date) {
      return moment(date);
    },

    async pegar_tabela(name) {
      const response = await axios.get("/public/" + name);
      this.res = response.data;
      this.lotes = this.res.lotes;
    },

    sair404() {
      this.$router.push("/404");
    },
  },

  data() {
    return {
      res: [],
      atividades: [],
      minicursos: [],
      palestras: [],
      lotes: [],
      data,
      columns,
    };
  },

  components: {

  }
};
</script>

<style scoped>
#container{
  padding-top: 60px;
  padding-bottom: 60px;
  width: 100%;
}

.layer {
  margin-top: 3%;
  width: 90%;
  margin-left: 5%;
  text-align: center;
}

.banner {
  max-width: 70%;
  min-width: 70%;
  max-height: 70%;
  min-height: 70%;
  margin-left: 15%;
  margin-top: 20px;
}

</style>

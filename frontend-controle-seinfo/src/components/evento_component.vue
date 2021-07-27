<template>
  <div style="margin-top: 60px">
    <div id="work" v-if="fetch">
      <span v-if="!this.res">{{sair404()}}</span>

      <a-layout-content v-else-if="this.res.status===1">
        <div>
          <div>
            <br />
            <br />
            <!-- pegar imagem do evento -->
            <img class="child" src="../assets/banner.png" />
          </div>
          

          <a-card class="layer" title="Título do evento">
            <p class="para" style="text-align: center">{{res.nome}}</p>
          </a-card >

          <div class="card-deck" style="padding: 20px; margin-left: 3em; margin-right: 3em;">
            <div class="card">
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
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Data de Fim</h5>
                <p>{{moment(res.agendamento.dataHoraFim).format('dddd, D [de] MMMM [de] YYYY')}}</p>
                <p>{{moment(res.agendamento.dataHoraFim).format('[Horário de Fim:] hh:mm')}}</p>
                <p></p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Local</h5>
                <p>{{res.agendamento.local}}</p>
              </div>
            </div>
          </div>

          <a-card class="layer" title="Lotes" :bordered="false">
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
          </a-card>
          <a-card class="layer" title="Descrição do evento">
            <p class="para">{{res.descricao}}</p>
          </a-card>

          <!-- manter palestras e atividades ou só atividades? o que diferencia?
          listar tudo?-->
          <a-card class="layer" title="Palestras" v-if="palestras.length!==0">
            <p
              class="para"
              v-for="(atv, i) in palestras"
              :key="i"
            >{{atv.titulo}} ({{atv.categoriaAtv.nome}}) - {{atv.descricao}} Vagas: {{atv.quantidadeVagas}} R${{atv.valor}}</p>
          </a-card>
          <a-card class="layer" title="Minicursos" v-if="minicursos.length!==0">
            <p
              class="para"
              v-for="(atv, i) in minicursos"
              :key="i"
            >{{atv.titulo}} ({{atv.categoriaAtv.nome}}) - {{atv.descricao}} Vagas: {{atv.quantidadeVagas}} R${{atv.valor}}</p>
          </a-card>

          <a-card class="layer" title="Atividades">
            <p
              class="para"
              v-for="(atv, i) in atividades"
              :key="i"
            >{{atv.titulo}} ({{atv.categoriaAtv.nome}}) - {{atv.descricao}} Vagas: {{atv.quantidadeVagas}} R${{atv.valor}}</p>
            <p class="para" v-if="atividades.length == 0">Nenhuma atividade cadastrada!</p>
          </a-card>

          <a-card class="layer" title="Cronograma">
            <p>
              <a-table
                :columns="columns"
                :dataSource="data"
                :scroll="{ x: 1300 }"
                :bordered="true"
                :pagination="false"
              ></a-table>
            </p>
          </a-card>

          <br />
          <br />
        </div>
      </a-layout-content>

      <a-layout-content
        v-else-if="this.res.status!==1"
        id="work"
        style="height: 100vh;"
      >{{sairHome()}}</a-layout-content>
    </div>
  </div>
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
    width: "5%",
    fixed: "left",
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
    horarios: "13h00",
    segunda: "a",
    terca: "a",
    quarta: "a",
    quinta: "a",
    sexta: "a"
  },
  {
    key: "2",
    horarios: "13h50",
    segunda: "a",
    terca: "a",
    quarta: "a",
    quinta: "a",
    sexta: "a"
  },
  {
    key: "3",
    horarios: "15h30",
    segunda: "a",
    terca: "a",
    quarta: "a",
    quinta: "a",
    sexta: "a"
  },
  {
    key: "4",
    horarios: "17h30",
    segunda: "a",
    terca: "a",
    quarta: "a",
    quinta: "a",
    sexta: "a"
  },
  {
    key: "5",
    horarios: "19h30",
    segunda: "a",
    terca: "a",
    quarta: "a",
    quinta: "a",
    sexta: "a"
  },
  {
    key: "6",
    horarios: "21h10",
    segunda: "a",
    terca: "a",
    quarta: "a",
    quinta: "a",
    sexta: "a"
  }
];
export default {
  props: {
    fetch: { type: Boolean }
  },
  beforeMount() {
    this.pegar_tabela("evento/" + this.$route.params.id);
    // pegar atividades
    axios
      .get("/public/atividade/" + this.$route.params.id)
      .then(response => {
        // console.log("atividades");
        // console.log(response.data);
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
        this.fetch = true;
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  methods: {
    moment: function(date) {
      return moment(date);
    },

    pegar_tabela(name) {
      axios
        .get("/public/" + name)
        .then(response => {
          console.log("Listou " + name);
          // console.log(response.data);
          this.res = response.data;
          this.fetch = true;
          this.lotes = this.res.lotes;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    sair404() {
      this.$router.push("/404");
    },

    sairHome() {
      this.$router.push("/");
      alert("Evento Indisponível no momento!");
    }
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
#work {
  background: #092756;
  background: -moz-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -moz-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
            42,
            60,
            87,
            0.4
          )
          100%),
    -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -o-radial-gradient(
      0% 100%,
      ellipse cover,
      rgb(9, 21, 26) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -o-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -ms-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(6, 26, 34, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -ms-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(11, 28, 36, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    linear-gradient(
      to bottom,
      rgba(57, 173, 219, 0.25) 0%,
      rgba(42, 60, 87, 0.4) 100%
    ),
    linear-gradient(135deg, #670d10 0%, #092756 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
  height: auto;
}

.para {
  text-align: left;
}

.layer {
  margin-top: 3%;
  width: 90%;
  margin-left: 5%;
  text-align: center;
}

.child {
  max-width: 70%;
  min-width: 70%;
  max-height: 70%;
  min-height: 70%;
  margin-left: 15%;
}

.paraCale {
  max-height: 200px;
}

.title {
  text-align: center;
  border: 0.1px solid black;
  position: relative;
  min-height: 176px;
  max-height: auto;
}

.box {
  margin-top: 3%;
  width: 90%;
  margin-left: 5%;
}
</style>

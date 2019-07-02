<template>
  <div style="margin-top: 60px">
    <!-- trabalhar melhor no if e else, caso evento não seja disponível retornar para home,
    caso evento não exista, mostrar 404-->
    <div id="work" v-if="this.res.status===1">
      <a-layout-content>
        <div>
          <div>
            <br>
            <br>
            <img class="child" src="../assets/banner.png">
          </div>
          <div class="box">
            <a-row :gutter="16">
              <a-col :span="6">
                <a-card class="title" title="Data de Inicio" :bordered="false">
                  <p>{{moment(res.agendamento.dataHoraInicio).format('dddd D MMMM YYYY')}}</p>
                </a-card>
              </a-col>
              <a-col :span="6">
                <a-card class="title" title="Data de Fim" :bordered="false">
                  <p>{{moment(res.agendamento.dataHoraFim).format('dddd D MMMM YYYY')}}</p>
                </a-card>
              </a-col>
              <a-col :span="6">
                <a-card class="title" title="Valor do Evento" :bordered="false">
                  <p>Conversar sobre isso</p>
                </a-card>
              </a-col>
              <a-col :span="6">
                <a-card class="title" title="Local" :bordered="false">
                  <p>{{res.agendamento.local}}</p>
                </a-card>
              </a-col>
            </a-row>
          </div>

          <a-card class="layer" title="Descrição do evento">
            <p class="para">{{res.descricao}}</p>
          </a-card>

          <a-card class="layer" title="Palestras">
            <p class="para">Ainda não implementado!</p>
          </a-card>

          <a-card class="layer" title="Atividades">
            <p class="para">Ainda não implementado!</p>
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

          <br>
          <br>
        </div>
      </a-layout-content>
    </div>
  </div>
</template>

<script>
import e404 from "./not_found.vue";
import moment from "moment";
moment.locale("pt-br");
const axios = require("axios");
var res = "";
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
  mounted() {
    this.pegar_tabela("evento/" + this.$route.params.id);
  },
  methods: {
    moment: function(date) {
      return moment(date);
    },
    date: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
    pegar_tabela(name) {
      axios
        .get("http://localhost:3000/api/" + name)
        .then(response => {
          console.log("Listou " + name);
          console.log(response.data);
          this.res = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  data() {
    return {
      res: [],
      data,
      columns
    };
  },
  components: {
    e404
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
}

.box {
  margin-top: 3%;
  width: 90%;
  margin-left: 5%;
}
</style>

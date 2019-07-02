          <!-- 
            Existe um bug atualmente com o tamanho das caixas, refatorar isso!
            Quando o título é muito grande, buga tudo.
           -->
<template>
  <div id="work" class="row justify-content-center">
    <div v-for="(res,i) in res" :key="res.idEvento">
      <div class="box-1">
        <img class="box-2" src="../assets/banner.png">
        <div class="card-body">
          <h5 class="card-title">{{res.nome}}</h5>
          <p class="card-text">{{res.descricao}}</p>
          <a-divider/>
          <a-button :href="'/evento/'+ res.idEvento" class="bt" style="margin-left:33%;">
            <a-icon type="plus"/>SAIBA MAIS
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  mounted() {
    this.pegar_tabela("eventosD");
  },
  methods: {
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
      nome: "",
      descricao: ""
    };
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

.ant-divider-horizontal {
  margin: 7px 0;
}

.card-text {
  max-height: 250px;
  min-height: 250px;
  max-width: 410px;
  min-width: 410px;
  overflow: hidden;
}

.card-body {
  background-color: rgb(255, 255, 255);
  float: left;
  max-height: 370px;
  min-height: 370px;
  margin: 40px;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
}

.box-1 {
  height: 450px;
  width: 450px;
  margin: 50px;
  margin-top: 30px;
  background: transparent;
  border: transparent;
}

.bt {
  border-color: rgb(39, 10, 204);
  color: rgb(26, 12, 110);
}

.box-2 {
  min-height: 260px;
  max-height: 260px;
  min-width: 450px;
  max-width: 450px;
}
</style>

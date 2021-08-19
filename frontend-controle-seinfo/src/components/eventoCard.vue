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
              <p v-for="(lotes, i) in lotesVencidos" :key="i">
                <span style="text-decoration: line-through">
                  {{moment(lotes.dataAbertura).format('DD [de] MMMM [de] YYYY')}} 
                  até {{moment(lotes.dataAbertura).format('DD [de] MMMM [de] YYYY')}} com Valor R${{lotes.valor}}
                </span>
              </p>
              <p v-for="(lotes, i) in lotesDisponiveis" :key="i">
                <span>
                  {{moment(lotes.dataAbertura).format('DD [de] MMMM [de] YYYY')}} 
                  até {{moment(lotes.dataAbertura).format('DD [de] MMMM [de] YYYY')}} com Valor R${{lotes.valor}}
                </span>
              </p>
              </div>        
            </a-card-grid>



            <a-card-grid style="width:100%;text-align:center">
              <div class="card-body">
              <h5 class="card-title">Cronograma</h5>
                <div>
                  <a-collapse >
                    <a-collapse-panel v-for="(cat,key) in res.atividades" v-bind:key="key" :header="key">
                      <p v-for="(atv,j) in cat" v-bind:key="j">

                        <a-descriptions bordered>
                          <a-descriptions-item label="Titulo" :span="3">
                            {{atv.titulo}}
                          </a-descriptions-item>
                          <a-descriptions-item label="Descrição" :span="3">
                            {{atv.descricao}}
                          </a-descriptions-item>
                          <a-descriptions-item label="Horas participação" :span="3">
                            {{atv.horasParticipacao.slice(0, -3)}} horas
                          </a-descriptions-item>
                          <a-descriptions-item label="Quantidade de vagas" :span="3">
                            {{atv.quantidadeVagas}}
                          </a-descriptions-item>
                          <a-descriptions-item label="Data de início" ::span="3">
                            {{moment(atv.dataInicio).format('DD [de] MMMM [de] YYYY')}} 
                          </a-descriptions-item>
                        </a-descriptions>
                      </p>
                    </a-collapse-panel>
                  </a-collapse>
                </div>
              </div>        
            </a-card-grid>
          </a-card >          
      </a-layout-content>
</template>

<script>

import moment from "moment";
moment.locale("pt-br");
import axios from '../config/axiosConfig';

export default {
  props: {
    fetch: { type: Boolean },
    id: {type: Number},
  },
  async beforeMount() {
    const id = this.id || this.$route.params.id;
    const dataResponse = await axios.get("/public/evento/" + id);
    this.res = dataResponse.data;
    this.lotesDisponiveis = this.res.lotesDisponiveis;
    this.lotesVencidos = this.res.lotesVencidos;
  },

  methods: {
    moment: function(date) {
      return moment(date);
    },

    sair404() {
      this.$router.push("/404");
    },
  },

  data() {
    return {
      res: [],
      lotesDisponiveis: [],
      lotesVencidos: [],
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

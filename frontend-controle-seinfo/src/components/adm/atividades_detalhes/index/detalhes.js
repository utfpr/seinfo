const axios = require('../../../../config/axiosConfig');

import moment from "moment";
import listagemParticipantes from '../listagem_participantes/listagem_participantes.vue';
import listagemSubAtividades from "../../atividades/listagemSubAtividades/listagemSubAtividades.vue";

export default {
    components: {
        listagemParticipantes,
        listagemSubAtividades,
    },
    async mounted(){
        if(this.$route.params.data){
            this.dataDetalhes = this.$route.params.data;
            this.dataDetalhes.nomeCategoria = this.dataDetalhes.idCategoria;//não sei pq, mas o nome da categoria sai de modalVerMais como idCategoria
        }
        else{
            //quando é feito o reload da pagina, se perde toda informação vindo de "modalVerMais.vue" então tem que ser feito a requisição novamente
            await axios.get(`/api/atividade/${this.$route.params.idAtividade}/${this.$route.params.idEvento}`)
                .then((response) => {
                    this.dataDetalhes = response.data;
                    this.dataDetalhes.nomeCategoria = response.data.categoriaAtv.nome;
                })
                .catch(function (error) {
                    console.log(error);
            });
            await axios.get(`/api/evento/${this.$route.params.idEvento}`)
                .then((response) => {
                    this.dataDetalhes.data_ini_atv = moment(response.data.agendamento.dataHoraInicio).format("YYYY-MM-DD");
                    this.dataDetalhes.data_fim_atv = moment(response.data.agendamento.dataHoraFim).format("YYYY-MM-DD");
                    this.dataDetalhes.hora_ini_atv = moment(response.data.agendamento.dataHoraInicio).format("HH:mm");
                    this.dataDetalhes.hora_fim_atv = moment(response.data.agendamento.dataHoraFim).format("HH:mm");
                    this.dataDetalhes.local_atv = response.data.agendamento.local;
                    this.dataDetalhes.nomeEvento = response.data.nome;
                })
                .catch(function (error) {
                    console.log(error);
            });
            await axios.get("/api/protagonistas")
                .then((response) => {
                    response.data.forEach((element) => {
                        if(this.dataDetalhes.idAtividade == element.idAtividade){
                            this.dataDetalhes.idPessoa = element.aPes.nome;
                        }
                    });
                })
                .catch(function (error) {
                    console.log(error);
            });
            this.dataDetalhes.idAtividade = this.$route.params.idAtividade.toString();
        }
    },
    data() {
        return {
            dataDetalhes: {
                titulo: "",
                valor: "",
                data_ini_atv: "",
                data_fim_atv: "",
                hora_ini_atv: "",
                hora_fim_atv: "",
                horasParticipacao: "",
                quantidadeVagas: "",
                local_atv: "",
                idAtividade: "",
                idEvento: "",
                idCategoria: "",
                idPessoa: "",
                descricao: "",
                nomeEvento: "",
                nomeCategoria: "",
            },
        }
    },
    methods: {
        moment: function (date) {
            return moment(date);
        },
    }
}
const axios = require("axios");

import moment from "moment";

import listagemParticipantes from '../listagem_participantes/listagem_participantes.vue';

export default {
    async mounted(){
        if(this.$route.params.data){
            this.dataDetalhes.nomeCategoria = this.$route.params.data.idCategoria;//não sei pq, mas o nome da categoria sai de modalVerMais como idCategoria
            this.dataDetalhes = this.$route.params.data;
        }
        else{
            //quando é feito o reload da pagina é perdido toda informação vindo de "modalVerMais.vue" então tem que ser feito a requisição
            await axios.get(`http://localhost:3000/api/atividade/${this.$route.params.idAtividade}/${this.$route.params.idEvento}`)
                .then((response) => {
                    this.res = response.data;
                })
                .catch(function (error){
                    console.log(error);
            });
            await axios.get(`http://localhost:3000/api/evento/${this.$route.params.idEvento}`)
                .then((response) => {
                    this.evento = response.data;
                })
                .catch(function (error) {
                    console.log(error);
            });
            await axios.get("http://localhost:3000/api/protagonistas")
                .then((response) => {
                    this.protagonistas = response.data;
                })
                .catch(function (error) {
                    console.log(error);
            });
            console.log(this.res);console.log(this.evento);
            this.dataDetalhes.valor = this.res.valor;
            this.dataDetalhes.data_ini_atv = moment(this.evento.agendamento.dataHoraInicio).format("YYYY-MM-DD");
            this.dataDetalhes.data_fim_atv = moment(this.evento.agendamento.dataHoraFim).format("YYYY-MM-DD");
            this.dataDetalhes.hora_ini_atv = moment(this.evento.agendamento.dataHoraInicio).format("HH:mm");
            this.dataDetalhes.hora_fim_atv = moment(this.evento.agendamento.dataHoraFim).format("HH:mm");
            this.dataDetalhes.horasParticipacao = this.res.horasParticipacao.slice(0, 5);
            this.dataDetalhes.quantidadeVagas = this.res.quantidadeVagas;
            this.dataDetalhes.local_atv = this.evento.agendamento.local;
            this.dataDetalhes.idAtividade = this.$route.params.idAtividade;
            this.dataDetalhes.idCategoria = this.res.idCategoria;
            this.dataDetalhes.descricao = this.res.descricao;
            this.dataDetalhes.nomeEvento = this.evento.nome;
            this.dataDetalhes.nomeCategoria = this.res.categoriaAtv.nome;
            this.protagonistas.forEach((element) => {
                if(this.dataDetalhes.idAtividade == element.idAtividade){
                    this.dataDetalhes.idPessoa = element.aPes.nome;
                } 
            });
        }
    },
    components: {
        listagemParticipantes,
    },
    data() {
        return {
            res: {},
            evento: {},
            categorias: [],
            protagonistas: [],
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
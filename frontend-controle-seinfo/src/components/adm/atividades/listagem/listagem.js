const axios = require("axios");
import moment from "moment";

import modalExcluir from '../modalExlcuir/modalExcluir.vue';
import modalVerMais from '../modalVerMais/modalVerMais.vue';
import modalEditar from '../modalEditar/modalEditar.vue';
moment.locale("pt-br");
export default {
    components: { modalVerMais, modalEditar, modalExcluir }, 
    props: {
        disabled: Boolean,
    },
    beforeCreate() {
        this.form = this.$form.createForm(this);
    },
    created() {
        axios
            .get("http://localhost:3000/api/eventos")
            .then((response) => {
                this.eventos = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        axios
            .get("http://localhost:3000/api/categorias")
            .then((response) => {
                this.categorias = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        axios
            .get("http://localhost:3000/api/protagonistas")
            .then((response) => {
                this.protagonistas = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        this.pegar_tabela();
    },
    methods: {
        deletarModal(modalData){
        this.deletar(modalData);
        },
        onCancel() {
            console.log("CANCEL SUBMIT");
            this.show = false;
            this.titulo = "";
            this.valor = "";
            this.data_ini_atv = "";
            this.data_fim_atv = "";
            this.hora_ini_atv = "";
            this.hora_fim_atv = "";
            this.horasParticipacao = "";
            this.quantidadeVagas = "";
            this.local_atv = "";
            this.idEvento = "";
            this.idCategoria = "";
            this.idPessoa = "";
            this.descricao = "";
        },
        moment: function (date) {
            return moment(date);
        },
        pegar_tabela() {
            axios
                .get("http://localhost:3000/api/atividades/")
                .then((response) => {
                    this.res = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });

            axios
        },
        getEvtNome(idEvt) {
            for (var i = 0; i < this.eventos.length; i++) {
                if (this.eventos[i].idEvento == idEvt) return this.eventos[i].nome;
            }
        },
        openModal(data) {
            this.pegar_tabela();
            this.modalData = data;
            this.modalVisible = true;

            this.eventos.forEach((element) => {
                if (element.idEvento === this.modalData.idEvento) {
                    this.modalData.nomeEvento = element.nome;
                    this.modalData.local_atv = element.agendamento.local;
                    var datahorainicio = element.agendamento.dataHoraInicio;
                    var datahorafim = element.agendamento.dataHoraFim;
                    this.modalData.data_ini_atv = moment(datahorainicio).format(
                        "YYYY-MM-DD"
                    );
                    this.modalData.data_fim_atv = moment(datahorafim).format(
                        "YYYY-MM-DD"
                    );
                    this.modalData.hora_ini_atv = moment(datahorainicio).format("HH:mm");
                    this.modalData.hora_fim_atv = moment(datahorafim).format("HH:mm");
                }
            });

            this.protagonistas.forEach((element) => {
                if (this.modalData.idAtividade === element.idAtividade) {
                    this.modalData.idPessoa = element.aPes.nome;
                }
            });

            this.modalData.idCategoria = data.categoriaAtv.nome;
            this.modalData.horasParticipacao = data.horasParticipacao.slice(0, 5);
        },
        /*deletar(dados) {
            console.log("ID " + dados);
            axios
                .delete(
                    "http://localhost:3000/api/atividade/" +
                    dados.idAtividade +
                    "/" +
                    dados.idEvento
                )
                .then((response) => {
                    console.log("Deletou!");
                    console.log(response);
                    this.$router.replace("/adm/atividades");
                    location.reload();
                });
        },*/
    },
    data() {
        return {
            res: [],
            eventos: [],
            categorias: [],
            protagonistas: [],
            titulo: "",
            valor: "",
            data_ini_atv: "",
            data_fim_atv: "",
            hora_ini_atv: "",
            hora_fim_atv: "",
            horasParticipacao: "",
            quantidadeVagas: "",
            local_atv: "",
            idEvento: "",
            idCategoria: "",
            idPessoa: "",
            descricao: "",
            pegou: false,
            modalVisible: false,
            active: false,
            nomeEvento: "",
            nomeCat: "",
            obj_Resource: {
                titulo: "",
                valor: "",
                data_ini_atv: "",
                data_fim_atv: "",
                hora_ini_atv: "",
                hora_fim_atv: "",
                horasParticipacao: "",
                quantidadeVagas: "",
                local_atv: "",
                idEvento: "",
                idCategoria: "",
                idPessoa: "",
                descricao: "",
            },
            modalData: {
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
            },
        };
    },
};

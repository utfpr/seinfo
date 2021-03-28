const axios = require("axios");
import moment from "moment";

import modalExcluir from '../modalExlcuir/modalExcluir.vue';
import modalVerMais from '../modalVerMais/modalVerMais.vue';
moment.locale("pt-br");
export default {
    components: { modalVerMais, modalExcluir }, 
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
        handleSubmit(e) {
            var erros = [];
            if (!this.titulo) erros.push("Título é obrigatório!");
            if (!this.valor) erros.push("Valor é obrigatório!");
            if (!this.data_ini_atv) erros.push("Data de Início é obrigatório!");
            if (!this.data_fim_atv) erros.push("Data de Fim é obrigatório!");
            if (!this.hora_ini_atv) erros.push("Hora de Início é obrigatório!");
            if (!this.hora_fim_atv) erros.push("Hora de Fim é obrigatório!");
            if (!this.horasParticipacao)
                erros.push("Horas de Participação é obrigatório!");
            if (!this.quantidadeVagas)
                erros.push("Quantidade de Vagas é obrigatório!");
            if (!this.local_atv) erros.push("Local da Atividade é obrigatório!");
            if (!this.idEvento) erros.push("Selecione o Evento!");
            if (!this.idCategoria) erros.push("Selecione a Categoria!");
            if (!this.idPessoa) erros.push("Selecione o Protagonista!");
            if (!this.descricao) erros.push("Descrição é obrigatório!");
            e.preventDefault();
            if (!erros.length) {
                (this.obj_Resource.titulo = this.titulo),
                    (this.obj_Resource.valor = this.valor),
                    (this.obj_Resource.data_ini_atv = this.data_ini_atv),
                    (this.obj_Resource.data_fim_atv = this.data_fim_atv),
                    (this.obj_Resource.hora_ini_atv = this.hora_ini_atv),
                    (this.obj_Resource.hora_fim_atv = this.hora_fim_atv),
                    (this.obj_Resource.horasParticipacao = this.horasParticipacao),
                    (this.obj_Resource.quantidadeVagas = this.quantidadeVagas),
                    (this.obj_Resource.local_atv = this.local_atv),
                    (this.obj_Resource.idEvento = this.idEvento),
                    (this.obj_Resource.idCategoria = this.idCategoria),
                    (this.obj_Resource.idPessoa = this.idPessoa),
                    (this.obj_Resource.descricao = this.descricao),
                    axios
                        .post("http://localhost:3000/api/atividade", this.obj_Resource)
                        .then((response) => {
                            console.log(response);
                        })
                        .catch((error) => {
                            console.log(error.response);
                        });
                location.reload();
            } else {
                alert(erros.join("\n"));
            }
        },
        toggle() {
            this.active = !this.active;
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
        deletar(dados) {
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
        },
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
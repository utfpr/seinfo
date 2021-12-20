import axios from '../../../../config/axiosConfig';
import moment from "moment";
import modalVerMais from '../modalVerMais/modalVerMais.vue';
import modalEditar from '../modalEditar/modalEditar.vue';
import modalExcluir from '../modalExlcuir/modalExcluir.vue';
moment.locale("pt-br");
export default {
    components: { modalVerMais, modalEditar, modalExcluir },
    props: {
        disabled: Boolean,
        listData: Array,
        showActions: Boolean
    },
    beforeCreate() {
        this.form = this.$form.createForm(this);
    },
    created() {
        axios
            .get("/public/evento")
            .then((response) => {
                this.eventos = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        axios
            .get("/api/categoria")
            .then((response) => {
                this.categorias = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        axios
            .get("/api/obtemTodasAsPessoas")
            .then((response) => {
                this.protagonistas = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        this.pegar_tabela();
    },
    methods: {
        moment: function (date) {
            return moment(date);
        },
        deletarModal(){
            location.reload();
        },

        pegar_tabela() {
            this.res = this.listData;
        },
        getEvtNome(idEvt) {
            for (var i = 0; i < this.eventos.length; i++) {
                if (this.eventos[i].idEvento == idEvt) return this.eventos[i].nome;
            }
        },
        openModal(data) {

            this.pegar_tabela();
            this.modalData = data;
            this.modalData.removeAgenda = [];
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

            this.modalData.cpfOrganizador = data.protagonistaAtividade.CPF;
            this.modalData.idCategoria = data.categoriaAtv.idCategoria;
            this.modalData.horasParticipacao = data.horasParticipacao.slice(0, 5);

            this.modalData.atvAgenda.map((agenda) => {
                const { dataHoraFim, dataHoraInicio } = agenda;
                agenda.dataFim = moment(dataHoraFim).format("YYYY-MM-DD");
                agenda.horaFim = moment(dataHoraFim).format("HH:mm");
                agenda.dataInicio = moment(dataHoraInicio).format("YYYY-MM-DD");
                agenda.horaInicio = moment(dataHoraInicio).format("HH:mm");
            })
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
                cpfOrganizador: "",
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
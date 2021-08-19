import axios from '../../../../config/axiosConfig';
import moment from "moment";

moment.locale("pt-br");

export default {
    props: {
        data: Object,
    },
    beforeCreate() {
        this.form = this.$form.createForm(this);
        this.form.getFieldDecorator("keys", { initialValue: [], preserve: true });
    },
    created() {
        axios.get('/api/obtemTodasAsPessoas').then(response => {
            this.pessoas = response.data;
        }).catch(error => {
            console.log(error);
        })
    },
    mounted(){

    },
    methods: {
        moment: function (date) {
            return moment(date);
        },
        renderHourValidateStatus() {
            const error = this.onChangeHour();
            if (error === 2) return "error";
            return "";
        },
        renderHourHelpText() {
            const error = this.onChangeHour();
            if (error === 2) return "Hora de Fim deve ser maior que o Hora de Inicio";
            return "";
        },
        onChangeHour() {
            if (!this.data.hora_ini_eve || !this.data.hora_fim_eve) return 0;

            const data_ini_eve = new Date(
                this.data.data_ini_eve + " " + this.data.hora_ini_eve
            );
            const data_fim_eve = new Date(
                this.data.data_fim_eve + " " + this.data.hora_fim_eve
            );

            const isDayEqual = moment(data_ini_eve).isSame(data_fim_eve, "day");

            if (!isDayEqual) return null;

            let error = 0;

            let isStartHourLessThanEnd = undefined;
            isStartHourLessThanEnd = moment(data_ini_eve).isBefore(
                data_fim_eve,
                "hour"
            );

            if (!isStartHourLessThanEnd) {
                error = 2;
            }

            return error;
        },
        onChangeDate() {
            const error = this.verifyDate();
            return error;
        },
        verifyDate() {
            const startDate = new Date(this.data.data_ini_eve);
            const endDate = new Date(this.data.data_fim_eve);
            if (endDate - startDate < 0) {
                return 1;
            } else if (endDate - startDate > 0) {
                return 0;
            } else {
                const completeStartDate = new Date(
                    this.data.data_ini_eve + " " + this.data.hora_ini_eve
                );
                const completeEndDate = new Date(
                    this.data.data_fim_eve + " " + this.data.hora_fim_eve
                );
                if (completeEndDate - completeStartDate < 0) {
                    return 2;
                } else if (completeEndDate - completeStartDate > 0) {
                    return 0;
                } else {
                    return 2;
                }
            }
        },
        async patch(dados) {
            const erros = [];
            if (!dados.nome) erros.push("Nome é obrigatório!");
            if (!dados.agendamento.local) erros.push("Local é obrigatório!");
            if (!dados.status && dados.status !== 0) erros.push("Status é obrigatório!");
            if (!dados.descricao) erros.push("Descrição é obrigatório!");
            if (!dados.organizacaoEvento) erros.push("Organizador é obrigatório!");
            if (!dados.data_ini_eve) erros.push("Data de inicio é obrigatório!");
            if (!dados.hora_ini_eve) erros.push("Hora do inicio é obrigatório!");
            if (!dados.data_fim_eve) erros.push("Data do fim  é obrigatório!");
            if (!dados.hora_fim_eve) erros.push("Hora do fim é obrigatório!");
            const inicio = `${dados.data_ini_eve} ${dados.hora_ini_eve}`;
            const fim = `${dados.data_fim_eve} ${dados.hora_fim_eve}`;
            dados.agendamento.dataHoraInicio = moment(inicio).locale("pt-br").toISOString();
            dados.agendamento.dataHoraFim = moment(fim).locale("pt-br").toISOString();
            if (!erros.length) {
                try {
                    await axios.patch(`/api/evento/${dados.idEvento}`, dados);
                    this.$router.replace("./eventos");
                    location.reload();
                } catch (error) {
                    console.error(error);
                    this.$router.replace("./eventos");
                }
            } else {
                alert(erros.join('\n'));
            }
        },
    },
};
import axios from "axios";
import moment from "moment";

moment.locale("pt-br");

export default {
    props: {
        data: Object,
    },
    beforeCreate() {
        this.form = this.$form.createForm(this);
        this.form.getFieldDecorator("keys", { initialValue: [], preserve: true });
        console.log(this.data); 
    },
    created() {
        axios.get('http://localhost:3000/api/pessoas').then(response => {
            this.pessoas = response.data;
        }).catch(error => {
            console.log(error);
        })
    },
    created() {
        axios.get('http://localhost:3000/api/pessoas').then(response => {
          this.pessoas = response.data;
        }).catch(error => {
          console.log(error);
        })
    },
    methods: {
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
        patch(dados) {
            var erros = [];
            if (!dados.nome) erros.push("Nome é obrigatório!");
            if (!dados.cpfOrganizador) erros.push("Organizador é obrigatório!");
            if (!dados.local_eve) erros.push("Local é obrigatório!");
            if (!dados.status) erros.push("Status é obrigatório!");
            if (!dados.descricao) erros.push("Descrição é obrigatório!");
            if (!dados.cpfOrganizador) erros.push("Organizador é obrigatório!");
            if (!erros.length) {
                axios
                    .patch(`http://localhost:3000/api/evento/${dados.idEvento}`, dados)
                    .then((response) => {
                        console.log("Editou!");
                        console.log(response);
                        this.$router.replace("/adm/eventos");
                        location.reload();
                    });
            } else {
                alert(erros.join("\n"));
                this.$router.replace("/adm/eventos");
            }
        },
    },
};
import axios from "axios";
import moment from "moment";

moment.locale("pt-br");

export default {
    mounted(){ 
        this.pegar_tabela ()
    },
    props: {
        data: Object,
    },
    data() {
        return {
            obj_Resource: {
                nome: "",
                data_ini: "",
                hora_ini: "",
                data_fim: "",
                hora_fim: "",
                local_eve: "",
                select_lote: "",
                select_status: "",
                urlImagem: "",
                descricao: "",
            },
        };
    },
    beforeCreate() {
        this.form = this.$form.createForm(this);
        this.form.getFieldDecorator("keys", { initialValue: [], preserve: true });
    },
    methods: {
        pegar_tabela() { 
            axios
              .get(`http://localhost:3000/api/eventos/:${data.idEvento}`)
              .then(response => {
                console.log(response.data);
              })
              .catch(function(error) {
                console.log(error);
              });
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
            if (!this.obj_Resource.hora_ini || !this.obj_Resource.hora_fim) return 0;

            const data_ini_eve = new Date(
                this.obj_Resource.data_ini + " " + this.obj_Resource.hora_ini
            );
            const data_fim_eve = new Date(
                this.obj_Resource.data_fim + " " + this.obj_Resource.hora_fim
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
            const startDate = new Date(this.obj_Resource.data_ini);
            const endDate = new Date(this.obj_Resource.data_fim);
            if (endDate - startDate < 0) {
                return 1;
            } else if (endDate - startDate > 0) {
                return 0;
            } else {
                const completeStartDate = new Date(
                    this.obj_Resource.data_ini + " " + this.obj_Resource.hora_ini
                );
                const completeEndDate = new Date(
                    this.obj_Resource.data_fim + " " + this.obj_Resource.hora_fim
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
            if (!dados.local_eve) erros.push("Local é obrigatório!");
            if (!dados.status) erros.push("Status é obrigatório!");
            if (!dados.descricao) erros.push("Descrição é obrigatório!");
            console.log(dados);
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
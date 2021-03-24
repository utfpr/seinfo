import moment from 'moment';

export default {
    moment,
    props: {
      modalData: Object,
    },
    methods: {
        toggle() {
            this.active = !this.active;
        },
        onCancel() {
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
    }
}
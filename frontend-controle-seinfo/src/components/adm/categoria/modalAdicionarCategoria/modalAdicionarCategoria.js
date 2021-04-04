
import moment from 'moment';
import axios from 'axios';

export default {
    methods: {
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        handleSubmit() {
            if (!this.nome || this.nome.length === 0) {
                alert("Nome da Categoria não pode ser vazio!")
            }
            axios
                .post("http://localhost:3000/api/categoria", { nome: this.nome })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error.response);
                });
        }
    },
    data() {
        return {
            nome: "",
        };
    }
}
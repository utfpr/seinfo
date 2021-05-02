import axios from 'axios';

export default {
    name: 'ModalAdicionarCategoria',
    props: {
        isModalVisible: Boolean,
        closeModal: Function,
        getCategorias: Function,
    },
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
                    this.closeModal();
                    this.getCategorias();
                    console.log('response', response);
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
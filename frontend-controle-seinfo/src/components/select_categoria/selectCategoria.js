
import axios from 'axios';
import ModalAdicionarCategoria from './modalAdicionarCategoria/modalAdicionarCategoria.vue'

export default {
    name: 'SelectCategoria',
    components: {
        VNodes: {
            functional: true,
            render: (h, ctx) => ctx.props.vnodes,
        },
        ModalAdicionarCategoria,
    },
    beforeCreate() {
        this.form = this.$form.createForm(this);
    },
    created() {
        this.getCategorias();
    },
    methods: {
        openModal() {
            console.log("openmodal", this.isModalVisible);
            this.isModalVisible = true;
        },
        closeModal() {
            console.log('close', this.isModalVisible);
            this.isModalVisible = false;
        },
        handleModalCreate() {
            console.log('child created');
        },
        getCategorias() {
            axios.get("http://localhost:3000/api/categorias").then(response => {
                console.log('response', response);
                this.categorias = response.data;
                return response;
            }).catch(error => {
                console.log(error.response);
            });
        },
    },
    data() {
        return {
            categorias: [],
            categoria: {
                id: "",
                nome: "",
            },
            nome: "",
            idCategoria: "",
            novaCategoria: "",
            isModalVisible: false,
        };
    }
}
const axios = require('../../../../config/axiosConfig');

import modalVerMais from '../modalVerMais/modalVerMais.vue';
import modalEditar from '../modalEditar/modalEditar.vue';
import modalExcluir from '../modalExcluir/modalExcluir.vue';

// const columns = [{
//   title: 'Nome do Evento',
//   dataIndex: 'nome',
//   width: 200,
// }, {
//   title: 'Data do Evento',
//   dataIndex: 'data',
//   width: 200,
// }, {
//   title: 'Status do Evento',
//   dataIndex: 'status',
// }, {
//   title: 'Action',
//   key: 'operation',
//   fixed: 'right',
//   width: 200,
//   scopedSlots: { customRender: 'action' },
// },
// ];

export default {
  components: {
    modalVerMais,
    modalEditar,
    modalExcluir
  },
  methods: {
    openModal(data) {
      this.modalData = data
      this.modalVisible = true
    },
    pegar_tabela(name) {
      axios.get('/api/' + name)
        .then((response) => {
          console.log("Listou " + name);
          console.log(response.data);
          this.res_localizar = response.data
        })
        .catch(function (error) {
          console.log(error);
        })
    },
  },
  data() {
    return {
      res_localizar: [],
      columns: [],
      tabelas: [],
      modalVisible: false,
      modalData: ''
    }
  }
}
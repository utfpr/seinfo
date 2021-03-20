<template>
  <div>
    <cadastro />
    <listagem />
    <modal-ver-mais />
    <modal-editar />
    <modal-excluir />
  </div>
</template>

<script>
import Cadastro from './cadastro/index';
import Listagem from './listagem/index';
// import ModalVerMais from './modal/modalVerMais.vue';
// import ModalEditar from './modal/modalEditar.vue';
// import ModalExcluir from './modal/modalExcluir.vue';

export default {
  name: 'Landing',
  components: {
    'cadastro': Cadastro,
    'listagem': Listagem,
    // 'modal-ver-mais': ModalVerMais,
    // 'modal-editar': ModalEditar,
    // 'modal-excluir': ModalExcluir,
  }
}
</script>
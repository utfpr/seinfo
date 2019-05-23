<template>
<div>
<a-button class="eve" type="button" :href="'/adm/cadEvento'"><a-icon type="plus" /> EVENTO</a-button>
<a-table :columns="columns" :dataSource="data" :pagination="{ pageSize:6}" >
  <a slot="action" slot-scope="text" ><button type="button" class="ic"><a-icon type="edit" /></button>    <button type="button" class="ic" v-on:click="deletar(tabela.idEvento)" >  <a-icon type="delete" /></button>    <button type="button" class="ic"><a-icon type="eye" />  </button></a>
</a-table>
</div>
</template>

<script>
const columns = [{
  title: 'Nome do Evento',
  dataIndex: 'nome',
  width: 200,
}, {
  title: 'Data do Evento',
  dataIndex: 'data',
  width: 200,
}, {
  title: 'Status do Evento',
  dataIndex: 'status',
},{
    title: 'Operações',
    fixed: 'right',
    width: 200,
    scopedSlots: { customRender: 'action' },
  },
  ];

const data = [];
for (let i = 0; i < 8; i++) {
  data.push({
    key: i,
    nome: `SEINFO 2019 ${i}`,
    data: '20/05/2019',
    status: `Disponivel. ${i}`,
  });
}

export default {
  data() {
    return {
      data,
      columns,
    }
  }
}
</script>

<style scoped>

.ic{
  background: transparent;
  border: none;
  cursor: pointer;
  color: black;
}

.eve{
  left: 85%;
  margin-top: 2%;
}

</style>
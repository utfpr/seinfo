<template>
  <div>
    <a-select defaultValue="Selecione uma Opção" @change="handleChange" class="space">
          <a-select-option name="administradores" value="administradores">Administradores</a-select-option>
          <a-select-option name="alunos" value="alunos">Alunos</a-select-option>
          <a-select-option name="convidados" value="convidados">Convidados</a-select-option>
          <a-select-option name="eventos" value="eventos">Eventos</a-select-option>
          <a-select-option name="palestrantes" value="palestrantes">Palestrantes</a-select-option>
          <a-select-option name="ministrantes" value="ministrantes">Ministrantes</a-select-option>
    </a-select>

    <a-table :columns="columns" :dataSource="data" :pagination="{ pageSize: 15 }" :scroll="{ y: 380 }" >
      <a slot="action" slot-scope="text" ><button type="button" class="ic"><a-icon type="edit" /></button><button type="button" class="ic" v-on:click="deletar(tabela.idEvento)" >  <a-icon type="delete" /></button>    <button type="button" class="ic"><a-icon type="eye" />  </button></a>
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
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 200,
    scopedSlots: { customRender: 'action' },
  },
  ];

const data = [];
for (let i = 0; i < 100; i++) {
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
  border: transparent;
  cursor: pointer;
  color: black;
}

.eve{
  left: 85%;
  margin-top: 2%;
}

</style>

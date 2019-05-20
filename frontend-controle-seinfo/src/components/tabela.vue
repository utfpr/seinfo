<template>
  <div>
    <a-select defaultValue="Selecione uma Opção" class="space">
        <a-select-option name="administradores"  value="administradores" v-on:click="pegar_tabela()">Administradores</a-select-option>
        <a-select-option name="alunos" value="alunos" v-on:click="pegar_tabela()">Alunos</a-select-option>
        <a-select-option name="convidados" value="convidados" v-on:click="pegar_tabela()">Convidados</a-select-option>
        <a-select-option name="eventos" value="eventos" v-on:click="pegar_tabela('eventos')">Eventos</a-select-option>
        <a-select-option name="palestrantes" value="palestrantes" v-on:click="pegar_tabela()">Palestrantes</a-select-option>
        <a-select-option name="ministrantes" value="ministrantes" v-on:click="pegar_tabela()">Ministrantes</a-select-option>

      </a-select>

    <a-table :columns="columns" :dataSource="data" :pagination="{ pageSize: 15 }" :scroll="{ y: 380 }" >
      <a slot="action" slot-scope="text" >
        <button type="button" class="ic"><a-icon type="edit" /></button>
        <button type="button" class="ic" v-on:click="deletar(tabela.idEvento)" ><a-icon type="delete" /></button>
        <button type="button" class="ic"><a-icon type="eye" /></button>
      </a>
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

export default {
  methods: {
    pegar_tabela (name) {
      axios.get('http://localhost:3000/api/' + name)
      .then((response) => {
       console.log("Listou " + name);
       console.log(response.data);
       this.tabelas = response.data;
     })
     .catch(function (error) {
       console.log(error);
     })
    },
    onchange: function() {
    	console.log(this.key)
      alert(this.key)
      for (let i = 0; i < 100; i++) {
      this.data.push({
        key: i,
        nome: `SEINFO 2019 ${i} - ` + this.key,
        data: '20/05/2019',
        status: `Disponivel. ${i}`,
      })
    }
  }
  },

  data() {
    return {
      data: [],
      columns,
      key: "Selecione...",
      tabelas: [],
    }
  }
}
const axios = require('axios');
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

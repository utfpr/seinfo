<template>
  <div class="box">
      <a-select defaultValue="Selecione uma Opção" @change="handleChange" class="space">
        <a-select-option name="administradores" value="administradores">Administradores</a-select-option>
        <a-select-option name="alunos" value="alunos">Alunos</a-select-option>
        <a-select-option name="convidados" value="convidados">Convidados</a-select-option>
        <a-select-option name="eventos" value="eventos">Eventos</a-select-option>
        <a-select-option name="palestrantes" value="palestrantes">Palestrantes</a-select-option>
        <a-select-option name="ministrantes" value="ministrantes">Ministrantes</a-select-option>
      </a-select>

    <table class="table table-sm table-bordered">
    <thead class="thead-dark">
      <tr class="th">
        <th scope="col">Nome do Evento</th>
        <th scope="col">Data do Evento</th>
        <th scope="col">Opções</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table_back" v-for="tabela in tabelas">
        <td>{{tabela.nome}}</td>
        <td>{{tabela.data_horario_inicio }}</td>
        <td>    <button v-on:click="deletar(tabela.idEvento)" ><a-icon type="delete" /></button>  <button><a-icon type="eye" /></button></td>
      </tr>
    </tbody>
</table>
  </div>
</template>

<script>


export default {
  data () {
     return {
       tabelas: {}
     }
   },
   created(){
     console.log("Entrou para Listar");
   axios.get('http://localhost:3000/api/eventos')
     .then( (response) => {
       console.log("Listou Eventos!");
       this.tabelas = response.data;
       //console.log(this.tabelas);
     })
     .catch(function (error) {
       console.log(error);
     });


   },
  methods: {
    deletar(pos) {
      console.log("ID "+pos);
      axios.delete('http://localhost:3000/api/evento/'+pos)
            .then(response => {
                console.log("TESTE");
                console.log(response);
            });
            console.log("Deletou! ID:"+pos);
            location.reload();
    },
    onSearch (value) {
      console.log(value)
    }
  }

};



const axios = require('axios');




</script>


<style scoped>
.box {
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
  padding: 10px;
}

.table{
    text-align: center;
}

.table .thead-dark th{
  background-color: rgb(63, 63, 63);
  border: 1px solid rgb(202, 202, 202);
}

.table_back{
    background-color: rgba(15, 15, 15, 0.253);
}

.space {
  padding: 2px;
  width: 221px;
  margin-left:25%;
  width: 50%;
}
</style>

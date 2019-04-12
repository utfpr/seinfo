<template>
  <div class="box">
    <table class="table table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Nome do Evento</th>
      <th scope="col">Data do Evento</th>
      <th scope="col">Opções</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table_back" v-for="tabela in tabelas">
      <td>{{tabela.nome}}</td>
      <td>{{tabela.data_horario_inicio }}</td>
      <td><button> <a-icon type="edit" /></button>  <button v-on:click="deletar(tabela.idEvento)" ><a-icon type="delete" /></button>  <button><a-icon type="eye" /></button></td>
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
    }
  }

};



const axios = require('axios');




</script>


<style scoped>
.box {
  margin-right: 20px;
  margin-left: 50px;
}

.table{
    text-align: center;
}

.table_back{
    background-color: rgb(165, 165, 165);
}

</style>

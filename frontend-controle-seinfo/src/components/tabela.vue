<template>
  <div class="box">
    
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
     console.log("Navegador");
   axios.get('http://localhost:3000/evento')
     .then( (response) => {
       console.log(response.data);
       console.log("Sò reponse");
       this.tabelas = response.data;
       console.log(this.tabelas);
       // this.tabelas.id = response.data[0].idEvento;
       // this.tabelas.nome = response.data[0].nome;
       // this.tabelas.data = response.data[0].data_horario_inicio;
     })
     .catch(function (error) {
       console.log(error);
     });


   },
  methods: {
    deletar(pos) {
      console.log("ID "+pos);
      axios.delete('http://localhost:3000/evento/'+pos)
            .then(response => {
                console.log("TESTE");
                console.log(response);
            });
            console.log("Deletou!");
            location.reload();
    }
  }
  // apagar:() => {
  //   console.log("TESte");

          // axios.delete('http://localhost:3000/eventos')
          //       .then(response => {
          //           this.result.splice(id, 1)
          //       });
          //       console.log(this.result);

//          }

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
  background-color: rgb(41, 25, 100);
  border: 1px solid rgb(202, 202, 202);
}

.table_back{
    background-color: rgb(165, 165, 165);
}

</style>

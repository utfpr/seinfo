<template>
<div class="title">
  <a>{{obj_evento.title}}</a>
  <div class="box">
    <div class = "row">
      <div class="col-md-3">
        <div class="card">
          <img class="card-img-top" src="../assets/test.jpg" alt="Card image cap">
          <div class="card-body">
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <button type="button" class="btn btn-dark" data-toggle="modal" data-target=".bd-example-modal-lg">INFORMAÇÕES</button>
        </div>

        <div class="modal fade bd-example-modal-lg " tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-md">
            <div class="modal-content">
              <h3><b>{{obj_evento.titulo}}</b></h3>
              <a>{{obj_evento.descricao}}</a>
              <router-link tag = "button" class="btn btn-dark" to="/login">INSCREVER-SE</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      obj_evento: {
        titulo: "SEINFO 2019",
        descricao: "TEMOS QUE ARRUMAR AQUI!",
        title:"EVENTOS DISPONÍVEIS"
      }
    }
  },
  methods:{
    openLogin(){
      window.location.href = "http://localhost:8080/#/login";
    }
  }
};
</script>

<style scoped>

.card{
  width: 18rem;
  height: 28rem;
  border: 1px solid black;
}

.card-body{
  background-color: black;
}

.btn-dark{
  border-radius: 0px;
}

.box{
  margin-right: 20px;
  margin-left: 20px;
  padding: 50px;
  border-radius: 5px;
  background-color: rgb(211, 211, 211);
}

.title{
  margin-top: 20px;
  text-align: center;
}

</style>

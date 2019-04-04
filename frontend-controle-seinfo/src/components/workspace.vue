<template>
  <div class = "row">
    <div class="col-md-3">
      <div class="card">
        <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
        <div class="card-body">
          <p
            class="card-text"
          >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Go somewhere</button>
      </div>

      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <h1>TITLE {{obj_evento.titulo}}</h1>
            <h3>DESCRIÇÃO:{{obj_evento.descricao}}</h3>
            <router-link tag = "button" class="btn btn-success" to="/login">INSCREVER-SE</router-link>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <div class="col-md-3">
      <div class="card">
        <img class="card-img-top" src="../assets/plus.png" alt="Card image cap">
        <div class="card-body">
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
        descricao: "jkdhfjksaljdshfiskaojofhasdjsafouhisahjfsjhuihaf"
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
}

</style>

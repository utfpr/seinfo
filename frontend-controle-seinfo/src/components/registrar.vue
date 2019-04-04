<template>
  <div>
    <div>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Estudante UTFPR</button>
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
             <div class="form-group col-md-6">
               <label for="inputEmail4">CPF</label>
               <input type="number" class="form-control" id="inputEmail4" placeholder="CPF">
            </div>
            <router-link tag = "button" class="btn btn-success" to="/login">Cadastrar</router-link>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Visitante</button>
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <h1>TITLE </h1>
            <h3>DESCRIÇÃO:</h3>
            <router-link tag = "button" class="btn btn-success" to="/login">INSCREVER-SE</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
   

};
</script>

<style scoped>
</style>

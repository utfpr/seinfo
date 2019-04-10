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
    <tr class="table_back">
      <td>SEINFO</td>
      <td>20/04/2019</td>
      <td><button> <a-icon type="edit" /></button>  <button><a-icon type="delete" /></button>  <button><a-icon type="eye" /></button></td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
export default {};
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
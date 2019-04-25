<template>
<div>
  <nav class="navbar navbar-light justify-content-between">
  <a class="navbar-brand">SEINFO</a>
  <a-button class="bt" href="http://localhost:8080/login" style="font-family:sans-serif"><a-icon type="user" />LOGIN</a-button>
</nav>
</div>
</template>

<script>
export default {};
</script>

<style scoped>

.bt {
  background: transparent;
  border-radius: 20px;
  border-color: rgb(0, 201, 201);
  color: rgb(0, 201, 201);
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.navbar{
  position: absolute;
  z-index: 1050;
  width: 100%;
  background-color: transparent;
}

.navi {
  background-color: rgb(34, 34, 34);
  box-shadow: 6px 3px 10px rgb(202, 202, 202);
}

</style>

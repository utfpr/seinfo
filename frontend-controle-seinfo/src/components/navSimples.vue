<template>
  <div>
    <div class="justify-content-center">
    </div>
    <nav class="navbar navbar-expand-sm navi">
      <div class="navbar-collapse justify-content-center">
        <img src="../assets/logo_com_nome.jpg" class="justify-content-center">  
        <a-dropdown>
          <a class="bt" href="#">
            <a-icon type="menu-fold"/>
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <a href="#">Profile</a>
            </a-menu-item>
            <a-menu-divider/>
            <a-menu-item key="1"><a href="#">Settings</a></a-menu-item>
            <a-menu-item key="2"><a href="#">Help</a></a-menu-item>
              <a-menu-divider/>
              <a-menu-item key="3"><a href="http://localhost:8080/">Sign Out</a></a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bt {
  background: transparent;
  border: transparent;
  color: white;
}

.navi {
  background-color: rgb(34, 34, 34);
  box-shadow: 6px 3px 10px rgb(202, 202, 202);
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>

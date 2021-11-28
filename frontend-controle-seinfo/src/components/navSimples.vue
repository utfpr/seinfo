<template>
  <AuthConsumer>
    <div slot-scope="{ signOut }">
    <div class="justify-content-center">
    </div>
    <nav class="navbar navbar-expand-sm navi">
      <div class="navbar-collapse justify-content-center">
        <a :href="'/'"><img src="../assets/logo_com_nome.jpg" style="height:50px; margin-left:74px;"></a>
      </div>
      <div class="logOut" >
        <button type="submit"  class="buttonInvisible"  @click="logOut(signOut)">
          <a-icon type="logout"/>
          <span>Sair</span>
        </button>
      </div>
    </nav>
  </div>
  </AuthConsumer>
</template>

<script>
import AuthConsumer from '../contexts/authConsumer';
export default {
  data() {
    return {

    }
  },
  components: {
    AuthConsumer
  },
  methods: {
    logOut(signOut){
      signOut();
      window.location.replace('/');
    }
  }
};
</script>

<style scoped>

.navbar{
  padding:0%
}

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

.logOut {
 color: white;
 margin-right: 15px;
}

.buttonInvisible {
  background-color: transparent;
  border-color: transparent;
  cursor: default;
}
</style>

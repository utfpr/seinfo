<template>
<div>
  <nav class="navbar navbar-light justify-content-between" >
  <a :href="'/'" class="navbar-brand"><img src="../assets/logo_com_nome.jpg" style="height:50px;"></a>
  <a-form layout="inline">
    <a-form-item>
    <a-input name="username" type="text" placeholder="Username" class="lg" required="required">
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input name="password" type="password" placeholder="Password" class="lg" required="required">
        <a-icon
          slot="prefix"
          type="lock"
          style="color:rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button html-type="submit" value="a" style="background:transparent;border:transparent;color:white">Entrar</a-button>
      <a-button value="b" style="background:transparent;color:white">Cadastro</a-button>
    </a-form-item>
  </a-form>
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
  width: 100%;
  position: fixed;
  z-index: 1050;
  padding: 0;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Open Sans', sans-serif;
	background: #092756;
	background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -o-radial-gradient(0% 100%, ellipse cover, rgb(9, 21, 26) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(6, 26, 34, 0.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(11, 28, 36, 0.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
}

.navi {
  background-color: rgb(34, 34, 34);
  box-shadow: 6px 3px 10px rgb(202, 202, 202);
}

.lg{
  width: 160px;
  height: 30px;
}

</style>
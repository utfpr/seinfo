<template>
  <div id="app" class="body" style="background-color:black;">
    <div id="login">
      <div class="container" style="text-align:left;">
        <div id="login-row" class="row justify-content-center">
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
              <form id="login-form" class="form" action method="post">
                <h3 class="text-info">Login</h3>
                <div class="form-group">
                  <label style="text-align:left;" class="text-info">Login:</label>
                  <br>
                  <input type="text" name="username" id="username" class="form-control">
                </div>
                <div class="form-group">
                  <label for="password" class="text-info">Senha:</label>
                  <br>
                  <input type="password" name="password" id="password" class="form-control">
                </div>
                <div class="form-group">
                  <label for="remember-me" class="text-info">
                    <span></span>
                    <span></span>
                  </label>
                  <br>
                  <input type="submit" name="submit" class="btn btn-info btn-md" value="Entrar">
                </div>
                <div id="register-link" class="text-right">
                  <a href="#" class="text-info">Registre-se</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body { 
  margin: 0;
  padding: 0;
  background-color: #17a2b8;
  height: 100vh;
}
#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 320px;
  border: 1px solid #9c9c9c;
  background-color: #eaeaea;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login
  .container
  #login-row
  #login-column
  #login-box
  #login-form
  #register-link {
  margin-top: -85px;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
}


</style>

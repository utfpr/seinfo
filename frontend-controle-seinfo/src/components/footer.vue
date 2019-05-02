<template>
  <footer class="footer-distributed">
    <div class="footer-right">
      <p class="direita footer-links">
        <a href="#">
          <a-icon type="arrow-up"/></a>
      </p>
    </div>
    <div class="footer-meio">
        <span>© UTFPR - Universidade Tecnológica Federal do Paraná</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>

.footer-distributed {
  background-color: #1b1b1b;
  padding: 17px 25px;
}

.footer-distributed .footer-right {
  float: right;
  margin-right: 10px;
}

.footer-distributed .footer-meio {
  text-align: center;
  color: #8f9296;
}

.footer-distributed .footer-right a {
  font-size: 17px;
  color: #ffffff;
  line-height: 25px;
}

</style>

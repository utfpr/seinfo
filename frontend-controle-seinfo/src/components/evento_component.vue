<template>
  <div style="margin-top: 60px">
    <div id="work">
      <a-layout-content>
        <div class="grid-container">
          <div class="parent" style="max-width: 700px;">
            <img class="child" src="../assets/banner.png">
          </div>
        </div>
      </a-layout-content>
  </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
#work {
  background: #092756;
	background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -o-radial-gradient(0% 100%, ellipse cover, rgb(9, 21, 26) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(6, 26, 34, 0.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(11, 28, 36, 0.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 8px;
  padding: 8px;
}

.parent {
  margin: auto;
  display: flex;
  height: 100%;
  width: 100%;
}
.child {
  width: 100%;
  margin: auto;
}
</style>

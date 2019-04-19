<template>
<div class="row justify-content-center">
  <div >
<a-card
  hoverable
  class="box-1"
>
  <img
    class="box-2"
    alt="example"
    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    slot="cover"
  />
  <template class="ant-card-actions" slot="actions">
    <a-button class="bt">Default</a-button>
  </template>
  <a-card-meta
    title="Card title"
    description="This is the description">
  </a-card-meta>
</a-card>
</div>
<div>
<a-card
  hoverable
  class="box-1"
>
  <img
    class="box-2"
    alt="example"
    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    slot="cover"
  />
  <template class="ant-card-actions" slot="actions">
    <a-button class="bt">Default</a-button>
  </template>
  <a-card-meta
    title="Card title"
    description="This is the description">
  </a-card-meta>
</a-card>
</div>
</div>
</template>

<script>
export default {
};
</script>

<style scoped>

.box-1{
  height: 450px;
  width: 450px;
  padding: 10px;
  margin: 50px;
  margin-top: 30px;
  background: transparent;
  border: transparent;
}

.bt{
  border-color:blue;
  color: blue;
}

.ant-card-actions {
    border-top: transparent;
    background: transparent;
    zoom: 1;
    list-style: none;
    margin: 0;
    padding: 0;
}

.box-2{
  min-height: 260px;
  max-height: 260px;
  min-width: 440px;
  max-width: 440px;
}

</style>

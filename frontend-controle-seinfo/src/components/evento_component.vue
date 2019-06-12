<template>
  <div style="margin-top: 60px">
    <div id="work">
      <a-layout-content>
        <div>
          <div>
            <img class="child" src="../assets/banner.png">
          </div>
          <div class="box">
          <a-row :gutter="16">
            <a-col :span="6">
              <a-card class="title" title="Data de Inicio" :bordered=false>
                <p>card content</p>
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card class="title" title="Data de Fim" :bordered=false>
                <p>card content</p>
              </a-card> 
            </a-col>
            <a-col :span="6">
              <a-card class="title" title="Valor do Evento" :bordered=false>
                <p>card content</p>
              </a-card>   
            </a-col>
            <a-col :span="6">
              <a-card class="title" title="Local" :bordered=false>
                <p>card content</p>
              </a-card>   
            </a-col>
          </a-row>
        </div>
          <div>
    <a-card
      class="layer"
      title="Evento"
      :tabList="tabList"
      :activeTabKey="key"
      @tabChange="key => onTabChange(key, 'key')"
    >
      <span slot="customRender" slot-scope="item">
        <a-icon type="home"/>{{item.key}}
      </span>
      {{contentList[key]}}
    </a-card>
    <br /><br />

  </div>

    </div>
      </a-layout-content>
  </div>
  </div>
</template>

<script>
export default {
data () {
    return {
      tabList: [{
        key: 'tab1',
        // tab: 'tab1',
        scopedSlots: { tab: 'customRender'}
      }, {
        key: 'tab2',
        tab: 'tab2',
      }],
      contentList: {
        tab1: 'content1',
        tab2: 'content2',
      },
      tabListNoTitle: [{
        key: 'article',
        tab: 'article',
      }, {
        key: 'app',
        tab: 'app',
      }, {
        key: 'project',
        tab: 'project',
      }],
      key: 'tab1',
      noTitleKey: 'app',
    }
  },
  methods: {
    onTabChange (key, type) {
      console.log(key, type)
      this[type] = key
    },
  },
}
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

.layer{
  margin-top: 3%;
  width: 90%;
  margin-left: 5%;
}

.child {
  max-width: 70%;
  min-width: 70%;
  max-height: 70%;
  min-height: 70%;
  margin-left: 15%;
}

.title{
  text-align: center;
  border: 0.1px solid black;
  cursor: pointer;
  position: relative;
}

.box{
  margin-top: 3%;
  width: 90%;
  margin-left: 5%;
}

</style>

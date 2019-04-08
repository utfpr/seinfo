<template>
<div>
  <navSimples></navSimples>
  <div class="row">
  <div class="col-3">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
    </div>
  </div>
  <div class="col-6">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><workspace></workspace></div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"></div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"></div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"></div>
    </div>
  </div>
</div>  
</div>
</template>

<script>
import navSimples from "./navSimples.vue"
import workspace from "./workspace.vue"
export default {
  data() {
    return {
      obj_evento: {
        title: "EVENTOS DISPONÍVEIS"
      }
    };
  } ,
  name: 'work',
    components:{
        navSimples,
        workspace
    },
};
</script>

<style scoped>

.title{
  margin-top: 20px;
}

.box{
  margin-right: 20px;
  margin-left: 20px;
  padding: 50px;
  border-radius: 5px;
}

</style>
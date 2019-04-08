<template>
  <div>
    <navHome></navHome>
    <workspace></workspace>
  </div>
</template>

<script>
import workspace from "./workspace.vue"
import navHome from "./navHome.vue"
export default {
    name: 'work',
    components:{
        workspace,
        navHome
    },
};
</script>

<style scoped>

.nav-link{
  color: rgb(145, 145, 145);
}

</style>

<template>
  <div>
    <nav>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="#">Login</a>
        </li>
      </ul>
    </nav>
    <workspace></workspace>
  </div>
</template>

<script>
import workspace from "./workspace.vue"
export default {
    name: 'work',
    components:{
        workspace
    }

};
</script>

<style scoped>
</style>

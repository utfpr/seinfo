<template>
  <span>
    <slot v-bind="{ signIn, updateUser, signOut, getToken: getToken(), getUser: getUser() }"/>
  </span>
</template>

<script>
export default {
  inject: ["signIn","updateUser","signOut","getToken","getUser"]
};
</script>

<style>
</style>

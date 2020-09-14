<template>
  <span>
    <slot/>
  </span>
</template>

<script>
import auth from '../services/auth';

export default {
  mounted(){
      this.verifyData(); 
  },
//   update(){
//       this.verifyData();
//   },
  data() {
    return {
        user: {},
        token: ""
    };
  },
  methods: {
    async verifyData() {
        const storegeToken = await auth.getToken();
        const storegeUser = await auth.getUser();

        if(storegeToken !== null && storegeUser !== null) {
            this.token = storegeToken;
            this.user = storegeUser;
        }
    },
    async signIn({token, user}) {
        await auth.login(token, user);
        this.token = token;
        this.user = user;
    },
    async updateUser({token, user}) {
        await auth.login(token, user);
        this.user = {token: token, user: user};
    },
    async signOut() {
        await auth.logout();
        this.user = null;
    },
  },
  computed: {
    getToken() {
      return this.token;
    },
    getUser() {
      return this.user;
    },
  },
  provide() {
    return {
      signIn: this.signIn,
      updateUser: this.updateUser,
      signOut: this.signOut,
      getToken: () => this.token,
      getUser: () => this.user,
    };
  }
};
</script>

<style>
</style>
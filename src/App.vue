<template>
  <div>
    <div id="background"></div>
    <div id="background-color"></div>
    <signin v-if="login"/>
    <signin-message v-if="signinMsgShow" />
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import Navbar from '@/components/Navbar.vue'
import Signin from '@/components/Signin.vue'
import SigninMessage from '@/components/SigninMessage.vue'

export default {
  components: {
    Navbar,
    Signin,
    SigninMessage,
  },
  computed: {
    ...mapGetters(["login","signinMsgShow"]),
  }
}
</script>

<style>
  div {
    color: lightgray;
    font-family: DINNext, Matterhorn, Helvetica, sans-serif;
  }

  #background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url("https://images.unsplash.com/photo-1544656376-ffe19d4b7353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBza3l8ZW58MHx8MHx8&w=1000&q=80");
    background-color: rgba(0, 0, 0);
  }

  #background-color {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>

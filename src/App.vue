<template>
  <div :class="[login ? (logedin ? 'singin-left-scroll-logedin' : 'singin-left-scroll-logedout'): '']">
    <div id="background"></div>
    <div id="background-color"></div>
    <signin class="test" v-if="login"/>
    <signin-message v-if="signinMsgShow" />
    <navbar/>
    <router-view class="view-width"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    ...mapGetters(["login", "logedin", "signinMsgShow"]),
  },
  watch: {
    login(val) {
      if(val) {
        document.querySelector("body").classList.add("fixedPosition");
      }
      else {
        document.querySelector("body").classList.remove("fixedPosition");
      }
    }
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

  .fixedPosition {
    overflow-y: hidden;
  }

  .view-width {
    width: 800px;
    margin: 0 auto;
  }

  @media screen and (max-width: 991.5px) {
    .view-width {
      width: 700px;
    }
  }

  @media screen and (max-width: 768px) {
    .view-width {
      width: 550px;
    }
  }

  @media screen and (max-width: 576px) {
    .view-width {
      width: 95%;
    }
  }

  @media screen and (max-height: 610px) {
      .singin-left-scroll-logedout {
          padding-right: 15px;
      }
  }

  @media screen and (max-height: 420px) {
      .singin-left-scroll-logedin {
          padding-right: 15px;
      }
  }
</style>

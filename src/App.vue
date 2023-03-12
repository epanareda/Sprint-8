<template>
  <div>
    <div id="background"></div>
    <div id="background-color"></div>
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
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

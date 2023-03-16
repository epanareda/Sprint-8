<template>
  <div class="mb-4 btn-container">
    <div class="piece-1"></div>
    <div class="piece-2"></div>
    <div class="light-1"></div>
    <div class="light-2"></div>
    <button class="m-0 border-0 text-start" @click="linkCharacter" :value="JSON.stringify(character)">
      <div class="info-container">
        <!-- <div class="img-container">
          <img :src="`https://starwars-visualguide.com/assets/img/characters/${
            character.url.split('/')[character.url.split('/').length - 2]
          }.jpg`">
        </div> -->
        <h5>{{character.name.toUpperCase()}}</h5>
      </div>
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: 'Character',
  props: ["character"],
  methods: {
    ...mapMutations(["selectCharacter"]),
    linkCharacter(val) {
      this.selectCharacter(val);
      this.$router.push({name: 'character'});
    }
  },
}
</script>

<style scoped>
  .btn-container {
    width: 500px;
    position: relative;
  }

  button {
    width: 100%;
    height: 100%;
    padding: 2rem 2rem;

    background-color: rgb(35, 35, 35);
    color: lightgrey;
    transition: 0.5s;
  }

  .info-container {
    display: flex;
    gap: 2rem;
  }

  .img-container {
    width: 75px;
    border-radius: 5px;
    padding: 1rem 0.5rem;
    background-color: grey;
  }

  .img-container > img {
    width: 100%;
  }

  .light-1,
  .light-2 {
    position: absolute;
    top: 15px;
    height: 5px;
    background-color: grey;
    border-radius: 100px;
    transition: 0.5s;
  }

  .light-1 {
    right: 35px;
    width: 40px;
  }

  .light-2 {
    right: 25px;
    width: 5px;
  }

  .btn-container:hover > .light-1,
  .btn-container:hover > .light-2 {
    background-color: white;
    box-shadow: 0 0 1rem 0.25rem white;
  }

  .btn-container:hover > button {
    color: white;
  }

  .piece-1 {
    position: absolute;
    width: 100px;
    height: 1rem;
    top: 0;
    left: 60px;
    background-color: black;
  }
  
  .piece-1::before {
    position: absolute;
    left: -1rem;
    content: "";
    border-bottom: 0.5rem solid transparent;
    border-left: 0.5rem solid transparent;
    border-top: 0.5rem solid black;
    border-right: 0.5rem solid black;
  }
  
  .piece-1::after {
    position: absolute;
    right: -1rem;
    content: "";
    border-bottom: 0.5rem solid transparent;
    border-left: 0.5rem solid black;
    border-top: 0.5rem solid black;
    border-right: 0.5rem solid transparent;
  }

  .piece-2 {
    position: absolute;
    width: 100px;
    height: 1rem;
    bottom: 0;
    right: 60px;
    background-color: black;
  }
  
  .piece-2::before {
    position: absolute;
    left: -1rem;
    content: "";
    border-bottom: 0.5rem solid black;
    border-left: 0.5rem solid transparent;
    border-top: 0.5rem solid transparent;
    border-right: 0.5rem solid black;
  }
  
  .piece-2::after {
    position: absolute;
    right: -1rem;
    content: "";
    border-bottom: 0.5rem solid black;
    border-left: 0.5rem solid black;
    border-top: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
  }
</style>

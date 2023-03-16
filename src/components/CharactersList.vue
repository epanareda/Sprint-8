<template>
  <div class="m-4 d-flex flex-column align-items-center">
    <h1 class="mb-4">CHARACTERS</h1>
    <character v-for="(character, index) in toObjectArray(characters)" :key="index" :character="character"/>
    <!-- <button class="btn btn-primary" @click="loadNextPage">view more</button> -->
  </div>
</template>

<script>
import Character from '@/components/Character.vue';
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'CharactersList',
  components: {
    Character
  },
  mounted() {
    this.checkScroll();
    if(this.nextPageCharacters === "") this.getInfo(["people", "addCharacter"]);
  },
  methods: {
    ...mapActions(["getInfo"]),
    toObjectArray(str) {
      if(str !== "") return str.split(this.$store.state.union).map(e => JSON.parse(e));
      return "";
    },
    loadNextPage() {
      if(this.nextPageCharacters !== null) this.getInfo(["people"+this.nextPageCharacters.split("people")[1], "addCharacter"]);
    },
    checkScroll() {
      window.onscroll = () => {
        // Here I was a bit lost and I got the code from "https://renatello.com/check-if-a-user-has-scrolled-to-the-bottom-in-vue-js/". Credit to them.
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight >= document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.loadNextPage();
        }
      }
    }
  },
  computed: {
    ...mapGetters(["characters", "nextPageCharacters"]),
  },
}
</script>

<style scoped>
</style>

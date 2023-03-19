<template>
  <div class="m-4 d-flex flex-column align-items-center">
    <h1 class="mb-4">CHARACTERS</h1>
    <div class="list-container">
      <character class="list-item" v-for="(character, index) in removeDuplicates(toObjectArray(characters))" :key="index" :character="character"/>
    </div>
    <cool-button v-if="nextPageCharacters !== null" class="mt-4" @click="loadNextPage" text="VIEW MORE" :black="true"/>
  </div>
</template>

<script>
import Character from '@/components/Character.vue';
import CoolButton from '@/components/CoolButton.vue';
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'CharactersList',
  components: {
    Character,
    CoolButton,
  },
  mounted() {
    // this.checkScroll();
    if(this.nextPageCharacters === "") this.getInfo(["people", "addCharacter"]);
  },
  methods: {
    ...mapActions(["getInfo"]),
    toObjectArray(str) {
      if(str !== "") return str.split(this.union).map(e => JSON.parse(e));
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
    },
    // Because an error that happens when the loading of the data is slow, and duplicates some retrived data, here is a function that removes this dupes.
    removeDuplicates(arr) {
      if(arr != "") {
        return arr.filter((value, index) => {
          const strValue = JSON.stringify(value);
          return index === arr.findIndex(obj => {
            return JSON.stringify(obj) === strValue;
          });
        });
      }
    },
  },
  computed: {
    ...mapGetters(["union", "characters", "nextPageCharacters"]),
  },
}
</script>

<style scoped>
  .list-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .list-item {
    width: calc(50% - 0.5rem);
  }

  @media screen and (max-width: 768px) {
    .list-item {
      width: 100%;
    }
  }
</style>

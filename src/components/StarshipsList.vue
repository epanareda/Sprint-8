<template>
  <div class="my-4 d-flex flex-column align-items-center">
    <h1 class="mb-4">STARSHIPS</h1>
    <div class="list-container">
      <starship class="list-item" v-for="(starship, index) in removeDuplicates(toObjectArray(starships))" :key="index" :starship="starship"/>
    </div>
    <cool-button v-if="nextPageStarships !== null" class="mt-4" @click="loadNextPage" text="VIEW MORE" :black="true"/>
  </div>
</template>

<script>
import Starship from '@/components/Starship.vue';
import CoolButton from '@/components/CoolButton.vue';
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'StarshipsList',
  components: {
    Starship,
    CoolButton,
  },
  mounted() {
    // this.checkScroll();
    if(this.nextPageStarships === "") this.getInfo(["starships", "addStarship"]);
  },
  methods: {
    ...mapActions(["getInfo"]),
    toObjectArray(str) {
      if(str !== "") return str.split(this.union).map(e => JSON.parse(e));
      return "";
    },
    loadNextPage() {
      if(this.nextPageStarships !== null) this.getInfo(["star"+this.nextPageStarships.split("star")[1], "addStarship"]);
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
    ...mapGetters(["union", "starships", "nextPageStarships"]),
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

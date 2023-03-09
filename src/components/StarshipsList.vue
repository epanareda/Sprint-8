<template>
  <div class="m-4 d-flex flex-column align-items-center">
    <h1 class="mb-4">STARSHIPS</h1>
    <starship v-for="(starship, index) in toObjectArray(starships)" :key="index" :starship="starship"/>
    <!-- <button class="btn btn-primary" @click="loadNextPage">view more</button> -->
  </div>
</template>

<script>
import Starship from '@/components/Starship.vue';
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: 'StarshipsList',
  components: {
    Starship
  },
  mounted() {
    this.checkScroll();
    this.resetStarships();
    this.getInfo(["starships", "addStarship"]);
  },
  methods: {
    ...mapMutations(["resetStarships"]),
    ...mapActions(["getInfo"]),
    toObjectArray(str) {
      if(str !== "") return str.split(this.$store.state.union).map(e => JSON.parse(e));
      return "";
    },
    loadNextPage() {
      if(this.nextPageStarships !== null) this.getInfo(["star"+this.nextPageStarships.split("star")[1], "addStarship"]);
    },
    checkScroll() {
      window.onscroll = () => {
        // Here I was a bit lost and I got the code from "https://renatello.com/check-if-a-user-has-scrolled-to-the-bottom-in-vue-js/". Credit to them.
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.loadNextPage();
        }
      }
    }
  },
  computed: {
    ...mapGetters(["starships", "nextPageStarships"]),
  },
}
</script>

<style scoped>
</style>

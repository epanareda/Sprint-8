<template>
  <div class="m-4">
    <h1 class="mb-4">STARSHIPS</h1>
    <starship v-for="(starship, index) in toObjectArray(starships)" :key="index" :starship="starship"/>
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
    this.resetStarships();
    this.getInfo(["starships", "addStarship"]);
  },
  methods: {
    ...mapMutations(["resetStarships"]),
    ...mapActions(["getInfo"]),
    toObjectArray(str) {
      if(str !== "") return str.split(this.$store.state.union).map(e => JSON.parse(e));
    },
  },
  computed: {
    ...mapGetters(["starships"]),
  }
}
</script>

<style scoped>
</style>

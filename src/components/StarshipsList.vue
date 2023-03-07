<template>
  <div class="m-4">
    <h1 class="mb-4">STARSHIPS</h1>
    <starship v-for="(starship, index) in toObjectArray($store.state.starships)" :key="index" :starship="starship"/>
  </div>
</template>

<script>
import Starship from '@/components/Starship.vue';

export default {
  components: { Starship },
  name: 'StarshipsList',
  comments: {
    Starship
  },
  mounted() {
    this.$store.commit("resetData");
    this.$store.dispatch("getInfo", "starships");
  },
  methods: {
    toObjectArray(str) {
      if(str !== "") return str.split(this.$store.state.union).map(e => JSON.parse(e));
    }
  },
}
</script>

<style scoped>
</style>

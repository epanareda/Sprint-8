<template>
  <div class="border mb-2">
    <button class="m-0 px-5 py-3 bg-white border-0 text-start" @click="linkStarship" :value="JSON.stringify(starship)">
      <h4>{{starship.name}}</h4>
      <p class="m-0">{{starship.model}}</p>
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: 'Starship',
  props: ["starship"],
  methods: {
    ...mapMutations(["selectStarship"]),
    linkStarship(val) {
      this.selectStarship(val);
      this.$router.push({name: 'starship'});
    }
  },
}
</script>

<style scoped>
  div {
    width: 500px;
  }

  button {
    width: 100%;
    height: 100%;
  }
</style>

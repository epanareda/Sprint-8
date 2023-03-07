<template>
  <div class="border px-3 py-2 mb-2">
      <h4>{{starship.name}}</h4>
      <p class="m-0">{{starship.model}}</p>
  </div>
</template>

<script>
export default {
  name: 'Starship',
  props: ["starship"],
}
</script>

<style scoped>
  div {
    width: 500px;
  }
</style>

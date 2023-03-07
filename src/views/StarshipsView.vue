<template>
  <div>
    <starships-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import StarshipsList from '@/components/StarshipsList.vue'

export default {
  name: 'StarshipsView',
  components: {
    StarshipsList
  }
}
</script>

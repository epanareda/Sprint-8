<template>
  <div>
    <starship-info/>
  </div>
</template>

<script>
// @ is an alias to /src
import StarshipInfo from '@/components/StarshipInfo.vue'

export default {
  name: 'StarshipView',
  components: {
    StarshipInfo
  }
}
</script>

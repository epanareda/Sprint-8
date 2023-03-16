<template>
  <div>
    <character-info/>
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterInfo from '@/components/CharacterInfo.vue'

export default {
  name: 'CharacterView',
  components: {
    CharacterInfo
  }
}
</script>

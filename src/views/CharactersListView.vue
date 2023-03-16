<template>
  <div>
    <characters-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import CharactersList from '@/components/CharactersList.vue'

export default {
  name: 'CharactersListView',
  components: {
    CharactersList
  }
}
</script>

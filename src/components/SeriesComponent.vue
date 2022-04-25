<template>
  <div class="film-container">
    <Card v-for="series in tvArray" :key="series.id" 
      :title="series.name"
      :originalTitle="series.original_name" 
      :vote="series.vote_average"
      :language="series.original_language"
      :posterImg="series.poster_path" 
      :overview="series.overview"
      :id="series.id"
      :programType="series.programType"
      :genres="series.genre_ids"
      :arrayTotGenres="arrayTotGenres"
    />
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
    name: "MainComponent", 
    components: {
      Card
    },
    props: {
      tvArray: Array,
      arrayTotGenres: Array
    }
}
</script>

<style scoped lang="scss">
  .film-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
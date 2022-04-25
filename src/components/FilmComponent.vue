<template>
  <div class="film-container">
    <Card v-for="film in filmArray" :key="film.id" 
      :title="film.title"
      :originalTitle="film.original_title" 
      :vote="film.vote_average"
      :language="film.original_language" 
      :posterImg="film.poster_path"
      :overview="film.overview"
      :id="film.id"
      :programType="film.programType"
      :genres="film.genre_ids"
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
      filmArray: Array,
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

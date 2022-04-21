<template>
  <div class="film-container">
    <FilmCard v-for="film in filmArray" :key="film.id" 
      :title="film.title"
      :originalTitle="film.original_title" 
      :vote="film.vote_average"
      :language="film.original_language" 
      :posterImg="film.poster_path"
      :overview="film.overview"
    />
  </div>
</template>

<script>
import FilmCard from './FilmCard.vue'

export default {
    name: "MainComponent", 
    components: {
      FilmCard
    },
    props: {
      filmArray: Array
    }
}
</script>

<style scoped lang="scss">
  .film-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    // & > * {
    //   flex-basis: calc(100% / 3 - 1rem * 2 / 3);
    // }
  }
</style>

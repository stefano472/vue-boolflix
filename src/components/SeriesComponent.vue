<template>
  <div class="film-container">
    <FilmCard v-for="series in tvArray" :key="series.id" 
      :title="series.name"
      :originalTitle="series.original_name" 
      :vote="series.vote_average"
      :language="series.original_language" 
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
      tvArray: Array
    }
}
</script>

<style scoped lang="scss">
  .film-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    & > * {
      flex-basis: calc(100% / 3 - 1rem * 2 / 3);
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 2px;
    }
  }
</style>
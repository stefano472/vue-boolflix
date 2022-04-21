<template>
  <main>
    <div class="container">
      <h2 v-if="filmArray.length > 0">
        Film
      </h2>
      <FilmComponent :filmArray='filmArray' />
      <h2 v-if="tvArray.length > 0">
        Serie Tv
      </h2>
      <SeriesComponent :tvArray='tvArray' />
    </div>
  </main>
</template>

<script>
import FilmComponent from './FilmComponent.vue'
import SeriesComponent from './SeriesComponent.vue'

export default {
    name: "MainComponent", 
    components: {
      FilmComponent,
      SeriesComponent
    },
    props: {
      filmArray: Array,
      tvArray: Array
    }
}
</script>

<style scoped lang="scss">
  main  {
    height: calc(100vh - 5rem);
    overflow-y: auto;
    .container {
      margin: 1rem;
      width: min((100% - 3rem), 1200px);
      margin-inline: auto;
    }
  }
</style>

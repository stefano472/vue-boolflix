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
/////////////////// custom scrollbar
    &::-webkit-scrollbar {
      width: 1rem;
    }
    &::-webkit-scrollbar-track {
      margin-block: 0.5rem;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      border: 4px solid transparent;
      box-shadow: inset 0 0 10px 10px #e6e6e6;
    }
/////////////////// end custom scrollbar
    .container {
      // margin: 1rem;
      width: min((100% - 3rem), 1200px);
      margin-inline: auto;
      h2 {
        margin-top: 3rem;
        text-transform: uppercase;
        font-size: 1.8rem;
        line-height: 2.5rem;
      }
    }
  }
</style>

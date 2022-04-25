<template>
  <main>
    <div class="container">
      <div class="title" v-if="filmArray.length > 0">
        <h2>
          Film
        </h2>
        <select name="" id="">
          <option value="">All</option>
          <option v-for="genre in programGenres" :key="genre.id" :value="genre.id">{{genre.name}}</option>
        </select>
      </div>
      <FilmComponent v-if="filmArray.length > 0" :filmArray='filmArray' :arrayTotGenres="programGenres" />
      <div class="title" v-if="tvArray.length > 0">
        <h2>
          Serie Tv
        </h2>
        <select name="" id="">
          <option value="">All</option>
          <option v-for="genre in programGenres" :key="genre.id" :value="genre.id">{{genre.name}}</option>
        </select>
      </div>
      <SeriesComponent v-if="tvArray.length > 0" :tvArray='tvArray' :arrayTotGenres="programGenres" />
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
      tvArray: Array,
      programGenres: Array
    }
}
</script>

<style scoped lang="scss">
  main  {
    height: 89vh;
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

      width: min((100% - 3rem), 1200px);
      margin-inline: auto;
      div {
        margin-bottom: 3rem;
      }
      .title {
        display: flex;
        gap: 1rem;
        align-items: baseline;
        margin: 0;
        h2 {
          margin-top: 1.75rem;
          text-transform: uppercase;
          font-size: 1.8rem;
          line-height: 2.5rem;
        }
      }
    }
  }
</style>

<template>
  <main>
    <div class="container">
      <div class="title" v-if="filmArray.length > 0">
        <h2>
          Film
        </h2>
        <select name="" id="" v-model="movieInput">
          <option value="all">All</option>
          <option v-for="genre in programGenres" :key="genre.id" :value="genre.id">{{genre.name}}</option>
        </select>
      </div>
      <FilmComponent v-if="filmArray.length > 0" :filmArray='filteredFilmArray' :arrayTotGenres="programGenres" />
      <div class="title" v-if="tvArray.length > 0">
        <h2>
          Serie Tv
        </h2>
        <select name="" id="" v-model="seriesInput">
          <option value="all">All</option>
          <option v-for="genre in programGenres" :key="genre.id" :value="genre.id">{{genre.name}}</option>
        </select>
      </div>
      <SeriesComponent v-if="tvArray.length > 0" :tvArray='fileredSeriesArray' :arrayTotGenres="programGenres" />
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
    data() {
      return {
        movieInput: 'all',
        seriesInput: 'all'
        // filteredMovieArray: []
      }
    },
    props: {
      filmArray: Array,
      tvArray: Array,
      programGenres: Array
    }, 
    computed: {
      filteredFilmArray(){
        if (this.movieInput === 'all'){
          return this.filmArray
        }
        return this.filmArray.filter(film => film.genre_ids.includes(this.movieInput)) 
      },
      fileredSeriesArray(){
        if (this.seriesInput === 'all'){
          return this.tvArray
        }
        return this.tvArray.filter(tv => tv.genre_ids.includes(this.seriesInput)) 
      }
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
        margin-top: 1.75rem;
        h2 {
          padding-top: 0.4rem;
          text-transform: uppercase;
          font-size: 1.8rem;
          line-height: 2.5rem;
        }
        select {
          height: fit-content;
          align-self: center;
        }
      }
    }
  }
</style>

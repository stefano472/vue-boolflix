<template>
  <div id="app">
    <!-- <svg viewBox="0 0 111 30">
      <path d="
      M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path>
    </svg> -->
    <Header @getUserInput="getUserInput" />
    <Main :filmArray="myMovieSelection" :tvArray="myTvSelection" :programGenres='programGenres' />
  </div>
</template>

<script>
import axios from 'axios'
import apikey from '@/apikey'
import "@fontsource/martel-sans"
import "@fontsource/martel-sans/800.css"

import Header from './components/Header.vue'
import Main from './components/Main.vue'


export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data() {
    return {
      apiUrl: 'https://api.themoviedb.org/3/search/',
      apiKey: apikey.string,
      userQuery: '',
      myMovieSelection: [],
      myTvSelection: [],
      programGenres: [], 
    }
  },
  methods: {
    callAxios(axiosToCall) {
      const params = {
        query: this.userQuery,
        api_key: this.apiKey,
        language: 'it-IT'
      }
      return axios.get(this.apiUrl + axiosToCall, {params})
            .catch((error) => console.log(error))
    },
    callMovies() {
      this.callAxios('movie').then((response) => {
        if(response.status === 200) {
          this.myMovieSelection = response.data.results
          this.myMovieSelection.forEach(object => object.programType= "movie")
        }
      })
    },
    callTvSeries() {
      this.callAxios('tv').then((response) => {
        if(response.status === 200) {
          this.myTvSelection = response.data.results
          this.myTvSelection.forEach(object => object.programType= "tv")
        }
      })
    },
    getUserInput(input) {
      this.userQuery = input.trim(),
      console.log(this.userQuery)
      if (this.userQuery.length>0) {
        this.callMovies()
        this.callTvSeries()

        console.log(this.myTvSelection)
      }
    }
  }, 
  mounted() {
    const params = {
        api_key: this.apiKey,
      }
    axios .all([
              axios.get("https://api.themoviedb.org/3/genre/movie/list", {params}),
              axios.get("https://api.themoviedb.org/3/genre/tv/list", {params})
            ])
          .then(
              axios.spread((...responses) => {
                const mergedArray = [...responses[0].data.genres, ...responses[1].data.genres].map(JSON.stringify)
                const uniqueSet = new Set(mergedArray)

                // console.log(responses[0].data.genres)
                // console.log(responses[1].data.genres)
                this.programGenres = Array.from(uniqueSet).map(JSON.parse)
                // console.table(mergedArray)
                console.table(this.programGenres)
              })
          ).catch((error) => console.log(error))
  }
}
</script>

<style lang="scss">

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  color: white;
  font-family: "Martel Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100%;
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/f4b0e424-f578-46d1-ac77-ba8f4763d581/IT-it-20220411-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
  background-color: rgba($color: #000000, $alpha: 0.7);
}
</style>

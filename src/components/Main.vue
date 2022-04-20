<template>
  <main>
    <FilmCard v-for="film in filmArray" :key="film.id" 
      :title="film.title"
      :originalTitle="film.original_title" 
      :vote="film.vote_average"
      :language="film.original_language" 
    />
  </main>
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
  main  {
    height: 100vh;
    width: 100%;
    overflow-y: auto;
    background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/f4b0e424-f578-46d1-ac77-ba8f4763d581/IT-it-20220411-popsignuptwoweeks-perspective_alpha_website_large.jpg");
    background-position: center;
    background-size: cover;
    background-blend-mode: darken;
    background-color: rgba($color: #000000, $alpha: 0.7);
    padding-top: 5rem;
  }
</style>

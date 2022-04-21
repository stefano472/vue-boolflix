<template>
  <div>
      <h2>
        {{title}}
      </h2>
      <h4>
          {{originalTitle}}
      </h4>
      <p>
        <span>
            {{vote}}
        </span>
        <img :src="flagUrl(language)" :alt="'lang: ' + language"> 
      </p>

  </div>
</template>

<script>
export default {
    name: "FilmCard",
    props: {
        title: String,
        originalTitle: String,
        vote: Number,
        language: String
    }, 
    methods: {
        flagUrl(countryCode) {
            if (countryCode === "en") {
                return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/US.svg`
            }
            return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/${countryCode.toUpperCase()}.svg`
        }
    }
}
</script>

<style scoped lang="scss">
img {
    width: 25px;
    aspect-ratio: 3/2;
    border-radius: 4px;
}
/*
adult: false
backdrop_path: "/8BVSqAfU5knNkxyCH4JiANHwjeZ.jpg"
id: 76341
original_language: "en"
original_title: "Mad Max: Fury Road"
overview: "Ossessionato dal suo turbolento passato, Mad Max crede che il modo migliore per sopravvivere sia muoversi da solo, ma si ritrova coinvolto con un gruppo in fuga attraverso la Terre Desolata su un blindato da combattimento, guidato dall’imperatrice Furiosa. Il gruppo è sfuggito alla tirannide di Immortan Joe, cui è stato sottratto qualcosa di insostituibile. Furibondo, l’uomo ha sguinzagliato tutti i suoi uomini sulle tracce dei ribelli e così ha inizio una guerra spietata."
popularity: 131.626
poster_path: "/5gbm8m1gYvOmVGRcxteiplDLWdg.jpg"
release_date: "2015-05-13"
title: "Mad Max: Fury Road"
video: false
vote_average: 7.6
vote_count: 19262
*/

</style>

<template>
    <div>
        <div class="poster">
            <img :src="imgPoster(posterImg)" alt="">
        </div>
        <div class="description">
            <h2>
                {{title}}
            </h2>
            <h4>
                {{originalTitle}}
            </h4>
            <p>
                <span v-if="vote>0">
                    {{vote}}
                </span>
                <img :src="flagUrl(language)" :alt="'lang: ' + language"> 
            </p>
        </div>
    </div>
</template>

<script>
import notFound from '@/assets/img_not_found.png'

export default {
    name: "FilmCard",
    data() {
        return {
            notFound
        }
    },
    props: {
        title: String,
        originalTitle: String,
        vote: Number,
        language: String,
        posterImg: String
    }, 
    methods: {
        imgPoster(imgUrl) {
            if (imgUrl) {
                return 'https://image.tmdb.org/t/p/original' + imgUrl
            }
            // altra soluzione se non voglio utilizzare l'import e dichiarare l'img nei data
            // return require('@/assets/img_not_found.png')
            return this.notFound
        },
        flagUrl(countryCode) {
            if (countryCode === "en") {
                return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/US.svg`
            } else if (countryCode === "ko") {
                return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/KR.svg`
            } else if (countryCode === "ja") {
                return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/JP.svg`
            } else if (countryCode === "zh") {
                return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/CN.svg`
            } else if (countryCode === "hi") {
                return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/IN.svg`
            }
            return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/${countryCode.toUpperCase()}.svg`
        }
    }
}
</script>

<style scoped lang="scss">
.poster{
    img {
        width: 100%;
        aspect-ratio: 2/3;
    }
}
.description {
    img {
        width: 25px;
        aspect-ratio: 3/2;
        border-radius: 4px;
    }
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
/*
backdrop_path: "/mYKYwihv940xGyDt2XckkBryNnP.jpg"
first_air_date: "1994-09-24"
genre_ids: Array(3)
id: 2901
name: "Fantastic four"
origin_country: Array(1)
original_language: "en"
original_name: "Fantastic Four"
overview: "I Fantastici Quattro (Fantastic Four) è una serie televisiva a cartoni animati prodotta dai Marvel Studios andata in onda tra il 1994 e il 1996. La serie è tratta dai fumetti omonimi della Marvel Comics ed è composta da 2 stagioni, per un totale di 26 episodi di 22 minuti l'uno. Nella serie fanno la comparsa numerosi eroi della scuderia Marvel compresi Daredevil, Ghost Rider, Namor, Thor, Hulk, Silver Surfer, Iron Man e Pantera Nera."
popularity: 13.384
poster_path: "/xqqZjLBUEOVAsXneUwITCuas9jL.jpg"
vote_average: 6.7
vote_count: 43
*/
</style>

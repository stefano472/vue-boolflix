<template>
    <div class="single-card">
        <div class="poster">
            <h1 v-if="!posterImg">{{title}}</h1>
            <img :src="imgPoster(posterImg)" alt="">
        </div>
        <div class="description">
            <h2>
                {{title}}
            </h2>
            <p class="secondary-description">
                <span>
                    Lingua originale: {{language.toUpperCase()}} 
                </span>
                <img :src="flagUrl(language)" :alt="'lang: ' + language">
            </p>
            <p class="secondary-description">
                Titolo originale: {{originalTitle}}
            </p>
            <p>
                <b>Rating: </b>
                <font-awesome-icon v-for="number in voteTo5(vote)" 
                        :key="'fillStar:' + number"  
                        icon="fa-solid fa-star" 
                        class="fillStar" 
                />
                <font-awesome-icon v-for="number in (5 - voteTo5(vote))" 
                        :key="'emptyStar:' + number" 
                        icon="fa-regular fa-star" 
                />     
            </p>
            <p v-if="overview.length > 0" class="secondary-description">
                {{overview}}
            </p>
            <ul v-if="myCast.length>0">
                <li>Cast:</li>
                <li v-for="actor in myCast" :key="actor.id" class="actor">
                    {{actor.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import apikey from '@/apikey'

import imgNotFound from '@/assets/img_not_found.png'


export default {
    name: "CardComponent",
    data() {
        return {
            imgNotFound,
            apiKey: apikey.string,      
            myCast: []

        }
    },
    props: {
        title: String,
        originalTitle: String,
        vote: Number,
        language: String,
        posterImg: String,
        overview: String,
        id: Number,
        programType: String
    }, 
    created() {
        const params = {
        api_key: this.apiKey,
      }
      axios.get(`https://api.themoviedb.org/3/${this.programType}/${this.id}/credits`, {params})
            .then((response) => this.myCast = response.data.cast.slice(0,5))
            .catch((error) => console.log(error))
    },
    methods: {
        imgPoster(imgUrl) {
            if (imgUrl) {
                return 'https://image.tmdb.org/t/p/original' + imgUrl
            }
            // altra soluzione se non voglio utilizzare l'import e dichiarare l'img nei data
            // return require('@/assets/img_not_found.png')
            return this.imgNotFound
        },
        voteTo5(number) {
            return Math.ceil(number / 2)
        },
        // function to create flag url can be done with if else or switch
        // flagUrl(countryCode) {
        //     if (countryCode === "en") {
        //         return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/GB.svg`
        //     } else if (countryCode === "ko") {
        //         return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/KR.svg`
        //     } else if (countryCode === "ja") {
        //         return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/JP.svg`
        //     } else if (countryCode === "zh") {
        //         return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/CN.svg`
        //     } else if (countryCode === "hi" || countryCode === "te") {
        //         return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/IN.svg`
        //     }
        //     return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/${countryCode.toUpperCase()}.svg`
        // }
        flagUrl(countryCode) {
            switch(countryCode) {
                case 'en':
                    return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/US.svg`;
                case 'cs':
                    return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/CZ.svg`;
                case 'da':
                    return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/DK.svg`;
                case 'el':
                    return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/GR.svg`;
                case 'ko':
                    return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/KR.svg`;
                case 'ja':
                    return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/JP.svg`;
                case 'zh':
                    return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/CN.svg`;
                case 'hi':
                    return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/IN.svg`;
                case 'te':
                    return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/IN.svg`;
                default:
                    return `https://raw.githubusercontent.com/emcrisostomo/flags/91286fe015b4957b51bc470eca4b5fd6f5ac90da/svg/${countryCode.toUpperCase()}.svg`;
            }
        }
    }
}
</script>

<style scoped lang="scss">
.single-card {
    flex-basis: calc(100% / 4 - 1rem * 3 / 4);
    aspect-ratio: 2/3;
    overflow-y: auto;

    /////////////////// custom scrollbar
        &::-webkit-scrollbar {
        width: 0.8rem;
        }
        &::-webkit-scrollbar-track {
        margin-block: 0.5rem;
        background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
        border-radius: 0.8rem;
        border: 4px solid transparent;
        box-shadow: inset 0 0 10px 10px #e6e6e6;
        }
    /////////////////// end custom scrollbar

    display: flex;
    border-radius: 4px;
    .poster{
        display: flex;
        border-radius: inherit;
        position: relative;
        h1 {
            position: absolute;
            top: 1rem;
            left: 1rem;
            right: 1rem;
            color: black;
            font-size: 1.7rem;
            line-height: 1.9rem;
        }
        img {
            width: 100%;
            aspect-ratio: 2/3;
            border-radius: inherit;
        }
    }
    .description {
        display: none;
        margin: 0.5rem;
        h2 {
            font-size: 1.2rem;
            line-height: 1.7rem;
        }
        .secondary-description {
            color: #a1a1a1;
        }
        p {
            font-size: 0.8rem;
            // padding-bottom: 0.5rem;
            img {
                width: 25px;
                aspect-ratio: 3/2;
                border-radius: 4px;
                margin-left: 0.2rem;
                margin-bottom: -0.2rem;
            }
            .fillStar {
                color: yellow;
            }
        }
        ul {
            font-size: 0.8rem;
            list-style: none;
            font-weight: 800;
            .actor {
                // color: #a1a1a1; 
                font-weight: normal; 
                margin-inline-start: 1rem;
            }
        }
    }
    &:hover {
        border: 2px solid #eee;
        background-blend-mode: multiply;
        background-color: rgba($color: #000000, $alpha: 0.5);
        // animation: flip-vertical-right 0.4s linear both;
        .poster {
            display: none;
        }
        .description{
            // animation: flip-vertical-right 0.4s linear both;
            display: block;
        }
    }
}

// test card animation
// @keyframes flip-vertical-right {
//   0% {
//     -webkit-transform: rotateY(0);
//             transform: rotateY(0);
//   }
//   100% {
//     -webkit-transform: rotateY(180deg);
//             transform: rotateY(180deg);
//   }
// }

/* tv and movie info
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

<template>
    <div class="main-container">
        <div class="section-container">
            <div class="piece-1"></div>
            <div class="piece-2"></div>
            <h3>WELCOME</h3>
            <p>In this web page you can find different information related to the STAR WARS movies universe. There is some data about all the starships that appeared in the first 6 movies, and there is also data about the main characters that play an important role in this same 6 movies.</p>
            <p><strong>IMPORTANT!</strong> If you wish to check all the amazing things that you can discover about the STAR WARS universe, make sure to sign in first. And if you don’t have an account yet, feel free to sign up for free.</p>
        </div>
        <div class="midle-row">
            <div class="section-container">
                <div class="piece-1"></div>
                <div class="piece-2"></div>
                <h3>STARSHIPS</h3>
                <p>All the information regarding the starships used in the STAR WARS films is very interesting. If you want to check it <i>(sign in required)</i> click in the following button!</p>
                <cool-button class="mt-5" text="CHECK STARSHIPS" routeName="starships-list" @click="suggestLogin()"/>
            </div>
            <div class="section-container">
                <div class="piece-1"></div>
                <div class="piece-2"></div>
                <h3>CHARACTERS</h3>
                <p>All the information regarding the main characters that appear in the STAR WARS films is very interesting. If you want to check it <i>(sign in required)</i> click in the following button!</p>
                <cool-button class="mt-5" text="CHECK CHARACTERS" routeName="characters-list" @click="suggestLogin()"/>
            </div>
        </div>
        <div class="section-container">
            <div class="piece-1"></div>
            <div class="piece-2"></div>
            <h3>CREDITS</h3>
            <p>All the data used to create this site is from the public API <a target="_blank" href="https://swapi.dev/">swapi.dev</a>, as well as the public site <a target="_blank" href="https://starwars-visualguide.com">starwars-visualguide</a> where is from all the photos are provided.</p>
        </div>
    </div>
</template>

<script>
import CoolButton from "@/components/CoolButton.vue"
import { mapGetters, mapMutations } from "vuex";

export default {
    name: "Home",
    components: {
        CoolButton,
    },
    computed: {
        ...mapGetters(["login", "logedin"]),
    },
    methods: {
        ...mapMutations(["openCloseLogin"]),
        suggestLogin() {
            if(this.logedin === false && this.login === false) this.openCloseLogin();
        }
    },
    mounted() {
        this.suggestLogin();
    },
}
</script>

<style scoped>
    .main-container {
        width: 100%;
        margin: auto;
        margin-bottom: 3rem;
    }

    .section-container {
        position: relative;
        background-color: rgb(35, 35, 35);
        padding: 3rem 2rem;
        margin-top: 3rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .section-container > h3 {
        font-weight: bold;
        color: grey;
        align-self: start;
    }

    .section-container > p {
        margin: 2rem 0 0 0;
        text-align: justify;
    }

    .midle-row {
        display: flex;
        gap: 0 2rem;
    }

    a {
        color: skyblue;
        text-decoration: none;
    }

    a:hover {
        color: white;
    }

    .piece-1 {
        position: absolute;
        width: 100px;
        height: 1rem;
        top: 0;
        left: 60px;
        background-color: black;
    }
    
    .piece-1::before {
        position: absolute;
        left: -1rem;
        content: "";
        border-bottom: 0.5rem solid transparent;
        border-left: 0.5rem solid transparent;
        border-top: 0.5rem solid black;
        border-right: 0.5rem solid black;
    }
    
    .piece-1::after {
        position: absolute;
        right: -1rem;
        content: "";
        border-bottom: 0.5rem solid transparent;
        border-left: 0.5rem solid black;
        border-top: 0.5rem solid black;
        border-right: 0.5rem solid transparent;
    }

    .piece-2 {
        position: absolute;
        width: 100px;
        height: 1rem;
        bottom: 0;
        right: 60px;
        background-color: black;
    }
    
    .piece-2::before {
        position: absolute;
        left: -1rem;
        content: "";
        border-bottom: 0.5rem solid black;
        border-left: 0.5rem solid transparent;
        border-top: 0.5rem solid transparent;
        border-right: 0.5rem solid black;
    }
    
    .piece-2::after {
        position: absolute;
        right: -1rem;
        content: "";
        border-bottom: 0.5rem solid black;
        border-left: 0.5rem solid black;
        border-top: 0.5rem solid transparent;
        border-right: 0.5rem solid transparent;
    }

    @media screen and (max-width: 768px) {
        .midle-row {
            flex-direction: column;
            gap: 0 2rem;
        }

        p {
            font-size: 0.9rem;
        }
    }
</style>
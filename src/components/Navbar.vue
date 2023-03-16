<template>
    <div class="main-container">
        <div class="logo-container">
            <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="">
        </div>
        <div class="header">
            <div class="networks-container">
                <button class="icon-container">
                    <img class="w-100" src="../assets/facebook.png">
                </button>
                <button class="icon-container">
                    <img class="w-100" src="../assets/instagram.png">
                </button>
                <button class="icon-container">
                    <img class="w-100" src="../assets/youtube.png">
                </button>
                <button class="icon-container">
                    <img class="w-100" src="../assets/twitter.png">
                </button>
                <div></div>
                <button class="for-kids">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_kids_937ed58b.svg?region=0%2C0%2C40%2C15">
                </button>
            </div>
            <div class="right-header-container">
                <button class="search-container">
                    <p>SEARCH</p>
                </button>
                <button class="login-container" @click="openCloseLogin">
                    <p>SIGN IN</p>
                </button>
            </div>
        </div>
        <nav class="d-felx justify-content-center text-center">
            <router-link :class="['link', $route.name === 'home' ? 'link-active' : '']" to="/">HOME</router-link>
            <router-link :class="['link', $route.name === 'starships-list' ? 'link-active' : '']" to="/starships-list">STARSHIPS</router-link>
            <router-link :class="['link', $route.name === 'characters-list' ? 'link-active' : '']" to="/characters-list">CHARACTERS</router-link>
        </nav>
        <!-- {{$route.name}} -->
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "Navbar",
    methods: {
        ...mapMutations(["openCloseLogin"]),
    }
}
</script>

<style scoped>
    .main-container {
        background: black;
        padding-top: 2rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgba(128, 128, 128, 0.75);
    }

    .logo-container {
        position: absolute;
        top: 2rem;
        left: calc(50% - 100px);
        width: 200px;
    }

    .logo-container > img {
        width: 100%;
    }

    .header {
        display: flex;
        justify-content: space-between;
        margin: 0 10rem; /* 2rem when small */
        margin-bottom: 7rem;
    }

    .networks-container {
        display: flex;
        gap: 1.5rem;
    }

    .networks-container > div {
        border-right: 1px solid rgb(128, 128, 128, 0.75);
        margin: 4px 0;
    }

    .icon-container {
        width: 30px;
        height: 30px;
        background-color: white;
        padding: 0;
        border-radius: 10px;
        border: 2px solid black;
    }

    .for-kids {
        background-color: transparent;
        border: 0;
        border-radius: 50px;
        padding: 0;
    }

    .right-header-container {
        display: flex;
        gap: 3rem;
    }

    .search-container,
    .login-container {
        background-color: transparent;
        border: 0;
    }

    .search-container > p,
    .login-container > p {
        position: relative;
        margin: 0;
        color: white;
        font-weight: bold;
    }

    .search-container > p::before {
        content: '';
        background: url(https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Nav_Search-74ab820c48e2.svg) no-repeat;
        top: 1px;
        left: -25px;
        height: 20px;
        width: 20px;
        position: absolute;
    }

    .search-container > p::after,
    .login-container > p::after {
        content: "";
        top: 50%;
        left: -20px;
        width: 10px;
        position: absolute;
        transition: 0.5s;
    }

    .search-container:hover > p::after,
    .login-container:hover > p::after {
        box-shadow: 0 0 1rem 0.5rem white;
    }

    .login-container > p::before {
        content: "";
        background: url(https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Oneid_User-85043c6786ab.svg) no-repeat;
        top: 1px;
        left: -25px;
        height: 20px;
        width: 20px;
        position: absolute;
    }

    .link {
        color: rgba(255, 255, 255, 0.65);
        text-decoration: none;
        font-weight: 600;
        padding: 0.5rem 2rem;
        transition: 0.5s;
    }

    .link:hover {
        color: white;
    }

    .link-active {
        color: white;
        position: relative;
    }

    .link-active::after {
        position: absolute;
        content: "";
        bottom: -0.25rem;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: white;
        box-shadow: 0 0 1rem 0.2rem white;
    }
</style>
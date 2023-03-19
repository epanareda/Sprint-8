<template>
    <nav class="navbar navbar-expand-lg p-0 navbar-dark">
        <div class="container-fluid main-container">
            <button class="logo-container"></button>
            <button class="navbar-toggler btn-skin" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <div class="top line"></div>
                <div class="middle line"></div>
                <div class="bottom line"></div>
            </button>
            <div class="right-header-container coll-right-header-container">
                <button class="search-container coll-search-container">
                    <p></p>
                </button>
                <button class="login-container coll-login-container" @click="openCloseLogin">
                    <p></p>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarContent">
                <div class="content-container">
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
                    <nav class="links-container">
                        <router-link :class="['link', $route.name === 'home' ? 'link-active' : '']" to="/" @click="closeNavbar">HOME</router-link>
                        <router-link :class="['link', $route.name === 'starships-list' ? 'link-active' : '']" to="/starships-list" @click="closeNavbar">STARSHIPS</router-link>
                        <router-link :class="['link', $route.name === 'characters-list' ? 'link-active' : '']" to="/characters-list" @click="closeNavbar">CHARACTERS</router-link>
                    </nav>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
    name: "Navbar",
    computed: {
        ...mapGetters(["login", "logedin"]),
    },
    methods: {
        ...mapMutations(["openCloseLogin"]),
        closeNavbar() {
            console.log(this.logedin);
            if(getComputedStyle(document.querySelector(".coll-right-header-container")).display == "flex") {
                document.querySelector(".btn-skin").click();
            }
            if(this.logedin === false && this.login === false) this.openCloseLogin();
        }
    }
}
</script>

<style scoped>
    .main-container {
        background: black;
        color: white;
        border-bottom: 1px solid rgba(128, 128, 128, 0.75);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo-container {
        position: absolute;
        top: 2rem;
        left: calc(50% - 100px);
        width: 200px;
        height: 90px;
        background-color: transparent;
        border: 0;
        background-image: url(https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254);
        background-repeat: no-repeat;
        background-size: 200px 90px;
    }

    .btn-skin {
        position: relative;
        margin: 1rem;
        width: 50px;
        height: 50px;
        border-radius: 5px;
        border: 0;
    }

    .btn-skin:focus {
        box-shadow: none;
    }

    .btn-skin > .line {
        position: absolute;
        left: 10%;
        width: 80%;
        border: 2px solid grey;
        border-radius: 10px;
        transition: 0.5s;
    }

    .btn-skin:hover > .line {
        border-color: white;
    }

    .btn-skin > .top {
        top: calc(25% - 1px);
    }

    .btn-skin > .middle {
        top: calc(50% - 1px);
    }

    .btn-skin > .bottom {
        top: calc(75% - 1px);
    }

    .content-container {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 10rem;
    }

    .header {
        display: flex;
        justify-content: space-between;
        width: calc(100% - 10rem);
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

    .coll-right-header-container {
        margin-right: 1rem;
        display: none;
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

    .coll-search-container > p,
    .coll-login-container > p {
        margin-bottom: 1.5rem;
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

    .coll-search-container > p::after,
    .coll-login-container > p::after {
        content: "";
        top: 10px;
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

    .links-container {
        padding-bottom: 8.5px;
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
        border-radius: 10px;
    }

    @media screen and (max-width: 1200px) {
        .header {
            width: calc(100% - 5rem);
        }
    }

    @media screen and (max-width: 991.5px) {
        .logo-container {
            left: calc(50% - 156px);
            top: 1.5rem;
            width: 312px;
            height: 32px;
            background-size: 312px 32px;
            background-image: url(https://lumiere-a.akamaihd.net/v1/images/sw_logo_horiz_2x-f98247cb30aa_c622cfa9.png?region=0,0,732,75);
        }

        .content-container {
            flex-direction: column-reverse;
            height: 12rem;
        }

        .header {
            justify-content: center;
        }

        .networks-container {
            margin-top: 2rem;
            margin-bottom: 1rem;
        }

        .right-header-container {
            display: none;
        }

        .coll-right-header-container {
            display: flex;
        }

        .links-container {
            display: flex;
            flex-direction: column;
            text-align: center;
            margin-top: 1rem;
        }

        .link {
            padding-top: 1.5rem;
            padding-bottom: 0rem;
        }
    }

    @media screen and (max-width: 768px) {
        .coll-right-header-container {
            gap: 1.5rem;
        }
    }

    @media screen and (max-width: 576px) {
        .logo-container {
            left: calc(50% - 93.5px);
            top: 2rem;
            width: 187px;
            height: 19px;
            background-size: 187px 19px;
        }

        .btn-skin {
            margin-left: 0;
        }
    }

    @media screen and (max-width: 450px) {
        .coll-right-header-container {
            margin-right: 0.5rem;
            flex-direction: column;
            gap: 0.5rem;
        }
    }
</style>
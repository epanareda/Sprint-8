<template>
  <div class="main-container">
    <div class="div-width position-relative">
      <cool-button class="cool" text="RETURN" routeName="characters-list" :black="true"/>
      <h5 class="mt-5 mt-md-2 mb-0 mb-md-4 fw-bold">{{character.name.toUpperCase()}}</h5>
    </div>
    <div v-if="characterImage !== '404'" class="character-img-container">
        <div class="piece-1"></div>
        <div class="piece-2"></div>
        <img class="character-img" :src="characterImage" alt="IMAGE NOT AVALIABLE AT THE MOMENT">
    </div>
    <div class="div-container div-width">
      <div class="div-style">
        <div class="piece-1"></div>
        <div class="piece-2"></div>
        <p class="m-0"><span>height: </span>{{setCorrectInfo(character.height, "meters")}}</p>
        <p class="m-0"><span>mass: </span>{{setCorrectInfo(character.mass, "kg")}}</p>
        <p class="m-0"><span>birth: </span>{{setCorrectInfo(character.birth_year)}}</p>
        <p class="m-0"><span>gender: </span>{{setCorrectInfo(character.gender)}}</p>
      </div>
      <div class="div-style">
        <div class="piece-1"></div>
        <div class="piece-2"></div>
        <p class="m-0"><span>hair: </span>{{setCorrectInfo(character.hair_color)}}</p>
        <p class="m-0"><span>skin: </span>{{setCorrectInfo(character.skin_color)}}</p>
        <p class="m-0"><span>eye: </span>{{setCorrectInfo(character.eye_color)}}</p>
        <p class="m-0"><span>homeworld: </span>{{setCorrectInfo(characterHomeworld)}}</p>
      </div>
    </div>
    <div class="div-style div-width">
      <div class="piece-1"></div>
      <div class="piece-2"></div>
      <p class="m-0 text-start"><span>STARSHIPS: </span></p>
      <div class="d-flex justify-content-center flex-column">
        <p class="m-0" v-if="characterStarships === ''">UNKNOWN</p>
        <span class="mt-4" v-if="characterStarships !== ''"></span>
        <character-starship class="mb-4" v-for="(starship, index) in toObjectArray(characterStarships)" :key="index" :starship="starship"/>
      </div>
    </div>
    <div class="div-style div-width">
      <div class="piece-1"></div>
      <div class="piece-2"></div>
      <p class="m-0 text-start"><span>FILMS: </span></p>
      <div>
        <p class="m-0" v-for="(film, index) in toObjectArray(characterFilms)" :key="index">{{film.title.toUpperCase()}} (EPISODE {{film.episode_id}})</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import CharacterStarship from "@/components/CharacterStarship.vue";
import CoolButton from './CoolButton.vue';

export default {
  name: 'CharacterInfo',
  components: {
    CharacterStarship,
    CoolButton,
  },
  computed: 
    {
    ...mapGetters(["selectedCharacter", "characterImage", "characterStarships", "characterFilms", "characterHomeworld"]),
    character() {
      return JSON.parse(this.selectedCharacter);
    }
  },
  methods: {
    ...mapMutations(["setCharacterImage"]),
    ...mapActions(["getImage", "getCharacterStarships", "getFilms", "getHomeworld"]),
    toObjectArray(str) {
      if(str !== "") return str.split(this.$store.state.union).map(e => JSON.parse(e));
    },
    setCorrectInfo(e, units="") {
      if(e === "n/a" | e.toUpperCase() === "UNKNOWN") return "UNKNOWN";
      return `${e.toUpperCase()} ${units}`;
    }
  },
  mounted() {
    this.setCharacterImage("");
    this.getImage(["characters", "setCharacterImage"]);
    this.getHomeworld([this.character.homeworld, "setCharacterHomeworld"]);
    this.getCharacterStarships();
    this.getFilms(["characters", "addCharacterFilm"]);
    setTimeout(() => window.scrollTo(0, 0), "100");
  },
}
</script>

<style scoped>
  .main-container {
    text-align: center;
    width: 100%;
    margin: 2rem auto;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cool {
    position: absolute;
    left: 0;
    top: -0.5rem;
    width: 125px;
  }

  .character-img-container {
    width: 300px;
    position: relative;
    margin-bottom: 2rem;
  }

  .character-img-container > img {
    width: 100%;
    border: 1rem solid rgb(35, 35, 35);
    border-bottom: 2rem solid rgb(35, 35, 35);
    border-top: 2rem solid rgb(35, 35, 35);
    border-radius: 5px;
  }

  .div-width {
    width: 100%;
    margin-bottom: 2rem;
  }

  .info-container {
    text-align: start;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  .div-container {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 48% 48%;
    gap: 4%;
    text-align: start;
    margin-bottom: 2rem;
  }

  .div-1,
  .div-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .div-1 {
    grid-column: 1;
  }

  .div-2 {
    grid-column: 3;
  }

  .div-style {
    background-color: rgb(35, 35, 35);
    padding: 2rem 2rem;
    position: relative;
    border-radius: 5px;
  }

  .div-style > p {
    text-transform: uppercase;
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

  span {
    font-weight: bold;
    color:grey
  }

  @media screen and (max-width: 991.5px) {
  }

  @media screen and (max-width: 768px) {
    .main-container {
      padding-top: 4rem;
    }

    .cool {
      top: -4rem;
      left: calc(50% - (125px / 2));
    }
  }

  @media screen and (max-width: 576px) {
    .character-img-container {
      width: 100%;
    }

    .div-style {
      font-size: 0.85rem;
    }
  }

  @media screen and (max-width: 450px) {
    .div-container {
      grid-template-columns: 100%;
      gap: 2rem;
      text-align: start;
      margin-bottom: 2rem;
    }

    .div-1 {
      grid-column: 1;
    }

    .div-2 {
      grid-column: 1;
    }
  }
</style>

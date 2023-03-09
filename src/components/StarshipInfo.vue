<template>
  <div class="main-container">
    <div class="position-relative div-width">
      <button class="back-btn" @click="$router.push({name: 'home'})">
        <p class="m-0">
          Return
        </p>
      </button>
      <h1 class="mb-4">{{starship.name}}</h1>
    </div>
    <div v-if="starshipImage !== '404'" class="starship-img-container">
      <div class="piece-1"></div>
      <div class="piece-2"></div>
      <img class="starship-img" :src="starshipImage" alt="IMAGE NOT AVALIABLE AT THE MOMENT">
    </div>
    <div class="info-container div-style div-width">
        <div class="piece-1"></div>
        <div class="piece-2"></div>
      <p class="m-0"><span>MODEL: </span>{{setCorrectInfo(starship.model)}}</p>
      <p class="m-0"><span>STARSHIP CLASS: </span>{{setCorrectInfo(starship.starship_class)}}</p>
      <p class="m-0"><span>MANUFACTURER: </span>{{setCorrectInfo(starship.manufacturer)}}</p>
      <p class="m-0"><span>COST: </span>{{setCorrectInfo(starship.cost_in_credits, "CREDITS")}}</p>
    </div>
    <div class="div-container div-width">
      <div class="div-1 div-style">
        <div class="piece-1"></div>
        <div class="piece-2"></div>
        <p class="m-0"><span>CREW: </span>{{setCorrectInfo(starship.crew)}}</p>
        <p class="m-0"><span>PASSENGER CAPACITY: </span>{{setCorrectInfo(starship.passengers)}}</p>
        <p class="m-0"><span>CARGO CAPACITY: </span>{{setCorrectInfo(starship.cargo_capacity, "TONS")}}</p>
        <p class="m-0"><span>CONSUMABLES: </span>{{setCorrectInfo(starship.consumables)}}</p>
      </div>
      <div class="div-2 div-style">
        <div class="piece-1"></div>
        <div class="piece-2"></div>
        <p class="m-0"><span>LENGTH: </span>{{setCorrectInfo(starship.length, "METERS")}}</p>
        <p class="m-0"><span>MAXIMUM ATMOSPHERING SPEED: </span>{{setCorrectInfo(starship.max_atmosphering_speed, "KM/H")}}</p>
        <p class="m-0"><span>HYPERDRIVE RATING: </span>{{setCorrectInfo(starship.hyperdrive_rating)}}</p>
        <p class="m-0"><span>MAXIMUM SPEED IN REALSPACE: </span>{{setCorrectInfo(starship.MGLT, "MGLT")}}</p>
      </div>
    </div>
    <div class="div-style div-width">
      <div class="piece-1"></div>
      <div class="piece-2"></div>
      <p class="m-0 text-start"><span>PILOTS: </span></p>
      <div>
        <p class="m-0" v-if="starshipPilots === ''">UNKNOWN</p>
        <button v-for="(pilot, index) in toObjectArray(starshipPilots)" :key="index" class="p-0 border-0 bg-white pilot-img me-2">
          <img :src="pilot.image" alt="pilot">
        </button>
      </div>
    </div>
    <div class="div-style div-width">
      <div class="piece-1"></div>
      <div class="piece-2"></div>
      <p class="m-0 text-start"><span>FILMS: </span></p>
      <div>
        <p class="m-0" v-for="(film, index) in toObjectArray(starshipFilms)" :key="index">{{film.title}} (Episode {{film.episode_id}})</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: 'StarshipInfo',
  computed: {
    ...mapGetters(["selectedStarship", "starshipImage", "starshipPilots", "starshipFilms"]),
    starship() {
      return JSON.parse(this.selectedStarship);
    }
  },
  methods: {
    ...mapMutations(["setStarshipImage", "resetStarshipPilots", "resetStarshipFilms"]),
    ...mapActions(["getImage", "getStarshipPilots", "getStarshipFilms"]),
    toObjectArray(str) {
      if(str !== "") return str.split(this.$store.state.union).map(e => JSON.parse(e));
    },
    setCorrectInfo(e, units="") {
      if(e === "n/a" | e.toUpperCase() === "UNKNOWN") return "UNKNOWN";
      return `${e.toUpperCase()} ${units}`;
    }
  },
  mounted() {
    this.setStarshipImage("");
    this.getImage(["starships", "setStarshipImage"]);
    this.resetStarshipPilots();
    this.getStarshipPilots(["characters", "addStarshipPilot"]);
    this.resetStarshipFilms();
    this.getStarshipFilms();
    setTimeout(() => window.scrollTo(0, 0), "100");
  },
}
</script>

<style scoped>
  .main-container {
    text-align: center;
    width: 800px;
    margin: 2rem auto;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .back-btn {
    position: absolute;
    left: 0;
    top: 0.5rem;
    background-color: lightgrey;
    border: 0;
    padding: 0.5rem 1rem;
    padding-left: 2rem;
    border-radius: 10px;
  }

  .back-btn > p {
    position: relative;
  }

  .back-btn > p::before {
    position: absolute;
    left: -1rem;
    top: 0.3rem;
    content: "";
    border-bottom: 0.5rem solid black;
    border-left: 0.5rem solid black;
    border-top: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    rotate: 45deg;
  }

  .starship-img-container {
    position: relative;
    margin-bottom: 3rem;
  }

  .starship-img-container > img {
    border-bottom: 2rem solid rgb(35, 35, 35);
    border-top: 2rem solid rgb(35, 35, 35);
  }

  .div-width {
    width: 90%;
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
    grid-template-columns: 43.5% 3% 53.5%;
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

  .pilot-img > img {
    width: 75px;
  }
</style>

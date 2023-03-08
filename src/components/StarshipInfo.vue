<template>
  <div class="m-4">
    <button class="btn btn-primary" @click="$router.push({name: 'home'})">Return</button>
    <h1 class="mb-4">{{starship.name}}</h1>
    <img v-if="starshipImage !== '404'" :src="starshipImage" alt="IMAGE NOT AVALIABLE AT THER MOMENT">
    <div>
      <p class="m-0"><span>MODEL: </span>{{starship.model === "n/a" ? "UNKNOWN" : starship.model.toUpperCase()}}</p>
      <p class="m-0"><span>STARSHIP CLASS: </span>{{starship.starship_class === "n/a" ? "UNKNOWN" : starship.starship_class.toUpperCase()}}</p>
      <p class="m-0"><span>MANUFACTURER: </span>{{starship.manufacturer === "n/a" ? "UNKNOWN" : starship.manufacturer.toUpperCase()}}</p>
      <p class="m-0"><span>COST: </span>{{(starship.cost_in_credits === "n/a" | starship.cost_in_credits.toUpperCase() === "UNKNOWN") ? "UNKNOWN" : starship.cost_in_credits.toUpperCase() + " CREDITS"}}</p>
    </div>
    <div>
      <div>
        <p class="m-0"><span>CREW: </span>{{starship.crew === "n/a" ? "UNKNOWN" : starship.crew.toUpperCase()}}</p>
        <p class="m-0"><span>PASSENGER CAPACITY: </span>{{starship.passengers === "n/a" ? "UNKNOWN" : starship.passengers.toUpperCase()}}</p>
        <p class="m-0"><span>CARGO CAPACITY: </span>{{starship.cargo_capacity === "n/a" ? "UNKNOWN" : starship.cargo_capacity.toUpperCase() + " TONS"}}</p>
        <p class="m-0"><span>CONSUMABLES: </span>{{starship.consumables === "n/a" ? "UNKNOWN" : starship.consumables.toUpperCase()}}</p>
      </div>
      <div>
        <p class="m-0"><span>LENGTH: </span>{{starship.length === "n/a" ? "UNKNOWN" : starship.length.toUpperCase()}} METERS</p>
        <p class="m-0"><span>MAXIMUM ATMOSPHERING SPEED: </span>{{starship.max_atmosphering_speed === "n/a" ? "UNKNOWN" : starship.max_atmosphering_speed.toUpperCase() + " KM/H"}}</p>
        <p class="m-0"><span>HYPERDRIVE RATING: </span>{{starship.hyperdrive_rating === "n/a" ? "UNKNOWN" : starship.hyperdrive_rating.toUpperCase()}}</p>
        <p class="m-0"><span>MAXIMUM SPEED IN REALSPACE: </span>{{starship.MGLT === "n/a" ? "UNKNOWN" : starship.MGLT.toUpperCase() + " MGLT"}}</p>
      </div>
    </div>
    <div>
      <div>
        <p class="m-0"><span>PILOTS: </span></p>
        <div>
          <p class="m-0" v-if="starshipPilots === ''">UNKNOWN</p>
          <button v-for="(pilot, index) in toObjectArray(starshipPilots)" :key="index" class="p-0 border-0 bg-white pilot-img me-2">
            <img :src="pilot.image" alt="pilot">
          </button>
        </div>
      </div>
      <div>
        <p class="m-0"><span>FILMS: </span></p>
        <div>
          <p class="m-0" v-for="(film, index) in toObjectArray(starshipFilms)" :key="index">{{film.title}} (Episode {{film.episode_id}})</p>
        </div>
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
    test() {
      fetch("https://starwars-visualguide.com/assets/img/starships/2.jpg")
        .then(response => console.log(response.url))  
    }
  },
  mounted() {
    this.setStarshipImage("");
    this.getImage(["starships", "setStarshipImage"]);
    this.resetStarshipPilots();
    this.getStarshipPilots(["characters", "addStarshipPilot"]);
    this.resetStarshipFilms();
    this.getStarshipFilms();
  },
}
</script>

<style scoped>
  .pilot-img > img {
    width: 75px;
  }
</style>

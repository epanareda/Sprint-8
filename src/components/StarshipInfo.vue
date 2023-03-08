<template>
  <div class="m-4">
    <button class="btn btn-primary" @click="$router.push({name: 'home'})">Return</button>
    <h1 class="mb-4">{{starship.name}}</h1>
    <img v-if="starshipImage !== '404'" :src="starshipImage" alt="IMAGE NOT AVALIABLE AT THE MOMENT">
    <div>
      <p class="m-0"><span>MODEL: </span>{{setCorrectInfo(starship.model)}}</p>
      <p class="m-0"><span>STARSHIP CLASS: </span>{{setCorrectInfo(starship.starship_class)}}</p>
      <p class="m-0"><span>MANUFACTURER: </span>{{setCorrectInfo(starship.manufacturer)}}</p>
      <p class="m-0"><span>COST: </span>{{setCorrectInfo(starship.cost_in_credits, "CREDITS")}}</p>
    </div>
    <div>
      <div>
        <p class="m-0"><span>CREW: </span>{{setCorrectInfo(starship.crew)}}</p>
        <p class="m-0"><span>PASSENGER CAPACITY: </span>{{setCorrectInfo(starship.passengers)}}</p>
        <p class="m-0"><span>CARGO CAPACITY: </span>{{setCorrectInfo(starship.cargo_capacity, "TONS")}}</p>
        <p class="m-0"><span>CONSUMABLES: </span>{{setCorrectInfo(starship.consumables)}}</p>
      </div>
      <div>
        <p class="m-0"><span>LENGTH: </span>{{setCorrectInfo(starship.length, "METERS")}}</p>
        <p class="m-0"><span>MAXIMUM ATMOSPHERING SPEED: </span>{{setCorrectInfo(starship.max_atmosphering_speed, "KM/H")}}</p>
        <p class="m-0"><span>HYPERDRIVE RATING: </span>{{setCorrectInfo(starship.hyperdrive_rating)}}</p>
        <p class="m-0"><span>MAXIMUM SPEED IN REALSPACE: </span>{{setCorrectInfo(starship.MGLT, "MGLT")}}</p>
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
  },
}
</script>

<style scoped>
  .pilot-img > img {
    width: 75px;
  }
</style>

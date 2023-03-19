<template>
  <div>
    <button class="starship-img" type="button" data-bs-toggle="modal" :data-bs-target="`#starship-${starship.name.replaceAll(' ', '-')}`">
      <div class="piece-light-1"></div>
      <div class="piece-light-2"></div>
      <div class="light-1"></div>
      <div class="light-2"></div>
      <img v-if="starship.image !== '404'" :src="starship.image">
      <div class="starship-label-container">
        <p class="starship-name">{{starship.name}}</p>
        <p class="starship-model">{{starship.model}}</p>
      </div>
    </button>

    <div class="modal fade" :id="`starship-${starship.name.replaceAll(' ', '-')}`" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="starshipModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content starship-data-container">
          <div class="modal-header h5 fw-bold starship-data-header">
            <p class="modal-title">{{setCorrectInfo("name")}}</p>
            <button type="button" class="btn btn-close btn-position" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div v-if="starship.image !== '404'" class="starship-data-img-container">
            <div class="piece-1"></div>
            <div class="piece-2"></div>
            <img :src="starship.image">
          </div>
          <div class="data-container">
            <div class="piece-1"></div>
            <div class="piece-2"></div>
            <p class="p-data"><span>model: </span>{{setCorrectInfo("model")}}</p>
            <p class="p-data"><span>class: </span>{{setCorrectInfo("starship_class")}}</p>
            <p class="p-data"><span>cost: </span>{{setCorrectInfo("cost_in_credits", "credits")}}</p>
            <p class="p-data"><span>length: </span>{{setCorrectInfo("length", "meters")}}</p>
          </div>
          <div class="data-container">
            <div class="piece-1"></div>
            <div class="piece-2"></div>
            <p class="p-data"><span>crewmembers: </span>{{setCorrectInfo("crew")}}</p>
            <p class="p-data"><span>cargo capacity: </span>{{setCorrectInfo("cargo_capacity")}}</p>
            <p class="p-data"><span>consumables: </span>{{setCorrectInfo("consumables")}}</p>
            <p class="p-data"><span>hyperdrive rating: </span>{{setCorrectInfo("hyperdrive_rating")}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pilot',
  props: ["starship"],
  methods: {
    setCorrectInfo(key, units="") {
      const e = this.starship[key];
      if(e === "n/a" | e.toUpperCase() === "UNKNOWN") return "UNKNOWN";
      return `${e.toUpperCase()} ${units}`;
    },
  },
}
</script>

<style scoped>
  .starship-img {
    position: relative;
    background-color: lightgrey;
    border: 0;
    padding: 1.5rem 0.5rem;
    border-radius: 5px;
    width: 500px;
    padding-left: 125px;
  }

  .starship-img > img {
    position: absolute;
    top: calc(50% - 30px);
    left: 15px;
    width: 90px;
    height: 60px;
    border-radius: 5px;
  }

  .starship-label-container{
    display: flex;
    flex-direction: column;
    text-align: start;
  }

  .starship-name{
    color: black;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.2rem;
    margin: 0;
  }

  .starship-model{
    color: black;
    text-transform: uppercase;
    font-size: 0.8rem;
    margin: 0;
  }

  .piece-light-1 {
    position: absolute;
    width: 30px;
    height: 0.5rem;
    top: 0;
    left: 20px;
    background-color: rgb(35, 35, 35);
  }
  
  .piece-light-1::before {
    position: absolute;
    left: -0.5rem;
    content: "";
    border-bottom: 0.25rem solid transparent;
    border-left: 0.25rem solid transparent;
    border-top: 0.25rem solid rgb(35, 35, 35);
    border-right: 0.25rem solid rgb(35, 35, 35);
  }
  
  .piece-light-1::after {
    position: absolute;
    right: -0.5rem;
    content: "";
    border-bottom: 0.25rem solid transparent;
    border-left: 0.25rem solid rgb(35, 35, 35);
    border-top: 0.25rem solid rgb(35, 35, 35);
    border-right: 0.25rem solid transparent;
  }

  .piece-light-2 {
    position: absolute;
    width: 30px;
    height: 0.5rem;
    bottom: 0;
    right: 20px;
    background-color: rgb(35, 35, 35);
  }
  
  .piece-light-2::before {
    position: absolute;
    left: -0.5rem;
    content: "";
    border-bottom: 0.25rem solid rgb(35, 35, 35);
    border-left: 0.25rem solid transparent;
    border-top: 0.25rem solid transparent;
    border-right: 0.25rem solid rgb(35, 35, 35);
  }
  
  .piece-light-2::after {
    position: absolute;
    right: -0.5rem;
    content: "";
    border-bottom: 0.25rem solid rgb(35, 35, 35);
    border-left: 0.25rem solid rgb(35, 35, 35);
    border-top: 0.25rem solid transparent;
    border-right: 0.25rem solid transparent;
  }

  .light-1,
  .light-2 {
    position: absolute;
    top: 0.25rem;
    height: 5px;
    background-color: grey;
    border-radius: 100px;
    transition: 0.5s;
  }

  .light-1 {
    right: 17.5px;
    width: 20px;
  }

  .light-2 {
    right: 10px;
    width: 5px;
  }

  .starship-img:hover > .light-1,
  .starship-img:hover > .light-2 {
    background-color: rgb(200, 0, 0);
    box-shadow: 0 0 1rem 0.25rem red;
  }

  .starship-data-container {
    height: auto;
    background-color: lightgrey;
    border-radius: 5px;
    padding-bottom: 1rem;
  }

  .starship-data-header {
    text-align: center;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    border: 0;
    margin-bottom: 0;
  }

  .starship-data-header > p {
    color: rgb(35, 35, 35);
  }

  .btn-position {
    position: absolute;
    top: 20px;
    right: 30px;
  }

  .starship-data-img-container {
    position: relative;
    width: 80%;
    margin: 1rem auto;
    margin-top: 0;
    background-color: rgb(35, 35, 35);
    border-radius: 5px;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
  }

  .starship-data-img-container > img {
    width: 100%;
    border-color: rgb(35, 35, 35);
    border-radius: 5px;
  }

  .data-container {
    width: 80%;
    margin: 1rem auto;
    margin-top: 0;
    padding: 2rem;
    background-color: rgb(35, 35, 35);
    position: relative;
    text-align: start;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .p-data {
    margin: 0;
    color: white;
    text-transform: uppercase;
  }

  .p-data > span {
    color: grey;
    font-weight: bold;
  }
  
  .piece-1 {
    position: absolute;
    width: 50px;
    height: 1rem;
    top: 0;
    left: 40px;
    background-color: lightgrey;
  }
  
  .piece-1::before {
    position: absolute;
    left: -1rem;
    content: "";
    border-bottom: 0.5rem solid transparent;
    border-left: 0.5rem solid transparent;
    border-top: 0.5rem solid lightgrey;
    border-right: 0.5rem solid lightgrey;
  }
  
  .piece-1::after {
    position: absolute;
    right: -1rem;
    content: "";
    border-bottom: 0.5rem solid transparent;
    border-left: 0.5rem solid lightgrey;
    border-top: 0.5rem solid lightgrey;
    border-right: 0.5rem solid transparent;
  }

  .piece-2 {
    position: absolute;
    width: 50px;
    height: 1rem;
    bottom: 0;
    right: 40px;
    background-color: lightgrey;
  }
  
  .piece-2::before {
    position: absolute;
    left: -1rem;
    content: "";
    border-bottom: 0.5rem solid lightgrey;
    border-left: 0.5rem solid transparent;
    border-top: 0.5rem solid transparent;
    border-right: 0.5rem solid lightgrey;
  }
  
  .piece-2::after {
    position: absolute;
    right: -1rem;
    content: "";
    border-bottom: 0.5rem solid lightgrey;
    border-left: 0.5rem solid lightgrey;
    border-top: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
  }

  @media screen and (max-width: 991.5px) {
    .starship-img {
      width: 450px;
    }
  }

  @media screen and (max-width: 768px) {
    .starship-img {
      width: 100%;
    }
  }

  @media screen and (max-width: 450px) {
    .starship-img {
      padding: 1rem;
    }

    .starship-img > img {
      display: none;
    }
  }
</style>

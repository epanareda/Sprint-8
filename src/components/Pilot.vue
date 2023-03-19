<template>
  <div>
    <button class="pilot-img" type="button" data-bs-toggle="modal" :data-bs-target="`#pilot-${pilot.name.replaceAll(' ', '-')}`">
      <div class="piece-light-1"></div>
      <div class="piece-light-2"></div>
      <div class="light-1"></div>
      <div class="light-2"></div>
      <img :src="pilot.image" alt="pilot">
    </button>

    <div class="modal fade" :id="`pilot-${pilot.name.replaceAll(' ', '-')}`" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="pilotModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content pilot-data-container">
          <div class="modal-header h5 fw-bold pilot-data-header">
            <p class="modal-title">{{setCorrectInfo("name")}}</p>
            <button type="button" class="btn btn-close btn-position" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="first-row-container">
            <div class="pilot-data-img-container">
              <div class="piece-light-3"></div>
              <div class="piece-light-4"></div>
              <img :src="pilot.image" alt="pilot">
            </div>
            <div class="data-container">
              <div class="piece-1"></div>
              <div class="piece-2"></div>
              <p class="p-data"><span>MASS: </span>{{setCorrectInfo("mass", "KG")}}</p>
              <p class="p-data"><span>HAIR: </span>{{setCorrectInfo("hair_color")}}</p>
              <p class="p-data"><span>SKIN: </span>{{setCorrectInfo("skin_color")}}</p>
              <p class="p-data"><span>EYE: </span>{{setCorrectInfo("eye_color")}}</p>
            </div>
          </div>
          <div class="data-container">
            <div class="piece-1"></div>
            <div class="piece-2"></div>
            <p class="p-data"><span>GENDER: </span>{{setCorrectInfo("gender")}}</p>
            <p class="p-data"><span>HEIGHT: </span>{{setCorrectInfo("height", "METERS")}}</p>
            <p class="p-data"><span>BIRTH: </span>{{setCorrectInfo("birth_year")}}</p>
            <p class="p-data"><span>HOMEWORLD: </span>{{setCorrectInfo("homeworld")}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pilot',
  props: ["pilot"],
  methods: {
    setCorrectInfo(key, units="") {
      if(this.pilot[key] === "n/a" || this.pilot[key].toUpperCase() === "UNKNOWN") return "UNKNOWN";
      return `${this.pilot[key]} ${units}`;
    },
  },
}
</script>

<style scoped>
  .pilot-img {
    position: relative;
    background-color: lightgrey;
    border: 0;
    padding: 1rem 0.5rem;
    margin-right: 1rem;
    border-radius: 5px;
  }

  .pilot-img > img {
    width: 90px;
    border-radius: 5px;
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

  .pilot-img:hover > .light-1,
  .pilot-img:hover > .light-2 {
    background-color: rgb(200, 0, 0);
    box-shadow: 0 0 1rem 0.25rem red;
  }

  .pilot-data-container {
    height: auto;
    background-color: lightgrey;
    border-radius: 5px;
    padding-bottom: 1rem;
  }

  .pilot-data-header {
    text-align: center;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    border: 0;
    margin-bottom: 0;
  }

  .pilot-data-header > p {
    color: rgb(35, 35, 35);
  }

  .btn-position {
    position: absolute;
    top: 20px;
    right: 30px;
  }

  .pilot-data-img-container {
    position: relative;
    width: 125px;
    margin: 1rem auto;
    margin-top: 0;
    background-color: rgb(35, 35, 35);
    border-radius: 5px;
    padding: 1rem 0.5rem;
    display: flex;
    align-items: center;
  }

  .pilot-data-img-container > img {
    width: 100%;
    border-color: rgb(35, 35, 35);
    border-radius: 5px;
  }

  .first-row-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 1rem;
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
  
  .piece-light-3 {
    position: absolute;
    width: 30px;
    height: 0.5rem;
    top: 0;
    left: 20px;
    background-color: lightgrey;
  }
  
  .piece-light-3::before {
    position: absolute;
    left: -0.5rem;
    content: "";
    border-bottom: 0.25rem solid transparent;
    border-left: 0.25rem solid transparent;
    border-top: 0.25rem solid lightgrey;
    border-right: 0.25rem solid lightgrey;
  }
  
  .piece-light-3::after {
    position: absolute;
    right: -0.5rem;
    content: "";
    border-bottom: 0.25rem solid transparent;
    border-left: 0.25rem solid lightgrey;
    border-top: 0.25rem solid lightgrey;
    border-right: 0.25rem solid transparent;
  }

  .piece-light-4 {
    position: absolute;
    width: 30px;
    height: 0.5rem;
    bottom: 0;
    right: 20px;
    background-color: lightgrey;
  }
  
  .piece-light-4::before {
    position: absolute;
    left: -0.5rem;
    content: "";
    border-bottom: 0.25rem solid lightgrey;
    border-left: 0.25rem solid transparent;
    border-top: 0.25rem solid transparent;
    border-right: 0.25rem solid lightgrey;
  }
  
  .piece-light-4::after {
    position: absolute;
    right: -0.5rem;
    content: "";
    border-bottom: 0.25rem solid lightgrey;
    border-left: 0.25rem solid lightgrey;
    border-top: 0.25rem solid transparent;
    border-right: 0.25rem solid transparent;
  }

  @media screen and (max-width: 768px) {
    .pilot-img > img {
      width: 70px;
    }

    .light-1 {
      width: 10px;
    }
  }

  @media screen and (max-width: 576px) {
    .pilot-data-img-container {
      max-height: 100%;
    }
  }
</style>

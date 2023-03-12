<template>
  <div>
    <button class="cool-btn" @click="$router.push({name: routeName})">
      <div class="piece-light-1"></div>
      <div class="piece-light-2"></div>
      <div class="light-1"></div>
      <div class="light-2"></div>
      <p>{{text}}</p>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CoolButton',
  props: ["text" ,"routeName"],
}
</script>

<style scoped>
  .cool-btn {
    position: relative;
    background-color: lightgrey;
    border: 0;
    padding: 1rem 1.5rem;
    margin-right: 1rem;
    border-radius: 5px;
    width: 100%;
  }

  .cool-btn > p {
    margin: 0;
    border-radius: 5px;
    color: black;
    font-weight: bold;
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

  .cool-btn:hover > .light-1,
  .cool-btn:hover > .light-2 {
    background-color: rgb(200, 0, 0);
    box-shadow: 0 0 1rem 0.25rem red;
  }
</style>

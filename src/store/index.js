import { createStore } from 'vuex'

export default createStore({
  state: {
    url: "https://swapi.dev/api/",
    union: "UNION;",
    starships: ""
  },
  getters: {
  },
  mutations: {
    addStarship(state, element) {
      const jsonStr = JSON.stringify(element)

      if(state.starships === "") state.starships = jsonStr;
      else {
        const arr = state.starships.split(state.union);
        arr.push(jsonStr);
        state.starships = arr.join(state.union)
      }
      
      // console.log(state.starships);
    },
    resetData(state) {
      state.starships = "";
    }
  },
  actions: {
    getInfo({commit, state}, type) {
      fetch(`${state.url}${type}`)
        .then(response => response.json())
        .then(json => {
          json.results.forEach(result => {
            commit("addStarship", result)
          })
        });
    }
  },
  modules: {
  }
})

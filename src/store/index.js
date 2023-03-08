import { createStore } from 'vuex'

export default createStore({
  state: {
    url: "https://swapi.dev/api/",
    urlImage: "https://starwars-visualguide.com/assets/img/",
    union: "UNION;",
    starships: "",
    nextPageStarships: "",
    selectedStarship: "",
    starshipImage: "",
    starshipPilots: "",
    starshipFilms: "",
  },

  getters: {
    starships(state) {
      return state.starships;
    },
    nextPageStarships(state) {
      return state.nextPageStarships;
    },
    selectedStarship(state) {
      return state.selectedStarship;
    },
    starshipImage(state) {
      return state.starshipImage;
    },
    starshipPilots(state) {
      return state.starshipPilots;
    },
    starshipFilms(state) {
      return state.starshipFilms;
    },
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
    setNextPageStarships(stats, element) {
      stats.nextPageStarships = element;
    },
    selectStarship(state, val) {
      let item = val.target;
      while(item.type != "submit") {
        item = item.parentNode;
      }
      state.selectedStarship = item.value;
    },
    setStarshipImage(state, element) {
      state.starshipImage = element;
    },
    addStarshipPilot(state, element) {
      const jsonStr = JSON.stringify(element)

      if(state.starshipPilots === "") state.starshipPilots = jsonStr;
      else {
        const arr = state.starshipPilots.split(state.union);
        arr.push(jsonStr);
        state.starshipPilots = arr.join(state.union)
      }
    },
    addStarshipFilm(state, element) {
      const jsonStr = JSON.stringify(element)

      if(state.starshipFilms === "") state.starshipFilms = jsonStr;
      else {
        const arr = state.starshipFilms.split(state.union);
        arr.push(jsonStr);
        state.starshipFilms = arr.join(state.union)
      }
    },
    resetStarships(state) {
      state.starships = "";
    },
    resetNextPageStarships(state) {
      state.nextPageStarships = "";
    },
    resetStarshipPilots(state) {
      state.starshipPilots = "";
    },
    resetStarshipFilms(state) {
      state.starshipFilms = "";
    },
  },

  actions: {
    getInfo({commit, state}, [type, mutation]) {
      fetch(`${state.url}${type}`)
        .then(response => response.json())
        .then(json => {
          json.results.forEach(result => {
            commit(mutation, result)
          })
          if(type.substr(0,4)=="star")commit("setNextPageStarships", json.next);
        });
    },
    getImage({commit, state}, [type, mutation]) {
      const obj = JSON.parse(state.selectedStarship);
      fetch(`${state.urlImage}${type}/${
        obj.url.split('/')[obj.url.split('/').length - 2]
      }.jpg`)
        .then(response => {
          if(response.status === 404) commit(mutation, "404");
          else commit(mutation, response.url);
        })
    },
    getStarshipPilots({commit, state}, [type, mutation]) {
      JSON.parse(state.selectedStarship).pilots.forEach(p => {
        const obj = {};
        obj["url"] = p;
        fetch(`${state.urlImage}${type}/${
          p.split('/')[p.split('/').length - 2]
        }.jpg`)
          .then(response => {
            obj["image"] = response.url;
            commit(mutation, obj);
          });
      })
    },
    getStarshipFilms({commit, state}) {
      JSON.parse(state.selectedStarship).films.forEach(f => {
        fetch(f)
        .then(response => response.json())
        .then(json => commit("addStarshipFilm", json));
      });
    }
  },
  
  modules: {
  }
})

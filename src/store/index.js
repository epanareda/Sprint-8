import { createStore } from 'vuex'
import router from '@/router';

export default createStore({
  state: {
    // common
    url: "https://swapi.dev/api/",
    urlImage: "https://starwars-visualguide.com/assets/img/",
    union: "UNION;",
    
    // starships
    starships: "",
    currentPageStarships: "",
    nextPageStarships: "",
    selectedStarship: "",
    starshipImage: "",
    starshipPilots: "",
    starshipFilms: "",

    // characters
    characters: "",
    currentPageCharacters: "",
    nextPageCharacters: "",
    selectedCharacter: "",
    characterImage: "",
    characterHomeworld: "",
    characterStarships: "",
    characterFilms: "",

    // login
    login: "false",
    signin: "true",
    signinMsg: "This is some text just for testing",
    signinMsgMeaning: "",
    signinMsgShow: "false",
    logedin: "false",
  },

  getters: {
    // starships
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
    
    // characters
    characters(state) {
      return state.characters;
    },
    nextPageCharacters(state) {
      return state.nextPageCharacters;
    },
    selectedCharacter(state) {
      return state.selectedCharacter;
    },
    characterImage(state) {
      return state.characterImage;
    },
    characterHomeworld(state) {
      return state.characterHomeworld;
    },
    characterStarships(state) {
      return state.characterStarships;
    },
    characterFilms(state) {
      return state.characterFilms;
    },

    // login
    login(state) {
      return state.login === "true";
    },
    signin(state) {
      return state.signin === "true";
    },
    signinMsg(state) {
      return state.signinMsg;
    },
    signinMsgMeaning(state) {
      return state.signinMsgMeaning;
    },
    signinMsgShow(state) {
      return state.signinMsgShow === "true";
    },
    logedin(state) {
      return state.logedin === "true";
    },
  },

  mutations: {
    // starships
    addStarship(state, element) {
      const jsonStr = JSON.stringify(element)

      if(state.starships === "") state.starships = jsonStr;
      else {
        const arr = state.starships.split(state.union);
        arr.push(jsonStr);
        state.starships = arr.join(state.union)
      }
    },
    setCurrentPageStarships(stats, element) {
      stats.currentPageStarships = element;
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
    resetStarshipPilots(state) {
      state.starshipPilots = "";
    },
    resetStarshipFilms(state) {
      state.starshipFilms = "";
    },
    
    // characters
    addCharacter(state, element) {
      const jsonStr = JSON.stringify(element)

      if(state.characters === "") state.characters = jsonStr;
      else {
        const arr = state.characters.split(state.union);
        arr.push(jsonStr);
        state.characters = arr.join(state.union)
      }
    },
    setCurrentPageCharacters(stats, element) {
      stats.currentPageCharacters = element;
    },
    setNextPageCharacters(stats, element) {
      stats.nextPageCharacters = element;
    },
    selectCharacter(state, val) {
      let item = val.target;
      while(item.type != "submit") {
        item = item.parentNode;
      }
      state.selectedCharacter = item.value;
    },
    setCharacterImage(state, element) {
      state.characterImage = element;
    },
    setCharacterHomeworld(state, element) {
      state.characterHomeworld = element;
    },
    addCharacterStarship(state, element) {
      const jsonStr = JSON.stringify(element)

      if(state.characterStarships === "") state.characterStarships = jsonStr;
      else {
        const arr = state.characterStarships.split(state.union);
        arr.push(jsonStr);
        state.characterStarships = arr.join(state.union)
      }
    },
    addCharacterFilm(state, element) {
      const jsonStr = JSON.stringify(element)

      if(state.characterFilms === "") state.characterFilms = jsonStr;
      else {
        const arr = state.characterFilms.split(state.union);
        arr.push(jsonStr);
        state.characterFilms = arr.join(state.union)
      }
    },
    resetCharacterStarships(state) {
      state.characterStarships = "";
    },
    resetCharacterFilms(state) {
      state.characterFilms = "";
    },

    // login
    openCloseLogin(state) {
      if(state.login === "false") state.signin = "true"; // Making sure on opening allways shaows sign in.
      state.login = String(state.login === "false");
    },
    signinToSignup(state) {
      state.signin = String(state.signin === "false");
    },
    createAccount(state, data){
      if(Object.keys(localStorage).includes(data[0])) {
        state.signinMsg = "This username already exist";
        state.signinMsgMeaning = "error";
      }
      else {
        localStorage.setItem(...data);
        state.signinMsg = "The account has been created successfuly!";
        state.signinMsgMeaning = "success";
        state.login = "false";
      }
    },
    loginAccount(state, data){
      if(!Object.keys(localStorage).includes(data[0])) {
        state.signinMsg = "This username doesn't exist";
        state.signinMsgMeaning = "error";
      }
      else if(localStorage.getItem(data[0]) !== data[1]) {
        state.signinMsg = "The password is incorrect";
        state.signinMsgMeaning = "error";
      }
      else {
        state.logedin = "true";
        state.signinMsg = "Signed in successfuly!";
        state.signinMsgMeaning = "success";
        state.login = "false";
      }
    },
    showRemoveMsg(state) {
      state.signinMsgShow = "true";
      setTimeout(() => state.signinMsgShow = "false", 1500);
    },
    logout(state) {
      state.logedin = "false";
      state.signinMsg = "Loged out successfuly!";
      state.signinMsgMeaning = "success";
      if(router.currentRoute.value.name !== "home") state.login = "false";
      router.push({name: "home"});
    },
    setPilot(state, element) {
      state.selectedPilot = JSON.stringify(element);
    },
  },

  actions: {
    getInfo({commit, state}, [type, mutation]) {
      let run = false;
      if((type.substr(0,4) == "star" && (state.currentPageStarships === "" || state.currentPageStarships !== state.nextPageStarships)) ||
        (type.substr(0,4) == "peop" && (state.currentPageCharacters === "" || state.currentPageCharacters !== state.nextPageCharacters))) {
          if(type === "starships") commit("setCurrentPageStarships", state.nextPageStarships);
          else commit("setCurrentPageCharacters", state.nextPageCharacters);
          run = true;
      }

      if(run) {
          fetch(`${state.url}${type}`)
            .then(response => response.json())
            .then(json => {
              json.results.forEach(result => {
                commit(mutation, result)
              })
              if(type.substr(0,4) == "star") commit("setNextPageStarships", json.next);
              else commit("setNextPageCharacters", json.next);
            });
        }
      
    },
    getImage({commit, state}, [type, mutation]) {
      let obj = {};
      if(type === "starships") obj = JSON.parse(state.selectedStarship);
      else if(type === "characters") obj = JSON.parse(state.selectedCharacter);
      fetch(`${state.urlImage}${type}/${
        obj.url.split('/')[obj.url.split('/').length - 2]
      }.jpg`)
        .then(response => {
          if(response.status === 404) commit(mutation, "404");
          else commit(mutation, response.url);
        })
    },
    getStarshipPilots({commit, state}) {
      commit("resetStarshipPilots");
      async function fetchPilot(url) {
        const result = await fetch(url)
          .then(response => response.json());
        result["homeworld"] = await fetchHomeworldPilot(result["homeworld"]);
        return result;
      }
      async function fetchHomeworldPilot(url) {
        const result = await fetch(url)
          .then(response => response.json());
        return result.name
      }
      async function fetchPilotImage(url) {
        const result = await fetch(`${state.urlImage}characters/${
          url.split('/')[url.split('/').length - 2]
        }.jpg`)
          .then(response => {
            if(response.status === 404) return "404";
            else return response.url;
          });
        return {image: result};
      }

      JSON.parse(state.selectedStarship).pilots.map(async p => {
        const pilotObj = await fetchPilot(p);
        const pilotImgObj = await fetchPilotImage(p);
        const result = {...pilotObj, ...pilotImgObj}
        commit("addStarshipPilot", result);
      })
    },
    getCharacterStarships({commit, state}) {
      commit("resetCharacterStarships");
      state.characterStarships = "";
      async function fetchStarship(s) {
        const result = await fetch(s)
          .then(response => response.json());
        return result;
      }
      async function fetchStarshipImage(s) {
        const result = await fetch(`${state.urlImage}starships/${
          s.split('/')[s.split('/').length - 2]
        }.jpg`)
          .then(response => {
            if(response.status === 404) return "404";
            else return response.url;
          });
        return {image: result};
      }

      JSON.parse(state.selectedCharacter).starships.map(async s => {
        const starshipObj = await fetchStarship(s);
        const starshipImgObj = await fetchStarshipImage(s);
        const result = {...starshipObj, ...starshipImgObj}
        commit("addCharacterStarship", result);
      })
    },
    getFilms({commit, state}, [type, mutation]) {
      let obj = {};
      if(type === "starships") {
        commit("resetStarshipFilms");
        obj = JSON.parse(state.selectedStarship);
      }
      else if(type === "characters") {
        commit("resetCharacterFilms");
        obj = JSON.parse(state.selectedCharacter);
      }
      obj.films.forEach(f => {
        fetch(f)
          .then(response => response.json())
          .then(json => commit(mutation, json));
      });
    },
    getHomeworld({commit}, [url, mutation]) {
      fetch(url)
        .then(response => response.json())
        .then(json => {
          commit(mutation, json.name);
        })
    },
  },
  
  modules: {
  }
})

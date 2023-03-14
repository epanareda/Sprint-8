import { createStore } from 'vuex'
import router from '@/router';

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
    login: "false",
    signin: "true",
    signinMsg: "This is some text just for testing",
    signinMsgMeaning: "",
    signinMsgShow: "false",
    logedin: "false",
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

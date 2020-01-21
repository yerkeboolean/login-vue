import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false
  },
  mutations: {
    LOG_IN: state => {
      state.loggedIn = true;
    }
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await axios.get("http://localhost:3000/");
        if (response.status === 200) {
          console.log(payload);
          commit("LOG_IN");
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {}
});

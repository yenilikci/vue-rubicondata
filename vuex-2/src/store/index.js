import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: "message",
  },
  getters: {
    getTitle: (state) => {
      return state.title;
    },
  },
  mutations: {
    setTitle: (state, val) => {
      state.title = val;
    },
  },
  actions: {
    setTitleActions: (context, val) => {
      setTimeout(() => {
        context.commit("setTitle", val);
      }, 2500);
    },
  },
});

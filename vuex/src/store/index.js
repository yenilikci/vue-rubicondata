import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: "message",
  },

  getters,

  //mutations senkron çalışır, maliyet az, kapasitede az
  mutations: {
    setTitle: (state, value) => {
      return (state.title = value);
    },
  },

  //mutations tek başına kullanmak yerine actions ile içerisinde kullanmak daha iyidir
  //actions asenkron çalışır, api işlemleri için actions kullanılmalı
  actions: {
    setTitleActions: (context, value) => {
      //return context.state.title ...
      //return context.getters("getTitle");
      return context.commit("setTitle", value);
    },
  },
});

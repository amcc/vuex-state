import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 10
  },
  mutations: {
    inc(state) {
      state.count++;
    },
    dec(state) {
      state.count--;
    }
  },
  actions: {},
  getters: {},
  modules: {}
});

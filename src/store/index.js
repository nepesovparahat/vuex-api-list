import Vuex from "vuex";
import Vue from "vue";
import todos from "./modules/todos";
//load vuex
Vue.use(Vuex);
//create store
export default new Vuex.Store({
  modules: {
    todos,
  },
});

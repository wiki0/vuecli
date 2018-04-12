import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  isCollapse: false
};
const mutations = {
  change(state) {
    state.isCollapse = !state.isCollapse;
  }
}

export default new Vuex.Store({
  state,mutations
})

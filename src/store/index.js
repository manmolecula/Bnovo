import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: []
  },
  getters: {
    favorites: state => state.favorites
  },
  actions: {
    addFavorite({ commit }, repository) {
      commit('ADD_FAVORITE', repository);
    },
    removeFavorite({ commit }, repository) {
      commit('REMOVE_FAVORITE', repository);
    }
  },
  mutations: {
    ADD_FAVORITE(state, repository) {
      if (!state.favorites.some(fav => fav.id === repository.id)) {
        state.favorites.push(repository);
      }
    },
    REMOVE_FAVORITE(state, repository) {
      state.favorites = state.favorites.filter(fav => fav.id !== repository.id);
    }
  }
});

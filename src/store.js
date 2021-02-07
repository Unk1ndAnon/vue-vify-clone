import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

import MovieService from "@/services/MovieService";

export default new Vuex.Store({
  state: {
    movies: [],
    isLoading: false,
    totalCount: 0
  },
  mutations: {
    ADD_MOVIES(state, data) {
      state.movies = data.movies
      state.totalCount = data.count
    },
    LOADING(state, isLoading) {
      state.isLoading = isLoading
    }
  },
  getters: {
    moviesPresent: state => {
      return state.totalCount > 0
    }
  },
  actions: {
    async listMovies ({ commit }, searchParams) {
      commit('LOADING', true)
      let movies = await MovieService.getMovies(searchParams)
      commit('ADD_MOVIES', { movies: movies.data.data.movies, count: movies.data.data.movie_count })
      commit('LOADING', false)
    }
  }
})
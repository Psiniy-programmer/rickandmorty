import {EpisodeModel} from "@/store/Models/EpisodeModel";
import axios from "axios";
import api from "@/utils/api";

export const episodeModule = {
  state: () => ({
    data: {},
    loading: false,
    error: '',
  }),
  getters: {

  },
  mutations: {
    setData(state, newEpisode) {
      state.data = new EpisodeModel(newEpisode);
    },
    setLoading(state, newLoading) {
      state.loading = newLoading;
    },
    setError(state, newError) {
      state.error = newError;
    }
  },
  actions: {
    async fetchAllEpisode({commit}) {
      commit('setLoading', true);
      await axios.get(api.episodes)
        .then((res) => {
          commit('setData', res.data);
        })
        .catch((err) => {
          commit('setError', err);
        })
        .finally(() => {
          commit('setLoading', false);
        })
    }
  },
  namespaced: true
}
import {EpisodeModel} from "@/store/Models/EpisodeModel";
import axios from "axios";
import api from "@/utils/api";

export const episodeModule = {
  state: () => ({
    data: {},
    loading: false,
    error: '',
  }),
  getters: {},
  mutations: {
    setData(state, newEpisode) {
      if (!state.data?.info) {
        state.data = new EpisodeModel(newEpisode);
      } else {
        const old = state.data.results;
        state.data = new EpisodeModel(newEpisode);
        state.data.results = Object.assign(state.data.results, old);
      }
    },
    setLoading(state, newLoading) {
      state.loading = newLoading;
    },
    setError(state, newError) {
      state.error = newError;
    }
  },
  actions: {
    async fetchAllEpisodes({state, commit}) {
      if (!state.data?.info) {
        commit('setLoading', true);
        await axios.get(api.episode.all)
          .then((res) => {
            commit('setData', res.data);
          })
          .catch((err) => {
            commit('setError', err);
          })

        while (state.data.info.next) {
          await axios.get(state.data.info.next)
            .then((res) => {
              commit('setData', res.data);
            })
            .catch((err) => {
              commit('setError', err);
            })
        }

        commit('setLoading', false);
      }
    }
  },
  namespaced: true
}
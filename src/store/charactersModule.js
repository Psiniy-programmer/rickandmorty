import axios from "axios";
import api from "@/utils/api";
import {CharactersModel} from "@/store/Models/CharactersModel";

export const charactersModule = {
  /**
   * @returns {{data: {}|CharactersModel, loading: boolean, error: string}}
   */
  state: () => ({
    data: {},
    loading: false,
    error: ''
  }),
  getters: {
  },
  mutations: {
    setData(state, newCharacters) {
      state.data = new CharactersModel(newCharacters);
    },
    setLoading(state, newLoading) {
      state.loading = newLoading;
    },
    setError(state, newError) {
      state.error = newError;
    }
  },
  actions: {
    async fetchAllCharacters({commit}) {
      commit('setLoading', true);
      await axios.get(api.characters)
        .then((res) => {
          commit('setData', res.data);
        })
        .catch((error) => {
          commit('setError', error);
        })
        .finally(() => {
          commit('setLoading', false);
        })
    },
  },
  namespaced: true
}
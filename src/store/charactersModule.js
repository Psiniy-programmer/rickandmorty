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
      await axios.get(api.characters.all)
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
    async fetchMoreCharacters({state, commit}) {
      commit('setLoading', true);

      if (state.data?.info.next) {
        await axios.get(state.data.info.next)
          .then((res) => {
            const obj = {
              info: res.data.info,
              results: [...state.data.results, ...res.data.results]
            }
            commit('setData', obj);
          })
          .catch((error) => {
            commit('setError', error);
          })
          .finally(() => {
            commit('setLoading', false);
          })
      }

    }
  },
  namespaced: true
}
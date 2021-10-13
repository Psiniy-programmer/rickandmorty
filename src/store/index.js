import {createStore} from "vuex";
import {charactersModule} from "@/store/charactersModule";
import {episodeModule} from "@/store/episodeModule";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  modules: {
    characters: charactersModule,
    episode: episodeModule
  },
  plugins: [createPersistedState()]
})

export default store;

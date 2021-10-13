import {createStore} from "vuex";
import {charactersModule} from "@/store/charactersModule";
import {episodeModule} from "@/store/episodeModule";

const store = createStore({
  modules: {
    characters: charactersModule,
    episode: episodeModule
  }
})

export default store;

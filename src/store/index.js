import {createStore} from "vuex";
import {charactersModule} from "@/store/charactersModule";

const store = createStore({
  modules: {
    characters: charactersModule
  }
})

export default store;

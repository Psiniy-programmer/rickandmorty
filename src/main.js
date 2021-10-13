import 'normalize.css';
import {createApp} from 'vue';
import router from "@/router/router";
import store from "@/store";
import App from './App.vue'
import VIntersection from "@/directives/VIntersection";

const app = createApp(App);

app.directive('intersection', VIntersection);

app
  .use(router)
  .use(store)
  .mount('#app')

<template>
  <router-view></router-view>
</template>

<script>

import {mapActions, mapState} from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapState({
      episode: state => state.episode.data,

    })
  },
  methods: {
    ...mapActions({
      fetchAllCharacters: 'characters/fetchAllCharacters',
      fetchAllEpisodes: 'episode/fetchAllEpisodes',
    }),
  },
  mounted() {
    this.fetchAllEpisodes();
    this.fetchAllCharacters();
  }
}
</script>

<style>

@font-face {
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("assets/fonts/Adult-Swim-Font.ttf") format("trueType");
}

* {
  font-family: "Helvetica Neue", sans-serif;
  margin: 0;
  padding: 0;
}

html{
  --bg-color: #181717;
  --white-color: #FFFFFF;
  --green-color: #0ABAB5;
  --border-radius: 15px;
  height: 100%
}

body {
  min-height: 100%;
  height: 100%;
}

#app {
  background-color: var(--bg-color);
  background-image: url("assets/fon.png");
}

</style>

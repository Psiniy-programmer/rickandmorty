<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
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
  background-color: var(--bg-color);
}

#app {
  height: 100%;
}
</style>

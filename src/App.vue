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
}

html{
  --bg-color: #181717;
  --white-color: #FFFFFF;
}

body,
#app {
  height: 100%;
}

#app {
  background-color: var(--bg-color);
}
</style>

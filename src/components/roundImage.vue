<template>
  <router-link :to="link">
    <img class="image" :src="path" alt="">
  </router-link>
</template>

<script>
export default {
  name: "roundImage",
  props: {
    path: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .image {
    width: 90px;
    height: 90px;
    border-radius: 45px;
  }
</style>
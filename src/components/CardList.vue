<template>
  <ul class="cards" v-if="items.length > 0">
    <my-card
        v-for="character in items"
        :info="character"
        :key="character.id"
    >
    </my-card>
  </ul>
  <p class="text" v-else>
    List is empty
  </p>

</template>

<script>
import MyCard from "@/components/Card";

export default {
  name: "CardList",
  components: {MyCard},
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.cards {
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  max-width: 240px;
  display: grid;
  gap: 24px;
}

.text {
  color: var(--white-color);
}
</style>
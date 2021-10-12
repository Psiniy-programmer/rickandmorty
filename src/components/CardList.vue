<template>
  <section class="cards" v-if="characters?.results?.length > 0">
    <my-card
        v-for="character in characters.results"
        :info="character"
        :key="character.id"
    >
    </my-card>
  </section>
  <div v-else>
    empty list
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import MyCard from "@/components/Card";

export default {
  name: "CardList",
  components: {MyCard},
  methods: {
    ...mapActions({
      fetchAllCharacters: 'fetchAllCharacters'
    }),
  },
  computed: {
    ...mapState({
      characters: state => state.characters.data
    })
  },
}
</script>

<style scoped>
.cards {
  margin: 0 auto;
  max-width: 200px;
  display: grid;
  gap: 24px;
}
</style>
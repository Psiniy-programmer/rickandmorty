<template>
  <main v-if="!characters.loading">
    <card-list></card-list>
  </main>
  <div v-else>
    loading
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import CardList from "@/components/CardList";

export default {
  name: "Index",
  components: {CardList},
  methods: {
    ...mapActions({
      fetchAllCharacters: 'fetchAllCharacters'
    }),
  },
  computed: {
    ...mapState({
      characters: state => state.characters.loading
    })
  },
  mounted() {
    this.fetchAllCharacters();
  }
}
</script>

<style scoped>

</style>
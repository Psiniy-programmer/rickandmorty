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
      fetchAllCharacters: 'characters/fetchAllCharacters',
      fetchAllEpisode: 'episode/fetchAllEpisode'
    }),
  },
  computed: {
    ...mapState({
      characters: state => state.characters.loading
    })
  },
  mounted() {
    this.fetchAllCharacters();
    this.fetchAllEpisode();
  }
}
</script>

<style scoped>

</style>
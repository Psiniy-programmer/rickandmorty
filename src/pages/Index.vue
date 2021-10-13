<template>
  <form @submit.prevent class="search">
    <my-input v-model="searchVal" placeholder="Character name"></my-input>
    <my-select
        v-model="statusSelectVal"
        :options="statusOptions"
    >

    </my-select>
  </form>
  <main>
    <section v-if="!searchVal">
      <card-list :items="characters?.data?.results"></card-list>
    </section>
    <section v-else>
      <card-list :items="searchResult"></card-list>
    </section>
  </main>
<!--  <div v-else>-->
<!--    loading-->
<!--  </div>-->
</template>

<script>
import {mapActions, mapState} from 'vuex';
import CardList from "@/components/CardList";
import MyInput from "@/components/MyInput";
import MySelect from "@/components/MySelect";
import axios from "axios";
import api from "@/utils/api";

export default {
  name: "Index",
  components: {MySelect, MyInput, CardList},
  data: () => ({
    statusSelectVal: '',
    statusOptions: [
      {
        value: 'Alive',
        placeholder: 'Alive'
      },
      {
        value: 'Dead',
        placeholder: "Dead"
      },
      {
        value: 'Unknown',
        placeholder: 'Unknown'
      }
    ],
    searchVal: '',
    searchResult: []
  }),
  methods: {
    ...mapActions({
      fetchAllCharacters: 'characters/fetchAllCharacters',
      fetchAllEpisode: 'episode/fetchAllEpisode'
    }),
    async fetchWithQuery() {
      await axios.get(api.filterCharacters(this.searchVal, this.statusSelectVal))
        .then((res) => this.searchResult = res.data.results)
        .catch(() => this.searchResult = [])
    }
  },
  computed: {
    ...mapState({
      characters: state => state.characters
    })
  },
  watch: {
    searchVal() {
      this.fetchWithQuery();
    },
    statusSelectVal() {
      this.fetchWithQuery();
    }
  },
  mounted() {
    this.fetchAllCharacters();
    this.fetchAllEpisode();
  }
}
</script>

<style scoped>
.search {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 18px 6px 0 6px;
}
</style>
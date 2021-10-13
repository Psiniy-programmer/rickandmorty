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
      <div v-intersection="fetchMoreCharacters" class="observer"/>
    </section>
    <section v-else>
      <card-list :items="searchResult"></card-list>
    </section>
  </main>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import CardList from "@/components/CardList";
import MyInput from "@/components/MyInput";
import MySelect from "@/components/MySelect";
import axios from "axios";
import api from "@/utils/api";
import {CharacterModel} from "@/store/Models/CharactersModel";

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
      fetchMoreCharacters: 'characters/fetchMoreCharacters'
    }),
    async fetchWithQuery() {
      await axios.get(api.characters.all, {
        params: {
          status: this.statusSelectVal,
          name: this.searchVal
        }
      })
        .then((res) => this.searchResult = res.data.results.map((character) => new CharacterModel(character)))
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

.observer {
  height: 1px;
  background-color: inherit;
}
</style>
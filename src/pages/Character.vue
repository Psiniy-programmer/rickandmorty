<template>
  <main class="container">
    <section v-if="Object.keys(character).length > 0" class="character">
      <h1 class="character__header">
        Name: {{ character.name }}
      </h1>
      <p class="character__race">
        Race: {{ character.species }}
      </p>
      <img class="character__img" :src="character.image" alt="avatar">
      <p class="character__location">
        Location:
        <span class="location__underline"> {{ character.location.name }}</span>
      </p>
    </section>
  </main>
</template>

<script>

import axios from "axios";
import api from "@/utils/api";
import {CharacterModel} from "@/store/Models/CharactersModel";

export default {
  name: "Character",
  data: () => ({
    character: {}
  }),
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    async fetchCharacter() {
      await axios.get(api.characters.single(this.id))
          .then((res) => this.character = new CharacterModel(res.data))
    }
  },
  mounted() {
    this.fetchCharacter()
  }
}
</script>

<style scoped>

.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.character {
  border-radius: var(--border-radius);
  max-width: 280px;
  margin: auto;
  padding: 16px;
  background-color: var(--white-color);
  color: var(--bg-color);
  display: flex;
  flex-direction: column;
}

.character__header {
  margin: 0;
  text-align: center;
}

.character__race {
  text-align: center;
  font-size: 22px;
}

.character__img {
  margin: 16px -16px
}

.location__underline {
  text-decoration: underline var(--green-color);
}
</style>
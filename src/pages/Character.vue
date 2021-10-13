<template>
  <Container v-if="isLoaded">
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
  </Container>
</template>

<script>

import axios from "axios";
import api from "@/utils/api";
import {CharacterModel} from "@/store/Models/CharactersModel";
import Container from "@/components/Container";

export default {
  name: "Character",
  components: {Container},
  data: () => ({
    character: {}
  }),
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    isLoaded() {
      return Object.keys(this.character).length > 0;
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
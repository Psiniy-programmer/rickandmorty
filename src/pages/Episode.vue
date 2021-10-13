<template>
  <Container>
    <h1 class="episode__name">{{ episode.name }}</h1>
    <p class="episode__date">
      Air date:
      <span class="episode__date_underline">
         {{ episode.airDate }}
      </span>
    </p>
    <div class="characters" v-if="isLoaded">
      <round-image
          v-for="image in getCharacters"
          :key="image.id"
          :path="image.path"
          :link="image.link"
      >
      </round-image>
    </div>

  </Container>
</template>

<script>
import axios from "axios";
import api from "@/utils/api";
import {OneEpisodeModel} from "@/store/Models/EpisodeModel";
import Container from "@/components/Container";
import {mapState} from "vuex";
import RoundImage from "@/components/roundImage";
import paths from "@/router/paths";

export default {
  name: "Episode",
  components: {RoundImage, Container},
  data: () => ({
    episode: {},
  }),
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState({
      characters: state => state.characters
    }),
    isLoaded() {
      return !this.characters.loading && Object.keys(this.episode).length > 0
    },
    getCharacters() {
      const {results} = this.characters.data;
      const requiresIds = this.episode.characters.map((character) => Number(character.split('/').pop()));

      return results.filter((character) => requiresIds.includes(character.id)).map((item) => ({
        path: item.image,
        id: item.id,
        link: paths.character.link(item.id)
      }))
    }
  },
  methods: {
    async fetchEpisode() {
      await axios.get(api.episode.single(this.id))
          .then((res) => this.episode = new OneEpisodeModel(res.data))
          .catch(() => this.episode = {})
    }
  },
  mounted() {
    this.fetchEpisode();
  }
}
</script>

<style scoped>
.characters {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 8px;
}

.episode__name {
  text-align: center;
  margin: 0 0 10px 0;
}

.episode__date_underline {
  text-decoration: underline var(--green-color);
}
</style>
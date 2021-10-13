<template>
  <li @click="changeReversal" class="card">
    <img class="card__img" :src='info.image' alt="Image">
    <div class="card__text">
      <router-link :to="info.url" class="text__top_header">
        {{ info.name }}
      </router-link>
      <p class="text__top_add">
        Race: {{ info.species }}
      </p>
      <transition name="fade">
        <div v-if="showReversal" class="text__reversal">
          <router-link
              class="reversal__content"
              v-for="ep in episodeNames"
              :key="ep.id"
              :to="ep.url"
          >
              {{ ep.name }}
          </router-link>
        </div>
      </transition>
    </div>

  </li>
</template>

<script>
import axios from "axios";
import api from "@/utils/api";
import paths from "@/router/paths";

export default {
  name: "my-card",
  data: () => ({
    showReversal: false,
    episodeNames: []
  }),
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeReversal() {
      this.showReversal = !this.showReversal;
    },
    async fetchEpNames() {
      const epsId = this.info.episode.map((epUrl) => {
        const splitted = epUrl.split('/');

        return splitted[splitted.length - 1];
      }).join(',')

      await axios.get(api.characters.episode(epsId))
          .then((res) => {

            if (Array.isArray(res.data)) {
              this.episodeNames = res.data.map((ep) => ({
                url: paths.episode.link(ep.id),
                name: ep.name,
                id: ep.id
              }))
            } else {
              this.episodeNames = [
                {
                  url: paths.episode.link(res.data.id),
                  name: res.data.name,
                  id: res.data.id
                }
              ]
            }


          })
          .catch((err) => {
            console.log(err)
            this.episodeNames = []
          })
    }
  },
  mounted() {
    this.fetchEpNames();
  }
}
</script>

<style scoped>

a {
  text-decoration: none;
}

.card {
  background-color: var(--white-color);
  border-radius: 15px;
  height: 100%;
  width: 100%;
}

.card__img {
  border-radius: 15px 15px 0 0;
  width: 100%;
  height: 180px;
}

.text__top_header,
.text__top_add,
.card__text {
  margin: 0;
}

.card__text {
  padding: 0 8px;
}

.text__top_header {
  color: var(--bg-color);
  font-weight: 500;
  font-size: 18px;
  white-space: nowrap;
}

.text__top_add {
  font-weight: 400;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.55);
  padding-bottom: 10px;
}

.text__reversal {
  display: grid;
  border-top: var(--bg-color) 1px solid;
  padding: 4px 0;
  background-color: var(--white-color);
  border-radius: 0 0 15px 15px;
}

.reversal__content {
  color: var(--bg-color);
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  overflow: hidden;
  max-width: 200px;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
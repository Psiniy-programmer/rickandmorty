<template>
  <article @click="kek" class="card">
    <img class="card__img" :src='info.image' alt="Image">
    <div class="card__text">
      <p class="text__top_header">
        {{ info.name }}
      </p>
      <p class="text__top_add">
        Race: {{ info.species }}
      </p>
      <transition name="fade">
        <div v-if="showReversal" class="text__reversal">
          <p class="reversal__content"
             :key="ep.index"
             v-for="ep in info.episode">
            {{ep}}
          </p>
        </div>
      </transition>
    </div>

  </article>
</template>

<script>
import {CharacterModel} from "@/store/Models/CharactersModel";

export default {
  name: "my-card",
  data: () => ({
    showReversal: false
  }),
  props: {
    info: {
      type: CharacterModel,
      required: true
    }
  },
  methods: {
    kek() {
      this.showReversal = !this.showReversal;
    }
  }
}
</script>

<style scoped>
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
  font-weight: 500;
  font-size: 18px;
  white-space: nowrap;
}

.text__top_add {
  font-weight: 400;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.55)
}

.text__reversal {
  background-color: var(--white-color);
  border-radius: 0 0 15px 15px;
}

.reversal__content {
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
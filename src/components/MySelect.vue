<template>
  <select class="select" :value="modelValue" @change="changeOptions">
    <option class="select__option_disabled" disabled value="">Pick value</option>
    <option class="select__option_active"
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.placeholder }}
    </option>
  </select>
</template>

<script>
export default {
  name: "MySelect",
  props: {
    modelValue: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOptions(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }
}
</script>

<style scoped>
.select {
  padding: 6px;
  border: 1px solid var(--green-color);
  background-color: var(--bg-color);
  color: var(--white-color);
  outline: none;
}

.select__option_disabled {
  opacity: 0.5;
  background-color: var(--bg-color);
}

.select__option_active {
  background-color: var(--bg-color);
}
</style>
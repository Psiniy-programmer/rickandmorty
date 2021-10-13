<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" :placeholder="placeholder">
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number],
    placeholder: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
  .input {
    transition: border-color 0.5s linear;
    color: var(--white-color);
    padding: 6px;
    background-color: var(--bg-color);
    border-right: inherit;
    border-top: inherit;
    border-left: inherit;
    border-bottom: 2px solid var(--green-color);
  }

  .input:focus {
    outline: none;
    border-color: red;
    /*border-color: red;*/
  }
</style>
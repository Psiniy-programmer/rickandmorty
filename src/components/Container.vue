<template>
  <main class="container">
    <article class="inner">
      <slot></slot>
    </article>
  </main>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner {
  border-radius: var(--border-radius);
  max-width: 280px;
  margin: auto;
  padding: 16px;
  background-color: var(--white-color);
  color: var(--bg-color);
  display: flex;
  flex-direction: column;
}
</style>
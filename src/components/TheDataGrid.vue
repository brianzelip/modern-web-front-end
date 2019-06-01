<template>
  <ol class="list-reset container grid-container">
    <li
      class="grid-item"
      v-bind:key="index"
      v-for="(entry, index) in data"
    >
      <section class="flex flex-column">
        <h1>entry.title</h1>
        <figure>
          <img
            alt="entry.imageDescription"
            entry.imgUrl
            src
          >
          <caption>entry.imageCaption</caption>
        </figure>
        <p>entry.description</p>
      </section>
    </li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      data: 3
    };
  }
};
</script>


<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1rem;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid white;
  border-radius: 0.5rem;
  height: 68vh;
}
</style>

<template>
  <section class="container">
    <h2 class="white">Planets</h2>
    <ol class="list-reset grid-container">
      <li
        class="grid-item"
        v-bind:key="index"
        v-for="(entry, index) in data"
      >
        <section class="flex flex-column px2">
          <h1>entry.title</h1>
          <figure>
            <img
              alt="entry.imageDescription"
              entry.imgUrl
              src
            >
            <caption>entry.imageCaption</caption>
          </figure>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ut iure quisquam, exercitationem et dignissimos distinctio porro sint pariatur inventore, enim voluptate nobis expedita voluptatum culpa illum reiciendis error eum.</p>
        </section>
      </li>
    </ol>
    <hr>
    <hr>
    <hr>
    <pre class="white"><code>{{ swapiData }}</code></pre>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: 3
    };
  },
  props: ["swapiData"]
};
</script>


<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1rem;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid white;
  border-radius: 0.5rem;
  height: 68vh;
}
</style>

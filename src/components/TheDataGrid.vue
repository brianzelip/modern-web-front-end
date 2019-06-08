<template>
  <section class="container col-12">
    <h2 class="white">{{ resourceTitle }}</h2>
    <ol class="list-reset grid-container">
      <li
        class="grid-item"
        v-bind:key="index"
        v-for="(entry, index) in swapiData"
      >
        <ResourcesFilm :data="entry"></ResourcesFilm>
      </li>
    </ol>
  </section>
</template>

<script>
import ResourcesFilm from "./Resources/ResourcesFilm.vue";

export default {
  props: ["resourceTitle", "swapiData"],
  components: { ResourcesFilm },
  resources: {
    films: ["title", "opening_crawl", "director", "producer", "release_date"],
    people: ["name", "birth_year", "homeworld", "films", "species"],
    planets: ["name", "climate", "population", "residents", "films"],
    species: [
      "name",
      "classification",
      "average_lifespan",
      "language",
      "people",
      "films"
    ],
    starships: [
      "name",
      "model",
      "manufacturer",
      "cost_in_credits",
      "length",
      "passengers",
      "hyperdrive_rating",
      "starship_class",
      "films"
    ],
    vehicles: [
      "name",
      "model",
      "manufacturer",
      "cost_in_credits",
      "length",
      "passengers",
      "vehicle_class",
      "films"
    ]
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
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid white;
  border-radius: 0.5rem;
  height: 68vh;
}
</style>

<template>
  <section class="container col-12">
    <h2 class="white">{{ resourceTitle }}</h2>
    <ol class="list-reset grid-container">
      <li
        class="grid-item"
        v-bind:key="index"
        v-for="(entry, index) in swapiData"
      >
        <component
          :data="entry"
          :is="`Resources${resourceMap[`${resource}`]}`"
        ></component>
      </li>
    </ol>
  </section>
</template>

<script>
import ResourcesFilm from "./Resources/ResourcesFilm.vue";
import ResourcesPerson from "./Resources/ResourcesPerson.vue";
import ResourcesPlanet from "./Resources/ResourcesPlanet.vue";
import ResourcesSpecies from "./Resources/ResourcesSpecies.vue";
import ResourcesStarship from "./Resources/ResourcesStarship.vue";
import ResourcesVehicle from "./Resources/ResourcesVehicle.vue";

export default {
  props: ["resource", "swapiData"],
  components: {
    ResourcesFilm,
    ResourcesPerson,
    ResourcesPlanet,
    ResourcesSpecies,
    ResourcesStarship,
    ResourcesVehicle
  },
  data() {
    return {
      resourceMap: {
        films: "Film",
        people: "Person",
        planets: "Planet",
        species: "Species",
        starships: "Starship",
        vehicles: "Vehicle"
      }
    };
  },
  computed: {
    resourceTitle() {
      return `${this.resource[0].toUpperCase()}${this.resource.slice(1)}`;
    }
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
}
</style>

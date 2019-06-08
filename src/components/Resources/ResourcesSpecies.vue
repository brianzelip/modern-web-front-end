<template lang="pug">
  article.flex.flex-column.px2
    h1 {{ data.name }}
    p
      span.bold Climate: 
      | {{ data.climate }}    
    p
      span.bold Population: 
      | {{ data.population }}
    p
      span.bold Residents: 
      ul
        li(v-for="(resident, index) in data.residents" :key="index") {{ resident }}
    p
      span.bold Films: 
      ul
        li(v-for="(film, index) in data.films" :key="index") {{ film }}  
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      species: [
        "name",
        "classification",
        "average_lifespan",
        "language",
        "people",
        "films"
      ]
    };
  }
};
</script>

<style scoped>
</style>

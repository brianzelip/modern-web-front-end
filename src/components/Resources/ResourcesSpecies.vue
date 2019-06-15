<template lang="pug">
  article.flex.flex-column.px2
    h1 {{ data.name }}
    p
      span.bold Classification: 
      | {{ data.classification }}    
    p
      span.bold Average lifespan: 
      | {{ data.average_lifespan }}
    p
      span.bold Language: 
      | {{ data.language }}
    p
      span.bold People: 
      ul
        li(v-for="(person, index) in data.people" :key="index") {{ person }}
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

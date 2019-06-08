<template lang="pug">
  article.flex.flex-column.px2
    h1 {{ data.name }}
    p
      span.bold Species: 
      | {{ data.species }}    
    p
      span.bold Birth planet: 
      | {{ data.homeworld }}
    p
      span.bold Birth year: 
      | {{ data.birth_year }}
    p
      span.bold Films: 
      ul
        li(v-for="(film, index) in data.films" :key="index") {{ film }}
    //- figure
    //-   img(alt="entry.imageDescription" entry.imgUrl)
    //-   caption entry.imageCaption
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      people: ["name", "birth_year", "homeworld", "films", "species"]
    };
  }
};
</script>

<style scoped>
</style>

<template lang="pug">
  article.flex.flex-column.px2
    h1 {{ data.title }}
    p
      span.bold Released: 
      | {{ releaseYear }}    
    p
      span.bold Director: 
      | {{ data.director }}
    p
      span.bold Producer: 
      | {{ data.producer }}
    //- figure
    //-   img(alt="entry.imageDescription" entry.imgUrl)
    //-   caption entry.imageCaption
    h2.h4 Opening crawl text:
    p {{ data.opening_crawl }}
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      attrs: ["title", "opening_crawl", "director", "producer", "release_date"]
    };
  },
  computed: {
    releaseYear() {
      return this.data.release_date.slice(0, 4);
    }
  }
};
</script>

<style scoped>
</style>

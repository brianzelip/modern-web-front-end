<template lang="pug">
  article.flex.flex-column.px2
    h1 {{ data.title }}
    figure
      img(alt="entry.imageDescription" entry.imgUrl)
      caption entry.imageCaption
    p Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ut iure quisquam, exercitationem et dignissimos distinctio porro sint pariatur inventore, enim voluptate nobis expedita voluptatum culpa illum reiciendis error eum.
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      attrs: ["title", "opening_crawl", "director", "producer", "release_date"]
    };
  }
};
</script>

<style scoped>
</style>

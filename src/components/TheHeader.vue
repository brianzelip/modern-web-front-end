<template lang="pug">
  header.flex.justify-space-between.container.py2
    h1.h3.m0.py2.yellow {{ siteName }}
    ul.mb0.list-reset.flex.flex-center.yellow
      li
        button.btn.regular films
      li
        button.btn.regular people
      li
        button.btn.regular planets
      li
        button.btn.regular species
      li
        button.btn.regular starships
      li
        button.btn.regular vehicles
</template>

<script>
export default {
  data() {
    return {
      siteName: "Star Wars data catalog"
    };
  }
};
</script>


<style scoped>
li {
  margin-right: 0.5rem;
}

li:last-child {
  margin-right: 0;
}

.btn {
  padding: 1rem;
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
  cursor: default;
}
</style>


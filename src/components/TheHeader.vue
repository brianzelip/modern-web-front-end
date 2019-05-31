<template lang="pug">
  header.flex.justify-space-between.container
    h1.h3.m0.py2.yellow Star Wars data
    ul.mb0.list-reset.flex.flex-center.yellow
      li people
      li films
      li starships
      li vehicles
      li species
      li planets
</template>

<style scoped>
ul li {
  margin-right: 0.5rem;
  padding: 1rem;
}
ul li:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>


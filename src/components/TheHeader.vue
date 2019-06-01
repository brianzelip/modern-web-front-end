<template lang="pug">
  header.flex.justify-space-between.container.py2
    h1.h3.m0.py2.yellow {{ siteName }}
    ul.mb0.list-reset.flex.flex-center.yellow
      li(v-for="(resource, index) in swapiResources" :key="index")
        button.btn.regular(@click="updateSelectedResource($event)") {{ resource }}
</template>

<script>
export default {
  data() {
    return {
      siteName: "Star Wars data catalog",
      swapiResources: [
        "films",
        "people",
        "planets",
        "species",
        "starships",
        "vehicles"
      ],
      selectedResource: "",
      activeTarget: null
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

.active,
.active:hover {
  background-color: white;
}
</style>


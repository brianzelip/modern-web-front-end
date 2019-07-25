<template lang="pug">
  header.flex.justify-space-between.container.col-12.py2
    a(href="/").yellow
      h1.h3.m0.py2 {{ siteName }}
    fieldset#resource-selectors.m0.p0.border-none
      legend {{ legend }}
      ul.list-reset.mb0.flex.flex-center.yellow
        li(v-for="(resource, index) in swapiResources" :key="index")
          input(
            type="radio"
            :id="`radio-${resource}`"
            name="resource" :value="resource"
            v-model="selectedResource")
          label.btn.regular(
            :for="`radio-${resource}`"
            @click="updateSelectedResource") {{ resource}}
</template>

<script>
export default {
  data() {
    return {
      siteName: "Star Wars data catalog",
      legend: "Star Wars data categories",
      swapiResources: [
        // "films",
        // "people",
        // "planets",
        // "species",
        // "starships",
        // "vehicles"
      ],
      selectedResource: "",
      activeTarget: null
    };
  },
  methods: {
    updateSelectedResource(e) {
      // remove .active from old `this.activeTarget` if it exists
      if (this.activeTarget) {
        this.activeTarget.classList.remove("active");
      }

      // add .active to the clicked element
      e.target.classList.add("active");

      // set new `this.activeTarget` to the clicked element
      this.$set(this, "activeTarget", e.target);

      // set `this.selectedResource` to the clicked element's content
      this.$set(this, "selectedResource", e.target.textContent);

      // tell App.vue the selected resource has changed
      this.$emit("resource-update", this.selectedResource);
    }
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

legend,
input {
  position: absolute;
  opacity: 0;
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

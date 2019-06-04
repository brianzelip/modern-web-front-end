<template lang="pug">
  div#app.vh100
    TheHeader(v-on:resource-update="getData")
    TheLoadingSpinner.flex-grow
    TheDataGrid(class="flex-grow" :resourceTitle="resourceTitle" :swapiData="swapiPayload.results")
    TheFooter.pb2
</template>

<script>
import axios from "axios";

import TheHeader from "./TheHeader.vue";
import TheLoadingSpinner from "./TheLoadingSpinner.vue";
import TheDataGrid from "./TheDataGrid.vue";
import TheFooter from "./TheFooter.vue";

export default {
  data() {
    return {
      url: "https://modern-web-back-end.glitch.me/swapi/",
      resourceTitle: "",
      swapiPayload: {}
    };
  },
  components: {
    TheHeader,
    TheLoadingSpinner,
    TheDataGrid,
    TheFooter
  },
  methods: {
    getData(resource) {
      const title = `${resource[0].toUpperCase()}${resource.slice(1)}`;
      this.$set(this, "resourceTitle", title);

      axios
        .get(`${this.url}${resource}`)
        .then(response => {
          this.$set(this, "swapiPayload", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}
</style>

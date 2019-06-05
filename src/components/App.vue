<template lang="pug">
  div#app.vh100
    TheHeader(v-on:resource-update="getData")
    TheLoadingSpinner.flex-grow.align-self-center.flex.flex-column.justify-content-center(v-if="showSpinner")
    TheDataGrid(class="flex-grow" :resourceTitle="resourceTitle" :swapiData="swapiPayload.results" v-if="showDataGrid")
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
      swapiPayload: {},
      showSpinner: false,
      showDataGrid: false
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

      this.$set(this, "showDataGrid", false);
      this.$set(this, "showSpinner", true);
      axios
        .get(`${this.url}${resource}`)
        .then(response => {
          this.$set(this, "showSpinner", false);
          this.$set(this, "showDataGrid", true);
          this.$set(this, "resourceTitle", title);
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

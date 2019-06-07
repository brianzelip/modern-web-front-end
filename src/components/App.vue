<template lang="pug">
  div#app.vh100
    TheHeader(v-on:resource-update="getData")

    TheUserInstructions.flex-grow.flex.justify-content-center.align-items-center(v-if="showInstructions")

    //- TheStarWarsCrawl.flex-grow.container(v-if="showInstructions")

    TheLoadingSpinner.flex-grow.flex.flex-column.justify-content-center.align-items-center(v-if="showSpinner")

    TheDataGrid(:resourceTitle="resourceTitle" :swapiData="swapiPayload.results" v-if="showDataGrid")

    TheFooter.flex.justify-content-center.align-items-end.pb2
</template>

<script>
import axios from "axios";

import TheHeader from "./TheHeader.vue";
import TheStarWarsCrawl from "./TheStarWarsCrawl.vue";
import TheUserInstructions from "./TheUserInstructions.vue";
import TheLoadingSpinner from "./TheLoadingSpinner.vue";
import TheDataGrid from "./TheDataGrid.vue";
import TheFooter from "./TheFooter.vue";

export default {
  data() {
    return {
      url: "https://modern-web-back-end.glitch.me/swapi/",
      resourceTitle: "",
      swapiPayload: {},
      showInstructions: true,
      showSpinner: false,
      showDataGrid: false
    };
  },
  components: {
    TheHeader,
    TheStarWarsCrawl,
    TheUserInstructions,
    TheLoadingSpinner,
    TheDataGrid,
    TheFooter
  },
  methods: {
    getData(resource) {
      const title = `${resource[0].toUpperCase()}${resource.slice(1)}`;

      this.$set(this, "showInstructions", false);
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

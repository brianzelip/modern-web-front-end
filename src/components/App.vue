<template lang="pug">
  div
    TheHeader(v-on:resource-update="getData")
    TheDataGrid(:resourceTitle="resourceTitle" :swapiData="swapiPayload.results")
</template>

<script>
import axios from "axios";

import TheHeader from "./TheHeader.vue";
import TheDataGrid from "./TheDataGrid.vue";

export default {
  data() {
    return {
      url: "http://localhost:2600/swapi/",
      resourceTitle: "",
      swapiPayload: {}
    };
  },
  components: {
    TheHeader,
    TheDataGrid
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

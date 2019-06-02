<template lang="pug">
  div
    TheHeader(v-on:resource-update="getData")
    TheDataGrid
</template>

<script>
import axios from "axios";

import TheHeader from "./TheHeader.vue";
import TheDataGrid from "./TheDataGrid.vue";

export default {
  data() {
    return {
      url: "http://localhost:2600/swapi/",
      swapiPayload: {}
    };
  },
  components: {
    TheHeader,
    TheDataGrid
  },
  methods: {
    getData(resource) {
      axios
        .get(`${this.url}${resource}`)
        .then(response => {
          this.$set(this.swapiPayload, "data", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

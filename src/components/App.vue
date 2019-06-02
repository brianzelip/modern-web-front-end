<template lang="pug">
  div
    TheHeader(v-on:resource-update="getData")
    TheDataGrid
</template>

<script>
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
    getData(payload) {
      console.log(
        "custom event communication is wired up!",
        `${this.url}${payload}`
      );
    }
  }
};
</script>

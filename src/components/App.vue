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
      url: "hello"
    };
  },
  components: {
    TheHeader,
    TheDataGrid
  },
  methods: {
    getData(payload) {
      console.log("custom event communication is wired up!", payload);
    }
  }
};
</script>

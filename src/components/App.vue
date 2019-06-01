<template lang="pug">
  div
    TheHeader
    h2.container.white Planets
    TheDataGrid
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheDataGrid from "./TheDataGrid.vue";

export default {
  components: {
    TheHeader,
    TheDataGrid
  }
};
</script>

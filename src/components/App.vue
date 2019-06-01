<template lang="pug">
  div
    TheHeader
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

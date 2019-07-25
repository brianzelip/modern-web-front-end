<template lang="pug">
  div#app.vh100
    
    TheHeader

    TheFooter

</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";

export default {
  components: {TheHeader, TheFooter}
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}
</style>

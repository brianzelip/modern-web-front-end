<template lang="pug">

  div#app.vh100
    
    TheHeader

    TheFooter.flex.justify-content-center.align-items-end.pb2

</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";

export default {
  components: {}
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}
</style>

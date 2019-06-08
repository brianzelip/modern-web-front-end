<template lang="pug">
  article.flex.flex-column.px2
    h1 {{ data.name }}
    p
      span.bold Model: 
      | {{ data.model }}    
    p
      span.bold Manufacturer: 
      | {{ data.manufacturer }}
    p
      span.bold Vehicle class: 
      | {{ data.vehicle_class }}
    p
      span.bold Cost in credits: 
      | {{ data.cost_in_credits }}
    p
      span.bold Length: 
      | {{ data.length }}
    p
      span.bold Passengers: 
      | {{ data.passengers }}
    p
      span.bold Films: 
      ul
        li(v-for="(film, index) in data.films" :key="index") {{ film }}
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      vehicles: [
        "name",
        "model",
        "manufacturer",
        "cost_in_credits",
        "length",
        "passengers",
        "vehicle_class",
        "films"
      ]
    };
  }
};
</script>

<style scoped>
</style>

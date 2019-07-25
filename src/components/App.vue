<template>
  <main>
  
    <p>{{ message }}</p>
    <input v-model="message">
    
    <!-- <hr>
    <p>Reversed message: {{ reversedMessage }}</p> -->
  
  </main>
</template>

<script>

export default {
  data() {
    return {
      message: 'Hello world!'
    };
  }
  // ,
  // computed: {
  //   reversedMessage: function () {
  //     return this.message.split('').reverse().join('')
  //   }
  // }
};
</script>

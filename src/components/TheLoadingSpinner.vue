<template lang="pug">
  section
      div.loader
      p.yellow Fetching data
</template>

<style>
/* via https://www.w3schools.com/howto/howto_css_loader.asp */
.loader {
  border: 10px solid rgba(255, 255, 255, 0.4); /* Light grey */
  border-top: 10px solid #cb8e14;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<template lang="pug">
  footer.flex-grow.flex.justify-content-center.align-items-end.pb2
    a.white.yellow-hover(href="https://wp.towson.edu/tcal/") {{ confHashTag }}
    |
    span.block.yellow &nbsp; | &nbsp;
    |
    a.white.yellow-hover(v-bind:href="sourceURL") source code
</template>

<script>
export default {
  data() {
    return {
      confHashTag: '#tcal2019',
      sourceURL: 'https://github.com/USERNAME/modern-web-front-end'
    }
  }
}
</script>


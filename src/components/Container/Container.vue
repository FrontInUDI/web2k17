<template>
  <div class="udi-container">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'UDIContainer',
    props: {
      headlight: Boolean
    }
  }
</script>

<style lang="scss">
  .udi-container {
    height: 50vh;
    padding: 10vh 20vw;
  }
</style>


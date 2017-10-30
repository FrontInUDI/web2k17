<template>
  <p
    class="udi-p">
    {{ text }} <slot/>
  </p>
</template>

<script>
  export default {
    name: 'UDIP',
    props: {
      text: [String, Number]
    }
  }
</script>

<style lang="scss">
  .udi-p {
    font-size: 1.2em;
    font-weight: 200;
    text-align: justify;
  }
</style>


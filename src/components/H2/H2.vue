<template>
  <h1
    class="udi-h2"
    v-bind="{ id }">
    {{ text }}
  </h1>
</template>

<script>
  export default {
    name: 'UDIH2',
    props: {
      id: [String, Number],
      text: [String, Number]
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/functions.scss';
  .udi-h2 {
    color: frontinudi-default-color();
    font-size: 3em;
  }
</style>


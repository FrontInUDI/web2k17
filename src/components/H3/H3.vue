<template>
  <h1
    class="udi-h3"
    v-bind="{ id }">
    {{ text }}
  </h1>
</template>

<script>
  export default {
    name: 'UDIH3',
    props: {
      id: [String, Number],
      text: [String, Number]
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/functions.scss';

  .udi-h3 {
    color: frontinudi-default-color();
    font-size: 2em;
  }

  @media screen and (max-width: 500px) {
    .udi-h3 {
      font-size: 1.2em;
    }
  }
</style>


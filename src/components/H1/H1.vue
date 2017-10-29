<template>
  <h1
    class="udi-h1"
    v-bind="{ id }">
    {{ text }}
  </h1>
</template>

<script>
  export default {
    name: 'UDIH1',
    props: {
      id: [String, Number],
      text: [String, Number]
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/functions.scss';

  .udi-h1 {
    color: frontinudi-default-color();
    font-size: 4em;
    font-weight: 400;
    margin-bottom: 0.2em;
  }

  @media screen and (max-width: 500px) {
    .udi-h1 {
      font-size: 2em;
    }
  }
</style>


<template>
  <p
    :class="classes"
    :style="{ 'background-color': text && highlight && highlightColor }">
    {{ text }} <slot/>
  </p>
</template>

<script>
  export default {
    name: 'UDIP',
    props: {
      text: [String, Number],
      highlight: Boolean,
      highlightColor: {
        type: String,
        default: 'rgb(2, 202, 190)'
      }
    },
    computed: {
      classes () {
        return {
          'udi-p': true,
          'highlight': this.highlight
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/functions.scss';

  .udi-p {
    font-size: 1.2em;
    font-weight: 200;
    text-align: center;

    &.highlight {
      display: inline-block;
      padding: 8px 16px;
      margin-top: 1vh;
      font-weight: 400;
      color: frontinudi-default-color('background');
    }
  }

  @media screen and (max-width: 500px) {
    .udi-p {
      font-size: 1em;
    }
  }
</style>


<template>
  <div
    class="udi-container"
    :class="classes">
    <div class="udi-container-header">
      <slot name="header"/>
    </div>
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'UDIContainer',
    props: {
      headlight: Boolean
    },
    computed: {
      classes () {
        return {
          headlight: this.headlight
        }
      }
    }
  }
</script>

<style lang="scss">
  .udi-container {
    height: 40vh;
    padding: 10vh 5vw;
    position: relative;

    &.headlight {
      height: 30vh;
      padding: 10vh 0vw;

      .udi-container-header {
        // padding: 10vh 25vw;
        text-align: center;
      }
    }
  }
</style>

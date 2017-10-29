<template>
  <div
    class="udi-container"
    :class="classes">
    <div class="udi-container-header">
      <slot name="header"/>
    </div>
    <slot/>
    <div class="udi-container-footer">
      <slot name="footer"/>
    </div>
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
        text-align: center;
      }
    }
  }

  .udi-container-header,
  .udi-container-footer {
    position: relative;
  }
</style>

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
  @import '../../assets/scss/variables.scss';
  .udi-container {
    height: 60vh;
    padding: 10vh $frontinudi-default-lr-padding;
    position: relative;

    &.headlight {
      .udi-container-header {
        text-align: center;
        padding: 0 30vw;
      }
    }
  }

  @media screen and (max-width: 1412px) {
    .udi-container.headlight .udi-container-header {
      padding: 0 25vw;
    }
  }

  @media screen and (max-width: 1040px) {
    .udi-container.headlight .udi-container-header {
      padding: 0 20vw;
    }
  }

  @media screen and (max-width: 824px) {
    .udi-container.headlight .udi-container-header {
      padding: 0 15vw;
    }
  }

  @media screen and (max-width: 682px) {
    .udi-container.headlight .udi-container-header {
      padding: 0 10vw;
    }
  }

  @media screen and (max-width: 582px) {
    .udi-container.headlight .udi-container-header {
      padding: 0 5vw;
    }
  }

  .udi-container-header,
  .udi-container-footer {
    position: relative;
  }
</style>

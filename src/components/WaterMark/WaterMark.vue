<template>
  <div
    class="udi-water-mark"
    :class="classes">
    <img
      class="udi-water-mark-image"
      src="../../assets/img/flask.svg"
      v-bind="{
        alt
      }">
  </div>
</template>

<script>
  export default {
    name: 'UDIWaterMark',
    props: {
      src: String,
      alt: [String, Number],
      right: Boolean,
      left: Boolean
    },
    computed: {
      classes () {
        return {
          left: this.left && !this.right,
          right: this.right && !this.left
        }
      }
    }
  }
</script>

<style lang="scss">
  .udi-water-mark {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    pointer-events: none;
    opacity: .15;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .udi-water-mark-image {
      height: 80%;
    }

    // &.left {
    //   left: 0;
    // }

    // &.right {
    //   right: 0;
    // }
  }
</style>

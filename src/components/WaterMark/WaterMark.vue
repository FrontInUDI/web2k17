<template>
  <div
    class="udi-water-mark"
    :class="classes">
    <img
      class="udi-water-mark-image"
      :style="{ height: imgHeight || '80%' }"
      v-bind="{
        alt,
        src
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
      left: Boolean,
      imgHeight: String
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
    align-items: center;

    &.left {
      .udi-water-mark-image {
        justify-content: flex-start;
      }
    }

    &.right {
      .udi-water-mark-image {
        justify-content: flex-end;
      }
    }

    .udi-water-mark-image {
      height: 80%;
    }
  }
</style>

<template>
  <div
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
    name: 'UDIWatermark',
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
          'udi-water-mark': true,
          left: this.left,
          right: !this.left
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
      justify-content: flex-start;
    }

    &.right {
      justify-content: flex-end;
    }
  }
</style>

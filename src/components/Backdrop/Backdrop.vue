<template>
  <div
    class="udi-backdrop"
    @click="$emit('close')"
    @keyup.esc="$emit('close')">
  </div>
</template>

<script>
  export default {
    name: 'UDIBackdrop',
    props: {
      img: String
    },
    computed: {
    }
  }
</script>

<style lang="scss">
  .udi-backdrop {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    z-index: 10;
    pointer-events: none;
    background-color: rgba(0,0,0,.54);
    opacity: 0;
    transition: all .5s cubic-bezier(.35,0,.25,1);
    transition-property: opacity;
    will-change: opacity;
  }
</style>


<template>
  <component
    class="udi-button"
    :class="classes"
    :is="component"
    v-bind="{
      href,
      target
    }">
    <slot/>
  </component>
</template>

<script>
  export default {
    name: 'UDIButton',
    props: {
      active: Boolean,
      href: String,
      large: Boolean,
      link: Boolean,
      small: Boolean,
      target: String
    },
    computed: {
      classes () {
        return {
          small: this.small,
          large: this.large,
          'udi-button': this.component === 'button',
          'udi-link': this.component === 'link'
        }
      },
      component () {
        return this.link
          ? 'a'
          : 'button'
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/variables.scss';

  .udi-button {
    background-color: rgba(3, 179, 228, 1);
    border: 1px solid rgba(255, 255, 255, .36);
    border-radius: 3px;
    box-shadow: $frontinudi-shadow;
    color: rgba(255, 255, 255, 1);
    padding: 8px;

    &.small {
      padding: 5px 16px;
    }

    &.large {
      padding: 10px 16px;
    }
  }
</style>

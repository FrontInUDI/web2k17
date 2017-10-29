<template>
  <component
    :class="classes"
    :is="component"
    @click="$emit('click', $event)"
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
          'udi-button': !this.isLink,
          'udi-link': this.isLink
        }
      },
      isLink () {
        return this.link
      },
      component () {
        return this.isLink
          ? 'a'
          : 'button'
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/variables.scss';
  @import '../../assets/scss/functions.scss';

  .udi-button {
    background-color: frontinudi-default-color();
    border: 1px solid rgba(255, 255, 255, .36);
    border-radius: 3px;
    box-shadow: $frontinudi-shadow;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    padding: 8px;
    outline: none;

    &.small {
      padding: 5px 16px;
    }

    &.large {
      padding: 10px 16px;
    }
  }

  .udi-link {
    color: rgba(3, 179, 228, 1);
    cursor: pointer;
    font-weight: 200;
    text-decoration: none;
  }
</style>

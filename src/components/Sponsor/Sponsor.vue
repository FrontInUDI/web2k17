<template>
  <div
    class="udi-sponsor"
    :class="classes">
    <udi-button
      v-bind="{ href }"
      link>
      <img
        :src="img"
        :alt="description"/>
    </udi-button>
  </div>
</template>

<script>
  import UdiButton from '@/Button'

  export default {
    name: 'UDISponsor',
    props: {
      img: [String, Object],
      description: String,
      href: String,
      large: Boolean,
      regular: Boolean,
      small: Boolean
    },
    computed: {
      classes () {
        return {
          large: this.large,
          regular: !this.large && !this.small,
          small: this.small
        }
      }
    },
    components: {
      UdiButton
    }
  }
</script>

<style lang="scss">
  .udi-sponsor {
    &.large img {
      height: 120px;
    }

    &.regular img {
      height: 100px;
    }

    &.small img {
      height: 80px;
    }
  }
</style>

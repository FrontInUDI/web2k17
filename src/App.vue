<template>
  <div id="app">
    <udi-toolbar/>
    <udi-welcome-container/>
  </div>
</template>

<script>
  import UdiButton from '@/Button'
  import UdiWelcomeContainer from '@/WelcomeContainer'
  import UdiToolbar from '@/Toolbar'

  export default {
    name: 'app',
    components: {
      UdiButton,
      UdiWelcomeContainer,
      UdiToolbar
    }
  }
</script>

<style lang="scss" src="./assets/scss/reset.scss"></style>

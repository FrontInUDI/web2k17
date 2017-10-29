<template>
  <div id="app">
    <udi-toolbar/>
    <udi-welcome-container/>
    <udi-learn-share-container/>
    <udi-front-talk-container/>
  </div>
</template>

<script>
  import UdiButton from '@/Button'
  import UdiWelcomeContainer from '@/WelcomeContainer'
  import UdiFrontTalkContainer from '@/FrontTalkContainer'
  import UdiLearnShareContainer from '@/LearnShareContainer'
  import UdiToolbar from '@/Toolbar'

  export default {
    name: 'app',
    data () {
      return {
        talkCards: this.$udiData.talkCards
      }
    },
    components: {
      UdiButton,
      UdiFrontTalkContainer,
      UdiLearnShareContainer,
      UdiWelcomeContainer,
      UdiToolbar
    }
  }
</script>

<style lang="scss" src="./assets/scss/main.scss"></style>

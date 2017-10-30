<template>
  <div id="app">
    <udi-toolbar/>
    <udi-welcome-container/>
    <udi-learn-share-container/>
    <udi-who-we-are/>
    <udi-front-talk-container/>
    <udi-contact-container/>
  </div>
</template>

<script>
  import UdiButton from '@/Button'
  import UdiContactContainer from '@/ContactContainer'
  import UdiWelcomeContainer from '@/WelcomeContainer'
  import UdiFrontTalkContainer from '@/FrontTalkContainer'
  import UdiLearnShareContainer from '@/LearnShareContainer'
  import UdiToolbar from '@/Toolbar'
  import UdiWhoWeAre from '@/WhoWeAre'

  export default {
    name: 'app',
    data () {
      return {
        talkCards: this.$udiData.talkCards
      }
    },
    components: {
      UdiButton,
      UdiContactContainer,
      UdiFrontTalkContainer,
      UdiLearnShareContainer,
      UdiWelcomeContainer,
      UdiToolbar,
      UdiWhoWeAre
    }
  }
</script>

<style lang="scss" src="./assets/scss/main.scss"></style>

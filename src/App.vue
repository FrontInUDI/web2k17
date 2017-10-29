<template>
  <div id="app">
    <udi-toolbar/>
    <udi-welcome-container/>
    <udi-talk-card
      v-for="(talk, index) in talkCards"
      :key="index"
      :title="talk.title"
      :text="talk.text"
      :author="talk.author"/>
  </div>
</template>

<script>
  import UdiButton from '@/Button'
  import UdiWelcomeContainer from '@/WelcomeContainer'
  import UdiTalkCard from '@/TalkCard'
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
      UdiWelcomeContainer,
      UdiTalkCard,
      UdiToolbar
    }
  }
</script>

<style lang="scss" src="./assets/scss/reset.scss"></style>

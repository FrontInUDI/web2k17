<template>
  <udi-container
    class="udi-front-talk-container">
    <div
      slot="header">
      <udi-h1
        :id="$udiData.frontTalkContainer.h1.id"
        :text="$udiData.frontTalkContainer.h1.text"/>
      <udi-p
        :text="$udiData.frontTalkContainer.p.text"/>
      <udi-watermark
        :src="micSVG"
        left
        imgHeight="120%"
        alt="Watermark mic"/>
    </div>

    <div
      class="udi-front-talk-body">
      <udi-talk-card
        v-for="(talk, index) in $udiData.talkCards"
        :key="index"
        :title="talk.title"
        :color="talk.color"
        :text="talk.text"
        :author="talk.author"/>
    </div>
  </udi-container>
</template>

<script>
  import UdiContainer from '@/Container'
  import UdiH1 from '@/H1'
  import UdiP from '@/P'
  import UdiTalkCard from '@/TalkCard'
  import UdiWatermark from '@/Watermark'
  import micSVG from 'ASSETS/img/mic.svg'

  export default {
    name: 'UDIFrontTalkContainer',
    data () {
      return {
        micSVG
      }
    },
    components: {
      UdiContainer,
      UdiH1,
      UdiP,
      UdiTalkCard,
      UdiWatermark
    }
  }
</script>

<style lang="scss">
  .udi-front-talk-container {
    height: auto;
  }

  .udi-front-talk-body {
    display: grid;
    grid-template: auto / 1fr 1fr 1fr;
    grid-gap: 16px;
    justify-items: center;
    padding: 10vh 0;

    .udi-talk-card-footer span {
      height: 18px;
    }
  }

  @media screen and (max-width: 870px) {
    .udi-front-talk-body {
      grid-template: auto / 1fr 1fr;
    }
  }

  @media screen and (max-width: 575px) {
    .udi-front-talk-body {
      grid-template: auto / 1fr;
    }
  }
</style>


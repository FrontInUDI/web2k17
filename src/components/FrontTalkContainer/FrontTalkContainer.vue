<template>
  <udi-container
    headlight
    class="udi-front-talk-container">
    <div
      slot="header">
      <udi-h1
        :id="$udiData.frontTalkContainer.h1.id"
        :text="$udiData.frontTalkContainer.h1.text"/>

      <udi-p
        :id="$udiData.frontTalkContainer.p0.id"
        :text="$udiData.frontTalkContainer.p0.text"/>

      <udi-button>
        {{ $udiData.frontTalkContainer.p.text }}
      </udi-button>

      <udi-watermark
        :src="micSVG"
        center
        imgHeight="120%"
        alt="Watermark mic"/>
    </div>

    <div
      class="udi-front-talk-body">
      <udi-talk-card
        v-for="(talk, index) in $udiData.talkCards"
        :key="index"
        :picture="talk.picture"
        :title="talk.title"
        :color="talk.color"
        :text="talk.text"
        :author="talk.author"/>
    </div>
  </udi-container>
</template>

<script>
  import UdiButton from '@/Button'
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
      UdiButton,
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

    &.headlight {
      .udi-container-header {
        padding: 10vh 25vw;
      }
    }

    .udi-button {
      font-size: 1em;
    }

    .udi-p,
    .udi-h1 {
      margin-bottom: 16px;
      text-align: center;
    }
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
    .udi-front-talk-container.headlight .udi-container-header {
      padding: 10vh 15vw;
    }

    .udi-front-talk-body {
      grid-template: auto / 1fr 1fr;
    }
  }

  @media screen and (max-width: 575px) {
    .udi-front-talk-container.headlight .udi-container-header {
      padding: 10vh 5vw;
    }

    .udi-front-talk-body {
      grid-template: auto / 1fr;
    }
  }
</style>


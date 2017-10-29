<template>
  <udi-container
    class="udi-contact-container">
    <udi-h2
      :id="$udiData.contactContainer.h1.id"
      :text="$udiData.contactContainer.h1.text"/>

    <udi-h3
      :text="$udiData.contactContainer.h2.text"/>

    <udi-button
      :href="`mailto:${$udiData.contactContainer.h2.text}`"
      link>
      {{ $udiData.contactContainer.email.text }}
    </udi-button>

    <udi-p
      :text="$udiData.contactContainer.span.text"/>

    <div
      class="udi-contact-social">
      <udi-button
        v-for="(contact, index) in $udiData.contactLinks"
        :key="index"
        :small="contact.small"
        :href="contact.href"
        :link="contact.link">
        <img
          :src="icons[index]"
          :alt="contact.alt">
      </udi-button>
    </div>
    <udi-watermark
      :src="chatSVG"
      right
      alt="Watermark mic"/>
  </udi-container>
</template>

<script>
  import UdiButton from '@/Button'
  import UdiContainer from '@/Container'
  import UdiH1 from '@/H1'
  import UdiH2 from '@/H2'
  import UdiH3 from '@/H3'
  import UdiP from '@/P'
  import UdiTalkCard from '@/TalkCard'
  import UdiWatermark from '@/Watermark'
  import chatSVG from 'ASSETS/img/chat.svg'
  import facebookSVG from '../../assets/img/facebook.svg'
  import twitterSVG from '../../assets/img/twitter.svg'
  import instagramSVG from '../../assets/img/instagram.svg'
  import slackSVG from '../../assets/img/slack.svg'

  export default {
    name: 'UDIContactContainer',
    data () {
      return {
        chatSVG,
        icons: [
          facebookSVG,
          twitterSVG,
          instagramSVG,
          slackSVG
        ]
      }
    },
    components: {
      UdiButton,
      UdiContainer,
      UdiH1,
      UdiH2,
      UdiH3,
      UdiP,
      UdiTalkCard,
      UdiWatermark
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/functions.scss';

  .udi-contact-container {
    background-image: frontinudi-default-gradient();

    .udi-h2 {
      width: 60%;
    }

    &.udi-container {
      height: auto;
    }

    .udi-link,
    .udi-h2,
    .udi-h3,
    .udi-p {
      color: frontinudi-default-color('background')
    }

    .udi-h2,
    .udi-h3 {
      margin-top: 5vh;
    }

    .udi-p {
      margin-top: 3vh;
    }

    .udi-h3,
    .udi-p {
      margin-bottom: 1vh;
    }
  }

  .udi-contact-social {
    .udi-link {
      img {
        width: 50px;
        margin: 1vw 3vw 1vw 0;
      }
    }
  }

</style>


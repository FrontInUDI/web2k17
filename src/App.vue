<template>
  <div id="app">
    <UdiAnnouncement/>
    <UdiMiner/>
  </div>
</template>

<script>
  import UdiAnnouncement from '@/Announcement'
  import UdiMiner from '@/Miner'

  export default {
    name: 'app',
    data () {
      return {
        talkCards: this.$udiData.talkCards
      }
    },
    components: {
      UdiAnnouncement,
      UdiMiner
    }
  }
</script>

<style lang="scss">
  @font-face {
      font-family: 'montserrat';
      src: url('./assets/font/montserrat-extralight-webfont.woff2') format('woff2');
      font-weight: 100;
      font-style: normal;
  }

  @font-face {
      font-family: 'montserrat';
      src: url('./assets/font/montserrat-thin-webfont.woff2') format('woff2');
      font-weight: 200;
      font-style: normal;
  }

  @font-face {
      font-family: 'montserrat';
      src: url('./assets/font/montserrat-medium-webfont.woff2') format('woff2');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'montserrat';
      src: url('./assets/font/montserrat-regular-webfont.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'montserrat';
      src: url('./assets/font/montserrat-semibold-webfont.woff2') format('woff2');
      font-weight: 600;
      font-style: normal;
  }

  @font-face {
      font-family: 'montserrat';
      src: url('./assets/font/montserrat-bold-webfont.woff2') format('woff2');
      font-weight: 800;
      font-style: normal;
  }

  .slide-fade-enter-active {
    transition: all 1s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>

<style lang="scss" src="./assets/scss/main.scss"></style>

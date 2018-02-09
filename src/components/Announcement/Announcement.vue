<template>
  <udi-container
    class="announcement-container">

    <div
      slot="header">
      <udi-h1
        :id="$udiData.announcement.title.id"
        :text="$udiData.announcement.title.text"/>

      <udi-h3
        :id="$udiData.announcement.subtitle.id"
        :text="$udiData.announcement.subtitle.text"/>
    </div>

    <udi-watermark
      :src="codeSVG"
      right
      alt="Code"/>
  </udi-container>
</template>

<script>
import UdiContainer from '@/Container'
import UdiH1 from '@/H1'
import UdiH3 from '@/H3'
import UdiWatermark from '@/Watermark'
import codeSVG from 'ASSETS/img/code.svg'

export default {
  data () {
    return {
      codeSVG,
      fadeInPosition: 0,
      visible: true
    }
  },
  components: {
    UdiContainer,
    UdiH1,
    UdiH3,
    UdiWatermark
  },
  methods: {
    handleScroll (e) {
      this.visible = !!(window.scrollY >= this.fadeInPosition)
    },
    calculateFadeInPosition (boundingClientRect) {
      this.fadeInPosition = boundingClientRect.y - (boundingClientRect.height * 2)
    }
  },
  mounted () {
    // this.calculateFadeInPosition(document.querySelector('.author--item').getBoundingClientRect())
    // window.addEventListener('scroll', this.handleScroll)
  }
}
</script>


<style lang="scss">
  @import '../../assets/scss/functions.scss';
  @import '../../assets/scss/variables.scss';

  .udi-container.announcement-container {
    background-image: frontinudi-default-gradient();
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    z-index: 10;
    min-height: 80vh;
    height: 90vh;
    overflow: hidden;
    padding: 0vh $frontinudi-default-lr-padding;

    .udi-h1,
    .udi-h3,
    .udi-p {
      color: #fff;
    }

    .udi-h1 {
      margin-bottom: 16px;
    }

    .udi-h3 {
      font-weight: 200;
      text-align: center;
    }

    .udi-water-mark {
      z-index: 0;
      opacity: .10;
      transform: scale(1) rotate(10deg) translate(0%, 0) skew(0, 0deg);
      display: flex;
      justify-content: center;

      img {
        height: auto !important;
        width: 90%;
      }
    }
  }

  .announcement-author-row {
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 1200px) {
    .announcement-author-row {
      grid-template: 1fr 1fr / 1fr 1fr;
    }
  }

  @media screen and (max-width: 580px) {
    .announcement-author-row {
      grid-template: 1fr 1fr 1fr 1fr / 1fr;
    }
  }
</style>

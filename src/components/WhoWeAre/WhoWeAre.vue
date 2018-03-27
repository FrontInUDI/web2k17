<template>
  <udi-container
    class="whoweare-container">

    <div
      slot="header">
      <udi-h1
        :id="$udiData.whoWeAreContainer.h1.id"
        :text="$udiData.whoWeAreContainer.h1.text"/>
    </div>

    <div
      class="whoweare-author-row">
      <udi-author
        v-for="(organization, index) in $udiData.organization"
        :picture="organization.picture"
        :name="organization.name"
        :profession="organization.profession"
        :key="index"/>
    </div>

    <udi-watermark
      :src="googlesSVG"
      right
      alt="Googles"/>
  </udi-container>
</template>

<script>
import UdiAuthor from '@/Author'
import UdiContainer from '@/Container'
import UdiH1 from '@/H1'
import UdiWatermark from '@/Watermark'
import googlesSVG from 'ASSETS/img/googles.svg'

export default {
  data () {
    return {
      googlesSVG,
      fadeInPosition: 0,
      visible: true
    }
  },
  components: {
    UdiAuthor,
    UdiContainer,
    UdiH1,
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

  .whoweare-container {
    background-image: frontinudi-default-gradient();
    display: flex;
    flex-direction: column;
    padding: 30px;
    position: relative;
    align-items: center;
    justify-content: center;
    z-index: 10;
    min-height: 80vh;
    height: auto;
    overflow: hidden;
    padding: 10vh $frontinudi-default-lr-padding;

    .udi-h1,
    .udi-p {
      color: #fff;
    }

    .udi-h1 {
      margin-bottom: 16px;
    }

    .udi-water-mark {
      z-index: 0;
      transform: scale(1.2) rotate(45deg) translate(-5%, 0) skew(0, 0deg);
    }
  }

  .whoweare-author-row {
    display: flex;
    flex-wrap: wrap;
    // display: grid;
    // grid-template: 1fr 1fr / 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  // @media screen and (max-width: 1200px) {
  //   .whoweare-author-row {
  //     grid-template: 1fr 1fr / 1fr 1fr;
  //   }
  // }

  // @media screen and (max-width: 580px) {
  //   .whoweare-author-row {
  //     grid-template: 1fr 1fr 1fr 1fr / 1fr;
  //   }
  // }
</style>

<template>
  <udi-container
    class="udi-learn-share-container">
    <div slot="header">
      <udi-h1
        :id="$udiData.learnShareContainer.h1.id"
        :text="$udiData.learnShareContainer.h1.text"/>
      <udi-p
        :text="$udiData.learnShareContainer.p.text"/>
      </p>
    </div>

    <udi-water-mark
      :src="flaskSVG"
      alt="Watermark flask"/>
  </udi-container>
</template>

<script>
  import UdiContainer from '@/Container'
  import UdiH1 from '@/H1'
  import UdiH2 from '@/H2'
  import UdiP from '@/P'
  import UdiWaterMark from '@/WaterMark'
  import flaskSVG from 'ASSETS/img/flask.svg'

  export default {
    name: 'UdiLearnShareContainer',
    data () {
      return {
        flaskSVG
      }
    },
    components: {
      UdiContainer,
      UdiH1,
      UdiH2,
      UdiP,
      UdiWaterMark
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/functions.scss';

  .udi-learn-share-container {
    align-items: center;
    background-color: frontinudi-default-color('background');
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    height: 80vh;

    .udi-h1,
    .udi-h2 {
      color: frontinudi-default-color('primary');
    }

    .udi-h1 {
      font-weight: 600;
      text-align: left;
      width: 50%;
      min-width: 220px;
    }
  }
</style>


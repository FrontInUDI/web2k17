<template>
  <udi-container
    class="udi-learn-share-container"
    headlight>
    <div slot="header">
      <udi-h3
        :id="$udiData.learnShareContainer.h1.id"
        :text="$udiData.learnShareContainer.h1.text"/>
      <udi-p
        :text="$udiData.learnShareContainer.p.text"/>
      </p>
    </div>

    <udi-watermark
      :src="flaskSVG"
      center
      alt="Watermark flask"/>
  </udi-container>
</template>

<script>
  import UdiContainer from '@/Container'
  import UdiH1 from '@/H1'
  import UdiH2 from '@/H2'
  import UdiH3 from '@/H3'
  import UdiP from '@/P'
  import UdiWatermark from '@/Watermark'
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
      UdiH3,
      UdiP,
      UdiWatermark
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
    .udi-h2,
    .udi-h3 {
      color: frontinudi-default-color('primary');
    }

    .udi-p {
      font-weight: 200;
      text-align: center;
    }

    .udi-h3 {
      font-weight: 600;
      margin-bottom: 16px;
      // text-align: left;
      // width: 50%;
      // min-width: 220px;
    }
  }
</style>


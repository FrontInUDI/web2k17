<template>
  <div
    class="author">
    <p
      :id="$udiData.whoWeAreContainer.h1.id"
      class="author--title">
      {{ $udiData.whoWeAreContainer.h1.text }}
    </p>

    <p
      class="author--subtitle">
      {{ $udiData.whoWeAreContainer.p.text }}
    </p>

    <div
      class="author--row">
      <div
        v-for="(author, index) in $udiData.organization"
        :key="index"
        class="author--item">
        <div
          class="author--background">
          <img
            class="author--image"
            :src="author.picture"
            alt="Autor" />
        </div>

        <p
          class="author--name">
          {{author.name}}
        </p>

        <p
          class="author--profession">
          {{author.profession}}
        </p>
      </div>
    </div>

    <udi-watermark
      :src="googlesSVG"
      right
      alt="Googles"/>
  </div>
</template>

<script>
import UdiWatermark from '@/Watermark'
import googlesSVG from 'ASSETS/img/googles.svg'

export default {
  data () {
    return {
      googlesSVG
    }
  },
  components: {
    UdiWatermark
  }
}
</script>


<style lang="scss">
@import '../../assets/scss/functions.scss';

  .author {
    height: auto;
    background-image: frontinudi-default-gradient();
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 30px;
    position: relative;
    align-items: center;
    justify-content: center;
    z-index: 10;

    .udi-watermark {
      z-index: 0;
    }
  }
  .author--title {
    font-weight: 400;
    font-size: 3.5em;
    text-align: center;
  }
  .author--subtitle {
    font-size: 1.2em;
    font-weight: 200;
    text-align: center;
    margin: 20px;
  }
  .author--background {
    overflow: hidden;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin: 10px auto;
  }
  .author--image {
    height: 200px;
    width: 200px;
  }
  .author--name {
    font-weight: 400;
    color: #fff;
    text-align: center;
  }
  .author--profession {
    text-align: center;
    font-weight: 200;
    margin-top: 10px;
  }
  .author--row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .author--item {
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: center;
    z-index: 15;
  }
</style>

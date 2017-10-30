<template>
  <div class="author">
    <p class="author--title">Quem somos</p>
    <p class="author--subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div class="author--row">
      <div class="author--item" v-for="author in $udiData.organization">
        <div class="author--background">
          <img class="author--image" :src="author.picture" alt="Autor" />
        </div>
        <p class="author--name">{{author.name}}</p>
        <p class="author--profession">{{author.profession}}</p>
      </div>
    </div>
    <udi-watermark
      :src="googlesSVG"
      right
      alt="Googles"/>
  </div>
</template>

<script>
import googlesSVG from 'ASSETS/img/googles.svg'
import UdiWatermark from '@/Watermark'
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
    align-items: center;
    justify-content: center;
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
  }
  .author--item {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: 20px;
    align-items: center;
  }
</style>
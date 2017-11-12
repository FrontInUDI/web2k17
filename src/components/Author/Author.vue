<template>
  <!-- <transition
    name="slide-fade"> -->
    <div
      v-show="visible"
      class="udi-author">
      <div
        class="udi-author-background">
        <img
          class="udi-author-image"
          :src="picture"
          alt="Autor" />
      </div>

      <udi-p
        class="udi-author-name"
        :text="name"/>

      <udi-p
        class="udi-author-profession"
        :text="profession"/>
    </div>
  <!-- </transition> -->
</template>

<script>
  import UdiP from '@/P'

  export default {
    name: 'UDIAuthor',
    props: {
      picture: String,
      name: String,
      profession: String
    },
    data () {
      return {
        fadeInPosition: 0,
        visible: true
      }
    },
    components: {
      UdiP
    },
    methods: {
      handleScroll (e) {
        console.log('window.scrollY', window.scrollY)
        console.log('this.fadeInPosition', this.fadeInPosition)
        console.log('window.scrollY >= this.fadeInPosition', window.scrollY >= this.fadeInPosition)
        this.visible = !!(window.scrollY >= this.fadeInPosition)
      },
      calculateFadeInPosition (boundingClientRect) {
        this.fadeInPosition = boundingClientRect.y - (boundingClientRect.height * 2)
      }
    },
    mounted () {
      // this.calculateFadeInPosition(document.querySelector('.udi-author').getBoundingClientRect())
      // window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="scss">
  .udi-author {
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: center;
    z-index: 15;
  }

  .udi-author-background {
    overflow: hidden;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin: 10px auto;
  }

  .udi-author-image {
    height: 200px;
    width: 200px;
  }

  .udi-author-name {
    font-weight: 400;
    color: #fff;
    text-align: center;
  }

  .udi-author-profession {
    text-align: center;
    font-weight: 200;
    height: 45px;
    margin-top: 10px;
  }
</style>


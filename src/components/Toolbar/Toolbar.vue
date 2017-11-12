<template>
  <div
    :class="classes">
    <div
      class="udi-toolbar">
      <udi-logo
        :img="logoSVG"/>

      <div
        class="udi-toolbar-links">
        <UdiButton
          v-for="(link, index) in toolbarLinks"
          :key="index"
          v-bind="{
            link: true,
            href: link.hasOwnProperty('href') ? link.href : '',
            small: link.small,
            class: !link.link ? 'udi-button' : ''
          }">
          {{ link.text }}
        </UdiButton>
      </div>

      <div class="udi-toolbar-links-mobile">
        <udi-button
          class="udi"
          link
          @click.native="$refs.sidenav.open()">
          <img
            :src="menuSVG"
            alt="App menu"/>
        </udi-button>
      </div>

      <udi-sidenav
        ref="sidenav">
        <udi-button
          slot="header"
          link
          @click="$refs.sidenav.close()">
          <img
            :src="closeSVG"
            alt="Close menu"/>
        </udi-button>

        <div
          v-for="(link, index) in toolbarLinks"
          :key="index">
          <UdiButton
            @click="$refs.sidenav.close()"
            v-bind="{
              link: link.link,
              href: link.hasOwnProperty('href') ? link.href : '',
              small: link.small
            }">
            {{ link.text }}
          </UdiButton>
        </div>
      </udi-sidenav>
    </div>
  </div>
</template>

<script>
  import UdiButton from '@/Button'
  import UdiLogo from '@/Logo'
  import UdiSidenav from '@/Sidenav'
  import logoSVG from '../../assets/img/logo-blue.svg'
  import closeSVG from '../../assets/img/close.svg'
  import menuSVG from '../../assets/img/menu.svg'

  export default {
    name: 'UDIToolbar',
    props: {
      fixed: Boolean
    },
    data () {
      return {
        toolbarLinks: this.$udiData.toolbarLinks,
        logoSVG,
        closeSVG,
        menuSVG
      }
    },
    computed: {
      classes () {
        return {
          'udi-toolbar-wrapper': this.fixed
        }
      }
    },
    components: {
      UdiButton,
      UdiLogo,
      UdiSidenav
    },
    watch: {
      fixed () {
        this.marginTopBrotherElement()
      }
    },
    methods: {
      marginTopBrotherElement () {
        if (this.fixed) {
          this.$parent.$children[1].$el.style.marginTop = `${4 + this.$el.offsetHeight}px`
        }
      }
    },
    mounted () {
      this.marginTopBrotherElement()
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/variables.scss';

  .udi-toolbar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }

  .udi-toolbar {
    display: grid;
    grid-template: auto / 2fr 4fr;
    grid-gap: 0 16px;
    // padding: 16px 24px;
    padding: 16px $frontinudi-default-lr-padding;
    background: #fff;
    box-shadow: 0 -7px 20px rgba(0, 0, 0, 1);

    .udi-link {
      img {
        height: 20px;
        width: 20px;
      }
    }
  }

  .udi-toolbar-links-mobile {
    display: none;
  }

  .udi-toolbar-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 890px) {
    .udi-toolbar-links {
      display: none;
    }

    .udi-toolbar-links-mobile {
      display: block;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
</style>



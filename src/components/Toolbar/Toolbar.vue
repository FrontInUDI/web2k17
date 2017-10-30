<template>
  <div
    class="udi-toolbar">
    <UdiLogo/>
    <div
      class="udi-toolbar-links">
      <UdiButton
        v-for="(link, index) in toolbarLinks"
        :key="index"
        v-bind="{
          link: link.link,
          href: link.hasOwnProperty('href') ? link.href : '',
          small: link.small
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
</template>

<script>
  import UdiButton from '@/Button'
  import UdiLogo from '@/Logo'
  import UdiSidenav from '@/Sidenav'
  import closeSVG from '../../assets/img/close.svg'
  import menuSVG from '../../assets/img/menu.svg'

  export default {
    name: 'UDIToolbar',
    data () {
      return {
        toolbarLinks: this.$udiData.toolbarLinks,
        closeSVG,
        menuSVG
      }
    },
    components: {
      UdiButton,
      UdiLogo,
      UdiSidenav
    }
  }
</script>

<style lang="scss">
  .udi-toolbar {
    display: grid;
    grid-template: auto / 2fr 4fr;
    grid-gap: 16px;
    padding: 16px 24px;

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

  @media screen and (max-width: 690px) {
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



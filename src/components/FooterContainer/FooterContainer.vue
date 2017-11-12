<template>
  <udi-container
    class="udi-footer-container">
    <udi-logo
      :img="whiteLogoSVG"/>

    <udi-p
      :text="$udiData.footerContainer.p.text">
      <img
        width="15px"
        :src="rockSVG"
        alt="With love.">
    </udi-p>
  </udi-container>
</template>

<script>
  import UdiContainer from '@/Container'
  import UdiLogo from '@/Logo'
  import UdiP from '@/P'
  import whiteLogoSVG from '../../assets/img/logo-white.svg'
  import rockSVG from '../../assets/img/rock.svg'

  export default {
    name: 'UdiLearnShareContainer',
    data () {
      return {
        whiteLogoSVG,
        rockSVG
      }
    },
    components: {
      UdiContainer,
      UdiLogo,
      UdiP
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/functions.scss';

  .udi-footer-container {
    align-items: center;
    background-color: frontinudi-default-color('primary');
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 8px 5vw;

    .udi-container-header,
    .udi-container-footer {
      display: none;
    }

    .udi-p {
      display: flex;
      justify-content: center;
      align-items: center;
      color: frontinudi-default-color('background');

      img {
        margin-left: 8px;
      }
    }

    .udi-h1 {
      font-weight: 600;
      text-align: left;
      width: 50%;
      min-width: 220px;
    }
  }

  @media screen and (max-width: 570px) {
    .udi-footer-container {
      justify-content: center;
      align-items: center;
    }
  }
</style>


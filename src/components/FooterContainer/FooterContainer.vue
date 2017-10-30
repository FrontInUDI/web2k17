<template>
  <udi-container
    class="udi-footer-container">
    <udi-logo
      :img="logoSVG"/>

    <udi-p
      :text="$udiData.footerContainer.p.text">
      <img
        width="14px"
        :src="likeSVG"
        alt="With love.">
    </udi-p>
  </udi-container>
</template>

<script>
  import UdiContainer from '@/Container'
  import UdiLogo from '@/Logo'
  import UdiP from '@/P'
  import logoSVG from '../../assets/img/logo-blue.svg'
  import likeSVG from '../../assets/img/like.svg'

  export default {
    name: 'UdiLearnShareContainer',
    data () {
      return {
        logoSVG,
        likeSVG
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
    background-color: frontinudi-default-color('background');
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 8px 16px;

    .udi-container-header,
    .udi-container-footer {
      display: none;
    }

    .udi-p {
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


<template>
  <udi-container
    class="udi-welcome-container"
    headlight>
    <div
      class="udi-welcome-container-content"
      slot="header">
      <udi-h2
        :id="$udiData.welcomeContainer.id"
        :text="$udiData.welcomeContainer.h1.text"/>
      <udi-h3
        :text="$udiData.welcomeContainer.h2.text"/>
      <img
        width="20px"
        src="../../assets/img/rock.svg"
        alt="FrontInUDI rocks!" />
    </div>
    <udi-backdrop/>

  </udi-container>
</template>

<script>
  import UdiBackdrop from '@/Backdrop'
  import UdiContainer from '@/Container'
  import UdiH2 from '@/H2'
  import UdiH3 from '@/H3'

  export default {
    name: 'UdiWelcomeContainer',
    components: {
      UdiBackdrop,
      UdiContainer,
      UdiH2,
      UdiH3
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/functions.scss';

  // .udi-container.udi-welcome-container {
  //   height: 50vh;
  // }

  .udi-welcome-container {
    align-items: center;
    background-image: url('../../../static/img/background.png?size=1440');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;

    .udi-h2,
    .udi-h3 {
      color: frontinudi-default-color('background');
    }

    .udi-h2 {
      font-weight: 400;
      margin-bottom: 16px;
    }

    .udi-h3 {
      font-weight: 200;
    }

    .udi-container-header {
      z-index: 20;
    }

    .udi-backdrop {
      height: auto;
      background-image: frontinudi-default-gradient();
      opacity: .8;
    }
  }

  @media screen and (max-width: 1366px) {
    .udi-welcome-container {
      background-image: url('../../../static/img/background.png?size=1366');
    }
  }

  @media screen and (max-width: 1200px) {
    .udi-welcome-container {
      background-image: url('../../../static/img/background.png?size=1200');
    }
  }

  @media screen and (max-width: 1024px) {
    .udi-welcome-container {
      background-image: url('../../../static/img/background.png?size=1024');
    }
  }

  @media screen and (max-width: 920px) {
    .udi-welcome-container {
      background-image: url('../../../static/img/background.png?size=920');
    }
  }

  @media screen and (max-width: 600px) {
    .udi-welcome-container {
      background-image: url('../../../static/img/background.png?size=600');
    }
  }

  @media screen and (max-width: 420px) {
    .udi-welcome-container {
      background-image: url('../../../static/img/background.png?size=600');
    }
  }

</style>


<template>
  <udi-container
    class="udi-welcome-container"
    headlight>
    <div
      class="udi-welcome-container-content"
      slot="header">
      <udi-h1
        :id="$udiData.welcomeContainer.id"
        :text="$udiData.welcomeContainer.h1.text"/>
      <udi-h2
        :text="$udiData.welcomeContainer.h2.text"/>
      <img
        width="20px"
        src="../../assets/img/rock.svg"
        alt="FrontInUDI rocks!" />
    </div>
  </udi-container>
</template>

<script>
  import UdiContainer from '@/Container'
  import UdiH1 from '@/H1'
  import UdiH2 from '@/H2'

  export default {
    name: 'UdiWelcomeContainer',
    components: {
      UdiContainer,
      UdiH1,
      UdiH2
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/functions.scss';

  .udi-welcome-container {
    align-items: center;
    background-image: frontinudi-default-gradient();
    display: flex;
    justify-content: center;

    .udi-h1,
    .udi-h2 {
      color: frontinudi-default-color('background');
    }

    .udi-h1 {
      font-weight: 600;
    }

    .udi-h2 {
      font-weight: 200;
    }
  }

  .udi-welcome-container-content {
    padding: 0 15vw;
  }

  @media screen and (max-width: 750px) {
    .udi-welcome-container-content {
      padding: 0 10vw;
    }
  }

  @media screen and (max-width: 630px) {
    .udi-welcome-container-content {
      padding: 0 5vw;
    }
  }

  @media screen and (max-width: 550px) {
    .udi-welcome-container-content {
      padding: 0;
    }
  }
</style>


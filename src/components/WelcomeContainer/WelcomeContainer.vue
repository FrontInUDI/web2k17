<template>
  <udi-container
    class="udi-welcome-container"
    headlight>
    <div slot="header">
      <udi-h1
        :id="$udiData.welcomeContainer.id"
        :text="$udiData.welcomeContainer.h1.text"/>
      <udi-h2
        :text="$udiData.welcomeContainer.h2.text"/>
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
  .udi-welcome-container {
    align-items: center;
    background-image: linear-gradient(120deg, #03b3e4 0%, #02ccba 100%);
    display: flex;
    justify-content: center;

    .udi-h1,
    .udi-h2 {
      color: rgba(255, 255, 255, 1);
    }

    .udi-h1 {
      font-weight: 800;
    }

    .udi-h2 {
      font-weight: 200;
    }
  }
</style>


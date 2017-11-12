<template>
  <div>
    <img
      class="udi-logo"
      :src="img"
      alt="Logo"/>
  </div>
</template>

<script>
  export default {
    name: 'UDILogo',
    props: {
      img: String
    }
  }
</script>

<style lang="scss">
  .udi-logo {
    width: 200px;
  }

  @media screen and (max-width: 400px) {
    .udi-logo {
      width: 150px;
    }
  }
</style>


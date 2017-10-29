<template>
  <div>
    <img
      class="udi-logo"
      src="../../assets/img/logo-blue.svg"
      alt="Logo"/>
  </div>
</template>

<script>
  export default {
    name: 'UDILogo',
    props: {
      img: {
        type: String,
        default: ''
      }
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


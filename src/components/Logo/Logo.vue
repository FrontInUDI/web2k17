<template>
  <div>
    <img
      width="200"
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

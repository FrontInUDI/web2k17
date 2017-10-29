<template>
  <h1
    v-bind="{ id }">
    {{ text }}
  </h1>
</template>

<script>
  export default {
    name: 'UDIH1',
    props: {
      id: [String, Number],
      text: [String, Number]
    }
  }
</script>

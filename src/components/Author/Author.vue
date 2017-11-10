<template>
  <!-- <div -->
    <!-- class="udi-author-wrapper"> -->
    <!-- class="author--row"> -->
    <div
      class="udi-author">
      <!-- class="author--item"> -->
      <div
        class="author--background">
        <img
          class="author--image"
          :src="author.picture"
          alt="Autor" />
      </div>

      <p
        class="author--name">
        <!-- class="author--name"> -->
        {{author.name}}
      </p>

      <p
        class="author--profession">
        {{author.profession}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UDIAuthor'
  }
</script>

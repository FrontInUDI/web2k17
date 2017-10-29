<template>
  <div class="udi-talk-card">
    <div class="udi-talk-card-header">
      #{{ title }}
    </div>
    <div class="udi-talk-card-body">
      {{ text }}
    </div>
    <div class="udi-talk-card-footer">
      <udi-button
        :href="author.contact"
        target="_blank"
        link>
        <span v-text="author.name"></span>
      </udi-button>
    </div>
  </div>
</template>

<script>
  import UdiButton from '@/Button'

  export default {
    name: 'UDITalkCard',
    props: {
      title: String,
      text: String,
      author: Object
    },
    components: {
      UdiButton
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/variables.scss';
  $border-width: 3px;
  $width: 200px;

  .udi-talk-card {
    border-radius: $border-width;
    box-shadow: $frontinudi-shadow;
    height: 290px;
    width: $width;
  }

  .udi-talk-card-header,
  .udi-talk-card-body,
  .udi-talk-card-footer {
    align-items: flex-end;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    padding: 8px 16px;
  }

  .udi-talk-card-header {
    background-color: blue;
    border-radius: $border-width $border-width 0 0;
    height: 100px;
    width: $width;
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
  }

  .udi-talk-card-body,
  .udi-talk-card-footer span {
    color: rgba(#7e98ad, 1);
  }

  .udi-talk-card-body {
    font-weight: 200;
    height: 150px;
    width: $width;
  }

  .udi-talk-card-footer {
    height: 40px;
  }

  .udi-talk-card-footer span {
    display: inline-block;
    font-weight: 600;
    overflow:hidden !important;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>

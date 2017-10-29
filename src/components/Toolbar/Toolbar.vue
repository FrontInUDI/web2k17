<template>
  <div class="udi-toolbar">
    <UdiLogo/>
    <div class="udi-toolbar-links">
      <UdiButton
        v-for="(link, index) in toolbarLinks"
        :key="index"
        v-bind="{
          link: link.link,
          href: link.hasOwnProperty('href') ? link.href : '',
          small: link.small
        }">
        {{ link.text }}
      </UdiButton>
    </div>
  </div>
</template>

<script>
  import UdiButton from '@/Button'
  import UdiLogo from '@/Logo'

  export default {
    name: 'UDIToolbar',
    data () {
      return {
        toolbarLinks: [
          { text: 'Objetivo', link: true, href: '', small: false },
          { text: 'Quem somos', link: true, href: '', small: false },
          { text: 'Front-Talk', link: true, href: '', small: false },
          { text: 'Contato', link: true, href: '', small: false },
          { text: 'Inscreva-se', link: false, small: true }
        ]
      }
    },
    components: {
      UdiButton,
      UdiLogo
    }
  }
</script>

<style lang="scss">
  .udi-toolbar {
    display: grid;
    grid-template: auto / 2fr 4fr;
    grid-gap: 16px;
    padding: 16px 24px;
  }

  .udi-toolbar-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>



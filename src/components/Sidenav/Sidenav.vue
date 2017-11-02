<template>
  <div
    class="udi-sidenav-wrapper"
    :class="classes">

    <div
      class="udi-sidenav">
      <div class="udi-sidenav-header">
        <slot name="header"/>
      </div>
      <div class="udi-sidenav-content">
        <slot/>
      </div>
      <slot name="footer"/>
    </div>

    <udi-backdrop
      @close="close"/>
  </div>
</template>

<script>
  import UdiBackdrop from '@/Backdrop'
  export default {
    name: 'UDISidenav',
    props: {
      left: Boolean,
      right: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        opened: false
      }
    },
    computed: {
      classes () {
        return {
          opened: this.opened,
          left: this.left && !this.right,
          right: this.right && !this.left
        }
      }
    },
    components: {
      UdiBackdrop
    },
    methods: {
      close () {
        this.opened = false
        this.toggleBodyScroll(this.opened)
      },
      open () {
        this.opened = true
        this.toggleBodyScroll(this.opened)
      },
      toggle () {
        this.opened = !this.opened
        this.toggleBodyScroll(this.opened)
      },
      toggleBodyScroll (bool) {
        document.querySelector('body').style.overflowY = bool ? 'hidden' : 'scroll'
      }
    }
  }
</script>

<style lang="scss">
  .udi-sidenav {
    background: rgba(#FFF, 1);
    height: 100%;
    position: fixed;
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    transition-property: transform;
    top: 0;
    width: 280px;
    will-change: transform;
    z-index: 100;

    .udi-sidenav-header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 8px;
    }

    .udi-sidenav-content {
      padding: 8px;

      > * {
        display: block;
        padding: 16px 8px;
        border-bottom: 1px solid rgba(gray, .1);
      }

      .udi-link {
        font-weight: 300;
      }
    }
  }

  .udi-sidenav-wrapper.left {
    .udi-sidenav {
      left: 0;
      transform: translate3D(-100%, 0, 0);
    }
  }

  .udi-sidenav-wrapper.right {
    .udi-sidenav {
      right: 0;
      transform: translate3D(100%, 0, 0);
    }
  }

  .udi-sidenav-wrapper.opened {
    .udi-sidenav {
      transform: translate3D(0,0,0);
    }
    .udi-backdrop {
      opacity: 1;
      pointer-events: auto;
    }
  }
</style>

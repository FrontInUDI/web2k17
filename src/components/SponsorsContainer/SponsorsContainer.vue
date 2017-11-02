<template>
  <udi-container
    class="udi-sponsors-container">
    <udi-h1
      slot="header"
      :id="$udiData.sponsorsContainer.h1.id"
      :text="$udiData.sponsorsContainer.h1.text"/>
    <div class="udi-sponsors-content">
      <udi-sponsor
        v-for="(sponsor, index) in $udiData.sponsors"
        :large="sponsor.large"
        :small="sponsor.small"
        :key="index"
        :img="sponsor.picture"
        :description="sponsor.name"
        :href="sponsor.site"/>
    </div>
    <udi-watermark
      :src="favoritesSVG"
      left
      imgHeight="90%"
      alt="Watermark mic"/>
  </udi-container>
</template>

<script>
  import UdiContainer from '@/Container'
  import UdiH1 from '@/H1'
  import UdiSponsor from '@/Sponsor'
  import UdiWatermark from '@/Watermark'
  import favoritesSVG from 'ASSETS/img/favorites.svg'

  export default {
    name: 'UDISponsorsContainer',
    data () {
      return {
        favoritesSVG
      }
    },
    components: {
      UdiContainer,
      UdiH1,
      UdiSponsor,
      UdiWatermark
    }
  }
</script>

<style lang="scss">
  @import '../../assets/scss/functions.scss';

  .udi-sponsors-container {
    background-image: frontinudi-default-color('background');
    position: relative;
    height: auto;
  }

  .udi-sponsors-content {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    .udi-sponsor {
      margin: 16px;
    }
  }
</style>


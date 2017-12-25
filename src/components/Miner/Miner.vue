<template>
  <div
    class="udi-miner">
      <div
        class="udi-miner-helpus">
        <span>Ajude o FrontInUDI com a sua CPU.</span>
      </div>
      <div
        class="coinhive-miner"
        data-whitelabel="true"
        :data-key="$udiData.miner.token">
        <em>Carregando...</em>
      </div>
  </div>
</template>


<style lang="scss">
  .udi-miner {
    position: relative;
    z-index: 20;
    padding-top: 93px;
    .udi-miner-helpus {
      position: fixed;
      right: 0;
      bottom: 58px;
      height: 20px;
      width: 100vw;
      background: #3bbdb2;
      padding: 8px 4px;
      text-align: center;
      font-weight: 200;
      color: white;
    }
    .coinhive-miner {
      position: fixed;
      background: #3bbdb2;
      right: 0;
      bottom: 0;
      height: 60px;
      width: 100vw;
    }
  }
</style>



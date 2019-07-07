<template>
  <bm-marker
    :dragging="false"
    v-bind="$attrs"
    @click="infoWindowOpen"
  >
    <bm-info-window
      :show="show"
      @close="infoWindowClose"
      @open="infoWindowOpen"
    >
      <slot></slot>
    </bm-info-window>
  </bm-marker>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    infoWindowOpen() {
      this.show = true;
    },
    infoWindowClose() {
      this.show = false;
    }
  }
};
</script>

<style lang="less">
.BMap_Marker {
  img {
    &:not([src*='https://api.map.baidu.com']) {
      width: 100%;
      border-radius: 50%;
    }
  }
}
</style>

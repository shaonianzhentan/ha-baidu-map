<template>
  <div style="height:100vh;z-index:1000;position:fixed;top:0;left:0;width:100%;">
    <baidu-map
      @ready="ready"
      style="height:100vh;position:fixed;top:0;left:0;width:100%;"
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
    >
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      ></bm-map-type>
      <bm-control>
        <div style="padding:10px;margin-top:30px;">
          <mu-button @click="openBotttomSheet">选择监测设备</mu-button>
          <mu-bottom-sheet :open.sync="open">
            <mu-list>
              <mu-sub-header>选择监测设备</mu-sub-header>
              <mu-list-item
                button
                v-for="(item, index) in allList"
                :key="index"
                @click="selectDevice(item)"
              >
                <mu-list-item-action>
                  <mu-icon
                    value="grade"
                    color="orange"
                  ></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>{{item.title}}</mu-list-item-title>
              </mu-list-item>
            </mu-list>
          </mu-bottom-sheet>
        </div>
      </bm-control>
      <template v-for="(item, index) in zoneList">
        <bm-circle
          :center="item.location"
          :radius="100"
          stroke-color="orange"
          :stroke-opacity="0.5"
          :stroke-weight="2"
          :key="index"
        ></bm-circle>
        <my-overlay
          :position="item.location"
          animation="BMAP_ANIMATION_BOUNCE"
          :key="index"
        >
          {{item.title}}
        </my-overlay>
      </template>

      <template v-for="(item, index) in deviceList">
        <bm-circle
          :center="item.location"
          :radius="30"
          stroke-color="orange"
          :stroke-opacity="0.5"
          :stroke-weight="2"
          :key="index"
        ></bm-circle>
        <my-overlay
          :icon="{url: item.icon, size: {width: 50, height: 50}, opts: { imageSize: {width: 50, height: 50} }}"
          :position="item.location"
          animation="BMAP_ANIMATION_BOUNCE"
          :key="index"
        >
          {{item.title}}
        </my-overlay>
      </template>

    </baidu-map>
  </div>
</template>
<script>
import MyOverlay from "../components/MyOverlay.vue";
export default {
  components: {
    MyOverlay
  },
  data() {
    return {
      open: false,
      zoom: 18,
      zoneList: [],
      deviceList: [],
      allList: [],
      center: {
        lng: 121.848405,
        lat: 31.739856
      }
    };
  },
  methods: {
    ready(map) {
      //   window.hassTV.hass
      //     .then((obj: { zoneList: any, deviceList: any }) => {
      //       // 获取区域位置
      //       const zoneList: any = [];
      //       const gpsPoint: any = [];
      //       obj.zoneList.forEach((ele: any) => {
      //         const attr = ele.entity.attributes;
      //         zoneList.push({
      //           title: ele.title,
      //           location: {
      //             lng: attr.longitude,
      //             lat: attr.latitude
      //           }
      //         });
      //         gpsPoint.push(new window.BMap.Point(attr.longitude, attr.latitude));
      //         this.center = {
      //           lng: attr.longitude,
      //           lat: attr.latitude
      //         };
      //       });
      //       // 获取设备位置
      //       const deviceList: any = [];
      //       obj.deviceList.forEach((ele: any) => {
      //         const attr = ele.entity.attributes;
      //         deviceList.push({
      //           title: ele.title,
      //           location: {
      //             lng: attr.longitude,
      //             lat: attr.latitude
      //           },
      //           icon:
      //             attr.picture ||
      //             "https://www.home-assistant.io/images/favicon-192x192.png"
      //         });
      //         gpsPoint.push(new window.BMap.Point(attr.longitude, attr.latitude));
      //       });
      //       // 进行坐标地址转换
      //       const convert = new window.BMap.Convertor();
      //       convert.translate(gpsPoint, 0, 5, (res: any) => {
      //         if (res.status === 0) {
      //           res.points.forEach((point: any, index: number) => {
      //             // 如果大于区域设备，则跳到下一个
      //             if (index >= zoneList.length) {
      //               deviceList[index - zoneList.length].location = {
      //                 lng: point.lng,
      //                 lat: point.lat
      //               };
      //             } else {
      //               zoneList[index].location = {
      //                 lng: point.lng,
      //                 lat: point.lat
      //               };
      //               this.center = { lng: point.lng, lat: point.lat };
      //             }
      //           });
      //           this.zoneList = zoneList;
      //           this.deviceList = deviceList;
      //           // 合并全部设备
      //           this.allList = [...deviceList, ...zoneList];
      //           window.console.log(zoneList, deviceList);
      //         } else {
      //           this.$toast.error("坐标转换出现异常！");
      //         }
      //       });
      //     })
      //     .catch((ex: Error) => {
      //       this.$toast.error(ex.message);
      //     });
    },
    selectDevice(item) {
      //   this.center = { lng: 121.346405, lat: 31.131856 };
      //   this.open = false;
      //   const loading = this.$loading();
      //   setTimeout(() => {
      //     this.center = item.location;
      //     loading.close();
      //   }, 1000);
    }
  }
};
</script>
<style lang="less" scoped>
</style>
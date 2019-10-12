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
          <mu-button
            @click="open = true"
            small
          >更多功能</mu-button>
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
                    value="location_on"
                    color="blue"
                  ></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>{{item.title}}</mu-list-item-title>
              </mu-list-item>
            </mu-list>
            <mu-list>
              <mu-sub-header>设置</mu-sub-header>
              <mu-list-item
                button
                @click="gpsloggerClick"
              >
                <mu-list-item-action>
                  <mu-icon
                    value="settings"
                    color="green"
                  ></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>GPSLogger配置</mu-list-item-title>
              </mu-list-item>
              <mu-list-item
                button
                @click="logInfoClick"
              >
                <mu-list-item-action>
                  <mu-icon
                    value="settings"
                    color="green"
                  ></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>GPSLogger定位日志查看</mu-list-item-title>
              </mu-list-item>
            </mu-list>
          </mu-bottom-sheet>
        </div>
      </bm-control>
      <template v-for="(item, index) in zoneList">
        <bm-circle
          :center="item.location"
          :radius="100"
          stroke-color="#0f67b1"
          :stroke-opacity="0.5"
          :stroke-weight="2"
          :key="index"
        ></bm-circle>
        <my-overlay
          :icon="{url: item.icon, size: {width: 50, height: 50}, opts: { imageSize: {width: 50, height: 50} }}"
          :position="item.location"
          :key="'zone'+index"
        >
          <b>{{item.title}}</b>
          <br />
          <ul class="list-info">
            <li>
              经度：
              <span>{{item.location.lng}}</span>
            </li>
            <li>
              纬度：
              <span>{{item.location.lat}}</span>
            </li>
          </ul>
        </my-overlay>
      </template>

      <template v-for="(item, index) in deviceList">
        <bm-circle
          :center="item.location"
          :radius="30"
          stroke-color="blue"
          :stroke-opacity="0.5"
          :stroke-weight="2"
          :key="'device-round'+index"
        ></bm-circle>
        <my-overlay
          :icon="{url: item.icon, size: {width: 50, height: 50}, opts: { imageSize: {width: 50, height: 50} }}"
          :position="item.location"
          animation="BMAP_ANIMATION_BOUNCE"
          :key="'device'+index"
        >
          <b>{{item.title}}</b>
          <br />
          <ul class="list-info">
            <li>
              经度：
              <span>{{item.location.lng}}</span>
            </li>
            <li>
              纬度：
              <span>{{item.location.lat}}</span>
            </li>
            <li
              v-for="(r,r_index) in item.range"
              :key="r_index"
            >
              距离
              <b style="color:orange">{{r.zone}}</b>
              <span>{{r.mi}}米</span>
            </li>
          </ul>
        </my-overlay>
      </template>
      <!--定位按钮-->
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        @locationSuccess="locationSuccess"
        @locationError="locationError"
        :showAddressBar="true"
        :autoLocation="true"
      ></bm-geolocation>
    </baidu-map>
    <LogInfo ref="LogInfo" />
  </div>
</template>

<script>
import MyOverlay from "../components/MyOverlay.vue";
import LogInfo from "../components/LogInfo.vue";

export default {
  components: {
    MyOverlay,
    LogInfo
  },
  data() {
    return {
      open: false,
      zoom: 18,
      zoneList: [
        // {
        //   title: "家测试",
        //   location: {
        //     lng: 121.34607502288814,
        //     lat: 31.24192393278093
        //   },
        //   icon: './img/home.png',
        //   range: []
        // }
      ],
      deviceList: [
        // {
        //   title: "我测试",
        //   location: {
        //     lng: 121.34607502288814,
        //     lat: 31.23192393278093
        //   },
        //   icon: './img/my.png',
        //   range: []
        // }
      ],
      allList: [],
      center: {
        lng: 121.848405,
        lat: 31.739856
      },
      isStartLocation: false,
      isSendLocation: false
    };
  },
  created() {
    this.allList = [...this.deviceList, ...this.zoneList];
  },
  methods: {
    ready({ map, BMap }) {
      window.hassMap.hass
        .then(obj => {
          // 获取区域位置
          const zoneList = [];
          const gpsPoint = [];
          obj.zoneList.forEach(ele => {
            const attr = ele.entity.attributes;
            zoneList.push({
              title: ele.title,
              location: {
                lng: attr.longitude,
                lat: attr.latitude
              },
              icon: "./img/home.png"
            });
            gpsPoint.push(new window.BMap.Point(attr.longitude, attr.latitude));
            this.center = {
              lng: attr.longitude,
              lat: attr.latitude
            };
          });
          // 获取设备位置
          const deviceList = [];
          obj.deviceList.forEach(ele => {
            const attr = ele.entity.attributes;
            let picture = this.getTextImage(ele.title);
            deviceList.push({
              title: ele.title,
              location: {
                lng: attr.longitude,
                lat: attr.latitude
              },
              icon: attr.picture || picture,
              range: []
            });
            gpsPoint.push(new window.BMap.Point(attr.longitude, attr.latitude));
          });
          // 进行坐标地址转换
          const convert = new window.BMap.Convertor();
          convert.translate(gpsPoint, 0, 5, res => {
            if (res.status === 0) {
              res.points.forEach((point, index) => {
                // 如果大于区域设备，则跳到下一个
                if (index >= zoneList.length) {
                  deviceList[index - zoneList.length].location = {
                    lng: point.lng,
                    lat: point.lat
                  };
                } else {
                  zoneList[index].location = {
                    lng: point.lng,
                    lat: point.lat
                  };
                  this.center = { lng: point.lng, lat: point.lat };
                }
              });
              // 计算全部距离
              for (let d of deviceList) {
                for (let z of zoneList) {
                  const pointD = new window.BMap.Point(
                    d.location.lng,
                    d.location.lat
                  );
                  const pointZ = new window.BMap.Point(
                    z.location.lng,
                    z.location.lat
                  );
                  d.range.push({
                    device: d.title,
                    zone: z.title,
                    mi: map.getDistance(pointD, pointZ).toFixed(2)
                  });
                }
              }

              this.zoneList = zoneList;
              this.deviceList = deviceList;
              // 合并全部设备
              this.allList = [...deviceList, ...zoneList];
              // window.console.log(zoneList, deviceList);
              setInterval(() => {
                this.tick(map);
              }, 5000);
            } else {
              this.$toast.error("坐标转换出现异常！");
            }
          });
        })
        .catch(ex => {
          this.$toast.error(ex.message);
        });
    },
    //获取图片
    getTextImage(str) {
      if (!str)
        return "https://www.home-assistant.io/images/favicon-192x192.png";
      var canvas = document.createElement("canvas");
      canvas.width = 50;
      canvas.height = 50;
      var ctx = canvas.getContext("2d");
      ctx.rect(0, 0, 50, 50);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.save();
      ctx.font = "30px Georgia";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.strokeStyle = "#0000ff";
      ctx.strokeText(str[0], canvas.width / 2, canvas.width / 2);
      return canvas.toDataURL("image/png");
    },
    tick(map) {
      window.hassMap.hass.then(obj => {
        // 获取设备位置
        const deviceList = [];
        const gpsPoint = [];
        obj.deviceList.forEach(ele => {
          const attr = ele.entity.attributes;
          let picture = this.getTextImage(ele.title);
          deviceList.push({
            title: ele.title,
            location: {
              lng: attr.longitude,
              lat: attr.latitude
            },
            icon: attr.picture || picture,
            range: []
          });
          gpsPoint.push(new window.BMap.Point(attr.longitude, attr.latitude));
        });
        // 进行坐标地址转换
        const convert = new window.BMap.Convertor();
        convert.translate(gpsPoint, 0, 5, res => {
          if (res.status === 0) {
            res.points.forEach((point, index) => {
              deviceList[index].location = {
                lng: point.lng,
                lat: point.lat
              };
            });
            // 计算全部距离
            for (let d of deviceList) {
              for (let z of this.zoneList) {
                const pointD = new window.BMap.Point(
                  d.location.lng,
                  d.location.lat
                );
                const pointZ = new window.BMap.Point(
                  z.location.lng,
                  z.location.lat
                );
                d.range.push({
                  device: d.title,
                  zone: z.title,
                  mi: map.getDistance(pointD, pointZ).toFixed(2)
                });
              }
            }
            this.deviceList = deviceList;
            // 合并全部设备
            this.allList = [...deviceList, ...this.zoneList];
          } else {
            this.$toast.error("坐标转换出现异常！");
          }
        });
      });
    },
    selectDevice(item) {
      this.center = { lng: 121.346405, lat: 31.131856 };
      this.open = false;
      const loading = this.$loading();
      setTimeout(() => {
        this.center = item.location;
        loading.close();
      }, 1000);
    },
    gpsloggerClick() {
      this.open = false;
      this.registeredComponent("GPSLogger").then(() => {
        this.$toast.success("配置成功，点击右下角持续定位");
      });
    },
    logInfoClick() {
      this.open = false;
      this.$refs["LogInfo"].show();
    },
    //持续定位
    async timerLocation({ latitude, longitude, accuracy, speed, altitude }) {
      if (this.isSendLocation) return;
      this.isSendLocation = true;
      //获取电池信息
      let battery = 100;
      try {
        let b = await navigator.getBattery().catch(() => {});
        battery = b.level * 100;
      } catch {}

      try {
        let obj = JSON.parse(localStorage["map-gpslogger"]);
        fetch(obj.webhook, {
          method: "post",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: `latitude=${latitude}&longitude=${longitude}&device=${
            obj.device
          }&accuracy=${accuracy || ""}&battery=${battery}&speed=${speed ||
            ""}&direction=0&altitude=0&provider=0&activity=0`,
          mode: "no-cors"
        })
          .then(res => res.text())
          .then(res => {
            this.$refs["LogInfo"].add(
              `经度：${longitude} \n 纬度：${latitude}`
            );
          })
          .catch(ex => {
            this.$toast.error(`定位信息发送错误`);
          })
          .finally(() => {
            //5秒重新发送
            setTimeout(() => {
              this.isSendLocation = false;
            }, 5000);
          });
      } catch {}
    },
    locationSuccess({ point, AddressComponent, marker }) {
      if (this.isStartLocation) return;
      this.isStartLocation = true;
      window.noSleep.enable();
      console.log(point);
      this.$toast.success("开启持续定位中...打开日志查看");
      //开始定位（监听位置）
      navigator.geolocation.watchPosition(
        ({ coords }) => {
          this.timerLocation(coords);
        },
        err => {
          this.$refs["LogInfo"].add(`定位错误：${err.code}`);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 60000,
          timeout: 15000
        }
      );
    },
    locationError({ StatusCode }) {
      this.$toast.error(`定位失败，错误码：${StatusCode}`);
    }
  }
};
</script>
<style lang="less" scoped>
</style>
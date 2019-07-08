import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

import { List, BottomSheet, Button, Icon } from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(List);
Vue.use(BottomSheet);
Vue.use(Button);
Vue.use(Icon);

import Loading from 'muse-ui-loading';
import 'muse-ui-loading/dist/muse-ui-loading.css';
Vue.use(Loading);

import Toast from 'muse-ui-toast';
Vue.use(Toast);

// 引入vue-amap
import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'hNT4WeW0AGvh2GuzuO92OfM6hCW25HhX',
});

window.hassMap = {
  get hass() {
    return new Promise(async (resolve, reject) => {
      const res = await top.window.hassConnection;
      if (res == null) {
        reject(new Error('请在Home Assistant中使用'));
        return;
      }
      const conn = res.conn;
      const zoneList = [];
      const deviceList = [];
      const ents = conn._ent.state;
      // 过滤所有媒体播放器
      Object.keys(ents).forEach((key) => {
        const entity = ents[key];
        if (key.indexOf('zone.') === 0) {
          const attr = entity.attributes;
          if (attr.latitude && attr.longitude) {
            zoneList.push({
              id: entity.entity_id,
              title: entity.attributes.friendly_name,
              entity,
            });
          }
        } else if (key.indexOf('device_tracker.') === 0) {
          const attr = entity.attributes;
          if (attr.latitude && attr.longitude) {
            deviceList.push({
              id: entity.entity_id,
              title: attr.friendly_name,
              entity,
            });
          }
        }
      });
      const o = Object.create(null);
      o.zoneList = zoneList;
      o.deviceList = deviceList;
      resolve(o);
    });
  },
};

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

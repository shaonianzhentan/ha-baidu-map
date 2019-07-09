import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);

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

window.noSleep = new NoSleep();

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

//动态注册组件
Vue.prototype.registeredComponent = async function (component, propsData = {}) {
  let _constructor = null
  if (typeof component === 'string') {
      let com = null
      //任务队列
      if (component === 'GPSLogger') com = await import('@/components/GPSLogger')
      if (com !== null) {
          _constructor = Vue.extend(com.default)
      }
      else {
          console.error('组件未定义')
          return
      }
  } else {
      _constructor = Vue.extend(component)
  }

  return new Promise((resolve, reject) => {
      let instance = new _constructor({
          router,
          propsData
      }).$mount(document.createElement('div'))

      instance.$on('done', data => resolve(data))
  })

}


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

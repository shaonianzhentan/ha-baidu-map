import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

// 引入vue-amap
import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'hNT4WeW0AGvh2GuzuO92OfM6hCW25HhX',
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

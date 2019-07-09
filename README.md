# 百度地图HASS插件

实现了位置查看功能

> dist：对应的www下自定义的静态网页文件

## 如何使用

> 前端配置

1.（建议）使用[HACS安装](https://github.com/custom-components/hacs)

在HACS里输入：https://github.com/shaonianzhentan/lovelace-baidu-map 即可安装成功

安装成功后的访问路径：/community_plugin/lovelace-baidu-map/index.html

2.自定义安装

将本项目的dist复制到HASS的www下的文件夹

然后通过/local/dist/index.html 访问（这里的dist可以自行修改）

3.左侧栏配置

在configuration.yaml中配置以下内容，会在左侧栏显示
```
panel_custom:
  # 请勿修改name的值
  - name: react-panel
    sidebar_title: 地图
    sidebar_icon: mdi:map-marker
    url_path: lovelace-baidu-map
    embed_iframe: true
    # 只能使用通过HACS安装的路径
    js_url: /community_plugin/lovelace-baidu-map/baidu-map.js
    # 配置URL路径
    config:
      url: /community_plugin/lovelace-baidu-map/index.html

```

# 请一定要在HomeAssistant里使用，不然没啥用

## 界面欣赏

#### 选择设备
![选择设备](https://raw.githubusercontent.com/shaonianzhentan/lovelace-baidu-map/master/screenshots/1.png)

#### 设置定位Webhook
![设置定位Webhook](https://raw.githubusercontent.com/shaonianzhentan/lovelace-baidu-map/master/screenshots/2.png)


## 功能

- 查看位置

## 更新说明
### V0.0.1（2019.07.07）
- 初始化项目

## 其他说明

- 并没有全面测试，所以可能有BUG
- 如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR

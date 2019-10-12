# 百度地图HASS插件

实现了位置查看功能

> dist：对应的www下自定义的静态网页文件

## 如何使用

> 安装

1.（建议）使用[HACS安装](https://github.com/custom-components/hacs)

在HACS里输入：https://github.com/shaonianzhentan/ha-baidu-map 即可安装成功（类型选择Integration）

2.自定义安装

将本项目custom_components里的内容，放到HASS的custom_components文件夹中

> 后台插件配置

然后在configuration.yaml中配置以下内容
```
ha-baidu-map:

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

### V1.0.0（2019.10.12）
- 全新配置，安装更简单
- 删除定位相关功能

### V0.1.1（2019.07.10）
- 在上报位置信息时，带上了手机电量信息
- 修复了百度定位不准的问题，换成了GPS定位

### V0.1.0（2019.07.09）
- 加入百度定位功能
- 加入GPSLogger设置，可以上报位置了

### V0.0.1（2019.07.07）
- 初始化项目

## 其他说明

- 并没有全面测试，所以可能有BUG
- 如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR

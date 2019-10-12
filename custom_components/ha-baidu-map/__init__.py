import json
import os
import logging
import voluptuous as vol
import requests
import time

from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.event import track_time_interval
from homeassistant.components.http import HomeAssistantView
from aiohttp import web
from aiohttp.web import FileResponse
from typing import Optional
from datetime import timedelta
from homeassistant.helpers.state import AsyncTrackStates
from urllib.request import urlopen

_LOGGER = logging.getLogger(__name__)
# 日志记录
_DEBUG = False


def _log(*arg):
    if _DEBUG:
        _LOGGER.info(*arg)


DOMAIN = 'ha-baidu-map'
_DOMAIN = DOMAIN.replace('-', '_')

_hass = None

#
# 读取所有静态文件
#
#
allpath = []
allname = []


def getallfile(path):
    allfilelist = os.listdir(path)
    # 遍历该文件夹下的所有目录或者文件
    for file in allfilelist:
        filepath = os.path.join(path, file)
        # 如果是文件夹，递归调用函数
        if os.path.isdir(filepath):
            getallfile(filepath)
        # 如果不是文件夹，保存文件路径及文件名
        elif os.path.isfile(filepath):
            allpath.append(filepath)
            allname.append(file)
    return allpath, allname


__dirname = os.path.dirname(__file__)
files, names = getallfile(__dirname+'/dist')

extra_urls = []
for file in files:
    extra_urls.append(
        '/' + DOMAIN + file.replace(__dirname, '').replace('\\', '/'))

# 网关控制


class HassGateView(HomeAssistantView):
    """View to handle Configuration requests."""

    url = '/' + DOMAIN
    name = DOMAIN
    extra_urls = extra_urls
    requires_auth = False

    async def get(self, request):
        # _LOGGER.info(request.rel_url.raw_path)
        return FileResponse(os.path.dirname(__file__) + request.rel_url.raw_path.replace(self.url, ''))

    async def post(self, request):
        """Update state of entity."""
        response = await request.json()
        return self.json(response)


# 安装
def setup(hass, config):
    _LOGGER.info('''
-------------------------------------------------------------------
    ha-baidu-map百度地图插件【作者QQ：635147515】
    
    版本：1.0.0
    
    这是一个百度地图的HomeAssistant插件
    
    https://github.com/shaonianzhentan/ha-baidu-map
-------------------------------------------------------------------''')
    global _hass
    _hass = hass
    _hass.http.register_view(HassGateView)
    # 添加到侧边栏
    hass.components.frontend.async_register_built_in_panel(
        "iframe",
        "百度地图",
        "mdi:map-marker",
        _DOMAIN,
        {"url": "/"+DOMAIN+"/dist/index.html"},
        require_admin=True,
    )
    return True

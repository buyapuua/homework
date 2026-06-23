# 云岭非遗 · 云南非物质文化遗产数字展馆

一个展示云南各民族非物质文化遗产的纯静态网站，使用原生 HTML + CSS + JavaScript 开发，无后端依赖，可直接通过 GitHub Pages 在线访问。

## 🌐 在线访问

GitHub Pages：<https://jinjinjinyh.github.io/homework/yunling-feiyi/>

## 📂 项目结构

```
yunling-feiyi/
├── index.html          首页（Hero、数据概览、精选、分类入口）
├── list.html           非遗名录（搜索 + 分类筛选）
├── detail.html         项目详情（图文 + 收藏 + 相关推荐）
├── map.html            云南分布（SVG 地图交互联动）
├── masters.html        传承人专栏
├── interact.html       我的收藏 + 留言板（localStorage）
├── css/                各页面样式
│   ├── base.css        全站公共样式（导航/页脚/卡片/响应式）
│   ├── home.css  list.css  detail.css  map.css  masters.css  interact.css
├── js/
│   ├── data.js         非遗项目数据
│   ├── masters-data.js 传承人数据
│   ├── common.js       注入导航栏与页脚
│   ├── storage.js      localStorage 收藏/留言模块
│   └── home.js list.js detail.js map.js masters.js interact.js
└── assets/             SVG 插图素材
```

## ✨ 功能特性

- 响应式布局，适配桌面与手机
- 名录关键词搜索 + 五大类别筛选
- 详情页收藏功能（localStorage 持久化）
- 云南州市 SVG 地图点击联动展示
- 留言板：发表 / 删除留言，本地保存
- 传承人专栏与非遗项目互相关联跳转

## 👥 小组分工

| 成员 | 学号 | 分工 |
|------|------|------|
| 金宇航（组长） | 20231060195 | 全站框架、公共样式、首页、项目统筹与文档 |
| 张建波 | 20231120009 | 非遗名录页（搜索与筛选） |
| 文祺武 | 20231060116 | 项目详情页（图文、收藏、相关推荐） |
| 陈宇博 | 20231060048 | 云南分布地图页（SVG 交互） |
| 林劲泉 | 20231060126 | 收藏夹与留言板（localStorage） |
| 宋俊豪 | 20231120008 | 传承人专栏页与内容资料整理、测试 |

## 📌 合规声明

本项目内容均整理自云南省非物质文化遗产保护中心公开名录及公开科普资料，仅用于课程教学展示，不涉及个人隐私数据，严格遵守国家法律法规与学校规章制度。

## 🚀 本地运行

直接用浏览器打开 `index.html` 即可；或在目录下启动本地服务器：

```bash
python -m http.server 8000
# 浏览器访问 http://localhost:8000
```

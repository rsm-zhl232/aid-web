# AID-web — AID 艾匠科技官网

**网站地址：https://rsm-zhl232.github.io/aid-web/**

指定语言打开：[简体](https://rsm-zhl232.github.io/aid-web/?lang=zh) · [繁體](https://rsm-zhl232.github.io/aid-web/?lang=hant) · [English](https://rsm-zhl232.github.io/aid-web/?lang=en)

推送到 `main` 后 GitHub Pages 自动重新发布，约一分钟后线上更新。

纯静态站，无依赖，结构沿用 `tgkw-web`。三种语言：简体（默认）、繁體（港台通用）、English，页头可切换。本地预览：

```sh
python3 -m http.server 8080      # 然后访问 http://localhost:8080
```

## 目录

```
index.html       首页：定位、出发点、加法不是减法、传统配合对比、一辅两主、八项承诺、合作大师、服务分层、技术底座
services.html    服务：一辅两主、三档服务包、AI 能力、服务标准
process.html     工作流程：启动会、四阶段（0.5 / 1.0 / 2.0 / 2.x）、修改机制、出图前检查
technology.html  技术与团队：DFC/TAI/ADC/飞舟/QDC/DRP、项目组织、四库数据资产
about.html       关于：命名释义、标志释义、使命与分工、核心理念、4C·4R、天宫开物背景
contact.html     联系：先试做一个空间、初次沟通三问、表单（mailto）

assets/css/main.css   设计系统。顶部 tokens：砖红 #A8342B、石墨灰 #2B2C2F、墨 #1B1C1E、纸 #F2F1EE
assets/js/site.js     页头、页脚、导航、语言切换（简 / 繁 / EN）、联系方式、合作大师、表单
assets/img/           aid-logo.svg（浅底）、aid-logo-white.svg（深底）、aid-mark.svg（图标 / favicon）
```

## 三种语言

每处文字并排写三份：`<span data-lang="zh">` 简体、`<span data-lang="hant">` 繁體、`<span data-lang="en">` 英文。
**繁體不要手改**——它由简体自动生成。改了简体之后跑一次：

```sh
pip install opencc-python-reimplemented
python3 tools/build-hant.py
```

脚本先套用词表（大陆说法 → 港台都看得懂的说法，如 签证→工程變更計價、复盘→檢討、数字建造→數位建造、合同→合約），
再做字形转换（OpenCC s2t，不偏台湾也不偏香港），最后修正大陆式繁体字形（爲→為、裏→裡、啓→啟）。
遇到新的大陆用语，加进脚本顶部的 `PHRASES` 表即可。品牌口号「读懂大师，落地大师」保持原样。

英文是单独写的，不是逐句翻译：按英文网站习惯改写，4C·4R 一节英文版改写为 "Why it works"。
JS 里生成的文字（导航、页脚、表单提示）在 `assets/js/site.js`，三种语言手写在 `{ en, zh, hant }` 里。

访客语言自动判断：URL `?lang=zh|hant|en` → 上次手动选择 → 浏览器语言（zh-TW / zh-HK / zh-MO → 繁體，en → 英文）→ 简体。

## 文案口径

全部文案出自《AID 品牌手册》（全流程 SOP 培训手册）第一、二、四、五、八篇与《AID 品牌介绍》PPT，
两者冲突时以手册为准（例如服务包内容按手册 2.2）。手册 8.1 的禁用说法已遵守：

- 「2 天出图」每次出现都带前提（节点、收口、物料、点位全部确认）
- 说「变更有规则」，不说「变更兜底」「无限次修改」
- 不列案例；AID 是新品牌，以「先试做一个空间，试做费可抵扣」代替
- 内部内容（薪酬、分账、单价、红线、考核）未上网站

## 合作大师

首页「合作大师」板块由 `assets/js/site.js` 顶部的 `AID.partners` 渲染，每位大师一行：

```js
AID.partners = [
  { name: { zh: "某某" }, studio: { zh: "某某设计" }, city: { zh: "深圳" },
    logo: "assets/img/partners/xxx.png" },
];
```

`hant` / `en` 可不填（自动用简体）；`studio`、`city`、`logo` 都是可选的。Logo 放进 `assets/img/partners/`。
列表为空时显示 4 张「【待补】」占位卡，数量由 `PARTNER_SLOTS` 控制。

## 待补

- 联系邮箱、电话：在 `assets/js/site.js` 顶部 `AID.contact` 填写（地址已填：东方河套科技大厦 7 楼）。留空时页面显示「【待补】」，表单提示邮箱未开通
- 正式域名、ICP 备案号（页脚）、分享图 og:image
- PNG 版 favicon（目前只有 SVG）
- 合作大师名单与 Logo（见上一节）

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
process.html     工作流程：启动会、四阶段（0.5 / 1.0 / 2.0 / 2.x）、样板空间（图片位）、修改机制、出图前检查
technology.html  技术与团队：DFC/TAI/ADC/飞舟/QDC/DRP、界面截图（图片位）、项目组织、四库数据资产
about.html       关于：命名释义、标志释义、使命与分工、核心理念、4C·4R、主理人与团队、天宫开物背景
faq.html         常见问题：10 问，依据手册 8.1 的标准回答
trial.html       试做一个空间：五步流程、交付什么、费用与周期
contact.html     联系：初次沟通三问、联系方式、二维码、宣传手册下载、表单
privacy.html     隐私政策（个人信息保护法要求的告知）
sitemap.xml / robots.txt   搜索引擎用

assets/css/main.css   设计系统。顶部 tokens：砖红 #A8342B、石墨灰 #2B2C2F、墨 #1B1C1E、纸 #F2F1EE
assets/js/site.js     页头、页脚、导航、语言切换（简 / 繁 / EN）、联系方式、合作大师、表单
assets/img/           aid-logo.svg（浅底）、aid-logo-white.svg（深底）、aid-mark.svg（图标）、
                      favicon-512.png / apple-touch-icon.png（手机图标）、og-cover.jpg（微信等转发时的分享图）
assets/fonts/         IBM Plex Mono（代码等宽字体，自带，OFL 免费商用）。中文用系统字体，不下载网络字体
tools/build-hant.py   简体 → 繁體生成脚本
tools/set-domain.sh   换正式域名时运行一次
```

## 视觉语言：一套施工图

网站的样子借自 AID 自己的产品——施工图：纸色底、石墨灰细线、砖红修改标记、图签。新增内容时请守住这几条，避免重新变回「幻灯片」：

- **不用整块色带分节**，节与节之间只用细线；全站只有首页「加法」一处深色段落
- **不用 01 / 02 / 03 这类序号**（节标签、卡片、列表、步骤都不用），靠标题和细线区分；模型版本 0.5 / 1.0 / 2.0 / 2.x 和图号属于真实编号，可以保留
- 少用方框卡片，优先用细线列表、图解、表格
- 内页顶部是纸底标题 + **图签栏**（`.sheetbar`），图号：服务 A-01、流程 A-02、技术 A-03、关于 A-04、常见问题 A-05、试做 A-06、联系 A-07、隐私 A-08（图签栏只放 AID+、图号、页名）
- 首页首屏的平面图是内嵌 SVG（`index.html` 的 `.plan`），目前是示意图；拿到真实项目平面图（去敏）后可以替换
- 文案少用「不是……是……」句式，全站只在关键处用

### 动效（都在 `assets/js/site.js` 的 Motion 部分）

- **首屏图纸逐线画出**（`initDraw`）：轴网 → 墙 → 家具 → 尺寸 → 图签 → 红色修改，按画图顺序
- **图纸随滚动生长**（`initStory`，首页 `[data-story]`）：左侧四段 0.5 / 1.0 / 2.0 / 2.x 滚过屏幕中线时，右侧图纸逐层出现，图签版本号同步变化；手机上图纸吸顶
- **文字逐字点亮**（`initScrub`）：给段落加 `data-scrub` 即可，目前用在首页「加法」段落
- **玻璃副导航**（`renderSubnav`）：滚过首屏 / 标题区后出现。内页：页面名 + 试做按钮（页面名在 `SUBNAV` 表）；首页：本页目录 + 试做按钮，滚动时高亮当前段落（目录在 `HOME_TOC` 表）
- **页面平滑过渡**：CSS 的 `@view-transition`，不支持的浏览器自动退回普通跳转
- 系统设置了「减少动态效果」的访客，以上动效全部关闭，直接看到最终状态



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

## 上线清单

### 已完成

- 中文用系统字体、去掉 Google Fonts（Google 在大陆被墙，原来会导致国内白屏等待）
- 常见问题、试做、隐私政策三页；团队、样板空间、界面截图、二维码、宣传手册、合作大师板块（均为占位框架）
- 微信分享图、手机图标、canonical、hreflang、结构化数据、sitemap、robots
- 繁體 / 英文的网页标题随语言切换
- 表单支持接入在线表单服务；访问统计（百度统计）开关；公司全称与备案号显示

### 需要提供的信息（填好即生效，大多数在 `assets/js/site.js` 顶部）

| 内容 | 填在哪里 | 现在的样子 |
|---|---|---|
| 联系邮箱、电话 | `AID.contact` | 显示【待补】，表单无法发送 |
| 企业微信 / 公众号二维码 | 图片放 `assets/img/qr/`，路径填 `AID.qr` | 灰色 QR 占位 |
| 公司注册全称 | `AID.company.legalName` | 页脚不显示；隐私页显示【待补】 |
| ICP 备案号 | `AID.company.icp` | 不显示（国内服务器上线后填） |
| 合作大师名单、Logo、一句评价 | `AID.partners`（图片放 `assets/img/partners/`） | 4 张【待补】卡；`PARTNER_SLOTS = 0` 可先隐藏整节 |
| 主理人 / 项目经理照片与简介 | `AID.team`（照片放 `assets/img/team/`） | 3 张【待补】卡；`TEAM_SLOTS = 0` 可先隐藏 |
| 宣传手册 PDF 与封面 | `AID.brochure` | 显示「制作中」 |
| 样板空间三张图（模型 / 施工图 / 物料表） | `process.html` 的 `#sample`，把占位框换成 `<img>` | 斜纹占位框 |
| DFC、飞舟界面截图 | `technology.html` 的界面截图两格 | 斜纹占位框 |
| 在线表单服务地址 | `AID.formEndpoint`（接收 JSON POST） | 退回到打开访客的邮件程序 |
| 百度统计站点 ID | `AID.analytics.baidu` | 未开启 |

### 需要决定的事

- **公开承诺请老板确认**：八项承诺、「确认模型后 2 天出图」、「变更有规则」、试做费可抵扣。手册里部分条目仍标「待确认」，
  例如大项目的出图时间（手册建议「150 张以内 2 个工作日，每多 100 张顺延 1 天」）。客户会把网站当合同依据，建议法务也看一眼。
- **托管与域名**：GitHub Pages 在国内不稳定。正式上线建议放腾讯云 / 阿里云 + CDN，绑定公司域名，办 ICP 备案；
  然后运行 `sh tools/set-domain.sh https://新域名/`，再向百度搜索资源平台、Google Search Console 提交 sitemap。
- **繁體用词**：现在「項目」两地通用，若主要面向台湾，可在 `tools/build-hant.py` 加一条 项目→專案。

### 上线前检查

- 在**微信内置浏览器**、iPhone、安卓手机上实际打开一遍（大师基本在微信里点链接）
- 请港台同事看繁體，请英文好的人看英文
- 把占位内容补齐，或把对应板块隐藏，确保线上没有【待补】

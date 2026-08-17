# @AnNingUI/dsh-client-ui-skin-md3-wallpaper

Material You (MD3) 动态取色皮肤，面向 dsh web GUI，作为**独立项目**存在——不依赖
monorepo、皮肤中心注册表或画廊。克隆到任何位置、构建、一条命令安装即可。

上传任意壁纸，皮肤就从它派生出整套 UI 调色板：Monet 源色提取走
`@material/material-color-utilities`（Celebi 量化 + Score 排名），由源色相构建
M3 亮/暗两套 scheme，再映射到 shell 的**全部** token 表面——73 个
`--dsw-static-*` token（双主题）、写死的交互/滚动条别名、以及标准
`--md-sys-color-*` 角色。一个都不漏：侧边栏、聊天区、详情区、对话框、菜单、
滚动条、状态色和每个 currentColor SVG 都跟随壁纸；品牌 logo 被压平到 MD3 主色、
favicon 变成 Monet 源色的圆点、aionui 面板（文件树 / git 树 / 预览）经由样式表的
`--aion-*` 桥使用同一套 M3 角色。皮肤激活期间页面滚动锁定：html 和 body 都不滚动。

同时还带 Material You 有机形状 chrome：四瓣花瓣 FAB（不是普通圆钮），常驻时图标
为 MaterialYouNewTab 温度计，菜单打开后以 M3 动效（淡入 + 旋转 + 缩放）形变为时钟
图标。菜单提供**上传壁纸（Split Button，可选导入效果）**、恢复默认、M3 形状系统
开关（按层级应用 Material 3 圆角语言：胶囊按钮 / 小圆角输入框 / 中等列表行 / 大圆角
对话框 / xs 悬浮提示与菜单 / 胶囊滚动条——可从菜单关闭）。

皮肤只做表现层：不注入服务、不发射 cordis 事件、不触达任何模型请求。所有写入在
dispose 时精确回收（body 属性、token 变量、背景、滚动锁、chrome、favicon、标题）。

## 功能一览

围绕「背景」的一条主线：上传任意壁纸后，皮肤从它提取 Monet 源色、生成完整 MD3
调色板并应用到 dsh 全部 UI。你可以选择**导入效果**——**原图导入**（不处理，直接
用原图）、**MD3 色彩滤镜**（默认，以源色生成滤镜、按像素明度与原图轻量混合，保留
画质与细节）或 **Monet 统一色调**（色调重映射）：点击右下角的 **FAB** 打开壁纸
设置菜单，在上传壁纸按钮右侧的箭头处随时切换，并记住你的选择。整条处理像素最高
支持 **8K 全分辨率**：像素工作跑在独立 worker（Blob 内联、零额外请求）里，GPU
优先（WebGPU → WebGL2 回退，与 CPU 参考完全一致），主线程零卡顿；结果持久化到
IndexedDB、状态到 localStorage，刷新即恢复、dispose 不丢已存壁纸。你还可以开启
**显示壁纸背景**，让对话区透明、主面板半透明毛玻璃，壁纸透出。

## 环境要求

- Node `^22.19 || >=24`，pnpm。
- 已安装 dsh（皮肤是面向 `web` profile 的标准 cordis bundle）。

## 构建

```sh
pnpm install     # 安装 @material/material-color-utilities + 构建工具
pnpm build       # 输出 lib/index.js（node 半区）+ lib/client.js（浏览器 bundle）
pnpm test        # vitest：调色板映射 + apply/dispose 契约 + 重着色数学
```

> build 会在 tsdown 之后运行 `scripts/inline-worker.mjs`，把独立 worker chunk
> （`lib/recolor.worker.js`）以字符串内联进 `lib/client.js`，供浏览器以 Blob URL
> 创建 worker——**不要删掉这个 post-build 步骤**，否则重着色会退回主线程路径。

## 手改主题时的热重载

皮肤内置 dev watcher：开着 `pnpm watch`（每次保存 tsdown 重建 `lib/client.js`），
皮肤每 2 秒轮询自身 bundle URL、对内容做指纹比对，bundle 一变立即刷新页面——
改个 token、颜色或 CSS 规则、保存，GUI 几秒内重生效。**无需重启 dsh。**

默认开启。关闭方式：

```js
localStorage.setItem("dsh.md3Wallpaper.devReload", "0"); // 然后刷新一次
```

重新开启：删掉该键（或设为 `'1'`）后刷新一次。轮询只在页面可见时进行，interval
随皮肤 dispose 一起回收。

## 安装 + 激活到 dsh profile

```sh
pnpm install:dsh            # 默认 profile：web
pnpm install:dsh headless   # 或任意其他 profile 名
```

脚本会：

1. 把本项目链接进 `~/.dsh/profiles/<profile>/node_modules/@AnNingUI/`
   （symlink；Windows 回退 junction）；
2. 把激活 insert 写入**该 profile 自己的** `cordis.patch.yml` —— **绝不**写 harness
   home 的 `cordis.patch.yml`（它被所有 profile 共享，写它会影响 headless harness）。

然后**重启 dsh** 并打开 GUI，皮肤在页面稳定后应用。之后的皮肤切换由 dsh 皮肤中心
处理（它管理同一个 profile patch）；本项目只负责安装 + 激活自己。

手工安装（和任何官方插件相同）：

```sh
dsh plugin --profile web add link:<path-to-this-project>
```

## 使用

点击右下角 FAB，菜单打开：

- **上传壁纸（Split Button）**：主区域直接选择图片上传；右侧箭头弹出「导入效果」
  （原图 / MD3 色彩滤镜 / Monet 统一色调），选定的效果用于本次及之后的处理。
- **恢复默认**：回到 M3 基线种子色（#6750A4）。
- **M3 形状系统**：切换 Material 3 圆角语言（持久化）。
- **显示壁纸背景**：开启后 frame 透明 + 面板毛玻璃，壁纸透出（持久化）。

主题会随 shell 的亮/暗开关实时切换：暗色 scheme 的反转明度映射立即生效。
重着色在 worker 内完成：8K 图也不卡 UI；结果存 IndexedDB，刷新后自动恢复。

## 调色板映射

MD3 有五个色调板；shell 有九个颜色族：

| Shell 族         | MD3 调色板          | 说明                       |
| ---------------- | ------------------- | -------------------------- |
| `deepseek`       | primary (a1)        | 品牌色相                   |
| `blue`           | secondary (a2)      | 辅助蓝                     |
| `green`          | tertiary (a3)       | 成功态走第三个强调色       |
| `amber`          | primary (a1)        | 告警复用品牌色相、偏移色度 |
| `red`            | error               | 危险                       |
| `neutral`        | neutral (n1)        | 文字 / 边框 / 表面         |
| `neutral-bluish` | neutralVariant (n2) | 背景 / 表面刻度            |

shell 的数字后缀是明度步进而非 M3 tone，所以每个后缀映射到一个显式（亮、暗）tone
对；暗色反转明度。M3 surface-container 角色按 M3 规范色度表从 neutral 调色板补齐。

## 模型相关

无。皮肤只改浏览器 DOM，不触达任何模型请求。

## 已知限制

- 加载页保持原样（引导页在插件 bundle 存在之前渲染）。
- 代码语法高亮（json-tree 组件）保留内置配色（组件根 token 超出 body 变量作用域）。
- 持久化用的紧凑状态是降采样 JPEG（≤512px）：超大显示器可能略有柔化；但**背景本体**
  是 8K 原精度重着色结果（IndexedDB 位图），不受此限。

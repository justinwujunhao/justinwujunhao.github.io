# 个人主页方案与 Demo

这是一个面向财务从业者的个人主页 demo，目标是用低维护成本记录想法、文章和 AI vibe coding 项目。

## 定位

- 个人品牌：财务专业判断 + AI 工具实践 + 清晰表达。
- 内容资产：短想法、长文章、项目日志、工具作品集。
- 读者对象：同行、潜在合作方、招聘方、未来的自己。

## 推荐信息架构

- 首页：身份介绍、最新想法、精选文章、项目陈列。
- 想法：短笔记，适合记录观察、问题和灵感。
- 文章：长文，适合财务分析、工具工作流、职业复盘。
- 项目：AI vibe coding 小工具、原型、可下载模板。
- 关于：背景、关注方向、联系方式。

## 技术方案

### 起步阶段

- 使用静态站点：HTML/CSS/JS 或后续迁移到 Astro/VitePress。
- 内容用 Markdown 管理，非技术背景也容易维护。
- 不接入评论、登录、数据库，减少安全风险。

### 日常修改内容

日常只需要优先编辑 `content.js`，不用改 `index.html`。

- `name`：姓名或主页显示名。
- `title`：首页大标题。
- `subtitle`：首页简介。
- `contact`：联系邮箱或其他公开联系方式。
- `notes`：最近想法。
- `articles`：精选文章。
- `projects`：AI vibe coding 项目。

如果只是改文字、日期、文章标题、项目介绍，基本都在 `content.js` 完成。

### 增长阶段

- 用 Git 管理内容版本。
- 部署到国内可访问的静态托管或对象存储。
- 如需订阅，可使用邮件服务商的表单嵌入，但建议单独做隐私提示。

## 中国地区可访问性

- 不依赖 Google Fonts、国外 CDN、远程 JS 库。
- 图片尽量本地托管并压缩，避免外链失效。
- 可选部署：
  - 阿里云 OSS + CDN
  - 腾讯云 COS + CDN
  - 又拍云
  - GitHub Pages 可作为备份，但国内访问不稳定
- 如绑定自定义域名，国内服务器或 CDN 通常需要 ICP 备案。

## GitHub Pages 部署

当前项目使用 GitHub Pages 用户主页仓库部署，仓库地址为：

`https://github.com/justinwujunhao/justinwujunhao.github.io`

本地 remote 已设置为：

`https://github.com/justinwujunhao/justinwujunhao.github.io.git`

推送代码：

```bash
cd /Users/tuitui/Documents/codexproject/personal-homepage-demo
git push -u origin main
```

推送成功后，访问地址为：

`https://justinwujunhao.github.io/`

如果 GitHub Pages 没有自动启用，可以进入仓库 `Settings` -> `Pages`，将 `Source` 设为 `Deploy from a branch`，`Branch` 选择 `main`，目录选择 `/(root)`，然后点击 `Save`。

GitHub Pages 发布有时需要等待几分钟；如果页面暂时打不开，先等一会儿再刷新。

## 安全建议

- 静态优先：没有后台登录面，攻击面最小。
- 不在前端代码里放 API Key、Token、公司内部数据或未公开财务资料。
- 表单提交用可信第三方服务，开启验证码、频率限制和垃圾内容过滤。
- 外链使用 `rel="noopener noreferrer"`，减少跳转页风险。
- 定期检查依赖；当前 demo 无外部依赖。
- 开启 HTTPS、HSTS 和基础安全响应头。

## 后续可演进方向

- 把文章拆成 Markdown 文件并自动生成列表。
- 增加标签、搜索、RSS、项目详情页。
- 做一个本地写作模板：标题、摘要、结论、数据口径、风险提示。
- 为 AI 项目增加“使用场景、截图、数据隐私说明、源码链接”。

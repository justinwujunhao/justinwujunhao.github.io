window.siteContent = {
  name: "Justin Wu",
  initials: "JW",
  title: "财务、准则、AI 工具和个人项目的实践记录。",
  subtitle:
    "用AI Agent、RAG和轻量应用，提升财务分析、准则研究和经营管理工作的效率。这里收集想法、文章、Vibe Coding项目和阶段性的实践记录。",
  contact: "mochunho0909@gmail.com",
  stats: [],
  notes: [],
  articles: [
    {
      tag: ["AI 工作流", "效率工具"],
      title: "财务人最近用 WorkBuddy 做了什么",
      summary:
        "记录用 WorkBuddy 完成合并附注搭建、法规文档撰写、岗位查询推送和合伙协议台账整理四个真实场景的 Prompt、结果和优化方向。",
      url: "articles/workbuddy-finance-use-cases.html",
    },
    {
      tag: ["Vibe Coding", "AI 写作"],
      title: "Vibe Coding 实践：2 小时打造最像你的 AI 写作助手",
      summary:
        "用 Codex 计划模式 2 小时做出一个 AI 写作助手：按项目切换文风、上传参考文档做格式锚点、实时给出润色建议。",
      url: "articles/vibe-coding-ai-writing-assistant.html",
    },
    {
      tag: ["AI 工具", "Agent"],
      title: "我真心推荐每一个财务人下载一个 WorkBuddy",
      summary:
        "AI Agent 已经足够简化强大。WorkBuddy 把外部咨询「聘」到公司内部，零门槛接入腾讯生态、国内模型和连接器，是财务人上手 AI 的好起点。",
      url: "articles/recommend-workbuddy-for-finance.html",
    },
    {
      tag: ["AI 工作流", "iFinD MCP"],
      title: "财经界的赛博菩萨：iFinD MCP 配合 Codex，半小时输出同行业分析",
      summary:
        "用同花顺 iFinD MCP 配合 Codex，半小时完成 MLCC 行业 5 只代表标的的同行业分析，覆盖公司信息、市值、财务指标和收入结构。",
      url: "articles/ifind-mcp-codex-industry-analysis.html",
    },
    {
      tag: ["知识库", "ima"],
      title: "看了五分钟 ima 的介绍，我决定放弃飞书知识库",
      summary:
        "从飞书知识库迁移到腾讯 ima：2.6 万个知识文档跨库索引、Agent 支持、外接模型 API，专业知识壁垒正在被消灭。",
      url: "articles/ima-knowledge-base-vs-feishu.html",
    },
    {
      tag: ["Vibe Coding", "简历"],
      title: "不用羡慕程序员，财务也能画高级科技感的 html 简历",
      summary:
        "一份原始简历 + 一个参考风格模板 + 一个 coding agent = 高级科技感的 HTML 简历。财务人不需要会任何代码。",
      url: "articles/html-resume-for-finance.html",
    },
    {
      tag: ["AI 工具", "Skill"],
      title: "一句话批量下载上市公司定期报告的 skill",
      summary:
        "一个可以批量下载上市公司定期报告的 Skill：把链接贴给 Agent，告诉它参考 Skill 下载指定公司和期间的定期报告即可。",
      url: "articles/annual-reports-download-skill.html",
    },
    {
      tag: ["AI 工作流", "财税实务", "文档生成"],
      title: "ChatGPT+Codex，从领导一句话到生成全套税务专项检查文件",
      summary: "记录一次内部税务专项检查材料的生成、修改和核验流程，实现从领导一句话到可落地文件体系的完整工作流。",
      url: "articles/tax-inspection-ai-workflow.html",
    },
    {
      tag: ["财务分析", "效率工具"],
      title: "一条适用于Claude Code、Kimi Code等AI Agent 核对财务分析报告的prompt",
      summary: "以 Kimi Code 为例，把非敏感报告交给 AI Agent 做数据、表文、逻辑和文字核对。",
      url: "articles/kimi-code-finance-review-prompt.html",
    },
    {
      tag: ["Hermes Agent", "RAG", "会计准则"],
      title: "Hermes Agent+飞书知识库构建个人会计准则问答库",
      summary: "用 RAG 思路把准则原文、专题资料和真实问答沉淀成可检索、可对比、可迭代的个人知识库。",
      url: "articles/hermes-rag-accounting-knowledge-base.html",
    },
    {
      tag: ["Vibe Coding", "个人网站"],
      title: "第一次Vibe Coding尝试：构建个人展示主页",
      summary: "记录这个个人网站从主页、项目页、文章页到内容更新流程的搭建过程，以及下一步自动化方向。",
      url: "articles/personal-site-build-log.html",
    },
  ],
  projects: [
    {
      icon: "↗",
      title: "经营指标追踪、展示看板",
      summary: "上传月度数据后，生成管理层可读的数据分析看板。",
      url: "projects/dashboard.html",
      labels: ["本地 Web 应用", "SQLite 数据存储", "Excel 模板填报"],
    },
    {
      icon: "⌁",
      title: "三大准则横向核对分析工具",
      summary: "把常用准则PRC GAAP、IFRS、US GAAP展示页。一直眼馋四大里面技术部出的文档，AI时代普通人也可以自己用AI搞一个",
      url: "projects/gaap-compare.html",
      labels: ["PRC GAAP", "IFRS", "US GAAP", "AI 条文映射"],
    },
  ],
};

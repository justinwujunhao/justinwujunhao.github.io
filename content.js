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

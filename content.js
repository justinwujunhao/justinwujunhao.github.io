window.siteContent = {
  name: "Justin Wu",
  initials: "JW",
  title: "把财务判断、日常观察和 AI 小实验，整理成可复用的个人知识资产。",
  subtitle:
    "我关注企业经营、会计准则、效率工具和 Vibe Coding。这里记录长期问题、短想法、文章和能真正帮自己省时间的小项目。",
  contact: "mochunho0909@gmail.com",
  stats: [],
  notes: [
    {
      date: "2026.04.20",
      datetime: "2026-04-20",
      title: "AI 时代最大的红利是技术平权",
      summary: "AI 时代最大的红利是技术平权，现在非技术专业的人都有机会看懂项目、构造代码甚至创造一些有意思的东西，放到几年前学写python的时候想都不敢想。",
    },
    {
      date: "2026.04.13",
      datetime: "2026-04-13",
      title: "Markdown",
      summary: "看到一条很有意思的想法，说以后代码开源会转变为prompt和想法的开源，MD格式将会越来越流行甚至变为AI时代的通用语言",
    },
    {
      date: "2026.04.02",
      datetime: "2026-04-02",
      title: "个人主页也是一种职业复利",
      summary: "公开写作让观点更可检验，也让项目、作品和能力线索慢慢沉淀。",
    },
  ],
  articles: [
    {
      tag: ["财务分析", "效率工具"],
      title: "一条适用于Claude Code、Kimi Code等AI Agent 核对财务分析报告的prompt",
      summary: "把非敏感报告、数据丢给AI Agent 核对",
      url: "#",
    },
    {
      tag: ["Hermes Agent", "RAG", "会计准则"],
      title: "Hermes Agent+飞书知识库构建个人会计准则问答库",
      summary: "一套准则收集、文档清洗、知识库构建、回答精准指向的工作流",
      url: "#",
    },
    {
      tag: ["Vibe Coding"],
      title: "第一次Vibe Coding尝试：构建个人展示主页",
      summary: "不是展示“会用工具”，而是展示你如何定义问题、组织信息和推动判断。",
      url: "#",
    },
  ],
  projects: [
    {
      icon: "↗",
      title: "经营指标追踪、展示看板",
      summary: "上传月度数据后，生成管理层可读的数据分析看板。",
      labels: ["Prototype", "Local-first"],
    },
    {
      icon: "⌁",
      title: "三大准则横向核对分析工具",
      summary: "把常用准则PRC GAAP、IFRS、US GAAP展示页。一直眼馋四大里面技术部出的文档，AI时代普通人也可以自己用AI搞一个",
      labels: ["Checklist", "No login"],
    },
    {
      icon: "◎",
      title: "文章灵感收集箱",
      summary: "记录一句话灵感，自动归类到财务、效率、AI、职业复盘等主题。",
      labels: ["Idea OS", "Markdown"],
    },
  ],
};

window.siteContent.stats = [
  { value: String(window.siteContent.notes.length), label: "个想法" },
  { value: String(window.siteContent.articles.length), label: "篇文章" },
  { value: String(window.siteContent.projects.length), label: "个 AI 项目" },
];

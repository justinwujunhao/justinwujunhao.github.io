const header = document.querySelector(".site-header");
const content = window.siteContent;

const syncHeaderShadow = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

syncHeaderShadow();
window.addEventListener("scroll", syncHeaderShadow, { passive: true });

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element && value) {
    element.textContent = value;
  }
};

const escapeHTML = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const safeURL = (value) => {
  const url = String(value ?? "#");
  return url.startsWith("javascript:") ? "#" : url;
};

const formatTags = (tag) => (Array.isArray(tag) ? tag.join(" / ") : tag);

const getStats = ({ notes = [], articles = [], projects = [] }) => [
  { value: String(notes.length), label: "个想法" },
  { value: String(articles.length), label: "篇文章" },
  { value: String(projects.length), label: "个 AI 项目" },
];

const loadNotes = async () => {
  try {
    const response = await fetch("./data/notes.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load notes: ${response.status}`);
    }

    const notes = await response.json();
    return Array.isArray(notes) ? notes : [];
  } catch (error) {
    console.warn(error);
    return window.siteNotes ?? content.notes ?? [];
  }
};

const renderStats = (stats) => {
  const list = document.querySelector('[data-list="stats"]');
  if (!list || !stats) return;

  list.innerHTML = stats
    .map(
      (item) => `
        <div>
          <span class="metric">${escapeHTML(item.value)}</span>
          <span class="label">${escapeHTML(item.label)}</span>
        </div>
      `,
    )
    .join("");
};

const renderNotes = (notes) => {
  const list = document.querySelector('[data-list="notes"]');
  if (!list || !notes) return;

  list.innerHTML = notes
    .map(
      (note) => `
        <article class="note-item">
          <time datetime="${escapeHTML(note.datetime)}">${escapeHTML(note.date)}</time>
          <h3>${escapeHTML(note.title)}</h3>
          <p>${escapeHTML(note.summary)}</p>
        </article>
      `,
    )
    .join("");
};

const renderArticles = (articles) => {
  const list = document.querySelector('[data-list="articles"]');
  if (!list || !articles) return;

  list.innerHTML = articles
    .map((article) => {
      const href = safeURL(article.url);

      return `
        <a class="article-card card-link" href="${escapeHTML(href)}" aria-label="阅读文章：${escapeHTML(article.title)}">
          <span class="tag">${escapeHTML(formatTags(article.tag))}</span>
          <h3>${escapeHTML(article.title)}</h3>
          <p>${escapeHTML(article.summary)}</p>
          <span class="card-cta">阅读全文</span>
        </a>
      `;
    })
    .join("");
};

const renderProjects = (projects) => {
  const list = document.querySelector('[data-list="projects"]');
  if (!list || !projects) return;

  list.innerHTML = projects
    .map((project) => {
      const cardContent = `
        <div class="project-icon" aria-hidden="true">${escapeHTML(project.icon)}</div>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.summary)}</p>
        <div class="project-meta">
          ${project.labels.map((label) => `<span>${escapeHTML(label)}</span>`).join("")}
        </div>
      `;

      if (project.url) {
        return `
          <a class="project-card card-link" href="${escapeHTML(safeURL(project.url))}" aria-label="查看项目：${escapeHTML(project.title)}">
            ${cardContent}
          </a>
        `;
      }

      return `
        <article class="project-card">
          ${cardContent}
        </article>
      `;
    })
    .join("");
};

const initContent = async () => {
  if (!content) return;

  document.title = `${content.name}｜Finance Notes & AI Builds`;
  setText('[data-content="name"]', content.name);
  setText('[data-content="initials"]', content.initials);
  setText('[data-content="title"]', content.title);
  setText('[data-content="subtitle"]', content.subtitle);
  setText('[data-content="contact"]', content.contact);

  renderArticles(content.articles);
  renderProjects(content.projects);

  content.notes = await loadNotes();
  renderNotes(content.notes);
  renderStats(getStats(content));
};

initContent();

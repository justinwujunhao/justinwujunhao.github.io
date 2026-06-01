const data = window.revenueComparisonData;

const relationshipLabels = {
  EQUIVALENT: "直接等同",
  SIMILAR: "相关对应",
  DIFFERENT: "存在差异",
  NO_MATCH: "无对应关系",
};

const diffLabels = {
  TERMINOLOGY: "术语差异",
  SCOPE: "范围差异",
  REQUIREMENT: "要求差异",
  EXAMPLE: "示例差异",
  OTHER: "其他差异",
};

const escapeHTML = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const normalize = (value) => String(value ?? "").toLowerCase();

const panel = document.querySelector("[data-revenue-stats-panel]");
const list = document.querySelector("[data-revenue-mapping-list]");
const resultCount = document.querySelector("[data-result-count]");
const relationshipFilter = document.querySelector("[data-filter-relationship]");
const diffFilter = document.querySelector("[data-filter-diff]");
const searchInput = document.querySelector("[data-filter-search]");

const renderStats = () => {
  if (!panel || !data) return;
  const prc = data.stats.articleCounts.PRC_GAAP || 0;
  const ifrs = data.stats.articleCounts.IFRS || 0;
  panel.innerHTML = `
    <div>
      <span>条文数量</span>
      <strong>${escapeHTML(prc)} 条 PRC / ${escapeHTML(ifrs)} 条 IFRS</strong>
    </div>
    <div>
      <span>映射关系</span>
      <strong>${escapeHTML(data.stats.mappingCount)} 组</strong>
    </div>
    <div>
      <span>差异点</span>
      <strong>${escapeHTML(data.stats.differenceCount)} 个</strong>
    </div>
  `;
};

const mappingContains = (mapping, keyword) => {
  if (!keyword) return true;
  const text = [
    mapping.source.number,
    mapping.source.content,
    ...mapping.mappedArticles.flatMap((article) => [article.number, article.content]),
    ...mapping.differences.flatMap((diff) => [
      diff.description,
      diff.sourceText,
      ...diff.comparisonSnippets.map((snippet) => snippet.snippet),
    ]),
  ].join(" ");
  return normalize(text).includes(keyword);
};

const hasDiffType = (mapping, type) =>
  type === "ALL" || mapping.differences.some((diff) => diff.type === type);

const filteredMappings = () => {
  const relationship = relationshipFilter?.value || "ALL";
  const diffType = diffFilter?.value || "ALL";
  const keyword = normalize(searchInput?.value || "").trim();

  return data.mappings.filter((mapping) => {
    const relationshipOK = relationship === "ALL" || mapping.relationship === relationship;
    return relationshipOK && hasDiffType(mapping, diffType) && mappingContains(mapping, keyword);
  });
};

const renderDiff = (diff, index) => `
  <details class="diff-detail">
    <summary>
      <span class="diff-chip diff-${escapeHTML(diff.type.toLowerCase())}">${escapeHTML(diffLabels[diff.type] || diff.type)}</span>
      <strong>差异 ${index + 1}</strong>
      <span>重要程度 ${"●".repeat(Number(diff.importance || 0))}</span>
    </summary>
    ${diff.description ? `<p>${escapeHTML(diff.description)}</p>` : ""}
    <div class="diff-snippets">
      <div>
        <b>${escapeHTML(diff.sourceFramework)}</b>
        <p>${escapeHTML(diff.sourceText)}</p>
      </div>
      ${diff.comparisonSnippets
        .map(
          (snippet) => `
            <div>
              <b>${escapeHTML(snippet.framework)}</b>
              <p>${escapeHTML(snippet.snippet)}</p>
            </div>
          `,
        )
        .join("")}
    </div>
  </details>
`;

const renderMapping = (mapping) => {
  const confidence = mapping.confidence ? `${Math.round(mapping.confidence * 100)}%` : "未标注";
  const mappedArticles = mapping.mappedArticles.length
    ? mapping.mappedArticles
        .map(
          (article) => `
            <article class="framework-column">
              <span>${escapeHTML(article.framework)}</span>
              <h4>${escapeHTML(article.number)}</h4>
              <p>${escapeHTML(article.content)}</p>
            </article>
          `,
        )
        .join("")
    : `<article class="framework-column muted-column"><span>IFRS</span><h4>无直接对应</h4><p>当前映射结果未找到可直接对应的 IFRS 条文。</p></article>`;

  return `
    <article class="comparison-card">
      <header class="comparison-card-header">
        <div>
          <p class="kicker">${escapeHTML(mapping.source.framework)} / ${escapeHTML(mapping.source.number)}</p>
          <h3>${escapeHTML(mapping.source.number)} 对比结果</h3>
        </div>
        <div class="comparison-card-flags">
          <span class="relationship relationship-${escapeHTML(mapping.relationship.toLowerCase())}">
            ${escapeHTML(relationshipLabels[mapping.relationship] || mapping.relationship)}
          </span>
          <span>置信度 ${escapeHTML(confidence)}</span>
          <span>${escapeHTML(mapping.differences.length)} 个差异点</span>
        </div>
      </header>
      <div class="framework-compare">
        <article class="framework-column source-column">
          <span>${escapeHTML(mapping.source.framework)}</span>
          <h4>${escapeHTML(mapping.source.number)}</h4>
          <p>${escapeHTML(mapping.source.content)}</p>
        </article>
        ${mappedArticles}
      </div>
      ${
        mapping.differences.length
          ? `<div class="diff-list">${mapping.differences.map(renderDiff).join("")}</div>`
          : `<p class="comparison-empty-note">该组映射暂无结构化差异点。</p>`
      }
    </article>
  `;
};

const render = () => {
  if (!data || !list) return;
  const mappings = filteredMappings();
  if (resultCount) {
    resultCount.textContent = `当前显示 ${mappings.length} / ${data.mappings.length} 组映射`;
  }
  list.innerHTML = mappings.length
    ? mappings.map(renderMapping).join("")
    : `<div class="comparison-empty-state"><h3>没有匹配的结果</h3><p>试着放宽关系类型、差异类型或关键词。</p></div>`;
};

renderStats();
render();
[relationshipFilter, diffFilter, searchInput].forEach((control) => {
  control?.addEventListener("input", render);
});

const SITE_DATA = {
  overview: {
    id: "overview",
    title: "비교 개요",
    docs: [
      {
        id: "idea",
        label: "뉴스레터 아이디어",
        file: "01.newsletter-idea.md",
        description: "3월호에서 동일 질문 기준 모델 비교를 다루자는 최초 제안 메일입니다.",
      },
      {
        id: "plan",
        label: "실험 설계안",
        file: "02.newsletter-plan.md",
        description: "실험 목적, 질문 세트, 평가 방법, 결론 구조를 정리한 상세 계획입니다.",
      },
      {
        id: "draft",
        label: "뉴스레터 초안",
        file: "03.Newsletter-draft.md",
        description: "실사용형 비교라는 메시지를 중심으로 다듬은 초안 본문입니다.",
      },
    ],
  },
  insights: {
    id: "insights",
    title: "AI 선택 가이드",
    heroLead:
      "이번 비교는 '어떤 모델이 절대적으로 최고인가'보다, 같은 질문을 넣었을 때 어떤 모델이 어떤 업무에서 더 설득력 있게 나오는지를 확인하는 데 의미가 있었습니다.",
    headline:
      "실무 기준으로 보면 GPT는 구조와 검증, Claude는 문장과 전달력, Gemini는 발산과 시안 초안에서 장점이 분명했습니다.",
    recommendations: [
      {
        work: "기획안, 실행안, 템플릿이 필요한 문서",
        model: "GPT 5.2",
        key: "gpt",
        reason:
          "두 아이디어 과제에서 표, 단계, KPI, 템플릿까지 가장 촘촘하게 정리했습니다. 바로 업무 초안으로 가져가기 쉬운 타입입니다.",
      },
      {
        work: "근거 보수성이 중요한 리서치",
        model: "GPT 5.2",
        key: "gpt",
        reason:
          "웹서칭 과제에서 근거가 부족한 OEM은 채우지 않고 한계를 먼저 밝혔습니다. 완성도보다 신뢰성을 우선할 때 유리합니다.",
      },
      {
        work: "설명문, 소개문, 읽기 쉬운 결과 정리",
        model: "CLAUDE Opus4.6",
        key: "claude",
        reason:
          "맥락 설명과 문장 흐름이 가장 안정적이었습니다. 결과를 사람에게 설득력 있게 전달하는 데 강했습니다.",
      },
      {
        work: "사내용 UI 초안, 균형 잡힌 HTML 결과물",
        model: "CLAUDE Opus4.6",
        key: "claude",
        reason:
          "대시보드와 소개 페이지 모두 정보 구조가 안정적이고 제품 화면처럼 정돈된 결과를 냈습니다.",
      },
      {
        work: "아이디어 확장, 시각적 콘셉트, 빠른 초안 발산",
        model: "GEMINI Pro 3.1",
        key: "gemini",
        reason:
          "초기 아이디어를 넓히거나 비주얼이 섞인 제안을 만들 때 가장 적극적이었습니다. 다만 문체와 정확도 편차는 더 확인이 필요했습니다.",
      },
    ],
    modelNotes: [
      {
        model: "GPT 5.2",
        key: "gpt",
        summary: "가장 무난한 기본 선택",
        detail: "구조화, 체크리스트, 프로세스 설계, 보수적 리서치에 강했습니다.",
      },
      {
        model: "CLAUDE Opus4.6",
        key: "claude",
        summary: "결과를 읽히게 만드는 모델",
        detail: "문장 품질, 스토리텔링, 화면 결과물의 완성도 균형이 좋았습니다.",
      },
      {
        model: "GEMINI Pro 3.1",
        key: "gemini",
        summary: "발산형 보조 모델",
        detail: "초기 브레인스토밍과 시각 제안에는 좋지만, 최종본 전 검토가 더 필요했습니다.",
      },
    ],
    decisionFlow: [
      "정확한 구조와 실행안이 먼저 필요하면 `GPT 5.2`부터 시작",
      "읽기 쉬운 문장과 소개형 결과물이 중요하면 `CLAUDE Opus4.6` 선택",
      "아이디어를 많이 벌리거나 비주얼 시안을 보고 싶으면 `GEMINI Pro 3.1` 병행",
    ],
    note:
      "이 가이드는 모델 자체의 절대 성능이 아니라, 현재 wrks.ai 환경에서 이번 샘플 과제 5건을 비교한 체감 결과를 압축한 것입니다.",
  },
  tasks: [
    {
      id: "task1",
      label: "전사 AI 활용 과제 제안",
      group: "아이디어 제안",
      type: "markdown",
      description:
        "전장부품 회사 전사 관점에서 우선 추진할 수 있는 AI 활용 과제 10개를 모델별로 비교합니다.",
      queryPath: "task1/task1-qeury.md",
      outputs: [
        { model: "GPT 5.2", key: "gpt", kind: "markdown", path: "task1/task1-gpt.md" },
        { model: "CLAUDE Opus4.6", key: "claude", kind: "markdown", path: "task1/task1-claude.md" },
        { model: "GEMINI Pro 3.1", key: "gemini", kind: "markdown", path: "task1/task1-gemini.md" },
      ],
    },
    {
      id: "task2",
      label: "RFQ 대응 프로세스 개선안",
      group: "아이디어 제안",
      type: "markdown",
      description:
        "RFQ 대응 과정의 병목을 AI와 표준 템플릿으로 개선하는 방안을 모델별로 비교합니다.",
      queryPath: "task2/task2-qeury.md",
      outputs: [
        { model: "GPT 5.2", key: "gpt", kind: "markdown", path: "task2/task2-gpt.md" },
        { model: "CLAUDE Opus4.6", key: "claude", kind: "markdown", path: "task2/task2-claude.md" },
        { model: "GEMINI Pro 3.1", key: "gemini", kind: "markdown", path: "task2/task2-gemini.md" },
      ],
    },
    {
      id: "websearch",
      label: "OEM 디지털 콕핏 리서치",
      group: "웹서칭",
      type: "markdown",
      description:
        "최근 12개월 기준 글로벌 OEM의 인포테인먼트·디지털 콕핏 전략 변화를 조사한 결과를 비교합니다.",
      queryPath: "websearch/websearch-query.md",
      outputs: [
        { model: "GPT 5.2", key: "gpt", kind: "markdown", path: "websearch/websearch-gpt.md.md" },
        { model: "CLAUDE Opus4.6", key: "claude", kind: "markdown", path: "websearch/websearch-claude.md" },
        { model: "GEMINI Pro 3.1", key: "gemini", kind: "markdown", path: "websearch/websearch-gemini.md" },
      ],
    },
    {
      id: "websearch2",
      label: "Tier-1 디지털 콕핏 전략 슬라이드",
      group: "웹서칭",
      type: "html",
      description:
        "주요 Tier-1 업체의 인포테인먼트·디지털 콕핏·HMI 전략을 HTML 슬라이드 형태로 비교합니다.",
      queryPath: "websearch2/websearch2-query.md",
      outputs: [
        { model: "GPT 5.2", key: "gpt", kind: "html", path: "websearch2/websearch2-gpt.html" },
        { model: "CLAUDE Opus4.6", key: "claude", kind: "html", path: "websearch2/websearch2-claude.html" },
        { model: "GEMINI Pro 3.1", key: "gemini", kind: "html", path: "websearch2/websearch2-gemini.html" },
      ],
    },
    {
      id: "html",
      label: "프로젝트 현황 대시보드 생성",
      group: "HTML 작성",
      type: "html",
      description:
        "프로젝트 현황을 보여주는 반응형 HTML 대시보드를 모델별 결과물로 비교합니다.",
      queryPath: "html/html-query.md",
      outputs: [
        { model: "GPT 5.2", key: "gpt", kind: "html", path: "html/html-gpt.html" },
        { model: "CLAUDE Opus4.6", key: "claude", kind: "html", path: "html/html-claude.html" },
        { model: "GEMINI Pro 3.1", key: "gemini", kind: "html", path: "html/html-gemini.html" },
      ],
    },
    {
      id: "html2",
      label: "뉴스레터 소개 페이지 생성",
      group: "HTML 작성",
      type: "html",
      description:
        "사내 AI 뉴스레터 소개 페이지를 단일 HTML로 생성한 결과를 모델별로 비교합니다.",
      queryPath: "html2/html2-query.md",
      outputs: [
        { model: "GPT 5.2", key: "gpt", kind: "html", path: "html2/html2-gpt.html" },
        { model: "CLAUDE Opus4.6", key: "claude", kind: "html", path: "html2/html2-claude.html" },
        { model: "GEMINI Pro 3.1", key: "gemini", kind: "html", path: "html2/html2-gemini.html" },
      ],
    },
  ],
};

const state = {
  route: parseHash(),
  contentCache: new Map(),
  controls: {},
  renderToken: 0,
  pendingScrollTaskId: null,
};

const navTree = document.getElementById("navTree");
const pageTitle = document.getElementById("pageTitle");
const breadcrumb = document.getElementById("breadcrumb");
const heroPanel = document.getElementById("heroPanel");
const controlsPanel = document.getElementById("controlsPanel");
const queryPanel = document.getElementById("queryPanel");
const workspace = document.getElementById("workspace");

window.addEventListener("hashchange", () => {
  state.route = parseHash();
  render();
});

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  render();
});

function parseHash() {
  const hash = window.location.hash.replace(/^#/, "").trim();
  if (!hash || hash === "overview") {
    return { page: "overview" };
  }
  if (hash === "insights") {
    return { page: "insights" };
  }
  const match = hash.match(/^task\/([a-z0-9-]+)$/i);
  if (match) {
    return { page: "task", id: match[1] };
  }
  return { page: "overview" };
}

function renderNav() {
  const groups = [
    {
      title: "Overview",
      items: [
        {
          href: "#overview",
          label: "비교 개요",
          isActive: state.route.page === "overview",
        },
        {
          href: "#insights",
          label: "AI 선택 가이드",
          isActive: state.route.page === "insights",
        },
      ],
    },
    ...groupTasks(),
  ];

  navTree.innerHTML = groups
    .map(
      (group) => `
        <section class="nav-group">
          <h2 class="nav-group__title">${escapeHtml(group.title)}</h2>
          <div class="nav-group__list">
            ${group.items
              .map(
                (item) => `
                  <a class="nav-link ${item.isActive ? "is-active" : ""}" href="${item.href}">
                    <span class="nav-link__title">${escapeHtml(item.label)}</span>
                  </a>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");
}

function groupTasks() {
  const grouped = new Map();
  SITE_DATA.tasks.forEach((task) => {
    if (!grouped.has(task.group)) {
      grouped.set(task.group, []);
    }
    grouped.get(task.group).push(task);
  });

  return Array.from(grouped.entries()).map(([title, tasks]) => ({
    title,
    items: tasks.map((task) => ({
      href: `#task/${task.id}`,
      label: task.label,
      isActive: state.route.page === "task" && state.route.id === task.id,
    })),
  }));
}

async function render() {
  const token = ++state.renderToken;
  renderNav();

  if (state.route.page === "task") {
    const task = SITE_DATA.tasks.find((item) => item.id === state.route.id);
    if (!task) {
      state.route = { page: "overview" };
      window.location.hash = "#overview";
      return;
    }
    await renderTask(task, token);
    return;
  }

  if (state.route.page === "insights") {
    await renderInsights(token);
    return;
  }

  await renderOverview(token);
}

async function renderOverview(token) {
  breadcrumb.textContent = "Overview";
  pageTitle.textContent = SITE_DATA.overview.title;
  heroPanel.hidden = true;
  heroPanel.innerHTML = "";
  workspace.classList.remove("workspace--tabbed");
  workspace.classList.remove("workspace--insights");
  workspace.classList.add("workspace--overview");
  controlsPanel.hidden = true;
  controlsPanel.innerHTML = "";
  queryPanel.hidden = true;
  queryPanel.innerHTML = "";
  queryPanel.classList.remove("content-section--query");

  workspace.innerHTML = renderLoading();

  if (token !== state.renderToken || state.route.page !== "overview") {
    return;
  }

  const grouped = Array.from(
    SITE_DATA.tasks.reduce((map, task) => {
      if (!map.has(task.group)) {
        map.set(task.group, []);
      }
      map.get(task.group).push(task);
      return map;
    }, new Map()).entries()
  );

  const structureRows = grouped
    .map(
      ([group, tasks]) => `
        <tr>
          <td>${escapeHtml(group)}</td>
          <td>${tasks.map((task) => `<a href="#task/${task.id}">${escapeHtml(task.label)}</a>`).join("<br>")}</td>
          <td>${escapeHtml(
            group === "아이디어 제안"
              ? "실무 적용형 질문에 대한 모델별 제안 결과 비교"
              : group === "HTML 작성"
                ? "완성형 HTML 산출물을 선택 탭으로 비교"
                : "웹 조사형 질문과 응답 구조 비교"
          )}</td>
        </tr>
      `
    )
    .join("");

  workspace.innerHTML = `
    <section class="overview-grid">
      <article class="content-section">
        <div class="content-section__header">
          <div>
            <p class="section-label">Overview</p>
          </div>
        </div>
        <div class="content-section__body markdown-body">
          <img class="overview-intro-image" src="intro.png" alt="비교 개요 소개 이미지">
          <p>아이디어 정리, HTML 작성, 웹 리서치처럼 상황에 따라 어떤 모델들이 답변을 더 잘하는지 비교해보세요</p>
        </div>
      </article>

      <article class="content-section">
        <div class="table-wrap">
          <table class="meta-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>포함된 비교</th>
                <th>비교 방식</th>
              </tr>
            </thead>
            <tbody>${structureRows}</tbody>
          </table>
        </div>
      </article>
    </section>
  `;
}

async function renderTask(task, token) {
  if (!state.controls[task.id]) {
    state.controls[task.id] = {
      focus: task.outputs[0]?.key || "",
      layout: "single",
    };
  }

  const controls = state.controls[task.id];
  const selectedOutput =
    task.outputs.find((output) => output.key === controls.focus) || task.outputs[0];

  breadcrumb.textContent = task.group;
  pageTitle.textContent = task.label;
  heroPanel.hidden = true;
  heroPanel.innerHTML = "";
  workspace.classList.remove("workspace--overview");
  workspace.classList.remove("workspace--insights");
  workspace.classList.add("workspace--tabbed");

  renderControls(task);
  workspace.innerHTML = renderLoading();
  queryPanel.hidden = false;
  queryPanel.innerHTML = renderLoading();

  const [queryText, outputPayloads] = await Promise.all([
    loadFile(task.queryPath),
    Promise.all(
      task.outputs.map(async (output) => ({
        ...output,
        content: await loadFile(output.path),
      }))
    ),
  ]);

  if (token !== state.renderToken || state.route.page !== "task" || state.route.id !== task.id) {
    return;
  }

  queryPanel.innerHTML = `
    <div class="query-note__pin" aria-hidden="true"></div>
    <p class="section-label">입력 프롬프트</p>
    <div class="content-section__body markdown-body">${renderMarkdown(queryText, { preserveLineBreaks: true })}</div>
  `;
  queryPanel.classList.add("content-section--query");

  renderTaskWorkspace(task, selectedOutput, outputPayloads, controls.layout);

  if (state.pendingScrollTaskId === task.id) {
    state.pendingScrollTaskId = null;
    scrollToWorkspaceTop();
  }
}

async function renderInsights(token) {
  const insights = SITE_DATA.insights;

  breadcrumb.textContent = "Overview";
  pageTitle.textContent = insights.title;
  heroPanel.hidden = false;
  workspace.classList.remove("workspace--tabbed");
  workspace.classList.remove("workspace--overview");
  workspace.classList.add("workspace--insights");
  controlsPanel.hidden = true;
  controlsPanel.innerHTML = "";
  queryPanel.hidden = true;
  queryPanel.innerHTML = "";
  queryPanel.classList.remove("content-section--query");

  heroPanel.innerHTML = `
    <p class="section-label">Conclusion</p>
    <p class="hero-panel__lead">${escapeHtml(insights.heroLead)}</p>
    <div class="guide-callout">
      <strong>${escapeHtml(insights.headline)}</strong>
    </div>
  `;

  workspace.innerHTML = renderLoading();

  if (token !== state.renderToken || state.route.page !== "insights") {
    return;
  }

  workspace.innerHTML = `
    <section class="guide-grid">
      <article class="content-section">
        <div class="content-section__header">
          <div>
            <p class="section-label">Pick First</p>
            <h3 class="content-section__title">이런 작업엔 이런 AI</h3>
          </div>
        </div>
        <div class="table-wrap">
          <table class="meta-table guide-table">
            <thead>
              <tr>
                <th>작업 유형</th>
                <th>우선 추천</th>
                <th>판단 이유</th>
              </tr>
            </thead>
            <tbody>
              ${insights.recommendations
                .map(
                  (entry) => `
                    <tr>
                      <td>${escapeHtml(entry.work)}</td>
                      <td>
                        <span class="model-pill model-pill--${escapeAttribute(entry.key)}">
                          ${escapeHtml(entry.model)}
                        </span>
                      </td>
                      <td>${escapeHtml(entry.reason)}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </article>

      <article class="content-section">
        <div class="content-section__header">
          <div>
            <p class="section-label">Model Notes</p>
            <h3 class="content-section__title">모델별 한 줄 판단</h3>
          </div>
        </div>
        <div class="guide-notes">
          ${insights.modelNotes
            .map(
              (note) => `
                <div class="guide-note">
                  <div class="guide-note__header">
                    <span class="model-pill model-pill--${escapeAttribute(note.key)}">${escapeHtml(note.model)}</span>
                    <strong>${escapeHtml(note.summary)}</strong>
                  </div>
                  <p>${escapeHtml(note.detail)}</p>
                </div>
              `
            )
            .join("")}
        </div>
      </article>

      <article class="content-section">
        <div class="content-section__header">
          <div>
            <p class="section-label">Quick Guide</p>
            <h3 class="content-section__title">빠르게 고르려면</h3>
          </div>
        </div>
        <div class="guide-decision">
          ${insights.decisionFlow
            .map(
              (item, index) => `
                <div class="guide-step">
                  <span class="guide-step__index">${index + 1}</span>
                  <p>${renderInline(item)}</p>
                </div>
              `
            )
            .join("")}
        </div>
        <p class="guide-footnote">${escapeHtml(insights.note)}</p>
      </article>
    </section>
  `;
}

function renderControls(task) {
  const controls = state.controls[task.id];

  controlsPanel.hidden = false;
  controlsPanel.innerHTML = `
    <div class="controls-row">
      <div class="model-tabs" role="tablist" aria-label="모델 선택">
        ${task.outputs
          .map(
            (output) => `
              <button
                type="button"
                class="model-tab ${controls.focus === output.key ? "is-active" : ""}"
                data-task="${task.id}"
                data-control="focus"
                data-value="${output.key}"
                data-model="${output.key}"
                role="tab"
                aria-selected="${String(controls.focus === output.key)}"
              >
                ${escapeHtml(output.model)}
              </button>
            `
          )
          .join("")}
      </div>
      ${renderCompareToggle(task.id, controls.layout)}
    </div>
  `;

  controlsPanel.querySelectorAll("button[data-control]").forEach((button) => {
    button.addEventListener("click", () => {
      const taskId = button.dataset.task;
      const control = button.dataset.control;
      const value = button.dataset.value;
      state.pendingScrollTaskId = taskId;
      state.controls[taskId].layout = "single";
      state.controls[taskId][control] = value;
      render();
    });
  });

  controlsPanel.querySelectorAll("[data-task-action='toggle-layout']").forEach((button) => {
    button.addEventListener("click", () => {
      state.pendingScrollTaskId = task.id;
      state.controls[task.id].layout = button.dataset.layout;
      render();
    });
  });
}

function renderTaskWorkspace(task, selectedOutput, outputPayloads, layout) {
  if (task.type === "markdown") {
    renderMarkdownWorkspace(task, selectedOutput, outputPayloads, layout);
  } else {
    renderHtmlWorkspace(task, selectedOutput, outputPayloads, layout);
  }
}

function renderMarkdownWorkspace(task, selectedOutput, outputPayloads, layout) {
  const payloadMap = new Map(outputPayloads.map((payload) => [payload.key, payload]));
  const isCompareAll = layout === "compare-all";
  const panels = isCompareAll
    ? outputPayloads
        .map(
          (payload) => `
            <article class="compare-panel compare-panel--${escapeAttribute(payload.key)}">
              <div class="compare-panel__label">${escapeHtml(payload.model)}</div>
              <div class="compare-panel__body markdown-body">
                ${renderMarkdown(payload.content)}
              </div>
            </article>
          `
        )
        .join("")
    : `
        <article class="compare-panel compare-panel--${escapeAttribute(selectedOutput.key)}">
          <div class="compare-panel__body markdown-body">
            ${renderMarkdown(payloadMap.get(selectedOutput.key).content)}
          </div>
        </article>
      `;

  workspace.innerHTML = `
    <section class="workspace-grid ${isCompareAll ? "workspace-grid--compare-all" : ""}" data-columns="${isCompareAll ? "3" : "1"}" data-layout="${escapeAttribute(layout)}">
      ${panels}
    </section>
  `;
}

function renderHtmlWorkspace(task, selectedOutput, outputPayloads, layout) {
  const payloadMap = new Map(outputPayloads.map((payload) => [payload.key, payload]));
  const isCompareAll = layout === "compare-all";
  const panels = isCompareAll
    ? outputPayloads
        .map(
          (payload) => `
            <article class="compare-panel compare-panel--${escapeAttribute(payload.key)}">
              <div class="compare-panel__label">${escapeHtml(payload.model)}</div>
              <div class="compare-panel__body compare-panel__body--html">
                <iframe class="preview-frame" src="${buildPreviewSrc(payload.path)}" title="${escapeHtml(payload.model)} preview"></iframe>
              </div>
            </article>
          `
        )
        .join("")
    : `
        <article class="compare-panel compare-panel--${escapeAttribute(selectedOutput.key)}">
          <div class="compare-panel__body compare-panel__body--html">
            <iframe class="preview-frame" src="${buildPreviewSrc(selectedOutput.path)}" title="${escapeHtml(selectedOutput.model)} preview"></iframe>
          </div>
        </article>
      `;

  workspace.innerHTML = `
    <section class="workspace-grid ${isCompareAll ? "workspace-grid--compare-all" : ""}" data-columns="${isCompareAll ? "3" : "1"}" data-layout="${escapeAttribute(layout)}">
      ${panels}
    </section>
  `;
}

function buildPreviewSrc(path) {
  const separator = path.includes("?") ? "&" : "?";
  return `${encodeURI(path)}${separator}v=${state.renderToken}`;
}

function renderCompareToggle(taskId, layout) {
  const label = layout === "compare-all" ? "한 개씩 보기" : "한꺼번에 비교하기";
  return `
    <button
      type="button"
      class="compare-toggle"
      data-task-action="toggle-layout"
      data-task="${taskId}"
      data-layout="${layout === "compare-all" ? "single" : "compare-all"}"
    >
      ${label}
    </button>
  `;
}

function scrollToWorkspaceTop() {
  const workspaceGrid = workspace.querySelector(".workspace-grid");
  if (!workspaceGrid) {
    return;
  }

  const controlsHeight = controlsPanel.hidden ? 0 : controlsPanel.getBoundingClientRect().height;
  const topOffset = controlsHeight + 18;
  const targetTop = window.scrollY + workspaceGrid.getBoundingClientRect().top - topOffset;

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: "auto",
  });
}

async function loadFile(path) {
  if (state.contentCache.has(path)) {
    return state.contentCache.get(path);
  }

  const response = await fetch(path, { cache: "no-cache" });
  if (!response.ok) {
    const fallback = `파일을 불러오지 못했습니다: ${path}`;
    state.contentCache.set(path, fallback);
    return fallback;
  }

  const text = await response.text();
  state.contentCache.set(path, text);
  return text;
}

function renderLoading() {
  return document.getElementById("loadingTemplate").innerHTML;
}

function extractPreview(content) {
  return content
    .replace(/[#>*`\-\[\]!|]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180);
}

function renderMarkdown(markdown, options = {}) {
  const preserveLineBreaks = Boolean(options.preserveLineBreaks);
  const normalized = markdown.replace(/\r\n/g, "\n");
  const lines = normalized.split("\n");
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (/^```/.test(line.trim())) {
      const language = line.trim().slice(3).trim();
      index += 1;
      const codeLines = [];
      while (index < lines.length && !/^```/.test(lines[index].trim())) {
        codeLines.push(lines[index]);
        index += 1;
      }
      index += 1;
      blocks.push(`<pre><code class="language-${escapeHtml(language)}">${escapeHtml(codeLines.join("\n"))}</code></pre>`);
      continue;
    }

    if (/^---+$/.test(line.trim()) || /^\*\*\*+$/.test(line.trim())) {
      blocks.push("<hr>");
      index += 1;
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      blocks.push(`<h${level}>${renderInline(headingMatch[2].trim())}</h${level}>`);
      index += 1;
      continue;
    }

    if (isTableStart(lines, index)) {
      const tableLines = [lines[index], lines[index + 1]];
      index += 2;
      while (index < lines.length && /\|/.test(lines[index])) {
        tableLines.push(lines[index]);
        index += 1;
      }
      blocks.push(renderTable(tableLines));
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quoteLines = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) {
        quoteLines.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }
      blocks.push(`<blockquote>${quoteLines.map((quote) => `<p>${renderInline(quote)}</p>`).join("")}</blockquote>`);
      continue;
    }

    if (/^\s*[-+*]\s+/.test(line) || /^\s*\d+\.\s+/.test(line)) {
      const listResult = renderList(lines, index);
      blocks.push(listResult.html);
      index = listResult.nextIndex;
      continue;
    }

    const paragraphLines = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{1,6})\s+/.test(lines[index]) &&
      !/^```/.test(lines[index].trim()) &&
      !/^>\s?/.test(lines[index]) &&
      !/^\s*[-+*]\s+/.test(lines[index]) &&
      !/^\s*\d+\.\s+/.test(lines[index]) &&
      !isTableStart(lines, index) &&
      !/^---+$/.test(lines[index].trim()) &&
      !/^\*\*\*+$/.test(lines[index].trim())
    ) {
      paragraphLines.push(lines[index]);
      index += 1;
    }
    const paragraphHtml = preserveLineBreaks
      ? paragraphLines.map((line) => renderInline(line.trim())).join("<br>")
      : renderInline(paragraphLines.join(" ").trim());
    blocks.push(`<p>${paragraphHtml}</p>`);
  }

  return blocks.join("");
}

function renderList(lines, startIndex) {
  const ordered = /^\s*\d+\.\s+/.test(lines[startIndex]);
  const tag = ordered ? "ol" : "ul";
  const items = [];
  let index = startIndex;

  while (index < lines.length) {
    const line = lines[index];
    const pattern = ordered ? /^\s*\d+\.\s+(.*)$/ : /^\s*[-+*]\s+(.*)$/;
    const match = line.match(pattern);
    if (!match) {
      break;
    }
    items.push(`<li>${renderInline(match[1].trim())}</li>`);
    index += 1;
  }

  return {
    html: `<${tag}>${items.join("")}</${tag}>`,
    nextIndex: index,
  };
}

function isTableStart(lines, index) {
  const current = lines[index];
  const next = lines[index + 1];
  return Boolean(current && next && /\|/.test(current) && /^\s*\|?[\s:-]+(\|[\s:-]+)+\|?\s*$/.test(next));
}

function renderTable(tableLines) {
  const rows = tableLines.map((line) => splitTableRow(line));
  const header = rows[0];
  const body = rows.slice(2);

  return `
    <table>
      <thead>
        <tr>${header.map((cell) => `<th>${renderInline(cell)}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${body
          .map(
            (row) => `
              <tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function renderInline(text) {
  let html = escapeHtml(text);
  html = html.replace(/&lt;br\s*\/?&gt;/gi, "<br>");
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) => {
    return `<img src="${escapeAttribute(src.trim())}" alt="${escapeAttribute(alt)}">`;
  });
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    return `<a href="${escapeAttribute(href.trim())}" target="_blank" rel="noreferrer">${label}</a>`;
  });
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  html = html.replace(/~~([^~]+)~~/g, "<del>$1</del>");
  return html;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

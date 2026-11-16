const projects = [
  {
    category: 'skill', type: 'Coze Skill', year: '2026',
    title: { zh: '运营管理 · 库存管理进阶', en: 'Operations · Advanced Inventory' },
    subtitle: { zh: '在需求、补货节奏与服务水平之间做可解释的权衡。', en: 'Make replenishment and service-level trade-offs explicit.' },
    description: {
      zh: '面向采购、仓储与供应网络决策，覆盖周期检查、联合补货、风险期需求、安全库存和网络库存比较。强调输入边界、单位一致性与舍入后的策略复核。',
      en: 'A decision aid for purchasing, warehousing and supply networks. It covers periodic review, joint replenishment, risk-period demand, safety stock and network comparisons, with explicit input boundaries and post-rounding checks.'
    },
    evidence: { zh: '案例结构：定期复审 / 联合订货 / 多级库存 / 风险池化 / 平方根估算；包含单位、服务水平、相关性与取整后的策略复核。', en: 'Case structure: periodic review, joint ordering, multi-echelon inventory, risk pooling and square-root estimates, with unit, service, correlation and post-rounding checks.' },
    tags: ['Inventory policy', 'Safety stock', 'Network planning'], link: 'https://xiaping.coze.com/skill/1d6b864c-eeb4-453c-95e0-ea80008c7a74'
  },
  {
    category: 'skill', type: 'Coze Skill', year: '2026',
    title: { zh: '运营管理 · 销售与运营协同计划', en: 'Operations · Sales & Operations Planning' },
    subtitle: { zh: '从需求计划到资源约束，建立跨期运营决策链。', en: 'Connect demand plans with capacity and resource decisions.' },
    description: {
      zh: '比较均衡与追逐策略，构建人员和产能计划，分析 ATP、服务能力与收益管理问题。输入校验和模型边界清晰呈现，避免将计划结果误当作自动执行指令。',
      en: 'Compare level and chase plans, optimize workforce and capacity, and assess ATP, service capacity and revenue-management decisions. Input checks and model limits are surfaced so a plan is not mistaken for an automatic execution instruction.'
    },
    evidence: { zh: '产品边界：输出用于辅助方案比较；输入或关键假设不足时提示补充，不将计划结果表述为自动执行指令。', en: 'Product boundary: outputs support scenario comparison; missing inputs or assumptions are surfaced, and plans are not presented as automatic execution instructions.' },
    tags: ['S&OP', 'Linear optimization', 'ATP'], link: 'https://xiaping.coze.com/skill/40123989-e6fa-49e5-9d66-5b08f941e9ab'
  },
  {
    category: 'skill', type: 'Coze Skill', year: '2026',
    title: { zh: "Little's Law · 产能与流程分析", en: "Little's Law · Capacity & Flow" },
    subtitle: { zh: '把 WIP、吞吐率、周期时间和瓶颈放在同一套分析里。', en: 'Read WIP, throughput, cycle time and bottlenecks together.' },
    description: {
      zh: '用于制造、服务、仓储或软件交付流程，包含 Little’s Law、多阶段产能、瓶颈、OEE、节拍和情景比较。区分名义产能与有效良品产能，不把筛查结果夸大为交付保证。',
      en: 'For manufacturing, services, warehousing or software delivery. The analyzer covers Little’s Law, multi-stage capacity, bottlenecks, OEE, takt time and scenarios, separating nominal capacity from effective good capacity.'
    },
    evidence: { zh: '验证边界：区分名义产能与有效良品产能；计算结果用于流程筛查，不替代现场测量与交付承诺。', en: 'Validation boundary: nominal capacity is separated from effective good capacity; results support screening, not plant measurement or delivery commitments.' },
    tags: ['Little’s Law', 'Bottleneck analysis', 'OEE'], link: 'https://xiaping.coze.com/skill/b9c955bc-863a-4934-84c1-61a9ecd92fe6?ref=b147c0a0-c4a8-4764-a9eb-44bdbf2f8032'
  },
  {
    category: 'skill', type: 'Coze Skill', year: '2026',
    title: { zh: '运营管理 · 需求预测', en: 'Operations · Demand Forecasting' },
    subtitle: { zh: '预测方法与误差监控放在同一个决策流程中。', en: 'Bring forecasting methods and error monitoring into one workflow.' },
    description: {
      zh: '支持朴素法、移动平均、指数平滑、趋势、季节性与回归方法，并计算 MAD、MAPD、偏差和跟踪信号。先确定目标、时间粒度与数据边界，再选择方法。',
      en: 'Supports naive, moving-average, exponential-smoothing, trend, seasonal and regression methods, with MAD, MAPD, bias and tracking signal. It establishes the target, time bucket and data boundary before method selection.'
    },
    tags: ['Time series', 'Forecast accuracy', 'Bias control'], link: 'https://xiaping.coze.com/skill/8fbe5c9a-2285-4ce7-9fc1-1e60271c948b'
  },
  {
    category: 'skill', type: 'Coze Skill', year: '2026',
    title: { zh: '运营管理 · 库存管理', en: 'Operations · Inventory Management' },
    subtitle: { zh: '先识别库存决策类型，再选择合适的补货模型。', en: 'Classify the inventory decision before choosing a model.' },
    description: {
      zh: '涵盖库存分类、独立与相关需求判断、单周期订货、EOQ、再订货点、安全库存和服务水平。对关键输入与模型适用条件进行校验，避免把 EOQ 用于相关需求。',
      en: 'Covers inventory classification, independent versus dependent demand, single-period ordering, EOQ, reorder points, safety stock and service levels. Input and model checks help prevent using EOQ for dependent demand.'
    },
    tags: ['EOQ / ROP', 'Service level', 'Model selection'], link: 'https://xiaping.coze.com/skill/f9634879-22c6-41da-add3-e3fe3dd7c68b'
  },
  {
    category: 'course', type: 'Engineering Management', year: '2026',
    title: { zh: '投资组合优化与样本外回测', en: 'Portfolio Optimization & Out-of-Sample Testing' },
    subtitle: { zh: '比较收益、风险与交易约束，而非只看单一绩效指标。', en: 'Compare returns, risk and trading constraints beyond one score.' },
    description: {
      zh: '基于 50 项资产构建组合优化与回测流程，比较允许做空的最大夏普、最小方差等策略；使用季度扩展窗口和一周执行延迟，并完成 26 组敏感性情景。2025 年最大夏普组合累计收益 28.94%、夏普 1.572、最大回撤 −8.30%；最小方差组合夏普更高（2.481）、回撤更低（−3.17%）。报告明确标注成本假设、权重漂移和上游筛选对样本外独立性的限制。',
      en: 'Built an optimization and backtest workflow across 50 assets, comparing maximum-Sharpe and minimum-variance strategies. With quarterly expanding windows, a one-week execution delay and 26 sensitivity scenarios, the 2025 short-enabled maximum-Sharpe portfolio returned 28.94% with a 1.572 Sharpe and −8.30% maximum drawdown. Minimum variance had a higher Sharpe (2.481) and lower drawdown (−3.17%). The study documents cost assumptions, weight drift and limits to holdout independence.'
    },
    tags: ['Portfolio optimization', 'Backtesting', 'Sensitivity analysis'], detail: { zh: '团队项目 · 组员4：组合优化、样本外回测、敏感性分析与绩效解读', en: 'Team project · Member 4: optimization, out-of-sample testing, sensitivity analysis and interpretation' }
  },
  {
    category: 'course', type: 'Engineering Management', year: '2026',
    title: { zh: '德国电力系统 · 24 小时利润调度', en: 'German Power System · 24-Hour Profit Dispatch' },
    subtitle: { zh: '将储能、常规机组与购电选择转化为小时级优化模型。', en: 'Model hourly choices across storage, generation and imports.' },
    description: {
      zh: '以满足 24 小时供需平衡为约束，在给定电价与机组成本下最小化系统成本（等价于最大化净利润）；显式处理储能状态转移、机组容量和期末储能下限。结论仅适用于课程数据与设定。',
      en: 'A 24-hour dispatch model that minimizes system cost (equivalent to maximizing net profit under the fixed demand and prices), subject to hourly balance, storage transitions, generation capacity and a terminal storage floor. Conclusions are limited to the course data and assumptions.'
    },
    tags: ['JuMP', 'HiGHS', 'Energy systems'], detail: { zh: '模型结果与边界以课程数据及设定为准', en: 'Results and limits follow the supplied course data and assumptions' }
  },
  {
    category: 'course', type: 'Strategy & Innovation', year: '2026',
    title: { zh: '华为 · 战略规划与创新管理案例', en: 'Huawei · Strategy & Innovation Case' },
    subtitle: { zh: '用工程管理视角分析战略、创新机制与资源协同。', en: 'Examine strategy, innovation mechanisms and resource coordination.' },
    description: {
      zh: '参与解释性单案例研究，基于二手资料三角验证，围绕华为战略规划、创新管理和工程密集型业务展开。个人负责 Chapter 1 Introduction、统稿与提交检查清单及 P1 贡献内容。',
      en: 'Contributed to an explanatory single-case study using secondary-source triangulation to examine strategy, innovation management and engineering-intensive operations. Personal contribution: Chapter 1 introduction, integration and submission checklist, and P1 contribution materials.'
    },
    tags: ['Case study', 'Innovation management', 'Research synthesis'], detail: { zh: '课程团队项目 · P1 负责内容', en: 'Course team project · P1 contribution' }
  },
  {
    category: 'work', type: 'Internal PoC · Not in production', year: '2025',
    title: { zh: 'Coze 内部平台与 AI Agent PoC', en: 'Internal Coze Platform & AI Agent PoC' },
    subtitle: { zh: '验证开源 Agent 平台与企业内部工具连接的技术路径。', en: 'Explored a technical path for connecting an open-source Agent platform to enterprise tools.' },
    description: {
      zh: '参与内部 Coze 平台部署和 MCP 扩展，使用 Go 探索内部接口调用，在开发环境完成工具接入、部署与演示。受安全与合规限制，项目未进入生产环境；后续因项目优先级调整而搁置。',
      en: 'Contributed to internal Coze deployment and MCP extensions, using Go to explore internal API access and completing tool integration, deployment and demo in a development environment. Due to security and compliance constraints, it did not enter production and was later deprioritized.'
    },
    tags: ['Go', 'MCP', 'Internal tools'], detail: { zh: '个人职责：工具接入、开发、部署与项目组演示', en: 'Role: tool integration, development, deployment and team demo' }, status: { zh: '仅开发环境验证', en: 'Development environment only' }
  }
];

let language = 'zh';

function renderProjects(filter = 'all') {
  const list = document.querySelector('#project-list');
  const visibleProjects = projects.filter(project => filter === 'all' || project.category === filter);
  list.innerHTML = visibleProjects.map((project, index) => {
    const title = project.title[language];
    const subtitle = project.subtitle[language];
    const description = project.description[language];
    const evidence = project.evidence?.[language];
    const details = project.detail?.[language];
    const status = project.status?.[language];
    const link = project.link
      ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer"><span>${language === 'zh' ? '打开作品' : 'Open project'}</span><span aria-hidden="true">↗</span></a>`
      : `<span class="project-status">${status || (language === 'zh' ? '课程研究' : 'Course research')}</span>`;
    return `<article class="project-row" data-category="${project.category}">
      <div class="project-number">${String(index + 1).padStart(2, '0')}</div>
      <div class="project-body"><span class="project-type">${project.type}</span><h3>${title}</h3><p class="project-subtitle">${subtitle}</p><p class="project-description">${description}</p>${evidence ? `<p class="project-evidence"><span>${language === 'zh' ? '方法 / 边界' : 'METHOD / SCOPE'}</span>${evidence}</p>` : ""}${details ? `<p class="project-contribution">${details}</p>` : ""}<div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div></div>
      <div class="project-aside"><span class="project-year">${project.year}</span>${link}</div>
    </article>`;
  }).join('');
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  try { localStorage.setItem('portfolio-language', language); } catch {}
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-cn][data-en]').forEach(element => {
    element.textContent = element.dataset[language === 'zh' ? 'cn' : 'en'];
  });
  const toggle = document.querySelector('.language-toggle');
  toggle.dataset.lang = language;
  toggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
  renderProjects(document.querySelector('.filter-button.is-active')?.dataset.filter || 'all');
}

document.querySelector('.language-toggle').addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));
document.querySelectorAll('.filter-button').forEach(button => {
  button.setAttribute('aria-pressed', String(button.classList.contains('is-active')));
  button.addEventListener('click', () => {
    document.querySelector('.filter-button.is-active')?.classList.remove('is-active');
    button.classList.add('is-active');
    document.querySelectorAll('.filter-button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    renderProjects(button.dataset.filter);
  });
});

const resumeTrigger = document.querySelector('.resume-trigger');
const resumeOptions = document.querySelector('.resume-options');
resumeTrigger.addEventListener('click', () => {
  const expanded = resumeTrigger.getAttribute('aria-expanded') === 'true';
  resumeTrigger.setAttribute('aria-expanded', String(!expanded));
  resumeOptions.hidden = expanded;
});
document.addEventListener('click', event => {
  if (!event.target.closest('.resume-menu')) {
    resumeTrigger.setAttribute('aria-expanded', 'false');
    resumeOptions.hidden = true;
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !resumeOptions.hidden) {
    resumeOptions.hidden = true;
    resumeTrigger.setAttribute('aria-expanded', 'false');
    resumeTrigger.focus();
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
let preferredLanguage = 'zh';
try { preferredLanguage = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'zh'; } catch {}
setLanguage(preferredLanguage);

"use client";

import { useState } from "react";

const projects = [
  {
    number: "PROGRAM 01",
    title: "教师 AI 黑客松",
    description:
      "在有限时间里，与同伴把一个真实教学问题转化为人机协同课例或教育产品原型。",
    status: "准备重启",
    statusClass: "status-next",
    cycle: "1 天体验",
    audience: "想快速动手、验证一个想法的教师",
    tags: ["entry"],
    action: "了解项目定位",
  },
  {
    number: "PROGRAM 02",
    title: "一线教师共探 AI",
    description:
      "从工具好奇进入真实教学问题，在共同探索中建立 AI 与课堂实践的共同语言。",
    status: "已有实践",
    statusClass: "status-ongoing",
    cycle: "低门槛共学",
    audience: "想从工具使用走向教学实践的教师",
    tags: ["entry", "deep"],
    action: "查看项目方向",
  },
  {
    number: "PROGRAM 03",
    title: "人机协同课例创造营",
    description:
      "从问题诊断到方案共创，形成一份可实施、可反馈、可继续迭代的真实课例。",
    status: "当前重点",
    statusClass: "status-open",
    cycle: "首轮周期待验证",
    audience: "希望完成一个真实课例的行动者",
    tags: ["focus", "deep"],
    action: "登记首轮兴趣",
  },
  {
    number: "PROGRAM 04",
    title: "成为研究型教师",
    description:
      "把教学困惑转化为研究问题，通过持续行动、证据收集与反思形成专业判断。",
    status: "已有一期",
    statusClass: "status-research",
    cycle: "一学期长期项目",
    audience: "希望从课例走向行动研究的教师",
    tags: ["deep", "research"],
    action: "认识长期路径",
  },
];

const filters = [
  { key: "all", label: "全部项目" },
  { key: "focus", label: "当前重点" },
  { key: "entry", label: "低门槛入口" },
  { key: "deep", label: "长期共学" },
  { key: "research", label: "行动研究" },
];

const methodSteps = [
  ["01", "诊断", "识别教师当前状态、真实问题和主要障碍。"],
  ["02", "共创", "让 AI、同伴与经验成为思考伙伴，而不是答案机器。"],
  ["03", "验证", "把课例或原型带回真实场景，在限制中检验判断。"],
  ["04", "反馈", "回应具体作品与行动，发现偏差和新的可能。"],
  ["05", "反思", "解释发生了什么，沉淀案例、方法与下一轮行动。"],
];

const questions = [
  ["需求验证", "教师最愿意为什么样的反馈付费？"],
  ["产品实验", "第一轮课例创造营的最小周期是多少？"],
  ["教师变化", "一份课例在什么时候开始成为一项研究？"],
  ["AI 协作", "AI 应该从哪个低风险环节先介入？"],
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = projects.filter(
    (project) => activeFilter === "all" || project.tags.includes(activeFilter),
  );

  return (
    <>
      <header className="site-header">
        <div className="wrap nav">
          <a className="brand" href="#top" aria-label="Teacher College 首页">
            <span className="brand-mark" aria-hidden="true" />
            <span>Teacher College</span>
          </a>
          <nav className="nav-links" aria-label="主导航">
            <a href="#projects">项目</a>
            <a href="#method">方法</a>
            <a href="#log">研发日志</a>
            <a href="#about">关于</a>
            <a className="nav-action" href="#join">加入同行</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">一所为一线教师持续开放的学校</div>
              <h1>把困惑变成课例，<br />把课例变成研究</h1>
              <p>
                Teacher College 帮助一线教师从真实教学问题出发，借助 AI、同伴共创与持续反馈，形成可实施的课例与持续成长。
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  查看项目 <span className="arrow">→</span>
                </a>
                <a className="btn btn-secondary" href="#about">认识 Teacher College</a>
              </div>
            </div>

            <aside className="hero-board" aria-label="当前研发重点">
              <div className="notice-board">
                <span className="pin" aria-hidden="true" />
                <div className="board-label">NOW / 当前研发重点</div>
                <div className="board-title">用三轮真实实践，<br />跑通一门核心产品</div>
                <div className="week-list">
                  <div className="week"><div className="week-date">01</div><div className="week-name">访谈 5—10 位一线教师</div><div className="week-state">验证问题</div></div>
                  <div className="week"><div className="week-date">02</div><div className="week-name">完成 AI 协同课例包</div><div className="week-state">成为用户</div></div>
                  <div className="week"><div className="week-date">03</div><div className="week-name">启动最小课例创造营</div><div className="week-state">真实付费</div></div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <div className="signal-bar" aria-label="已有实践">
          <div className="wrap signals">
            <div className="signal-item"><span className="signal-dot" /><span><strong>4</strong> 个项目原型互相连接</span></div>
            <div className="signal-item"><span className="signal-dot" /><span><strong>10</strong> 位教师完成长期夜校</span></div>
            <div className="signal-item"><span className="signal-dot" /><span><strong>28</strong> 场线下工作坊经验</span></div>
            <div className="signal-item"><span className="signal-dot" /><span>栖息 · 行动 · 反思</span></div>
          </div>
        </div>

        <section className="projects" id="projects">
          <div className="wrap">
            <div className="section-head">
              <div><div className="kicker">Open Programs / 项目地图</div><h2>找到与你当下状态<br />匹配的下一步</h2></div>
              <p className="section-intro">没有统一升级路线，也不从工具清单开始。每个项目都从教师真实问题出发，形成行动、反馈与沉淀。</p>
            </div>

            <div className="filters" role="group" aria-label="项目筛选">
              {filters.map((filter) => (
                <button
                  className={`filter ${activeFilter === filter.key ? "is-active" : ""}`}
                  key={filter.key}
                  type="button"
                  aria-pressed={activeFilter === filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="project-grid">
              {visibleProjects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="card-top"><span className="number">{project.number}</span><span className={`status ${project.statusClass}`}>{project.status}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="meta">
                    <div><span>形态</span><strong>{project.cycle}</strong></div>
                    <div><span>适合谁</span><strong>{project.audience}</strong></div>
                  </div>
                  <a className="card-link" href="#join"><span>{project.action}</span><span>↗</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="method" id="method">
          <div className="wrap method-layout">
            <div>
              <div className="kicker">Our Method / 核心方法</div>
              <h2>成长不是听懂，<br />而是完成一次循环</h2>
              <p className="method-note">每个项目都从一线现场出发，也回到一线现场。我们重视作品，更重视教师逐渐形成自己的专业判断。</p>
            </div>
            <div className="method-list">
              {methodSteps.map(([number, title, description]) => (
                <div className="method-step" key={number}>
                  <div className="step-num">{number}</div><h3>{title}</h3><p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="log" id="log">
          <div className="wrap">
            <div className="section-head">
              <div><div className="kicker">Open R&amp;D Log / 公开研发日志</div><h2>公开一所学校<br />如何慢慢生长</h2></div>
              <p className="section-intro">不只展示成功案例，也记录产品假设、实践过程、关键转折与仍未解决的问题。</p>
            </div>
            <div className="log-grid">
              <div className="log-list">
                {questions.map(([tag, title]) => (
                  <div className="log-entry" key={title}><span className="log-date">持续更新</span><strong>{title}</strong><span className="log-tag">{tag}</span></div>
                ))}
              </div>
              <aside className="open-card">
                <div className="stamp">PUBLIC LAB · 公开实验</div>
                <h3>把日更专栏作为 Teacher College 的公开研发日志</h3>
                <p>持续拆解真实教师问题，积累判断、案例、方法和第一批愿意共同实践的人。</p>
                <div className="mini-people" aria-label="内容方向"><span className="person">栖息</span><span className="person">行动</span><span className="person">反思</span><span className="person">实验</span></div>
                <a className="btn btn-primary" href="#join">关注后续更新 <span className="arrow">→</span></a>
              </aside>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="wrap about-grid">
            <div><div className="kicker">Why Teacher College</div><h2>教师首先是生命体，<br />然后才是专业工作者</h2></div>
            <div className="about-copy">
              <p>Teacher College 不以继续增加信息为主要价值，而以提供诊断、路径、结构和反馈为主要价值。</p>
              <p>我们希望教师能够承认疲惫与不确定，也能够围绕真实问题采取行动，并把经验转化为可以继续生长的专业理解。</p>
            </div>
          </div>
        </section>

        <section className="join" id="join">
          <div className="wrap">
            <div className="join-panel">
              <div><div className="kicker">Learn in Public</div><h2>第一轮真实实践，正在准备</h2><p>网站目前处于公开搭建阶段。报名和订阅入口将在首轮课例创造营边界确定后开放。</p></div>
              <span className="btn btn-primary btn-disabled" aria-disabled="true">报名入口即将开放</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-row"><div>© 2026 Teacher College · 为一线教师持续开放</div><div className="footer-links"><a href="#projects">项目</a><a href="#method">方法</a><a href="#log">研发日志</a><a href="#about">关于</a></div></div>
      </footer>
    </>
  );
}

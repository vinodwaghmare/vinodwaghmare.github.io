---
layout: page
permalink: /repositories/
title: repositories
nav: true
nav_order: 4
---

<style>
.repo-header {
  margin-bottom: 1.75rem;
}
.repo-header h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}
.repo-header p {
  color: var(--global-text-color-light);
  font-size: 0.95rem;
  margin: 0;
}
.repo-header p a {
  color: var(--global-theme-color);
  text-decoration: none;
  font-weight: 500;
}
.repo-header p a:hover {
  text-decoration: underline;
}
.repo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
}
.repo-card {
  border: 1px solid var(--global-divider-color);
  border-radius: 10px;
  padding: 1.2rem 1.4rem;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}
.repo-card:hover {
  box-shadow: 0 4px 18px rgba(0,0,0,0.08);
  border-color: var(--global-theme-color);
}
.repo-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.55rem;
}
.repo-card-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 0.97rem;
  color: var(--global-text-color);
  text-decoration: none;
}
.repo-card-title:hover {
  color: var(--global-theme-color);
}
.repo-ext {
  color: var(--global-text-color-light);
  font-size: 0.85rem;
  flex-shrink: 0;
}
.repo-desc {
  color: var(--global-theme-color);
  font-size: 0.875rem;
  line-height: 1.55;
  margin: 0 0 0.9rem;
}
.repo-tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.8rem;
}
.repo-lang {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--global-text-color);
  font-weight: 600;
}
.lang-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  display: inline-block;
  background: #3572A5;
}
.repo-tag {
  color: var(--global-text-color-light);
  border: 1px solid var(--global-divider-color);
  border-radius: 4px;
  padding: 1px 9px;
}
</style>

<div class="repo-header">
  <h1>Repositories</h1>
  <p>Open source work on <a href="https://github.com/vinodwaghmare" target="_blank">GitHub ↗</a></p>
</div>

<hr style="border-color: var(--global-divider-color); margin-bottom: 1.75rem;">

<div class="repo-grid">

  <div class="repo-card">
    <div class="repo-card-header">
      <a href="https://github.com/vinodwaghmare/LiveCareAI" target="_blank" class="repo-card-title">
        <i class="fa-regular fa-folder"></i> LiveCareAI
      </a>
      <span class="repo-ext">↗</span>
    </div>
    <p class="repo-desc">Real-time AI patient monitoring system. Smartwatch vitals streamed via Confluent Kafka, AI anomaly detection, and risk scoring for proactive healthcare interventions.</p>
    <div class="repo-tags">
      <span class="repo-lang"><span class="lang-dot"></span> Python</span>
      <span class="repo-tag">Kafka</span>
      <span class="repo-tag">AI/ML</span>
      <span class="repo-tag">Healthcare</span>
      <span class="repo-tag">Streaming</span>
    </div>
  </div>

  <div class="repo-card">
    <div class="repo-card-header">
      <a href="https://github.com/vinodwaghmare/askio" target="_blank" class="repo-card-title">
        <i class="fa-regular fa-folder"></i> Askio
      </a>
      <span class="repo-ext">↗</span>
    </div>
    <p class="repo-desc">Voice-driven dynamic RAG application. Ask questions with your voice and get context-aware answers powered by retrieval-augmented generation.</p>
    <div class="repo-tags">
      <span class="repo-lang"><span class="lang-dot"></span> Python</span>
      <span class="repo-tag">RAG</span>
      <span class="repo-tag">Voice</span>
      <span class="repo-tag">LangChain</span>
      <span class="repo-tag">LLM</span>
    </div>
  </div>

  <div class="repo-card">
    <div class="repo-card-header">
      <a href="https://github.com/vinodwaghmare/Realtime-Production-Enterprise-fraud-detection-system" target="_blank" class="repo-card-title">
        <i class="fa-regular fa-folder"></i> Enterprise Fraud Detection
      </a>
      <span class="repo-ext">↗</span>
    </div>
    <p class="repo-desc">Real-time ML system that detects fraudulent credit card transactions with 96.2% recall and 97.6% precision, designed for sub-100ms inference latency.</p>
    <div class="repo-tags">
      <span class="repo-lang"><span class="lang-dot"></span> Python</span>
      <span class="repo-tag">ML</span>
      <span class="repo-tag">Real-time</span>
      <span class="repo-tag">Kafka</span>
      <span class="repo-tag">MLOps</span>
    </div>
  </div>

</div>

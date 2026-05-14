---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 10
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<style>
.writing-header {
  margin-bottom: 1.5rem;
}
.writing-header h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}
.writing-header p {
  color: var(--global-text-color-light);
  font-size: 0.95rem;
  margin: 0;
}
.writing-header p a {
  color: var(--global-theme-color);
  text-decoration: none;
}
.writing-divider {
  border: none;
  border-top: 1px solid var(--global-divider-color);
  margin: 0;
}
.writing-row {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 1.5rem;
  padding: 1.4rem 0;
}
@media (max-width: 576px) {
  .writing-row {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }
}
.writing-date {
  color: var(--global-text-color-light);
  font-size: 0.88rem;
  padding-top: 3px;
  white-space: nowrap;
}
.writing-title {
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 0.4rem;
  line-height: 1.4;
}
.writing-title a {
  color: var(--global-text-color);
  text-decoration: none;
}
.writing-title a:hover {
  color: var(--global-theme-color);
}
.writing-title .ext-arrow {
  color: var(--global-text-color-light);
  font-size: 0.8rem;
  margin-left: 4px;
  vertical-align: middle;
}
.writing-desc {
  color: var(--global-text-color-light);
  font-size: 0.92rem;
  margin: 0 0 0.65rem;
  line-height: 1.55;
}
.writing-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.writing-tag {
  background: transparent;
  border: 1px solid var(--global-divider-color);
  border-radius: 4px;
  padding: 2px 10px;
  font-size: 0.78rem;
  color: var(--global-text-color-light);
}
</style>

<div class="post">

<div class="writing-header">
  <h1>Writing</h1>
  <p>AI systems, engineering decisions, and the tradeoffs tutorials skip. Published on <a href="https://dev.to/vinod_wa" target="_blank">Dev.to</a> and <a href="https://medium.com/@VinodShips" target="_blank">Medium</a>.</p>
</div>

<hr class="writing-divider">

{% if page.pagination.enabled %}
  {% assign postlist = paginator.posts %}
{% else %}
  {% assign postlist = site.posts %}
{% endif %}

{% for post in postlist %}
<div class="writing-row">
  <div class="writing-date">{{ post.date | date: '%b %Y' }}</div>
  <div>
    <div class="writing-title">
      {% if post.redirect contains '://' %}
        <a href="{{ post.redirect }}" target="_blank">{{ post.title }}</a><span class="ext-arrow">↗</span>
      {% else %}
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      {% endif %}
    </div>
    {% if post.description %}
    <p class="writing-desc">{{ post.description }}</p>
    {% endif %}
    {% if post.tags.size > 0 %}
    <div class="writing-tags">
      {% for tag in post.tags %}
      <span class="writing-tag">{{ tag }}</span>
      {% endfor %}
    </div>
    {% endif %}
  </div>
</div>
<hr class="writing-divider">
{% endfor %}

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>

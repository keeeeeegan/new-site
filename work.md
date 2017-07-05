---
layout: portfolio-overview
title: Selected Examples
permalink: /work/
published: true
---

<ul class="work-list">
  {% for post in site.work %}
    <li>
      <a class="work-item-wrapper" href="{{ post.url | prepend: site.baseurl }}">
        <span class="work-title">
          {{ post.title }}
        </span>
      </a>
    </li>
  {% endfor %}
</ul>

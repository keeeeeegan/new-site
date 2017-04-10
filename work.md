---
layout: page
title: Work
link_text: Work
permalink: /work/
---

<ul class="work-list">
  {% for post in site.work %}
    <li>
      <a class="work-item-wrapper" href="{{ post.url | prepend: site.baseurl }}">
        <span class="work-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <span class="work-title">
          {{ post.title }}
        </span>
      </a>
    </li>
  {% endfor %}
</ul>

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

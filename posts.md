---
layout: page
title: Posts
permalink: /posts/
published: true
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <!-- {{ post.excerpt }} -->
    </li>
  {% endfor %}
</ul>

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

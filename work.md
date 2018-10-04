---
layout: home
title: Work
permalink: /work/
---
  <!-- <section class="page-section main">
    <div class="content-container">
    <div class="section-copy">
      <h2 class="section-title">Not Found</h2>

      <p class="bigtext" >404 - Page Not Found</p>
      <p>I'm sorry, that page doesn't exist or can't be found.</p>
    </div>
  </div>
  </section> -->

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

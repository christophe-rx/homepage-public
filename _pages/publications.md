---
layout: page
permalink: /publications/
title: publications
description: publications by categories in reversed chronological order
nav: true
nav_order: 2
equal_contrib_markers: true
equal_contrib_legend: true
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

{% if page.equal_contrib_legend %}
  <p><sup>*</sup> indicates equal contribution.</p>
{% endif %}

<div class="publications">

{% bibliography %}

</div>

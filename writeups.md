---
layout: page
title: Writeups
permalink: /writeups/
---

## CTF Writeups

{% if site.writeups.size > 0 %}
{% for writeup in site.writeups %}
- [{{ writeup.title }}]({{ writeup.url | relative_url }}) - {{ writeup.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
Coming soon...
{% endif %}

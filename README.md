# elprofesor

My personal cybersecurity blog built with Jekyll.

## Local Development

```bash
# Install dependencies
bundle install

# Run locally
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Structure

```
├── _config.yml          # Site configuration
├── _layouts/            # Page templates
├── _includes/           # Reusable components
├── _sass/               # SCSS styles
├── _posts/              # Blog posts
├── _writeups/           # CTF writeups (optional)
├── _tools/              # Tools documentation (optional)
├── assets/
│   ├── css/
│   └── js/
└── index.html           # Homepage
```

## Creating Posts

Create a new file in `_posts/` with the format `YYYY-MM-DD-title.md`:

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-01-27
tags: [tag1, tag2]
difficulty: Easy  # Easy, Medium, or Hard
read_time: "5 min read"
---

Your content here...
```

## Configuration

Edit `_config.yml` to update:
- Site title and description
- Your social links
- Other settings

## License

MIT

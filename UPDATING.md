# Updating This Website

Most edits can be made directly in GitHub. Open the file, click the pencil icon, make the change, and commit to `main`. GitHub Pages rebuilds automatically after the commit.

## Add a New Paper

The homepage and `/research/` share `layouts/partials/paper.html`. Put each paper in `data/papers.yaml` once. Use `status: "accepted"` for accepted articles and `status: "published"` for published work; accepted papers appear alongside publications. Set `featured: true` on the latest journal article to show the homepage acceptance announcement. Remove or revise the announcement in `layouts/index.html` when that wording no longer applies.

Optional fields: `kind`, `doi`, `article_number`, `detail` (an internal detail page), and `citation` (a BibTeX download). Keep internal paths relative to the site root, without a leading slash, so they work on GitHub Pages project URLs. The new article's detail page is `content/research/fourier-neural-operator/index.md`, matched to its YAML record by `paper_doi`.

Edit `data/papers.yaml` and add a new entry:

```yaml
- title: "Paper Title"
  authors:
    - "First Author"
    - "Zihao Wang"
  year: 2026
  status: "working paper"
  venue: ""
  link: "https://example.com"
  abstract: "One-sentence description."
  job_market_paper: false
  tags:
    - "CFD"
```

If the paper has a PDF, upload it to `static/files/` and set `link` to `/files/your-paper.pdf`.

## Mark a Paper as Published

In `data/papers.yaml`, change:

```yaml
status: "working paper"
```

to:

```yaml
status: "published"
venue: "Journal or conference name"
```

## Add a Job Market Paper

The earlier `job_market_paper` field is retained in existing data for compatibility, but the current layout uses `featured` instead:

```yaml
featured: true
```

Only one paper should normally use this setting.

## Update the Bio

Edit `content/_index.md`. The paragraphs in that file appear in the About section of the homepage and include research interests. Design decisions are recorded in `DESIGN.md`; keep headings direct and omit decorative section labels.

Short profile details such as the email address, affiliation, advisor, and social links live in `hugo.yaml`.

## Add a Teaching Entry

Edit `data/teaching.yaml`:

```yaml
- course: "Course Name"
  role: "Lecturer"
  institution: "Technical University of Berlin"
  term: "Summer Semester 2026"
```

## Update Software and Tools

Edit `data/projects.yaml`. Keep each description short and factual.

## Add a Blog Post

Create a new folder such as `content/blog/my-post/index.md` and add:

```markdown
---
title: "Post Title"
date: 2026-06-25
description: "One-sentence summary."
tags: ["CFD"]
---

Write the post here.
```

Add a Blog link to the menu in `hugo.yaml` only after there is blog content.

## Update the CV

Replace `static/files/cv.pdf` with the new PDF and keep the filename `cv.pdf`. The CV link in the navigation will continue to work.

## Change the Photo

Replace `static/images/photo.jpg` with a new square or portrait image and keep the filename `photo.jpg`.

## Add a News Item

The homepage currently announces acceptance of the paper marked `featured: true`. Update the announcement in `layouts/index.html` for a different milestone. If news becomes a regular part of the site, introduce `data/news.yaml`.

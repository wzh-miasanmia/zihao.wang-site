# Zihao Wang Academic Website

This repository contains the Hugo source for Zihao Wang's academic website.

The current draft features the 2026 Building and Environment article, a publication detail page, and a downloadable BibTeX citation. Its metadata was checked against Crossref on 2026-10-21: https://api.crossref.org/works/10.1016/j.buildenv.2026.115451. The accepted status follows the author's confirmation. Research descriptions state the scope only; they do not assert performance results.

See `DESIGN.md` for visual and content decisions and `UPDATING.md` for maintenance. The existing PDF CV predates this article and still needs a separate update. Local preview does not publish the site; pushing to `main` triggers the existing GitHub Pages workflow.

The gas turbine journal article and ventilation conference paper were also confirmed by the author. Author order and bibliographic metadata were checked against Crossref on 2026-10-22: https://api.crossref.org/works/10.1016/j.applthermaleng.2026.132658 and https://api.crossref.org/works/10.1051/e3sconf/202671601055. All three listed papers have BibTeX downloads.

The site is a minimal, content-driven static site designed for GitHub Pages. Most updates can be made by editing Markdown or YAML files directly on GitHub.

## Local Preview

Install Hugo extended, then run:

```powershell
hugo server --disableFastRender
```

The site will be available at the local URL printed by Hugo.

## Build

```powershell
hugo --gc --minify
```

GitHub Actions builds and deploys the site to GitHub Pages when changes are pushed to `main`.

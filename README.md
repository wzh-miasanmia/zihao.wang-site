# Zihao Wang Academic Website

This repository contains the Hugo source for Zihao Wang's academic website.

The current draft features the 2026 Building and Environment article, a publication detail page, and a downloadable BibTeX citation. Its metadata was checked against Crossref on 2026-10-21: https://api.crossref.org/works/10.1016/j.buildenv.2026.115451. The accepted status follows the author's confirmation. Research descriptions state the scope only; they do not assert performance results.

See `DESIGN.md` for visual and content decisions and `UPDATING.md` for maintenance. The existing PDF CV predates this article and still needs a separate update. Local preview does not publish the site; pushing to `main` triggers the existing GitHub Pages workflow.

The gas turbine journal article and ventilation conference paper were also confirmed by the author. Author order and bibliographic metadata were checked against Crossref on 2026-10-22: https://api.crossref.org/works/10.1016/j.applthermaleng.2026.132658 and https://api.crossref.org/works/10.1051/e3sconf/202671601055. All listed papers have BibTeX downloads.

The Indoor Air 2026 paper, "Bayesian Optimization of Supply Inlet Location for Maximizing Ventilation Effectiveness", was verified directly against the ISIAQ proceedings on 2026-10-22: https://www.isiaq.org/docs/Indoor_Air_2026_Conference_Proceedings.pdf#page=1485. Author order: Yunus Emre Cetin, Zihao Wang, Martin Kriegel. PDF pages 1485--1492 are positions in the combined PDF, not printed proceedings page numbers. The citation records this distinction and does not invent a DOI.

The site is a minimal, content-driven static site designed for GitHub Pages. Most updates can be made by editing Markdown or YAML files directly on GitHub.

## Logo Sources

Experience and education were checked against the author's LinkedIn profile on 2026-10-23: https://www.linkedin.com/in/zihaowangmiasanmia/. The homepage lists all four roles and all four education entries. Descriptions are shortened from the profile; the ongoing PhD is shown as “present” rather than a prospective end date. No private profile analytics are used.

Education logos use official university assets, checked on 2026-10-23. TUM's SVG geometry comes from https://www.tum.de/typo3conf/ext/in2template/Resources/Public/Images/Backend/tum-logo.svg and uses the university website's brand blue (#3070B3). BIT's crest comes from https://www.bit.edu.cn/images/gb20190805/logo_01.svg. Both are stored locally in `static/images/`, preserve their proportions, and accompany the written university names.

The profile header uses HRI's official combined TU Berlin/HRI mark from https://hermann-rietschel-institut.de/wp-content/uploads/2025/02/cropped-TU-HRI-bp.png, checked on 2026-10-23. The image is unmodified; CSS multiply blending lets its white background match the page background.

The PhD education entry uses TU Berlin's official red logo from https://www.static.tu.berlin/_assets/2ff76cde2126808ef662c87f1945ad8e/Images/Logos/tu-berlin-logo-long-red.svg, stored unchanged as `static/images/tu-berlin-logo.svg`.

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

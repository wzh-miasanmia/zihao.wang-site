# Design

## Source of truth
- Status: Active
- Last refreshed: 2026-10-22
- Primary product surfaces: English academic homepage, publication detail, CV.
- Evidence reviewed: hugo.yaml; content/_index.md; data/*.yaml; layouts/; assets/css/style.css; existing portrait and CV; Crossref record for 10.1016/j.buildenv.2026.115451; user's acceptance announcement.

## Brand
- Personality: Thoughtful, precise, approachable academic researcher.
- Trust signals: Real portrait, TU Berlin affiliation, named coauthors, DOI, downloadable citation.
- Avoid: Invented research results, metrics, decorative simulation data, commercial marketing language, slogan headings, numbered section labels, repeated title/description stacks. The user explicitly requested less AI-styled presentation on 2026-10-22.

## Product goals
- Goals: Introduce Zihao Wang and his research; foreground the Fourier neural operator paper; make all confirmed publications and contact easy to find.
- Non-goals: Publication/deployment without user authorization, CMS migration, visitor accounts.
- Success signals: Visitors identify research area immediately and reach the paper, citation, CV, or email in one step.

## Personas and jobs
- Primary personas: Researchers, potential collaborators, academic visitors.
- User jobs: Understand interests; read and cite research; review background; contact the author.
- Key contexts of use: Desktop scholarly browsing and mobile link sharing.

## Information architecture
- Primary navigation: About, Publications, Teaching, CV, Contact.
- Core routes/screens: /; /research/; /research/fourier-neural-operator/; /cv/.
- Content hierarchy: Name and affiliation; acceptance news; biography and research interests; publications; teaching; education; contact.

## Design principles
- Readable evidence first: DOI-linked publications and factual descriptions carry the page.
- Direct academic layout: Serif headings, restrained whitespace, factual metadata, ruled lists. Each section has one useful heading: About, Publications, Teaching, Education, Contact.
- Tradeoffs: Keep Hugo and YAML updates simple; no external fonts or framework dependencies.

## Visual language
- Color: Warm white #faf9f5, dark ink #202f2a, forest accent #285b48, muted gray-green, light rules.
- Typography: Georgia for display headings; system sans-serif for body; monospace for small labels.
- Spacing/layout rhythm: 1080px overall width; 200px section-label column; 24px mobile gutters.
- Shape/radius/elevation: Slightly rounded portrait; flat surfaces; thin borders; no shadows.
- Motion: Native anchor scrolling, disabled for reduced motion.
- Imagery/iconography: Existing portrait; text arrows where useful; no invented scientific figures.

## Components
- Existing components to reuse: Hugo base template, head/nav/footer, YAML data, local assets.
- New/changed components: Name/affiliation profile, one-line news, shared paper partial, publication detail, mobile nav button. No decorative eyebrows, topic cards, or one-sentence summary disclosures.
- Variants and states: Featured journal article; compact conference article; accepted/published status.
- Token/component ownership: CSS variables in assets/css/style.css; shared publication rendering in layouts/partials/paper.html.

## Accessibility
- Target standard: WCAG 2.2 AA intent.
- Keyboard/focus behavior: Skip link, visible focus, button with aria-expanded, Escape closes mobile nav.
- Contrast/readability: Dark text on light backgrounds; readable body size and restrained line lengths.
- Screen-reader semantics: Landmarks, ordered headings, descriptive link labels, portrait alt text.
- Reduced motion and sensory considerations: No animated visuals; reduced-motion disables smooth scroll.

## Responsive behavior
- Supported breakpoints/devices: Narrow phones from 320px; tablet; wide desktop.
- Layout adaptations: Hero photo moves above text; section labels stack; nav collapses below 760px.
- Touch/hover differences: Links/buttons remain usable without hover; 44px navigation targets.

## Interaction states
- Loading: Static HTML; portrait has explicit dimensions.
- Empty: Omit absent optional metadata and unavailable links.
- Error: No remote data dependencies at runtime.
- Success: Native DOI, email, PDF, BibTeX and anchor navigation.
- Disabled: No disabled controls.
- Offline/slow network: Local assets and fonts; outgoing publisher links need a connection.

## Content voice
- Tone: First-person, factual, concise English.
- Terminology: Accepted status follows the user's statement; full title and authors follow Crossref.
- Microcopy rules: Explain research scope without adding performance or validation claims. Use descriptive section names; avoid promotional invitations and repeated self-descriptions. Show journal, year, status, course terms, and education dates as ordinary readable metadata.

## Implementation constraints
- Framework/styling system: Existing Hugo static site with plain CSS and a small navigation script.
- Design-token constraints: Reuse CSS variables; no UI library.
- Performance constraints: No external fonts, trackers, or large decorative assets.
- Compatibility constraints: Relative links and Hugo relURL for GitHub Pages subpaths.
- Test/screenshot expectations: Production build, local link and asset checks, desktop/mobile browser QA when available.

## Open questions
- [x] Public GitHub Pages deployment authorized on 2026-10-21: https://wzh-miasanmia.github.io/zihao.wang-site/.
- [ ] Existing downloadable PDF CV predates the new article; update when the user supplies or requests a revised CV.
- [ ] Confirm whether a Chinese version is desired; English follows the existing repository.

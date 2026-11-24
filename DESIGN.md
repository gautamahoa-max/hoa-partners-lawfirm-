---
name: Hoa & Associates Law Firm Design System
colors:
  primary: '#0F2144'
  on-primary: '#FFFFFF'
  primary-container: '#07192E'
  on-primary-container: '#E2E8F0'
  secondary: '#B45309'
  on-secondary: '#FFFFFF'
  secondary-container: '#FEF3C7'
  on-secondary-container: '#78350F'
  tertiary: '#059669'
  on-tertiary: '#FFFFFF'
  tertiary-container: '#ECFDF5'
  on-tertiary-container: '#065F46'
  background: '#FFFFFF'
  on-background: '#1E293B'
  surface: '#FFFFFF'
  surface-bright: '#FAF9F6'
  surface-container-lowest: '#FFFFFF'
  surface-container-low: '#F5F5F7'
  surface-container: '#EFEFF3'
  surface-container-high: '#E8F1F7'
  surface-container-highest: '#ECF1F8'
  on-surface: '#0F2144'
  on-surface-variant: '#475569'
  outline: '#CBD5E1'
  outline-variant: '#E2E8F0'
  error: '#DC2626'
  on-error: '#FFFFFF'
  error-container: '#FEF2F2'
  on-error-container: '#B91C1C'
  zalo: '#0068FF'
typography:
  display-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Be Vietnam Pro
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-base:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: '0'
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: '0'
  label-caps:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.18em
  index-num:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: '0'
    fontVariantNumeric: tabular-nums
rounded:
  none: 0px
  sm: 0.5rem
  md: 0.75rem
  lg: 1rem
  block: 22px
  glass: 28px
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
  section-y-mobile: 48px
  section-y-desktop: 96px
---

# Design System: Công ty Luật TNHH Hoà & Cộng sự (Hoa & Associates Law Firm LLC)

## 1. Visual Theme & Atmosphere

An authoritative, tranquil Vietnamese civil litigation aesthetic that pairs classical legal gravitas (inspired by Cravath and YKVN editorial discipline) with clean Apple-inspired spatial block clarity. Instead of heavy ornamentation, the interface separates content into calm alternating tonal bands—Architectural Silver-Gray for scannable service grids, frosted Liquid Glass over soft luminous pastels for transparent fee packages, Warm Ivory for FAQ and intake headers, and Deep Midnight Navy for formal office directories.

Whitespace is deliberate and generous (`64px`–`96px` vertical section rhythm on desktop, `48px` compact vertical rhythm on mobile). All surfaces maintain high legibility and calm restraint, guiding prospective clients seamlessly from the full-bleed architectural Hero down through core civil practice blocks, workflow steps, reference fees, FAQ, and direct Zalo/Hotline consultation intake.

---

## 2. Color Palette & Roles

### Primary Foundation
- **Deep Judicial Navy (`#0F2144`)** — Signature authority ink, section display headings, primary button fills, sticky top ribbon, emblem tile, and active filter pills. Hover darkens to `#162A56` / `#183161`.
- **Midnight Sanctuary (`#07192E`)** — Deep editorial left column of the Office Location split module (`LocationSection.jsx`).
- **Hero Night Canvas (`#051329`)** — Backdrop under the full-bleed architectural Hero banner (`Hero.jsx`).
- **Pure Canvas (`#FFFFFF`)** — Primary page ground, Apple card fills, Navbar glass (`white/95`), Location map frame, Timeline section, and Footer.
- **Apple Mist (`#F5F5F7`)** — Ground behind spaced white modular blocks in the Homepage Practice Areas section (`Services.jsx`) and the 20-item Fee Schedule grid (`FeeSchedulePage.jsx`).
- **Editorial Warm Ivory (`#FAF9F6`)** — Subpage editorial hero headers (`FeeSchedulePage.jsx`, `ContactPage.jsx`), FAQ band (`FaqSection.jsx`), and form card surface.
- **Timeline Stone (`#EFEFF3`)** — Soft speech-bubble step cards inside the 5-stage `CaseWorkflowTimeline`.
- **Ice Blue Wash (`#E8F1F7`)** — Secondary panel on `LawyerBioPage` highlighting consultation focus areas.
- **Liquid Glass Luminous Mesh (`#ECF1F8` → `#F6F8FC` → `#E6EEF7`)** — Backdrop gradient behind the frosted white glass fee cards (`bg-white/55`, `backdrop-blur-2xl`), energized by soft ambient sky/indigo/amber blurred orbs (`LegalCalculator.jsx`).

### Accent & Interactive
- **Warm Amber Seal (`#D97706` / `#B45309` text-amber-700 / `#F59E0B` block / `#FBBF24` on dark)** — Restrained legal accent for the `12×12px` `.ykvn-accent-block` geometric square, active `VI / EN` switcher on dark navy, category eyebrows on the Fee Schedule, and subtle phone icons on dark primary CTAs.
- **Zalo Signal Blue (`#0068FF`)** — Reserved strictly for the floating Zalo quick-chat circle and post-submit Zalo handoff CTA (`FloatingContact.jsx`, `ContactPage.jsx`).

### Typography & Text Hierarchy
- **Primary Heading Ink (`#0F2144` / `#1E345B` in Legal Knowledge)** — All section headlines, card titles, and formal legal labels.
- **Body Prose (`#334155` slate-700 to `#1E293B` slate-800; `#666666` in Legal Knowledge articles)** — Comfortable mid-dark ink for extended Vietnamese diacritic legibility.
- **Metadata & Indices (`#64748B` slate-500 / `#94A3B8` slate-400)** — Card numbers (`01`–`06`, `01`–`20`), eyebrow labels, and secondary helper captions.
- **Hairline Dividers (`#E2E8F0` at 70–90% opacity)** — `1px` borders separating modular blocks, form inputs, and section bands; `#0F2144/30` horizontal hairline above footer copyright.

### Functional States
- **Hotline / Verified Emerald (`#059669` emerald-600 / `#ECFDF5` bg-emerald-50)** — Success confirmation badges, Admin phone click links, and the floating Hotline call button.
- **Validation Crimson (`#DC2626` / `#FEF2F2` bg-red-50 border-red-200)** — Form validation alerts, delete actions, and unauthorized access warnings.
- **Duplicate / Audit Amber (`#B45309` / `#FFFBEB` bg-amber-50 border-amber-200)** — Pending intake status (`new`), duplicate phone alerts in `AdminPage.jsx`, and legacy web consent notices.

---

## 3. Typography Rules

### Hierarchy & Weights
The project intentionally loads a single versatile typeface — **Be Vietnam Pro** (configured identically for `sans`, `serif`, and `mono` utilities in `tailwind.config.js` to keep font payload lean and Vietnamese diacritics crisp across weights `400`, `500`, `600`, `700`, `800`, and `italic 400`).

- **Display / Section Titles (`H2`):** `24px`–`36px` (`text-2xl sm:text-3xl lg:text-4xl`), `font-bold` (`700`), `tracking-tight`, `leading-[1.3]`. Homepage Fee section carries `font-serif` hook while keeping `Be Vietnam Pro` metrics.
- **Subpage Page Titles (`H1`):** `28px`–`44px`, `font-bold` (`700`), `tracking-tight`, `leading-[1.2]`.
- **Card Titles (`H3`):** `16px`–`20px` (`text-base sm:text-lg md:text-xl`), `font-bold` (`700`), `leading-snug`.
- **Section Eyebrows:** `11px`–`12px` (`text-xs`), `font-bold` (`700`), `uppercase`, generous tracking (`tracking-[0.2em]` to `tracking-[0.22em]`), slate-500/600.
- **Body Copy:** `13.5px`–`16px` (`text-[13.5px] sm:text-sm` inside cards, `text-sm sm:text-base` in prose), `font-normal` (`400`), relaxed `leading-relaxed` (`1.625`) to `leading-[1.8]` in articles.
- **Numeric Indices & Reference Fees:** Always add `tabular-nums` (`font-mono tabular-nums`) on item numbers (`01`–`20`), fee brackets (`1.000.000 – 2.000.000 VNĐ`), consent Ref Nos (`01/2026/TCT-HCS`), and modal zoom percentages (`100%`).

### Spacing Principles
- Strict tracking-tight (`-0.015em` to `-0.02em`) on Vietnamese headlines prevents tall diacritics from colliding while wide tracking (`+0.18em`–`+0.22em`) gives small uppercase eyebrows architectural polish.
- Readable line widths constrained via `max-w-2xl` / `max-w-3xl` centered headers and `65ch` paragraph pacing inside bio and article columns.

---

## 4. Component Stylings

### Buttons
- **Editorial / Form Primary CTA:** Solid `#0F2144` or subtle horizontal navy gradient (`from-[#0F2144] via-[#162A56] to-[#0F2144]`), `rounded-xl` (`ContactPage`) or `rounded-full` (`FeeSchedulePage`, `LegalCalculator`), `min-h-[44px]`, crisp white bold label (`12px`–`16px`), tactile `active:scale-[0.98]`, subtle inset top highlight and shimmer sweep on Contact submit. No neon outer glows.
- **Filter Pills (`FeeSchedulePage.jsx`):** `rounded-full min-h-[44px] px-4 py-2 text-xs font-semibold`; inactive pills use `#F5F5F7` (`hover:bg-slate-200/80`), active uses `#0F2144` white text.
- **Floating Circular Actions (`FloatingContact.jsx`):** Dual `48×48px` (`w-12 h-12`) `rounded-full` fixed bottom-right controls (`bg-emerald-600` phone + `bg-[#0068FF]` Zalo), revealed cleanly when `scrollY > 240` or on short pages.

### Cards & Containers
- **Apple-Style Static Practice Blocks (`Services.jsx`):** Non-clickable `<article>` containers (`rounded-[20px] md:rounded-[22px]`), pure `#FFFFFF`, `1px` `border-slate-200/70`, soft navy shadow (`0 2px 16px rgba(15,33,68,0.04)`). Displays exclusively Icon box + numeric index (`01`–`06`) + Title + short description — zero footer CTAs or legal basis badges.
- **Apple-Style Fee Schedule Blocks (`FeeSchedulePage.jsx`):** `rounded-[22px]` white cards (`p-6 sm:p-8`) with hover lift (`hover:-translate-y-0.5`, deepened shadow `0 14px 36px rgba(15,33,68,0.09)`), amber category tag, top-right index, bold title, applicability note, bottom hairline split showing tabular reference fee and pill `"Đăng ký"` CTA.
- **Liquid Glass Tier Cards (`LegalCalculator.jsx`):** `rounded-[28px]`, `bg-white/55 hover:bg-white/68 backdrop-blur-2xl backdrop-saturate-150`, `border-white/80`, specular inner top sheen (`inset 0 1px 1px rgba(255,255,255,0.95)`), edge-bleeding `rounded-r-full` frosted price badge (`-ml-7 sm:-ml-8`), faint navy SVG watermark top-right (`opacity-[0.07]`), and bottom dark glass pill CTA.
- **Editorial Architectural Frames (`LocationSection.jsx`, `LawyerBioPage.jsx`):** Zero-radius sharp editorial borders (`border-slate-200/80`), splitting Deep Midnight `#07192E` or `#E8F1F7` contrast panels seamlessly against typography or interactive Google Maps.

### Navigation
- **Navbar (`Navbar.jsx`):** Sticky white `backdrop-blur-md` header combining a slim `#0F2144` top info bar (`hidden lg:block`) and an `80px` (`h-20`) main bar containing the Navy Gold Emblem (`44×44px`), uppercase wordmark, single-line horizontal nav (`hidden lg:flex`), `VI / EN` switcher, and `lg:hidden` hamburger slide-down drawer.

### Inputs & Forms
- **Form Fields (`ContactPage.jsx`, `AdminPage.jsx`):** Top uppercase bold labels (`12px`, `text-[#0F2144]`), white inputs (`bg-white border-slate-300 rounded-lg px-4 py-3`), clear focus ring (`focus:ring-2 focus:ring-[#0F2144] focus:border-transparent`), accessible inline checkbox with `inline text-left` modal trigger link so wrapped link text stays flush left on narrow mobile screens.

### Domain-Specific Components
- **PDPL Read-Only PDF Consent Modal (`PdfConsentModal.jsx`):** Full dynamic viewport backdrop (`fixed inset-0 h-dvh bg-slate-950/75 backdrop-blur-sm`) housing a `rounded-2xl` container (`h-full max-h-full sm:h-[90vh]`) constrained strictly within mobile browser bars. Features non-selectable PDF.js high-DPI `<canvas>` pages, dynamic `HP-PDPL-03/2026` reference numbering & NĐ 30 date overlays, diagonal low-opacity watermark (`HOÀ & CỘNG SỰ • CHỈ XEM`), `× Đóng` top-right button, pinch-to-zoom (`75%`–`250%` centered on touch focal midpoint with `touch-action: pan-x pan-y`), tap-to-reset `%` badge, and compact side-by-side `Đóng` + `#0F2144` Consent CTA footer.
- **Workflow Timeline (`CaseWorkflowTimeline.jsx`):** Alternating left/right `#EFEFF3` bubble cards connected by CSS border-triangles to a central `w-0.5` slate spine (left-aligned spine on mobile `< 768px`), animated by shared `useScrollReveal` (`IntersectionObserver`, `duration-700 ease-out`, directional slide on desktop / upward glide on mobile, respects `prefers-reduced-motion`).
- **Admin CRM Console (`AdminPage.jsx`):** Operational dashboard on `bg-slate-50` (`max-w-7xl`) featuring normalized phone deduplication badges (`Trùng SĐT (N)` clickable filter), channel origin chips (`Zalo`, `Hotline`, `Bảng giá #XX`), inline manual Zalo/Hotline intake form, inline lawyer notes editor, CSV formula-safe export, and per-client Consent Letter PDF export.

---

## 5. Layout Principles

### Grid & Structure
- **Containment:** Standard wide sections align to `max-w-7xl` (`1280px`); focused card grids (`Services`, `FeeSchedulePage`, `LawyerBioPage`) constrain to `max-w-6xl` (`1152px`); `LegalCalculator` 3-column grid sits inside `max-w-6xl`; FAQ (`FaqSection`) constrains to `max-w-4xl`; intake forms use `max-w-2xl`.
- **Homepage Vertical Alternating Rhythm:** Dark architectural Hero (`#051329`) → Practice Areas (`#F5F5F7`, 2×3 desktop / 1-col mobile) → Workflow Timeline (`#FFFFFF`, alternating central spine) → Liquid Glass Fees (`#ECF1F8`–`#E6EEF7`, 3 columns) → FAQ (`#FAF9F6`, accordion) → Office Locations (`#FFFFFF`, sharp editorial 5/7–4/8 split) → Cravath Footer (`#FFFFFF`).
- **Breakpoints:** Standard Tailwind mobile-first (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`). Note desktop navbar collapses cleanly at `lg` (`1024px`) while card grids expand at `md` (`768px`).

### Whitespace Strategy
- Outer horizontal gutters expand smoothly (`px-4 sm:px-6 lg:px-8`).
- Mobile vertical padding tightens proportionally (`py-12` vs `md:py-24`) so cards remain visible promptly while preserving breathing room (`gap-3 md:gap-6`).

### Alignment & Visual Balance
- Homepage section headers stay centered (`text-center`), whereas editorial subpage banners (`FeeSchedulePage`) and all card internals remain strictly `text-left`.
- Multi-word inline buttons inside wrapped prose always apply `inline text-left` to prevent browser center-alignment on wrapped lines.

### Responsive Behavior & Touch
- All grids collapse cleanly to `grid-cols-1` below `768px` with zero horizontal page overflow (`overflow-x-clip` on animated reveal sections).
- Compact Mobile Card Header (`Services.jsx`): On screens `< 768px`, `grid-cols-[auto_1fr_auto]` places `[36px Icon | Title | 01–06]` onto a single compact top row while expanding the description `100%` below, reducing vertical mobile scroll height without duplicating DOM headings.
- Minimum `44px` tap targets enforced on interactive buttons (`FeeSchedulePage`, `PdfConsentModal`, `FloatingContact`).

---

## 6. Design System Notes for Stitch Generation

### Language to Use
- *"Calm architectural Vietnamese law firm interface combining Cravath/YKVN editorial discipline with Apple-style clean white spaced blocks on soft neutral `#F5F5F7` surfaces."*
- *"Frosted Liquid Glass pricing tiers over subtle sky-and-amber atmospheric gradients (`backdrop-blur-2xl`), high specular white borders, zero cyberpunk or purple neon glows."*
- *"Crisp typographic discipline in Be Vietnam Pro with tight headline tracking, wide uppercase slate eyebrows, and tabular numerals for statutory indices and fees."*

### Color References
- Primary Navy Ink & Buttons: **Deep Judicial Navy (`#0F2144`)**, darker panel variant **Midnight Sanctuary (`#07192E`)**
- Surfaces: **Pure Canvas (`#FFFFFF`)**, **Apple Mist (`#F5F5F7`)**, **Editorial Warm Ivory (`#FAF9F6`)**, **Timeline Stone (`#EFEFF3`)**, **Liquid Glass Base (`#ECF1F8` → `#E6EEF7`)**
- Single Restrained Accent: **Warm Amber Seal (`#D97706` / `#B45309` / `#F59E0B`)**
- Functional Signals: **Emerald (`#059669`)** for verified phone/hotline, **Zalo Blue (`#0068FF`)** strictly for Zalo handoff

### Component Prompts
- **Practice Area Grid:** *"Responsive 2-column × 3-row Apple-style spaced card grid on light mist background `#F5F5F7`; crisp white rounded `22px` static cards displaying a small `#0F2144/5` tinted icon badge, tabular monospace index (`01`–`06`), bold navy heading, and concise body description; collapses on mobile into single-row header cards (`Icon + Title + 01`) above full-width summary text."*
- **Fee Package Tiers:** *"Three translucent frosted Liquid Glass cards (`backdrop-blur-2xl`, `bg-white/55`, `rounded-[28px]`) floating over subtle sky-blue and warm-amber ambient radial glows, each anchored by a left-bleeding pill price badge, four scannable bullet points, faint navy legal line-art watermark top-right, and a rounded-full Deep Navy action pill."*
- **PDPL Modal & Forms:** *"Centered warm ivory `#FAF9F6` consultation card with three clean fields (`Họ và tên`, `Số điện thoại`, `Nội dung vụ việc`), inline flush-left consent trigger opening a full-height (`100dvh`) protected document viewer modal with compact top close pill (`× Đóng`), pinch-zoom toolbar, and sticky bottom dual action bar."*

### Incremental Iteration
- Enforce visual separation: never introduce a 3-column equal card grid in the Practice Areas section (already used directly beneath in the 3-tier Fee Overview), keep Practice Cards non-interactive `<article>` blocks without extra links/footers, never place unrequested emojis or dark-mode neon gradients, and never alter the immutable PDPL Consent Letter canvas protections.

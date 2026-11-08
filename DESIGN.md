# DESIGN SYSTEM SPECIFICATION — CÔNG TY LUẬT TNHH HOÀ VÀ CỘNG SỰ
*Enforced via Taste-Design & Impeccable Anti-Slop Guidelines*

---

## 1. Visual Atmosphere & Aesthetic POV

- **Design Philosophy**: Tier-1 Institutional Law Firm (Cravath / Wachtell / YKVN aesthetic). Calm, authoritative, intellectually rigorous, and uncompromisingly clean.
- **Atmospheric Values**:
  - **Density**: 5/10 (Balanced & Airy — spacious breathing room, distinct spatial zones, no cramped containers).
  - **Variance**: 6/10 (Controlled Asymmetric Rhythm — precision dials, editorial dossiers, clean horizontal hairlines).
  - **Motion**: 4/10 (Restrained & Functional — purposeful state transitions, no fake liveness animations, zero decorative pulsing).
  - **Mood**: Sovereign Oceanic Navy, Alabaster Parchment, Warm Burnished Amber, High-Contrast Typography.

---

## 2. Color Calibration & Contrast Standards

Strict compliance with WCAG AA (minimum contrast ratio ≥ 4.5:1 for body copy and UI controls, ≥ 3.0:1 for large display titles).

| Token | Hex / Class | Functional Role | Contrast Ratio |
| :--- | :--- | :--- | :--- |
| **Sovereign Navy** | `#0F2144` / `#051329` | Primary Brand, Dominant Headings, Header/Hero ground | 14.8:1 on White (Passes AAA) |
| **Parchment Surface** | `#FAF9F6` | Secondary Editorial Ground (Dossier & Intake background) | High warmth, zero glare |
| **Pure Base** | `#FFFFFF` | Primary Content Card Ground | Clean structural base |
| **Primary Ink** | `#0F172A` (Slate-900) | Body Copy, Case Titles, Primary Values | 16.5:1 on White (Passes AAA) |
| **Secondary Ink** | `#334155` (Slate-700) | Descriptive Prose, Quotes, Explanations | 9.8:1 on White (Passes AAA) |
| **Tertiary Ink** | `#475569` (Slate-600) | Metadata, Kicker Labels, Timestamps | 6.2:1 on White (Passes AA) |
| **Muted Ink** | `#64748B` (Slate-500) | Secondary Badges, Inactive States, Form Placeholders | 4.6:1 on White (Passes AA) |
| **Burnished Amber** | `#B45309` (Amber-700) | Client Role Metadata, Highlights, Trust Accents | 4.6:1 on White (Passes AA) |
| **Active Amber** | `#F59E0B` (Amber-500) | Focus Rings, Primary CTA Button Background | Distinctive Singular Accent |
| **Hairline Dividers** | `rgba(226, 232, 240, 0.8)` | Structural Section Borders & Case Dossier Separators | Precision 1px Hairline |

### Banned Color Patterns:
- 🚫 **BANNED**: AI Purple/Violet Gradients (`from-purple-600 to-indigo-600`).
- 🚫 **BANNED**: Neon Cyan on pure `#000000` grounds.
- 🚫 **BANNED**: `text-amber-400` or `text-amber-500` for body copy on light backgrounds (fails contrast at 2.15:1).
- 🚫 **BANNED**: `text-slate-400` on light grounds (fails contrast at 2.8:1). Always use `text-slate-500` or `text-slate-600`.
- 🚫 **BANNED**: Zero-offset colored glow halos (`shadow-[0_0_...px]`).

---

## 3. Typographic Architecture

- **Primary Font**: Modern Clean Sans-Serif (`system-ui`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Helvetica Neue`, `Arial`).
- **Monospace Accent**: `ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas` (used for case dossier indexes, legal timestamps, and statutory citations).
- **Legibility Floor**:
  - Functional UI text floor: **11px** (absolute minimum).
  - Body text floor: **14px - 16px** (optimal reading rhythm).
  - Display headline ceiling: **clamp(1.75rem, 4vw, 2.75rem)**.
  - Headings must utilize `text-wrap: balance` to eliminate single-word orphan lines (*widow-words*).
- **Type Scale**:
  - Hero Headline: `text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight`
  - Section Title: `text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F2144]`
  - Component Sub-head: `text-base sm:text-lg font-bold text-[#0F2144]`
  - Body Copy: `text-sm sm:text-base text-slate-700 leading-relaxed font-normal`
  - Metadata / Badges: `text-xs font-semibold uppercase tracking-wider text-slate-600`

---

## 4. Component Behaviors & Interaction States

### 1. Hero Section
- **Concept**: Cinematic panoramic hero shot with deep royal navy gradient (`#051329` to `#0A2D5F`).
- **Visual Subject**: Authentic landmark of **Ngã Sáu Buôn Ma Thuột & Tượng đài Chiến thắng** with seamless feathered edge transition.
- **Cleanliness Constraint**: Zero floating stacked boxes or duplicate cards. Pure, authoritative typography and prestigious legal insignia.

### 2. Precision Donut Dial (Services Section)
- **Structure**: 6 discrete interactive practice slices mapped around a Swiss-inspired bezel dial.
- **Accessibility**: Full keyboard accessibility (`role="button"`, `tabIndex={0}`, `aria-label`, Enter/Space activation, visible focus outline).
- **Animation**: Smooth 300ms ease-out radial translation (offset 7px) on hover/select. No jittering hit targets; hit areas remain statically anchored.

### 3. Open Case Dossier (Testimonials & Án vụ)
- **Structure**: Clean flat layout partitioned by 1px hairline horizontal dividers. No boxy nested cards.
- **Content**: Authentic case indexes, jurisdiction courts, and anonymized dispute values.
- **Testimonial Slider**: Single-quote presentation paired with rounded avatar container, paused on mouse hover, smooth dot pagination.

### 4. Legal Intake Modal (LegalRiskCheckerModal)
- **Role**: `role="dialog" aria-modal="true" aria-labelledby="legal-risk-title"`.
- **Keyboard Handling**: Native `Escape` listener for keyboard dismissal, trapped backdrop click without focus stealing.

---

## 5. Anti-Patterns Registry (Strictly Banned AI Tells)

Every pull request and edit must pass automated inspection against these anti-patterns:
1. `side-tab`: Thick colored border on one side of a container (e.g. `border-t-4` or `border-l-4`). -> **Enforce uniform 1px hairline borders.**
2. `undersized-ui-text`: Any interactive or content text rendered below 11px (`text-[8px]`, `text-[9px]`, `text-[10px]`). -> **Enforce text-xs (12px) minimum.**
3. `pulsing-dot`: `animate-pulse` on decorative status dots simulating fake data activity. -> **Enforce calm, static indicators.**
4. `contrast-issue`: Low-contrast gray `text-slate-400` or yellow `text-amber-500` on light surfaces. -> **Enforce WCAG AA 4.5:1 minimum.**
5. `gradient-text`: `bg-clip-text text-transparent` used decoratively on headers. -> **Enforce solid, high-contrast ink.**
6. `marquee`: Infinite continuous unpaused tickers. -> **Enforce user-controlled interaction.**
7. `nested-cards`: Cards containing cards creating visual mud. -> **Enforce flat open dossier structures.**
8. `missing-aria`: Clickable elements without keyboard support or accessible names. -> **Enforce role="button", tabIndex={0}, and aria-label.**

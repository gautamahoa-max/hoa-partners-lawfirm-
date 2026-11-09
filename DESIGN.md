# Design System: Công ty Luật TNHH Hoà & Cộng sự (Hoa & Associates Law Firm)

## 1. Visual Theme & Atmosphere
An authoritative, architectural-editorial legal interface combining the gravitas of elite litigation practice with contemporary asymmetric bento geometry and fluid spring-physics micro-interactions. The atmosphere is composed, razor-sharp, and high-trust — evoking a modern appellate courtroom paired with a curated legal dossier archive.
- **Density:** 6/10 (Daily App Balanced to Structured Legal Dossier)
- **Variance:** 7/10 (Offset Asymmetric Bento & Split Editorial Grids)
- **Motion:** 6/10 (Fluid CSS Spring Choreography & Perpetual Status Pulses)

## 2. Color Palette & Roles
- **Alabaster Parchment** (`#FAF9F6`) — Warm editorial section surface for archival case dockets
- **Pure Architectural Surface** (`#FFFFFF`) — Primary canvas and elevated dossier card fill
- **Deep Judicial Navy** (`#0F2144`) — Primary brand authority surface, flagship bento card background, and display headings
- **Slate Ink** (`#1E293B`) — Primary body typography and structural titles
- **Muted Legal Steel** (`#475569`) — Secondary body descriptions, court forum subtitles, and metadata (calibrated for >= 4.5:1 WCAG AA contrast)
- **Hairline Stone Border** (`#E2E8F0`) — 1px structural dividers, dossier compartments, and bento card outlines
- **Sovereign Amber Gold** (`#D97706` / `#F59E0B` on dark) — Single calibrated accent for legal seals, active tabs, and primary interactive focus
- **Verdict Emerald** (`#047857` / `#10B981` dot) — Semantic indicator exclusively for victorious court rulings and verified client protection outcomes

## 3. Typography Rules
- **Display & Headlines:** `Be Vietnam Pro` (Weights 700, 800) — Track-tight (`-0.02em`), controlled typographic scale, hierarchy driven by weight and surface contrast rather than oversized screaming text.
- **Body Copy:** `Be Vietnam Pro` (Weights 400, 500, 600) — Relaxed leading (`1.65` to `1.75`), constrained to `65ch` maximum line width for effortless reading of complex legal summaries. Minimum font floor of `12px` (`0.75rem`) across all viewports.
- **Monospace & Numerals:** `JetBrains Mono` / `ui-monospace` (`font-mono`, `tabular-nums`) — Mandatory for case docket indices (`01`–`04`), asset valuation metrics (`18 Tỷ VNĐ`, `2.400 m²`), and statutory article references.
- **Banned Fonts:** `Inter`, `Times New Roman`, `Georgia`, `Garamond`.

## 4. Component Stylings
- **Buttons & Interactive Tabs:** Tactile push feedback (`active:translate-y-[1px]`), zero neon outer glows, minimum `44px` touch target height on mobile. Primary buttons use Deep Judicial Navy (`#0F2144`) or Sovereign Amber (`#D97706`).
- **Bento Dossier Cards:** Generously rounded architectural corners (`1.5rem` / `rounded-3xl`), 1px structural borders (`#E2E8F0`), and subtle navy-tinted elevation shadows (`0 12px 32px -8px rgba(15, 33, 68, 0.06)`). Flagship cards invert to Deep Judicial Navy (`#0F2144`) to anchor visual hierarchy.
- **Case Anatomy Switcher:** Interactive 3-stage segmented control inside each dossier card (`01. Nút thắt` → `02. Chiến lược` → `03. Phán quyết`) allowing readers to inspect the legal turning point of every dispute.
- **Inputs & Forms:** Explicit top labels, inline validation below, 1px slate borders with `#0F2144` focus rings.

## 5. Layout Principles
- **Asymmetric Bento Grid:** Strictly replaces generic 3-column equal card rows with an alternating 12-column asymmetric split (`7 columns` + `5 columns` on Row 1; `5 columns` + `7 columns` on Row 2).
- **Spatial Separation:** Zero overlapping text over busy photography; every typographic element occupies its own dedicated spatial compartment.
- **Responsive Collapse:** Multi-column grids collapse cleanly to a single vertical column below `1024px` (`lg` breakpoint) with zero horizontal scroll overflow.
- **Max-Width Containment:** Content aligned within a `1280px` (`max-w-7xl`) or `1152px` (`max-w-6xl`) structural container.

## 6. Motion & Interaction
- **Spring Physics Easing:** All hover elevations and tab transitions use `cubic-bezier(0.22, 1, 0.36, 1)` over `300ms`.
- **Perpetual Micro-Interactions:** Subtle infinite pulse animation on verified court ruling status indicators (`animate-ping` / `animate-pulse` at low opacity) to signify active legal protection.
- **Hardware-Accelerated Transforms:** Animations restricted strictly to `transform` and `opacity`.

## 7. Anti-Patterns (Banned)
- No emojis anywhere in the interface
- No `Inter` or generic serif fonts
- No pure black (`#000000`)
- No purple/blue neon outer glows or cyberpunk gradients
- No 3-column equal card layouts
- No `LABEL // YEAR` lazy AI conventions
- No fabricated percentage statistics (`99.99%`)
- No AI copywriting clichés ("Elevate", "Unleash", "Next-Gen")
- No filler scroll prompts ("Scroll to explore", bouncing chevrons)

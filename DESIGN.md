# Design System: CÔNG TY LUẬT TNHH HOÀ & CỘNG SỰ (HOA & PARTNERS)
*Synthesized from YKVN Tier-1 Law Practice & Taste-Design Anti-Generic Directives.*

## 1. Visual Theme & Atmosphere
An authoritative, stately, and cinematic presence modeled after Vietnam's premier tier-1 litigation practice (**YKVN**). Blends courtroom gravitas, architectural discipline, and refined modern restraint.
- **Atmosphere:** Sovereign Courtroom Gravitas, Institutional Integrity, High-Agency Litigation Mastery.
- **Density:** 5 (Daily App Balanced — generous breathing room, zero visual clutter).
- **Variance:** 7 (Asymmetric Editorial Grid, strict ban on centered generic heroes).
- **Motion:** 6 (Cinematic Ken Burns breathing zoom on architectural horizons, tactile spring physics on interactive triggers).

---

## 2. Color Palette & Roles
- **Imperial Obsidian Navy (`#061226`)**: Deep foundation canvas, communicating sovereignty and impenetrable confidentiality.
- **Royal Navy Surface (`#0A1932`)**: Secondary elevation surface for cards, navigation, and structured panels.
- **Warm Amber Gold (`#F59E0B` / `#D97706`)**: Single calibrated accent (<80% saturation) for primary action triggers, status indicators, and geometric brand blocks.
- **Ivory Crisp Text (`#FFFFFF`)**: Primary headline text, guaranteeing AAA contrast.
- **Muted Silver Slate (`#94A3B8` / `#CBD5E1`)**: Secondary descriptive copy, legal citations, and metadata.
- **Whisper Hairline Border (`rgba(255, 255, 255, 0.12)`)**: 1px architectural divider lines replacing fluffy or colored drop shadows.
- **Strictly BANNED:** Pure black (`#000000`), neon purple/blue AI gradients, oversaturated glow effects.

---

## 3. Typographic Architecture
- **Display & Headlines:** `Be Vietnam Pro` (Weights 700 / 800) with `leading-[1.2]` and `tracking-tight` — calibrated specifically for Vietnamese stacked diacritics to guarantee zero vertical character collision.
- **Body:** `Be Vietnam Pro` (Weights 400 / 500) — natural sentence case, relaxed leading (`leading-[1.75]`), line length strictly capped at 65 characters (`max-w-3xl`).
- **Monospace Digits & Codes:** `JetBrains Mono, ui-monospace` for legal articles, docket indexes (`01`, `02`, `03`), and phone numbers.
- **Banned:** `Inter`, generic system fonts, all-caps tracked-out screaming headers, fake percentages.

---

## 4. Hero Section Architecture (Taste-Design Standard)
- **Spatial Separation:** Strict asymmetric composition. Text occupies the left cognitive zone with solid high-contrast backing; the architectural horizon image occupies the right/upper plane. Text NEVER collides with high-frequency image textures.
- **YKVN Signature Geometric Brand Block:** A sharp 12px geometric amber gold square (`ykvn-accent-block`) anchoring the institutional jurisdiction badge.
- **Continuous Cinematic Micro-Motion (`animate-ykvn-zoom`):** Hardware-accelerated Ken Burns slow breathing zoom (16-second cycle, `scale(1)` to `scale(1.08)` via `transform` only).
- **Feature Structure:** Generic "3 equal cards horizontally" row is BANNED. Replaced with an asymmetric, staggered 2-column or hierarchically tiered practice grid.
- **CTA Restraint:** Single high-contrast tactile primary button (`active:translate-y-[1px]`) paired with a direct communication channel (Hotline 24/7). Zero generic "Learn more" links.

---

## 5. Component Behaviors
- **Buttons:** Solid Amber Gold (`#F59E0B`) with subtle deep drop shadow. Tactile -1px vertical translate on active press.
- **Glassmorphism Panels:** Frosted surface with `backdrop-blur-md`, `bg-white/[0.05]`, and 1px hairline border (`rgba(255,255,255,0.12)`).
- **Dividers:** 1px hairline rules with calibrated alpha (`border-white/15`). No thick borders or HR elements.
- **Interactive Feedback:** Transition durations strictly set to 200ms–300ms cubic bezier.

---

## 6. Anti-Patterns (Banned AI Clichés)
- **NO emojis anywhere** in the UI or copywriting.
- **NO generic 3 equal cards in a row.**
- **NO fake metrics or invented percentages** ("99.9% win rate", "10,000+ satisfied clients").
- **NO AI copywriting buzzwords** ("Seamless", "Elevate", "Next-Gen", "Unleash").
- **NO filler navigation text** ("Scroll down", "Swipe to explore", bouncing arrows).
- **NO centered Hero layouts** on desktop viewports.
- **NO overlapping text on busy imagery** — every element must have clean spatial clarity.

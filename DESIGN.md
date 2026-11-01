# Design System: HÒA & CỘNG SỰ (HOA & PARTNERS LAW FIRM)

## 1. Visual Theme & Atmosphere
A dignified, authoritative, and gallery-restrained aesthetic tailored for an elite law firm. High typographic tension, generous spatial margins, asymmetric editorial grids, and tactile micro-motion. The atmosphere is solemn yet warmly human — reflecting deep legal intellect, uncompromising integrity, and relentless client protection.

- **Density:** 5 (Daily App Balanced — spacious breathing room for complex legal reading)
- **Variance:** 7 (Offset Asymmetric — breaking away from repetitive template layouts)
- **Motion:** 6 (Fluid CSS with Spring Physics — smooth counters and tactile push feedbacks)

---

## 2. Color Palette & Roles
- **Canvas White (`#FBFBFB`)**: Primary background surface, providing clarity, openness, and impartiality.
- **Pure Surface (`#FFFFFF`)**: Card, calculator, and modal fill.
- **Charcoal Ink (`#0F172A`)**: Primary text, headings, and high-gravity structural cards. Never pure `#000000`.
- **Muted Steel (`#64748B`)**: Secondary text, procedural steps, and legal statutory citations.
- **Whisper Border (`rgba(226, 232, 240, 0.8)`)**: 1px crisp structural division lines.
- **Royal Amber Gold (`#B4821A`)**: Single curated accent for key monetary figures, verified stamps, and primary interactive highlights (saturation calibrated at 74%).

*(Strictly 1 accent color. Saturation < 80%. No neon purple/blue AI glows.)*

---

## 3. Typography Rules
- **Display & Headlines:** `Playfair Display` — High-contrast editorial serif with track-tight spacing (`tracking-tight`), commanding respect and intellectual depth.
- **Body:** `Be Vietnam Pro` — Modern, ultra-legible humanist sans-serif with flawless Vietnamese diacritics support, relaxed leading (`leading-relaxed`), and a strict 65ch max-width per reading line.
- **Monospace / Digits:** `system-ui, monospace` for financial amounts, Resolution 326 court fee tiers, and article numbering.
- **Banned:** `Inter` (prohibited for premium editorial feel), generic serifs (`Times New Roman`, `Georgia`, `Garamond`), oversaturated gradient text.

---

## 4. Component Stylings
- **Buttons:** Flat, solid fill with tactile physical push feedback (`active:translate-y-[1px] active:scale-[0.99]`). Zero neon glows or artificial drop-shadow flares.
- **Cards & Enclosures:** Generously rounded corners (`rounded-3xl` and `rounded-2xl`). Soft, ambient whisper shadow (`shadow-xl shadow-slate-200/40`). Dense sections use clean `border-t` dividers rather than nested box-in-a-box structures.
- **Interactive Calculator:** Direct input slider paired with `useAnimatedNumber` for smooth numeric transitions, displaying official legal fee schedules.
- **Inputs & Forms:** Explicit label positioned above input, helper note below, custom Vietnamese validation strings. Clean focus borders with zero layout shift.
- **Modals:** Centered backdrop blur (`backdrop-blur-sm bg-slate-900/60`), spring entry fade, accessible Escape key listener, and keyboard trap.

---

## 5. Layout Principles
- **Asymmetric Grid Architecture:** Eliminates generic 3-equal-column cards. Practices and case studies are arranged in high-impact 2-column asymmetric splits and editorial hierarchies.
- **Spatial Separation:** No absolute-positioned overlapping of text over images. Every element maintains clear, unambiguous visual boundary.
- **Mobile-First Collapse:** Multi-column layouts cleanly collapse to single-column under 768px. Zero horizontal overflow (`overflow-x-hidden`).
- **Tactile Touch Targets:** All clickable triggers maintain minimum 44px hit-box.

---

## 6. Motion & Interaction
- **Tactile Feedback:** Subtle 1px spring translate on click triggers.
- **Perpetual Micro-Interactions:** Subtle status beacon pulse for online availability indicator; smooth infinite ticker for partner institutions.
- **Hardware Acceleration:** Animations restricted exclusively to `transform` and `opacity` properties to prevent reflow bottlenecks.

---

## 7. Anti-Patterns (Strictly Enforced)
- **NO emojis anywhere** in web components.
- **NO `Inter` font**.
- **NO pure black (`#000000`)**.
- **NO 3-equal-cards generic template rows**.
- **NO neon glowing shadows or cyber gradients**.
- **NO overlapping text/image collisions**.
- **NO AI copywriting clichés** ("Next-Gen", "Seamless", "Elevate", "Công cụ đột phá đỉnh cao").
- **NO filler UI text** ("Scroll to explore", "Swipe down").
- **NO fabricated fake uptime metrics** ("99.999% SLA").

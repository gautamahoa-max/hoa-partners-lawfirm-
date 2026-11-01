# Design System: HÒA & CỘNG SỰ (HOA & PARTNERS LAW FIRM)
*Structured pursuant to Anthropic Frontend Design Philosophy & Taste-Design Directives.*

## 1. Visual Theme & Atmosphere
An authoritative, editorial, and disciplined presence reflecting the solemnity and intellectual rigor of an elite Vietnamese law practice. Replaces startup SaaS landing page tropes with an authentic legal dossier vernacular — clean hairline rules, generous margins, restrained typography, and functional interactive tools.

- **Atmosphere:** Restrained, scholarly, courtroom dignity.
- **Density:** 5 (Daily App Balanced — spacious breathing room for legal texts).
- **Variance:** 6 (Architectural & Editorial Grid).
- **Motion:** Purposeful, restrained motion answering user actions.

---

## 2. Color Palette & Roles
- **Parchment White (`#FDFDFC`)**: Primary background canvas, evoking archival legal paper.
- **Warm Panel Slate (`#F8F9FA`)**: Dossier panels and calculation containers.
- **Dossier Slate (`#111827` / `#0F172A`)**: High-contrast primary text, statutory citations, and solid buttons.
- **Muted Steel (`#64748B`)**: Secondary text, procedural metadata, and footnotes.
- **Hairline Rule (`#E5E7EB` / `#E2E8F0`)**: 1px structural separators replacing generic card drop-shadows.
- **Sealing Wax Amber (`#9A6B2F` / `#B4821A`)**: A single, disciplined accent color drawn from traditional legal seal wax.

---

## 3. Typography Architecture (Anthropic Frontend-Design Directives)
- **Headings & Display:** `Playfair Display` — High-contrast editorial serif, set in sentence case without gimmicky single-word color accents.
- **Body & Legal Codes:** `Be Vietnam Pro` — Humanist sans-serif with pristine Vietnamese diacritics support. Line lengths constrained to less than 75 characters.
- **Monospace Digits:** `system-ui, monospace` for court fee calculations (Resolution 326/2016) and case file codes (`TT-01`, `DN-02`).
- **Banned:** `Inter`, generic serifs (`Times New Roman`, `Georgia`), all-caps tracked labels, appended arrow characters (`→`).

---

## 4. Anti-Patterns Eradicated (AI Tells Eliminated)
- **NO single-word colored accents in headlines.**
- **NO all-caps tracked-out eyebrow labels.**
- **NO generic 3-card SaaS shadow kits.**
- **NO appended arrow symbols (`→` / `&rarr;`) on buttons and links.**
- **NO fake metric dashboards or fabricated percentages.**
- **NO emojis anywhere in interface chrome.**
- **NO pure black (`#000000`).**

---

## 5. Interactive UX & Event-Driven Lead Intake
- **Resolution 326/2016/UBTVQH14 Court Fee Engine:** Accurate statutory tier calculation paired with smooth `useAnimatedNumber`.
- **Legal Risk Diagnostic:** 4-question interactive assessment for corporate compliance.
- **Event-Driven Lead Intake:** Dispatches `app-prefill-lead` directly into the confidential legal consultation form.

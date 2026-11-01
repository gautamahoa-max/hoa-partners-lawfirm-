# Design System: HÒA & CỘNG SỰ (HOA & PARTNERS LAW FIRM)
*Synthesized from YKVN Tier-1 Law Practice & Anthropic Frontend-Design Directives.*

## 1. Visual Theme & Atmosphere
An authoritative, stately, and corporate presence modeled after Vietnam's premier tier-1 corporate law practice (**YKVN**). Blends international legal rigor with domestic courtroom mastery.

- **Atmosphere:** Tier-1 Corporate Law Firm, Courtroom Gravitas, International Arbitration Prestige.
- **Density:** 5 (Daily App Balanced — spacious, highly legible).
- **Variance:** 6 (Architectural & Editorial Grid).
- **Motion:** Restrained, functional micro-feedback answering user actions.

---

## 2. Color Palette & Roles (YKVN Palette)
- **Deep Marine Navy (`#0F2144` / `#142859`)**: Primary corporate brand color, evoking institutional stability, sovereignty, and trust.
- **Parchment Surface (`#F8F9FA` / `#FDFDFC`)**: Primary background canvas, providing clean contrast without eye strain.
- **Pure White (`#FFFFFF`)**: Interior card surfaces and navigation bar.
- **Dignified Crimson Accent (`#C5221F`)**: Selective indicator for primary action triggers and legal seals.
- **Hairline Border (`#E2E8F0` / `#E5E7EB`)**: 1px structural rules replacing fluffy drop shadows.

---

## 3. Structural Architecture (YKVN Signature Elements)
- **Top Utility Bar:** Multi-jurisdiction offices (Hà Nội &bull; TP. Hồ Chí Minh &bull; Singapore), 24/7 hotline, and bilingual switcher (VI / EN).
- **Dual-Tab Practice System:**
  - Tab 1: **Lĩnh Vực Tư Vấn (Practice Areas)** — Trọng Tài Quốc Tế, Ngân Hàng & Tài Chính, M&A, Tranh Tụng Tòa Án, Bất Động Sản, Pháp Chế Thường Xuyên.
  - Tab 2: **Ngành Nghề Tư Vấn (Industry Sectors)** — Năng lượng, Ngân hàng, Bất động sản, Công nghiệp, Công nghệ & Logistics.
- **International Directory Recognition:** Citations and band tiers from *Chambers and Partners*, *The Legal 500*, and *IFLR1000*.
- **Managing Partner Profile:** Formal executive partner introduction for **Luật sư Võ Văn Hoà (Managing Partner)**.
- **Statutory Court Fee Engine:** Interactive calculation compliant with **Resolution 326/2016/UBTVQH14**.

---

## 4. Typography Architecture (Anthropic Frontend-Design Directives)
- **Headlines:** `Playfair Display` with `leading-[1.38]` and `tracking-normal` — calibrated specifically for Vietnamese stacked diacritics to guarantee zero vertical character collision.
- **Body:** `Be Vietnam Pro` — Humanist sans-serif with natural sentence case. Line lengths constrained to less than 75 characters.
- **Monospace Digits:** `system-ui, monospace` for court fees, decree numbers, and docket codes (`TT-01`, `DN-02`).
- **Banned:** `Inter`, all-caps tracked-out eyebrows, single-word colored accents, appended arrow characters (`→`), fake percentages.

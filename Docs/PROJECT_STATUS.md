# Make My Marriage (MMM) - Project Status

**Last Updated:** 2026-10-20  
**Current Phase:** Phase 1 - Foundation & Project Scaffolding  
**Overall Status:** In Planning / Initial Setup  

---

## 1. Quick Progress Summary

| Phase | Milestone | Status | Completion % |
| :--- | :--- | :---: | :---: |
| **Phase 1** | Foundation, Next.js Scaffold & Codebase Architecture (Auth, Wedding Setup and Dashboard remain) | 🔄 In Progress | 23% |
| **Phase 2** | Events & Task Management | ⏳ Pending | 0% |
| **Phase 3** | Guest List, Invitations & Zero-Friction RSVP | ⏳ Pending | 0% |
| **Phase 4** | Expense Tracker (Paise) & Vendor Management / Discovery | ⏳ Pending | 0% |
| **Phase 5** | Public Wedding Website (3 Themes) & Livestream Embed | ⏳ Pending | 0% |
| **Phase 6** | Private Photo Gallery (Cloudflare R2) & Guest QR Code | ⏳ Pending | 0% |
| **Phase 7** | Production Readiness, Testing & Deployment | ⏳ Pending | 0% |

---

## 2. Feature Implementation Checklist

### Phase 1: Foundation & Project Scaffolding
- [x] Project Documentation review and JWT authentication alignment (PRD, System Design, DB Design, API Design)
- [x] Architectural alignment (JWT-based HttpOnly cookie auth; no sessions collection)
- [x] Codebase architecture for UI, REST handlers, feature modules, and server infrastructure
- [x] Next.js (App Router) + TypeScript + Tailwind CSS initial setup
- [x] MMM design system and first public marketing homepage draft prepared for Stitch review
- [x] Public marketing homepage design approved and coded
- [ ] Database connection module (MongoDB connection pooling & Mongoose setup)
- [ ] Zod validation utilities & standardized API error handling framework
- [ ] User & Wedding Membership Mongoose models
- [ ] JWT authentication utilities (sign, verify, cookie set/clear)
- [ ] Auth endpoints: Signup (`/api/auth/signup`), Login (`/api/auth/login`), Logout (`/api/auth/logout`), Current User (`/api/auth/me`), Password Reset flow
- [ ] Wedding creation endpoint (`/api/wedding`) & automatic Admin role assignment
- [ ] Member management APIs: Invite Member, List Members, Change Role, Remove Member
- [ ] Dashboard shell UI & layout navigation

### Phase 2: Planning (Events & Tasks)
- [ ] Event Mongoose Model with soft-archive support
- [ ] Event CRUD endpoints (`/api/events`) with Indian event presets
- [ ] Task Mongoose Model with assignment to membership
- [ ] Task CRUD endpoints (`/api/tasks`) with priority & status filtering
- [ ] Events & Tasks UI views

### Phase 3: Guests & Digital Invitations
- [ ] Guest Mongoose Model with event-specific invitations & raw 32-byte secret tokens
- [ ] Guest CRUD & bulk import APIs (`/api/guests`)
- [ ] WhatsApp sharing URL generator helper
- [ ] Public Invitation endpoint (`/api/public/invitations/:token`)
- [ ] Public RSVP submission & capacity validation (`1 <= count <= maxGuests`)
- [ ] Email delivery queue (MongoDB `email_jobs` model & Resend integration)
- [ ] Vercel Cron worker route (`/api/internal/jobs/email`) for small batches (25-50)

### Phase 4: Financial & Vendors
- [ ] Expense Mongoose Model storing minor units (`amountPaise` in INR)
- [ ] Expense CRUD & total spending breakdown endpoints (`/api/expenses`)
- [ ] Vendor Mongoose Model (`source: MANUAL | GOOGLE_PLACES`, `totalAgreedCostPaise`)
- [ ] My Vendors CRUD endpoints (`/api/vendors`)
- [ ] Vendor Discovery API integrating Google Places API (`/api/vendors/discover`)

### Phase 5: Wedding Experience (Website & Livestream)
- [ ] Public Website endpoint (`/api/public/w/:slug`)
- [ ] Website theme renderer (Classic Indian, Minimal Elegant, Modern Celebration)
- [ ] YouTube Livestream settings & embedded player component

### Phase 6: Memories (Photo Gallery & QR Code)
- [ ] Cloudflare R2 bucket connection & signed upload URL generator
- [ ] Direct-to-R2 upload endpoint (`/api/photos/upload-url` and guest gallery upload)
- [ ] Photo metadata Mongoose Model (`photos`)
- [ ] Private Gallery UI (`/gallery/:token`) with event filtering
- [ ] Printable Wedding QR code generator utility

### Phase 7: Production Readiness
- [ ] End-to-end integration testing
- [ ] Security audits (multi-tenant query isolation, token randomness, rate limits)
- [ ] Responsive design & mobile testing

---

## 3. Changelog & Feature Progress Log

### [2026-10-20] - Project Initiation & Architecture Baseline
- **Milestone:** Architecture Discussion & Alignment Completed.
- **Decisions:**
  - Standardized on **JWT tokens in HttpOnly secure cookies** for auth and tenant context instead of database-stored session collection.
  - Established project tracking system via `Docs/PROJECT_STATUS.md`.
  - Added instructions to `agents.md` requiring status updates upon completion of every feature.
- **Files Created/Modified:**
  - `Docs/PROJECT_STATUS.md` (Created)
  - `agents.md` (Created)

### [2026-10-20] - V1 JWT Authentication Documentation Alignment
- **Milestone:** Authentication design documents aligned to the agreed JWT cookie architecture. Phase 1 remains in progress at 10%; this was a design clarification, not an implemented feature.
- **Decisions:**
  - Organiser auth uses a signed JWT in the `mmm_token` HttpOnly, Secure, SameSite=Lax cookie, with `{ sub, email, weddingId, role }` claims and an explicit expiry.
  - No MongoDB `sessions` collection or server-side session-token lookup is used. Private requests verify JWTs and check current membership so role changes and member removal take effect immediately.
  - Logout clears the cookie; JWTs are not individually revocable in V1 and expire normally. Password reset tokens remain hashed database records.
- **Files Modified:** `Docs/PRD.md`, `Docs/API_DESIGN.md`, `Docs/SYSTEM_DESIGN.md`, `Docs/DATABASE_DESIGN.md`, `Docs/PROJECT_STATUS.md`.
- **Next Steps:** Implement the agreed JWT utilities and auth flow during Phase 1; decide the JWT expiry duration when configuring authentication.

### [2026-10-20] - Phase 1 Next.js Foundation Scaffold
- **Milestone:** Created the initial application scaffold; Phase 1 is estimated at 18% and remains in progress.
- **Files Created:** `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `.gitignore`, `next-env.d.ts`, `README.md`, `src/app/*`, and `public/*`. **Modified:** `src/app/layout.tsx` metadata branded to MMM.
- **Architectural Decisions:** Used the Next.js App Router inside `src/`, TypeScript, Tailwind CSS v4, ESLint, and the `@/*` import alias. Kept the repository root as the single application; generator output was moved from a temporary lowercase directory and that directory was removed. Grouped the public starter route at `src/app/(marketing)/page.tsx`. Documented API route adapters, feature modules, shared UI, and server-only infrastructure in `Docs/CODEBASE_ARCHITECTURE.md`. The starter page remains a placeholder until dashboard UX work begins.
- **Environment Note:** The installed toolchain is Next.js 16.4.2 with React 19.3.0. npm reported an engine warning because the workspace Node version is 20.15.1 while one transitive ESLint dependency requires Node 20.19.0 or newer; dependency installation completed.
- **Next Steps:** Add the MongoDB/Mongoose connection and shared Zod/API error foundations, then User and Wedding Membership models and the JWT auth flow.

### [2026-10-20] - Source Folder Architecture
- **Milestone:** Clarified and organized the single-repository UI/API boundaries.
- **Files Created:** `Docs/CODEBASE_ARCHITECTURE.md`, `src/app/api/README.md`, `src/components/README.md`, `src/features/README.md`, `src/lib/README.md`, and `src/server/README.md`. **Moved:** `src/app/page.tsx` to `src/app/(marketing)/page.tsx`.
- **Architectural Decisions:** Next.js `app/api/**/route.ts` files are thin HTTP adapters; feature services own business rules and repositories own wedding-scoped persistence. UI pages/components are separate from server-only Mongoose/provider modules. Route groups organize UI without changing URLs. No nested project root or placeholder domain implementations were added.
- **Next Steps:** Implement the database connection and shared API validation/error handling using these boundaries.

### [2026-10-20] - Public Marketing Homepage Design Draft
- **Milestone:** Prepared mobile and desktop public product homepage drafts in the existing Stitch project for user review. No application page implementation was started; Phase 1 remains at 18% pending review and approval.
- **Files Created:** `DESIGN.md` — warm, editorial design system and anti-pattern rules.
- **External Artifact:** Added “MMM — Public Home” (mobile) and “MMM — Public Home Desktop” to the existing Stitch project “Make My Marriage”.
- **Design Decisions:** The pages introduce MMM to Indian couples and families, distinct from the organiser dashboard and couple-specific wedding websites. They use a warm paper/umber/terracotta palette, editorial serif display typography with Geist product copy, an asymmetric hero, restrained wedding photography, and concise V1 product capabilities. The generated screen is a review draft and includes extra content/claims that need user review before implementation.
- **Next Steps:** Review both Stitch screens with the user, revise the visual direction and content as requested, and only then implement the approved design in `src/app/(marketing)/page.tsx`.

### [2026-10-20] - Make My Marriage Wordmark & Responsive Design Direction
- **Milestone:** Updated the Stitch header treatment to show a standalone mark with the full “Make My Marriage” product name and no “MMM” shorthand in the header. Confirmed the user's preference for one responsive web design per page, including mobile behavior, instead of separately generating mobile-only designs. Phase 1 remains at 18%; app UI implementation is still pending approval.
- **Files Modified:** `DESIGN.md`, `Docs/PROJECT_STATUS.md`.
- **External Artifact:** Revised the selected desktop header and mobile-width homepage header in the existing Stitch project “Make My Marriage”.
- **Design Decisions:** Use “Make My Marriage” as the customer-facing brand name. Keep the standalone logo mark to its left; allow the name to stack below only at narrow widths. Future design prompts should describe responsive behavior in the same page deliverable rather than generate a separate mobile screen.
- **Next Steps:** Review the updated wordmarks in Stitch, refine any remaining customer-facing shorthand if desired, then implement the approved responsive page in `src/app/(marketing)/page.tsx`.

### [2026-10-20] - Public Marketing Homepage Implementation
- **Milestone:** Implemented the approved responsive marketing homepage. Phase 1 progress is now estimated at 23%; authentication, wedding setup, and the organiser dashboard remain pending.
- **Files Created:** `public/make-my-marriage-hero.png` (editorial wedding photograph). **Files Modified:** `src/app/(marketing)/page.tsx`, `src/app/globals.css`, `src/app/layout.tsx`, `Docs/PROJECT_STATUS.md`.
- **Design and Architectural Decisions:** Replaced the Next.js starter screen with a server-rendered public homepage in the existing marketing route. The responsive page uses one layout with a native compact mobile navigation, a standalone mark and the full Make My Marriage name, shared-planning capabilities, a sample event and RSVP view, and a calm closing section. Added Instrument Serif alongside Geist for the approved editorial typography and used the generated photograph as a local Next Image asset.
- **Next Steps:** Implement signup/login routes and authentication later in Phase 1; continue with the MongoDB connection and shared validation/error handling foundations.

### [2026-10-20] - Homepage Runtime Verification
- **Milestone:** Started the Next.js development server and verified the public homepage renders successfully at the local preview URL. Phase 1 remains estimated at 23%.
- **Files Modified:** `src/app/(marketing)/page.tsx`, `Docs/PROJECT_STATUS.md`.
- **Design and Architectural Decisions:** Replaced a dynamic footer year expression that triggered a Next.js prerender warning with the static current year. Verified the route responds successfully and that the full homepage content is present in the rendered page.
- **Next Steps:** Review the running responsive page against the approved Stitch design and note any visual adjustments before proceeding to additional pages.

### [2026-10-20] - Homepage V1 Feature Scope Alignment
- **Milestone:** Expanded the public homepage to communicate all V1 product areas described in the PRD, while retaining the approved responsive visual direction. Phase 1 remains estimated at 23%.
- **Files Modified:** `src/app/(marketing)/page.tsx`, `src/app/globals.css`, `Docs/PROJECT_STATUS.md`.
- **Product and Design Decisions:** Added a four-part V1 overview for shared wedding setup/events/tasks; guest lists, digital invitations and account-free RSVPs; vendor records/discovery and expense tracking; and the hosted wedding website, themes, YouTube livestream, private photo gallery, guest uploads and QR sharing. Clarified that expenses track spending rather than budgets, consistent with the PRD non-goals. Updated navigation labels and made the overview adapt from a four-column summary to stacked mobile content.
- **Next Steps:** Review the expanded live homepage; then continue with the Phase 1 application foundation and dashboard shell.

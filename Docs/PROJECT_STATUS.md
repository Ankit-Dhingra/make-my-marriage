# Make My Marriage (MMM) - Project Status

**Last Updated:** 2026-10-20  
**Current Phase:** Phase 1 - Foundation & Project Scaffolding  
**Overall Status:** In Planning / Initial Setup  

---

## 1. Quick Progress Summary

| Phase | Milestone | Status | Completion % |
| :--- | :--- | :---: | :---: |
| **Phase 1** | Foundation, Next.js Scaffold & Codebase Architecture (Auth, Wedding Setup and Dashboard remain) | 🔄 In Progress | 18% |
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

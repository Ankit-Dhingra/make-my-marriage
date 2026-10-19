# Agent Instructions & Guidelines - Make My Marriage (MMM)

This repository contains **Make My Marriage (MMM)**, a digital wedding-management platform designed for Indian weddings.

---

## 🚨 MANDATORY INSTRUCTION: Update PROJECT_STATUS.md

Whenever you build, modify, or complete a feature or milestone:
1. **You MUST immediately update [Docs/PROJECT_STATUS.md](Docs/PROJECT_STATUS.md)**.
2. Update the corresponding checkbox in the **Feature Implementation Checklist**.
3. Update the **Completion %** and current milestone in the **Quick Progress Summary**.
4. Append an entry to the **Changelog & Feature Progress Log** detailing:
   - Date
   - Feature / Milestone name
   - Specific files created, modified, or deleted
   - Architectural or design decisions made
   - Next steps

---

## Core Architecture Baseline

All agents working on this project must strictly respect the design documents in `Docs/`:

* **Architecture Style:** Modular Monolith in Next.js (App Router), TypeScript, and Node.js.
* **Database & ODM:** MongoDB Atlas with Mongoose.
* **Authentication:** **JWT tokens stored in `HttpOnly`, `Secure`, `SameSite=Lax` cookies** (e.g. `mmm_token`). Payload carries `{ sub: userId, email, weddingId, role }`. Eliminates the need for a database `sessions` collection.
* **Multi-Tenancy:** The **`Wedding` is the tenant boundary**. All private resources (events, tasks, guests, vendors, expenses, photos) belong to a `weddingId`. Queries MUST always scope to the authenticated user's `weddingId`.
* **Guest Philosophy:** Guests **NEVER** create accounts or log in. All guest actions use secure, high-entropy tokens (`/invite/:token` for custom invitation and RSVP; `/gallery/:token` for photos and QR code).
* **Storage:** Cloudflare R2 for photos/media using presigned upload URLs (browser/mobile uploads directly to R2; media binaries never pass through serverless functions).
* **Currency:** All financial figures are stored in integer minor units (**paise** in INR) to avoid floating-point math issues.
* **Email:** Resend. Single emails synchronously; bulk emails queued in MongoDB `email_jobs` and processed in small batches (25-50) via Vercel Cron (`/api/internal/jobs/email`).

---

## References

* Product Requirements: [Docs/PRD.md](Docs/PRD.md)
* System Design: [Docs/SYSTEM_DESIGN.md](Docs/SYSTEM_DESIGN.md)
* Database Design: [Docs/DATABASE_DESIGN.md](Docs/DATABASE_DESIGN.md)
* API Design: [Docs/API_DESIGN.md](Docs/API_DESIGN.md)
* Live Project Status: [Docs/PROJECT_STATUS.md](Docs/PROJECT_STATUS.md)

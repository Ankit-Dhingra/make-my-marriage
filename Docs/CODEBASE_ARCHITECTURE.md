# MMM Codebase Architecture

The repository root is the single Next.js application. `src/` contains application source, `public/` contains static assets, and `Docs/` contains product and engineering documentation. Do not create another project directory inside the repository.

## Application structure

```text
src/
├── app/                         # Next.js routing and composition only
│   ├── (marketing)/             # Public product pages; route group is omitted from URLs
│   ├── (auth)/                  # Sign-in and account flows
│   ├── (dashboard)/             # Authenticated organiser pages
│   └── api/                     # REST Route Handler adapters
├── components/
│   ├── ui/                      # Reusable, domain-neutral UI primitives
│   └── layout/                  # Shared navigation, shells, and responsive layout
├── features/                    # Wedding-domain modules and feature UI
│   └── <feature>/
│       ├── components/          # Feature-specific UI
│       ├── contracts/           # Zod request/response schemas and shared types
│       ├── models/              # Mongoose models
│       ├── repositories/        # Wedding-scoped persistence
│       └── services/            # Business rules and use cases
├── server/                      # Server-only infrastructure and integrations
│   ├── auth/
│   ├── database/
│   ├── email/
│   ├── storage/
│   └── vendor-discovery/
└── lib/                          # Small cross-cutting utilities without domain ownership
```

Directories are created as their first files are added. The current public starter route lives at `src/app/(marketing)/page.tsx`; the root layout and global styles remain directly under `src/app/`.

## API and UI boundaries

- `src/app/api/**/route.ts` files are thin HTTP adapters: parse the request, authenticate/authorize, validate input, call a feature service, and format the response. Route handlers do not own business rules or database queries.
- `src/features/<feature>/services` owns business use cases. `repositories` owns persistence and must apply the authenticated `weddingId` to every private query. `models` owns Mongoose schemas.
- `src/app/**/page.tsx` and `src/features/<feature>/components` own user-facing screens and feature UI. Shared primitives belong in `src/components/ui`; shared shells belong in `src/components/layout`.
- UI code calls the explicit REST API contract. It must not import server-only repositories, Mongoose models, secrets, or provider SDKs.
- `src/server` owns database connections, JWT signing/verification, Resend, R2, and Google Places adapters. Keep secrets and provider clients server-only.
- `src/features/<feature>/contracts` defines validated inputs and response types shared across the API and UI; do not put persistence code there.
- Keep guest-token routes public and token-authorized. They do not use organiser JWT authentication.

## Naming and growth

Use domain-oriented feature names such as `auth`, `weddings`, `members`, `events`, `tasks`, `guests`, `vendors`, `expenses`, and `photos`. Add a feature folder when implementing that feature rather than creating placeholder modules for the entire roadmap. Next.js route groups such as `(marketing)` and `(dashboard)` organize screens without adding URL segments.

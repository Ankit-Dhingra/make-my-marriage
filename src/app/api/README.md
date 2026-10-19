# REST Route Handlers

Place Next.js `route.ts` files here using resource-oriented paths from `Docs/API_DESIGN.md`. Keep handlers thin: authenticate and authorize, validate with the feature contract, invoke its service, and return the standard API response. Business logic and MongoDB queries belong in `src/features/` services and repositories.

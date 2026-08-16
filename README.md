# ArchanaAPI 3.0

Full-stack Next.js + Supabase API SaaS starter.

## Included
- Supabase Auth
- Roles: FREE USER, PREMIUM, ENTERPRISE, OWNER
- API key creation/revocation with server-side SHA-256 hash
- API usage logging
- Public API catalog
- Dynamic API documentation
- Admin API Manager: add/edit/delete/publish API catalog entries
- Real `/api/v1/health`
- Authenticated `/api/v1/tiktok` gateway placeholder
- Dashboard, usage, profile, settings
- Responsive dark glass UI

## Setup
1. `cp .env.example .env.local`
2. Put Supabase URL + publishable/anon key in `.env.local`.
3. Put the Supabase service-role key in `SUPABASE_SERVICE_ROLE_KEY` ONLY on server/Vercel environment.
4. Run `supabase/schema.sql` in Supabase SQL Editor.
5. `npm install`
6. `npm run dev`

## Owner
Create a normal account first, then run the SQL shown at the bottom of `supabase/schema.sql` using that user's UUID.

## Important
`NEXT_PUBLIC_*` values are client-visible. Never put `SUPABASE_SERVICE_ROLE_KEY` in the browser or GitHub.

The API Manager stores catalog metadata. It does not magically create arbitrary scraper code. For a real scraper, implement the service under `services/` and connect its route, or build an approved internal upstream proxy layer.


## PRO UI
The landing page is now a SaaS / Developer Tool Landing Page:
- Developer-first hero
- API request/response preview
- Feature grid
- Product workflow
- Premium glass UI
- Lucide icons instead of raw emoji
- Responsive navigation
- Strong CTA and documentation flow


## Auth / Vercel

The project uses `@supabase/ssr` cookie-based sessions, a singleton browser client, and middleware session refresh for protected dashboard/admin routes. Configure `NEXT_PUBLIC_SUPABASE_URL` plus `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (or the legacy anon key) in Vercel.

# Copilot Instructions

## Architecture & Purpose
- `apps/web` is the only runnable app: a Next.js 15 App Router site using TypeScript, Tailwind, shadcn/ui, and Framer Motion. Home sections in `components/sections/*` feed `app/page.tsx`.
- Layout metadata, fonts, and shared chrome live in `apps/web/app/layout.tsx`; `app/providers.tsx` wires `next-themes` plus `sonner` to keep theming and toasts consistent.
- Pages that use hooks/animation (`about`, `gallery`, `contact`) are marked `'use client'`; add that directive before importing React hooks or `motion.*` primitives.

## Local Dev & Tooling
- Install once with `pnpm install`, then run root-level scripts that proxy through Turborepo: `pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm format`.
- `pnpm dev` starts Turbo and the Next dev server; use `pnpm --filter web dev` when you only need the portfolio app without spinning other workspaces.
- `turbo.json` treats `.env.*local` as cache inputs—set `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, and `NEXT_PUBLIC_SITE_URL` inside `apps/web/.env.local` before building or the pipeline will fail.

## Routing & Content
- App Router entries live under `apps/web/app/*`: `page.tsx` (home), `about/page.tsx`, `gallery/page.tsx`, `contact/page.tsx`, and `api/send-email/route.ts`.
- `gallery` and `about` pages store their copy and timeline data in local arrays at the top of each file; keeping content in-sync means editing those arrays, not pulling from CMSs.
- SEO helpers (`manifest.ts`, `sitemap.ts`, `robots.ts`) rely on `process.env.NEXT_PUBLIC_SITE_URL`; update that env whenever the canonical domain changes.

## Layout, Theming, UI
- Global wood-grain theming is defined in `app/globals.css` and `tailwind.config.ts`; extend palettes via CSS variables so dark/light tokens stay paired.
- Layout components in `components/layout/*` (header/footer/theme toggle) assume they are wrapped by `Providers`; avoid rendering them outside the root shell.
- shadcn-derived primitives live under `components/ui/*` and compose via the `cn` helper in `lib/utils.ts`; prefer extending these primitives over dropping in raw HTML.

## Forms & Data Flow
- The contact flow is linear: `app/contact/page.tsx` (React Hook Form + Zod) → `lib/validations.ts` (schema) → `app/api/send-email/route.ts` (Resend call) → `components/email/contact-email.tsx` (React Email template).
- When adding/removing form fields, touch all four layers (UI, schema, API payload, email template) to keep validation, messaging, and outgoing emails aligned.
- The API route sends email via `resend.emails.send` using `CONTACT_EMAIL_TO` as destination; surface errors to the client via the existing toast pattern instead of throwing raw responses.

## Integrations & Deployment
- `next.config.js` whitelists `facebook.com`/`scontent.com` images and enables `optimizePackageImports` for `lucide-react`; extend those lists rather than bypassing the Next image component.
- Vercel builds read `vercel.json`, which runs `cd ../.. && turbo build --filter=web`; see `DEPLOYMENT.md` for environment matrix, Resend setup, and custom domain steps.
- Production email deliverability depends on a verified domain in Resend (documented in `DEPLOYMENT.md`); keep the `from` address in `app/api/send-email/route.ts` aligned with the verified sender.

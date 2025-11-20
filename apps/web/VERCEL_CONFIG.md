# Vercel Configuration

## Root Directory
Set this in Vercel Dashboard Project Settings:
- **Root Directory:** `apps/web`

## Build Settings
These are auto-configured via vercel.json in apps/web:
- **Framework Preset:** Next.js
- **Build Command:** `cd ../.. && pnpm install && pnpm build --filter=web`
- **Install Command:** `pnpm install`
- **Output Directory:** `.next` (auto-detected)

## Environment Variables
Add these in Vercel Dashboard → Environment Variables:

### Required
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL_TO=kevswoodencreations@gmail.com
NEXT_PUBLIC_SITE_URL=https://your-production-domain.vercel.app
```

### Optional
```
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

Set for all environments: Production, Preview, and Development

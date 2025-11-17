# Deployment Guide for JKL Woodcrafts

## Prerequisites

Before deploying, ensure you have:

1. ✅ A Vercel account (sign up at [vercel.com](https://vercel.com))
2. ✅ A Resend account and API key (sign up at [resend.com](https://resend.com))
3. ✅ Your repository pushed to GitHub/GitLab/Bitbucket

## Step-by-Step Deployment to Vercel

### 1. Prepare Your Repository

Ensure all code is committed and pushed to your Git repository:

```bash
git add .
git commit -m "Initial commit: JKL Woodcrafts portfolio website"
git push origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Project"
3. Select your Git provider (GitHub, GitLab, or Bitbucket)
4. Select the `Wooden-Craft-Creations` repository
5. Vercel will automatically detect it's a Turborepo monorepo

### 3. Configure Project Settings

Vercel should auto-detect these settings, but verify:

- **Framework Preset:** Next.js
- **Root Directory:** `apps/web`
- **Build Command:** `cd ../.. && turbo build --filter=web`
- **Output Directory:** `.next`
- **Install Command:** `pnpm install`

### 4. Set Environment Variables

Add the following environment variables in Vercel Dashboard → Your Project → Settings → Environment Variables:

**Required:**
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL_TO=kevswoodencreations@gmail.com
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

**Optional:**
```
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX  # Google Analytics
```

Make sure to add these for:
- ✅ Production
- ✅ Preview
- ✅ Development

### 5. Deploy

Click "Deploy" and wait for Vercel to:
1. Install dependencies
2. Build the project with Turborepo
3. Deploy to production

Your site will be live at `https://your-project.vercel.app`

### 6. Custom Domain (Optional)

To add a custom domain:

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `jklwoodcrafts.com`)
3. Configure DNS records as instructed by Vercel:
   - For root domain: Add A record pointing to Vercel's IP
   - For www subdomain: Add CNAME record pointing to `cname.vercel-dns.com`
4. Wait for DNS propagation (can take up to 48 hours)
5. Vercel automatically provisions SSL certificate

### 7. Update Site URL

After deploying with custom domain, update the environment variable:

```
NEXT_PUBLIC_SITE_URL=https://jklwoodcrafts.com
```

## Email Service Setup (Resend)

### 1. Get Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Verify your email
3. Go to API Keys section
4. Generate a new API key
5. Copy the key (starts with `re_`)

### 2. Domain Verification (For Production)

For production use, verify your domain with Resend:

1. Go to Domains in Resend dashboard
2. Add your domain (e.g., `jklwoodcrafts.com`)
3. Add the provided DNS records to your domain:
   - TXT record for verification
   - MX records for receiving
   - DKIM records for authentication
4. Wait for verification (usually < 1 hour)

### 3. Update Email Configuration

Once domain is verified, update the sender address in:
`apps/web/app/api/send-email/route.ts`

```typescript
from: 'JKL Woodcrafts <hello@jklwoodcrafts.com>',
```

### 4. Testing

For development/testing, you can use:
- Resend's test domain: `onboarding@resend.dev`
- Or your verified domain

## Continuous Deployment

After initial setup, Vercel automatically:

- ✅ Deploys on every push to `main` branch (Production)
- ✅ Creates preview deployments for pull requests
- ✅ Runs builds in isolated environments
- ✅ Provides deployment URLs for each commit

## Monitoring & Analytics

### Vercel Analytics

Enable Vercel Analytics for insights:

1. Go to Project → Analytics
2. Enable Web Analytics
3. View real-time traffic and performance metrics

### Performance Monitoring

Monitor Core Web Vitals:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)

Target: All metrics in "Good" range

## Troubleshooting

### Build Fails

**Error:** `No Next.js version could be detected`
- **Solution:** Ensure `package.json` exists in `apps/web`

**Error:** `Module not found`
- **Solution:** Clear Vercel cache and redeploy
- Or run `pnpm install` locally to verify dependencies

### Email Not Sending

**Error:** `Resend API error`
- **Solution:** Verify `RESEND_API_KEY` is set correctly
- Check API key is not expired
- Ensure sender domain is verified (for production)

### Environment Variables Not Working

- Ensure variables are set for correct environment (Production/Preview/Development)
- Redeploy after adding new environment variables
- Check variable names match exactly (case-sensitive)

## Performance Optimization

### Image Optimization

- Use Next.js Image component for all images
- Provide width/height for images to prevent layout shift
- Use AVIF/WebP formats when possible

### Bundle Size

Monitor bundle size:
```bash
pnpm build
# Check .next/static/chunks for bundle analysis
```

### Caching

Vercel automatically handles:
- Static asset caching
- Image optimization and caching
- Edge caching for static pages

## Security

### Environment Variables

- ✅ Never commit `.env.local` to Git
- ✅ Use Vercel's encrypted environment variables
- ✅ Rotate API keys regularly
- ✅ Use different keys for development/production

### HTTPS

- ✅ Vercel automatically provisions SSL certificates
- ✅ All traffic is encrypted by default
- ✅ HTTP automatically redirects to HTTPS

## Post-Deployment Checklist

After deployment, verify:

- [ ] All pages load correctly
- [ ] Dark/light mode toggle works
- [ ] Contact form sends emails successfully
- [ ] Gallery filtering works
- [ ] Mobile responsiveness is good
- [ ] SEO meta tags are present (view page source)
- [ ] sitemap.xml is accessible
- [ ] robots.txt is accessible
- [ ] Social media links work
- [ ] Custom domain is working (if configured)
- [ ] SSL certificate is active
- [ ] Performance metrics are good (Lighthouse)

## Support

For deployment issues:
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Resend Support: [resend.com/docs](https://resend.com/docs)

## Additional Resources

- [Vercel Turborepo Documentation](https://vercel.com/docs/monorepos/turborepo)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Resend Documentation](https://resend.com/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)

---

Last updated: 2025-11-17

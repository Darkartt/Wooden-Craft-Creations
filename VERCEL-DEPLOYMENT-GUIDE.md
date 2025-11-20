# Vercel Deployment Guide - JKL Woodcrafts

## ✅ Prerequisites Fixed

All issues preventing deployment have been resolved:
- ✅ Turborepo configuration updated (`tasks` instead of `pipeline`)
- ✅ vercel.json configured correctly
- ✅ Public directory structure in place
- ✅ Build command tested and working
- ✅ All tests passing (33/33)

## 🚀 Deployment Steps

### Step 1: Import Project to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Project"
3. Select your Git provider (GitHub/GitLab/Bitbucket)
4. Select the `Wooden-Craft-Creations` repository

### Step 2: Configure Project Settings

**IMPORTANT:** Configure these settings in the Vercel dashboard:

#### Framework Preset
- **Framework:** `Next.js`

#### Root Directory
- **Root Directory:** `apps/web` ⚠️ **CRITICAL - Must be set!**

#### Build & Development Settings
Leave these as auto-detected or set manually:
- **Build Command:** `cd ../.. && pnpm install && pnpm build --filter=web`
- **Output Directory:** `.next`
- **Install Command:** `pnpm install`

> **Note:** The build command is configured in `apps/web/vercel.json` and will be auto-detected.

### Step 3: Environment Variables

Add these in: **Project Settings** → **Environment Variables**

#### Required Variables
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL_TO=kevswoodencreations@gmail.com
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
```

#### How to Get RESEND_API_KEY
1. Sign up at [resend.com](https://resend.com)
2. Go to **API Keys** section
3. Click "Create API Key"
4. Copy the key (starts with `re_`)
5. Paste into Vercel environment variable

#### Environment Selection
Set variables for:
- ✅ **Production**
- ✅ **Preview**
- ✅ **Development**

### Step 4: Deploy

Click **"Deploy"** and wait for the build to complete.

**Build Time:** ~45-60 seconds

---

## 🔧 Troubleshooting Common Issues

### Issue 1: ".next directory not found"

**Cause:** Root directory not set correctly

**Solution:**
1. Go to **Project Settings** → **General**
2. Scroll to **Root Directory**
3. Set to: `apps/web`
4. Click **Save**
5. Redeploy

### Issue 2: "public directory not found"

**Cause:** Build running from wrong directory

**Solution:**
- Ensure Root Directory is set to `apps/web`
- The public directory is at `apps/web/public`
- It contains placeholder README files and favicon.ico

### Issue 3: "turbo: command not found"

**Cause:** Turborepo not installed

**Solution:**
- Ensure `pnpm install` runs before build
- Check `package.json` has `turbo` in devDependencies
- Build command should be: `cd ../.. && pnpm install && pnpm build --filter=web`

### Issue 4: Build fails with "pipeline" error

**Cause:** Old Turborepo configuration format

**Solution:**
✅ **Already Fixed!** We updated `turbo.json` to use `tasks` instead of `pipeline`

### Issue 5: Email not sending in production

**Cause:** RESEND_API_KEY not set

**Solution:**
1. Verify environment variable is set in Vercel
2. Check it's set for "Production" environment
3. Redeploy after adding the variable

---

## 📊 Vercel Dashboard Settings Summary

### General Settings
| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Root Directory | `apps/web` |
| Node.js Version | 18.x (default) |

### Build & Development Settings
| Setting | Value |
|---------|-------|
| Build Command | `cd ../.. && pnpm install && pnpm build --filter=web` |
| Output Directory | `.next` |
| Install Command | `pnpm install` |
| Development Command | `pnpm dev` |

### Environment Variables
| Variable | Value | Environment |
|----------|-------|-------------|
| `RESEND_API_KEY` | `re_xxxxx...` | Production, Preview, Development |
| `CONTACT_EMAIL_TO` | `kevswoodencreations@gmail.com` | Production, Preview, Development |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.vercel.app` | Production, Preview, Development |

---

## 🎯 Post-Deployment Checklist

After successful deployment:

- [ ] Visit the deployment URL
- [ ] Test all pages load correctly
  - [ ] Home page
  - [ ] Gallery page
  - [ ] About page
  - [ ] Contact page
- [ ] Test dark/light mode toggle
- [ ] Test contact form submission
- [ ] Verify email is received (check spam folder)
- [ ] Test mobile responsiveness
- [ ] Check Vercel Analytics (if enabled)
- [ ] Run Lighthouse audit

---

## 🔄 Continuous Deployment

After initial setup, deployments are automatic:

- **Production:** Pushes to `main` branch
- **Preview:** Pull requests and other branches
- **Each commit** gets a unique preview URL

### Deploy Latest Changes
1. Commit your changes
2. Push to GitHub: `git push origin main`
3. Vercel automatically deploys
4. Check deployment status at vercel.com

---

## 🌐 Custom Domain Setup

### Add Custom Domain

1. Go to **Project Settings** → **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `jklwoodcrafts.com`)
4. Follow DNS configuration instructions

### DNS Configuration

**For root domain (example.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### SSL Certificate
- Automatically provisioned by Vercel
- Usually ready within 24 hours
- Free with Let's Encrypt

### Update Environment Variable
After adding custom domain, update:
```env
NEXT_PUBLIC_SITE_URL=https://jklwoodcrafts.com
```

---

## 📈 Performance & Monitoring

### Vercel Analytics
Enable in: **Project Settings** → **Analytics**
- Real-time traffic data
- Core Web Vitals
- Geographic distribution

### Recommended Monitoring
- **Vercel Analytics:** Built-in, free
- **Vercel Speed Insights:** Performance metrics
- **Sentry:** Error tracking (optional)
- **Google Analytics:** User analytics (optional)

---

## 🔍 Build Logs & Debugging

### View Build Logs
1. Go to **Deployments** tab
2. Click on a deployment
3. View **Build Logs** and **Functions** tabs

### Common Log Messages

**Success:**
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
Build Completed
```

**Error Examples:**
```
Error: RESEND_API_KEY is not configured
→ Add environment variable in Vercel

Error: Module not found
→ Run pnpm install locally and commit pnpm-lock.yaml

Error: Command failed with exit code 1
→ Check build logs for specific error
```

---

## 🆘 Support & Resources

### Official Documentation
- [Vercel Monorepo Guide](https://vercel.com/docs/monorepos)
- [Turborepo with Vercel](https://vercel.com/docs/monorepos/turborepo)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

### Getting Help
- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **Turborepo Docs:** [turbo.build/repo/docs](https://turbo.build/repo/docs)
- **Next.js Discord:** [nextjs.org/discord](https://nextjs.org/discord)

### Project-Specific Files
- `BUILD-AND-TEST-STATUS.md` - Build status
- `DEPLOYMENT.md` - General deployment guide
- `README.md` - Project overview
- `apps/web/VERCEL_CONFIG.md` - Quick reference

---

## ✅ Deployment Complete!

Once deployed successfully, your JKL Woodcrafts website will be live at:
- **Vercel URL:** `https://your-project.vercel.app`
- **Custom Domain:** `https://jklwoodcrafts.com` (if configured)

**All issues resolved. Ready for production deployment!** 🎉

---

Last Updated: 2025-11-17

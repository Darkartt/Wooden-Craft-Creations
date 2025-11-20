# Quick Start - JKL Woodcrafts

## 🚀 Deploy to Vercel in 3 Steps

### 1. Import to Vercel
- Go to [vercel.com/new](https://vercel.com/new)
- Import this GitHub repository

### 2. Configure Settings
**⚠️ CRITICAL:** Set Root Directory to `apps/web`

In Project Settings → General:
- **Root Directory:** `apps/web`

### 3. Add Environment Variables
In Project Settings → Environment Variables:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL_TO=kevswoodencreations@gmail.com
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
```

Then click **Deploy**!

---

## 💻 Local Development

### Install Dependencies
```bash
pnpm install
```

### Run Development Server
```bash
pnpm dev
```
Visit [http://localhost:3000](http://localhost:3000)

### Run Tests
```bash
pnpm test:ci
```

### Build for Production
```bash
pnpm build --filter=web
```

---

## 📖 Full Documentation

- **[VERCEL-DEPLOYMENT-GUIDE.md](./VERCEL-DEPLOYMENT-GUIDE.md)** - Complete deployment guide
- **[BUILD-AND-TEST-STATUS.md](./BUILD-AND-TEST-STATUS.md)** - Build & test status
- **[README.md](./README.md)** - Project overview
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - General deployment info

---

## ✅ Status

- ✅ Build: **PASSING**
- ✅ Tests: **33/33 PASSING**
- ✅ TypeScript: **No errors**
- ✅ ESLint: **Passing**
- ✅ Ready for Vercel deployment

---

## 🆘 Troubleshooting

**Build fails on Vercel?**
→ Check that Root Directory is set to `apps/web`

**Email not working?**
→ Verify `RESEND_API_KEY` is set in Vercel environment variables

**Tests failing?**
→ Run `pnpm test:ci` locally to debug

See full troubleshooting in **[VERCEL-DEPLOYMENT-GUIDE.md](./VERCEL-DEPLOYMENT-GUIDE.md)**

# JKL Woodcrafts Portfolio Website

A modern, custom portfolio website for **Kev Simmonds** (Owner of JKL Woodcrafts) to showcase handcrafted wooden creations and enable client inquiries.

## 🌟 Features

- ✅ **Responsive Design** - Mobile-first approach with seamless experience across all devices
- ✅ **Dark/Light Mode** - System preference detection with manual toggle
- ✅ **Image Gallery** - Filterable project gallery with category-based filtering
- ✅ **Contact Form** - Integrated with Resend email service for reliable message delivery
- ✅ **SEO Optimized** - Meta tags, Open Graph, sitemap, and JSON-LD structured data
- ✅ **Performance** - Built with Next.js 15 for optimal performance
- ✅ **Accessibility** - WCAG 2.1 AA compliant with keyboard navigation support
- ✅ **Modern UI** - Beautiful components from shadcn/ui with custom woodcraft theme
- ✅ **Animations** - Smooth page transitions and scroll animations with Framer Motion

## 🛠️ Tech Stack

### Monorepo Architecture
- **Turborepo** - High-performance build system
- **pnpm workspaces** - Efficient package management

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom woodcraft theme
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Theme Management:** next-themes
- **Icons:** lucide-react
- **Forms:** React Hook Form + Zod validation

### Backend & Services
- **API:** Next.js Server Actions / API Routes
- **Email Service:** Resend API
- **Form Handling:** Server-side validation with Zod
- **Image Optimization:** Next.js Image component

### Deployment
- **Platform:** Vercel
- **CI/CD:** Automatic deployments via Git integration
- **Environment:** Separate preview/production environments

## 📁 Project Structure

```
jkl-woodcrafts/
├── apps/
│   └── web/                    # Main Next.js portfolio app
│       ├── app/
│       │   ├── (pages)/
│       │   │   ├── page.tsx           # Home
│       │   │   ├── gallery/           # Gallery
│       │   │   ├── about/             # About
│       │   │   └── contact/           # Contact
│       │   ├── api/
│       │   │   └── send-email/        # Email API
│       │   ├── layout.tsx
│       │   ├── globals.css
│       │   └── providers.tsx
│       ├── components/
│       │   ├── sections/              # Page sections
│       │   ├── ui/                    # shadcn components
│       │   ├── layout/                # Layout components
│       │   └── email/                 # Email templates
│       ├── lib/
│       │   ├── utils.ts
│       │   └── validations.ts
│       └── public/
├── packages/                   # Shared packages
├── turbo.json
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 9.0.0

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Wooden-Craft-Creations
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp apps/web/.env.example apps/web/.env.local
```

Edit `apps/web/.env.local` and add your credentials:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL_TO=kevswoodencreations@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Start the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

```bash
# Development
pnpm dev          # Start development server

# Building
pnpm build        # Build all apps

# Linting
pnpm lint         # Run ESLint

# Formatting
pnpm format       # Format code with Prettier
```

## 🎨 Design Theme

### Color Palette

**Light Mode:**
- Primary: Warm wood tones (Amber-700: `#B45309`)
- Secondary: Forest Green-700 (`#15803D`)
- Accent: Rust/Terracotta (`#C2410C`)
- Neutral: Cream backgrounds (`#FAFAF9`)

**Dark Mode:**
- Background: Deep charcoal (`#1C1917`)
- Primary: Lighter warm wood tones (Amber-500: `#F59E0B`)
- Text: Warm white (`#FAFAF9`)

### Typography
- **Headings:** Playfair Display (elegant serif)
- **Body:** Inter (clean readability)

## 📧 Email Configuration

The contact form uses Resend for reliable email delivery. To set it up:

1. Create a Resend account at [resend.com](https://resend.com)
2. Generate an API key
3. Add the API key to your `.env.local` file
4. Configure your verified domain (or use the Resend testing domain for development)

## 🌐 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will auto-detect the Turborepo configuration
4. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL_TO`
   - `NEXT_PUBLIC_SITE_URL`
5. Deploy!

Vercel automatically configures:
- Root Directory: `apps/web`
- Build Command: `cd ../.. && turbo build --filter=web`
- Install Command: `pnpm install`

## 📱 Pages

### Home (`/`)
- Hero section with compelling headline
- Services & specialties showcase
- Featured projects carousel
- Call-to-action sections

### Gallery (`/gallery`)
- Filterable project grid
- Category-based filtering
- Project details with materials and dimensions

### About (`/about`)
- Personal story and craftsmanship philosophy
- Process timeline (6 steps)
- Tools & materials showcase

### Contact (`/contact`)
- Contact form with validation
- Email integration
- Social media links
- Response time information

## 🔧 Customization

### Adding New Projects

Edit `apps/web/app/gallery/page.tsx` and add to the `projects` array:

```typescript
{
  id: 13,
  title: 'Your Project Name',
  category: 'furniture', // or 'decorations', 'custom', 'outdoor'
  description: 'Project description',
  materials: 'Oak wood, natural finish',
  dimensions: '200cm x 100cm x 75cm',
}
```

### Updating Contact Information

Edit the footer component at `apps/web/components/layout/footer.tsx` and contact page at `apps/web/app/contact/page.tsx`.

## 📊 Performance

Target metrics:
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

## 🤝 Contact

**Kev Simmonds**
- Email: kevswoodencreations@gmail.com
- Facebook: [Kevs Wooden Craft Creations](https://www.facebook.com/p/Kevs-Wooden-Craft-Creations-100032094896567/)
- LinkedIn: [Kev Simmonds](https://www.linkedin.com/in/kev-simmonds-1312aa179/)

## 📄 License

All rights reserved © 2025 JKL Woodcrafts

---

Built with ❤️ using Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui
# Dummy commit to trigger deployment

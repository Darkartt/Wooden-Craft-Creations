# JKL Woodcrafts Portfolio Website - Complete Masterplan

## Project Overview

Building a modern, custom portfolio website for **Kev Simmonds** (Owner of JKL Woodcrafts) to showcase his wooden craft creations and enable client inquiries. The site will feature advanced UI/UX using shadcn components, deployed as a monorepo to Vercel.

**Client Contact:**

- Email: kevswoodencreations@gmail.com
- Facebook: [Kevs Wooden Craft Creations](https://www.facebook.com/p/Kevs-Wooden-Craft-Creations-100032094896567/)
- LinkedIn: [Kev Simmonds](https://www.linkedin.com/in/kev-simmonds-1312aa179/)

***

## Tech Stack

### Monorepo Architecture

**Turborepo + pnpm workspaces**[^1][^2][^3]

- High-performance build system optimized for JavaScript/TypeScript monorepos
- Native Vercel integration with automatic workspace detection
- Remote caching support for faster builds
- Parallel task execution


### Frontend Stack

- **Framework:** Next.js 15 (App Router)[^4][^5][^6]
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom woodcraft theme
- **UI Components:** shadcn/ui[^7][^8][^9][^1]
- **Animations:** Framer Motion[^9]
- **Theme Management:** next-themes (dark/light mode)[^10][^11][^12]
- **Icons:** lucide-react
- **Forms:** React Hook Form + Zod validation[^13][^14]


### Backend \& Services

- **API:** Next.js Server Actions / API Routes
- **Email Service:** Resend API[^5][^15][^16][^13]
- **Form Handling:** Server-side validation with Zod
- **Image Optimization:** Next.js Image component


### Deployment

- **Platform:** Vercel[^17][^18][^2]
- **CI/CD:** Automatic deployments via Git integration
- **Environment:** Separate preview/production environments
- **Domain:** Custom domain support

***

## Monorepo Structure

```
jkl-woodcrafts/
├── apps/
│   └── web/                    # Main Next.js portfolio app
│       ├── app/
│       │   ├── (pages)/
│       │   │   ├── page.tsx           # Home
│       │   │   ├── gallery/
│       │   │   │   └── page.tsx       # Gallery
│       │   │   ├── about/
│       │   │   │   └── page.tsx       # About
│       │   │   └── contact/
│       │   │       └── page.tsx       # Contact
│       │   ├── api/
│       │   │   └── send-email/
│       │   │       └── route.ts       # Email API
│       │   ├── layout.tsx
│       │   ├── globals.css
│       │   └── providers.tsx
│       ├── components/
│       │   ├── sections/              # Page sections
│       │   ├── ui/                    # shadcn components
│       │   └── layout/                # Layout components
│       ├── lib/
│       │   ├── utils.ts
│       │   └── validations.ts
│       ├── public/
│       │   ├── images/
│       │   └── projects/
│       ├── next.config.js
│       ├── tailwind.config.ts
│       └── tsconfig.json
├── packages/
│   ├── ui/                     # Shared UI components
│   │   ├── src/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── config/                 # Shared configurations
│   │   ├── eslint/
│   │   ├── typescript/
│   │   └── tailwind/
│   └── utils/                  # Shared utilities
│       ├── src/
│       └── package.json
├── turbo.json
├── package.json
├── pnpm-workspace.yaml
└── README.md
```


***

## Design Theme (Woodcraft Aesthetic)

### Color Palette

**Light Mode:**

- **Primary:** Warm wood tones (Amber-700: `#B45309`, Brown-600: `#92400E`)
- **Secondary:** Natural earthy (Forest Green-700: `#15803D`, Stone-600: `#57534E`)
- **Accent:** Rust/Terracotta (`#C2410C`, `#EA580C`)
- **Neutral:** Cream backgrounds (`#FAFAF9`), Charcoal text (`#1C1917`)

**Dark Mode:**[^11][^12][^10]

- **Background:** Deep charcoal (`#1C1917`, `#0C0A09`)
- **Primary:** Lighter warm wood tones (Amber-500: `#F59E0B`)
- **Text:** Warm white (`#FAFAF9`)
- **Accents:** Warm highlights maintaining natural aesthetic


### Typography

- **Headings:** Playfair Display or Crimson Text (elegant serif)[^19][^20]
- **Body:** Inter or Source Sans Pro (clean readability)
- **Accent:** Merriweather for testimonials/quotes


### Visual Style

- High-quality product photography with natural lighting[^21][^19]
- Warm color grading emphasizing wood grain texture
- Mix of full-width hero images and masonry grid layouts[^20][^19]
- Subtle wood grain textures as background overlays
- Organic shapes and natural transitions

***

## Core Features

### Essential Functionality

✅ **Responsive Design** - Mobile-first approach[^19][^1][^7]
✅ **Dark/Light Mode** - System preference + manual toggle[^22][^12][^10][^11]
✅ **Image Gallery** - Masonry layout with lightbox modal[^21][^19]
✅ **Project Filtering** - Category-based filtering (furniture, decor, custom)
✅ **Contact Form** - Integrated with Resend email service[^15][^16][^13][^5]
✅ **SEO Optimization** - Meta tags, Open Graph, JSON-LD[^23][^9]
✅ **Performance** - Target Lighthouse score 90+[^9]
✅ **Accessibility** - WCAG 2.1 AA compliance[^24][^14]

### Advanced UI/UX[^4][^9]

🎨 **Smooth Scroll Animations** - Framer Motion page transitions
🎨 **Parallax Hero** - Depth effect on landing section
🎨 **Interactive Cards** - Hover effects revealing project details
🎨 **Modal Dialogs** - Full project detail views with image carousels
🎨 **Toast Notifications** - Success/error feedback[^25][^13]
🎨 **Loading States** - Skeleton screens for better UX[^9]
🎨 **Variable Fonts** - Optimized typography loading

***

## Page Structure \& Sections

### Home Page (`/`)

**Hero Section:**

- Full-width background with woodcraft image
- Compelling headline: "Handcrafted Wooden Creations by Kev Simmonds"
- Subheading about custom craftsmanship
- CTA buttons: "View Gallery" \& "Get in Touch"
- Parallax scroll effect

**Featured Projects:**

- Carousel/slider showcasing 3-5 best works
- High-quality images with project names
- "View All" button to gallery

**About Preview:**

- Brief introduction (2-3 sentences)
- Photo of Kev at work
- Link to full About page

**Services/Skills:**

- Icon grid showing specialties:
    - Custom Furniture
    - Decorative Pieces
    - Restoration Work
    - Commissioned Projects

**Recent Work Grid:**

- 6-8 recent projects in card layout
- Hover effects revealing project names
- Click to view details

**Testimonials (Optional):**

- Client reviews if available
- Carousel format with quotes

**CTA Section:**

- "Ready to start your project?"
- Contact button


### Gallery Page (`/gallery`)

**Filter Bar:**[^19][^21]

- All / Furniture / Decorations / Custom / Outdoor
- Sort options: Recent, Popular, A-Z

**Masonry Grid:**

- Responsive masonry layout (2-4 columns based on screen size)
- High-quality project images
- Hover overlay with project name and category badge
- Click opens lightbox modal

**Lightbox Modal:**

- Full-size image viewing
- Image carousel for multi-photo projects
- Project details sidebar:
    - Title
    - Category
    - Materials used
    - Dimensions
    - Description
    - "Inquire About Similar Project" button


### About Page (`/about`)

**Personal Story:**

- Engaging narrative about Kev's journey into woodcraft
- "In my spare time I like to get creative, building all sorts of things..."

**Craftsmanship Philosophy:**

- Values and approach to work
- Attention to detail and quality

**Process Timeline:**

- Step-by-step visualization of project workflow:

1. Consultation
2. Design \& Planning
3. Material Selection
4. Crafting
5. Finishing
6. Delivery

**Tools \& Materials:**

- Showcase of workshop tools
- Preferred wood types and materials

**Experience Highlights:**

- Notable projects or achievements
- Skills and techniques mastered


### Contact Page (`/contact`)

**Contact Form:**[^16][^13][^5][^24][^25][^15]

- Fields:
    - Name (required)
    - Email (required, validated)
    - Phone (optional)
    - Project Type (select dropdown)
    - Budget Range (optional select)
    - Message/Project Description (required, min 50 chars)
    - Preferred Contact Method
- Client-side validation with Zod
- Server-side submission with Resend API
- Success toast notification
- Error handling with user-friendly messages

**Contact Information:**

- Email: kevswoodencreations@gmail.com
- Social media links (Facebook)
- Workshop location (if applicable)

**Social Proof:**

- Links to Facebook gallery
- Instagram integration (if available)

***

## shadcn/ui Components Implementation[^26][^8][^1][^7][^9]

### Installed Components

```bash
npx shadcn@latest add button card dialog form input textarea select tabs accordion badge separator sheet toast skeleton scroll-area aspect-ratio avatar hover-card
```


### Component Usage

**Navigation:**

- `Sheet` - Mobile hamburger menu
- `Button` - CTA buttons throughout
- `Separator` - Visual dividers

**Gallery:**

- `Card` - Project cards
- `Dialog` - Lightbox modal
- `AspectRatio` - Consistent image ratios
- `Badge` - Category tags
- `ScrollArea` - Modal content scrolling

**Forms:**[^14][^13][^24]

- `Form` - React Hook Form wrapper
- `Input` - Text inputs
- `Textarea` - Message field
- `Select` - Dropdown menus
- `Button` - Submit button

**Feedback:**

- `Toast/Sonner` - Notifications
- `Skeleton` - Loading states

**Content:**

- `Accordion` - FAQ section
- `Tabs` - Category switching
- `HoverCard` - Additional info on hover

***

## Email Integration (Resend)[^27][^13][^5][^15][^16]

### Setup Steps

**1. Install Dependencies:**

```bash
pnpm add resend react-email zod
```

**2. Configure Environment Variables:**[^28][^29][^30][^31]

```env
# .env.local (apps/web/)
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL_TO=kevswoodencreations@gmail.com
NEXT_PUBLIC_SITE_URL=https://jklwoodcrafts.com
```

**3. Create Email Template:**

```typescript
// apps/web/components/email-template.tsx
import { Html, Button, Section, Text } from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
  projectType?: string;
  budget?: string;
}

export function ContactEmail({ name, email, message, projectType, budget }: ContactEmailProps) {
  return (
    <Html>
      <Section>
        <Text>New Contact Form Submission</Text>
        <Text><strong>Name:</strong> {name}</Text>
        <Text><strong>Email:</strong> {email}</Text>
        {projectType && <Text><strong>Project Type:</strong> {projectType}</Text>}
        {budget && <Text><strong>Budget:</strong> {budget}</Text>}
        <Text><strong>Message:</strong> {message}</Text>
        <Button href={`mailto:${email}`}>Reply to {name}</Button>
      </Section>
    </Html>
  );
}
```

**4. Create API Route:**

```typescript
// apps/web/app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactEmail } from '@/components/email-template';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  projectType: z.string().optional(),
  budget: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: 'JKL Woodcrafts <noreply@jklwoodcrafts.com>',
      to: process.env.CONTACT_EMAIL_TO!,
      replyTo: validatedData.email,
      subject: `New Project Inquiry from ${validatedData.name}`,
      react: ContactEmail(validatedData),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
```


***

## Dark Mode Implementation[^12][^10][^11][^22]

### Setup next-themes

**1. Install:**

```bash
pnpm add next-themes
```

**2. Configure Provider:**

```typescript
// apps/web/app/providers.tsx
'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
```

**3. Update Layout:**

```typescript
// apps/web/app/layout.tsx
import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

**4. Theme Toggle Component:**

```typescript
// apps/web/components/theme-toggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
```

**5. Tailwind Configuration:**

```typescript
// apps/web/tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#FAF8F5',
          100: '#F5EFE7',
          200: '#E8DCC9',
          300: '#D9C5A8',
          400: '#C9AD84',
          500: '#B8935F',
          600: '#9A7747',
          700: '#7A5C35',
          800: '#594426',
          900: '#3A2C18',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
```


***

## Turborepo Configuration[^2][^3][^32]

### Root Configuration

**package.json:**

```json
{
  "name": "jkl-woodcrafts",
  "private": true,
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "lint": "turbo lint",
    "format": "prettier --write \"**/*.{ts,tsx,md}\""
  },
  "devDependencies": {
    "turbo": "^2.0.0",
    "prettier": "^3.0.0",
    "typescript": "^5.3.0"
  },
  "packageManager": "pnpm@9.0.0",
  "engines": {
    "node": ">=18.0.0"
  }
}
```

**pnpm-workspace.yaml:**

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

**turbo.json:**

```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"],
      "env": [
        "RESEND_API_KEY",
        "CONTACT_EMAIL_TO",
        "NEXT_PUBLIC_SITE_URL"
      ]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^lint"]
    }
  }
}
```


***

## Vercel Deployment[^18][^17][^2]

### Deployment Steps

**1. Connect Repository:**

- Push monorepo to GitHub
- Import project in Vercel dashboard
- Vercel auto-detects Turborepo

**2. Configure Project Settings:**

- **Framework Preset:** Next.js
- **Root Directory:** `apps/web`
- **Build Command:** `cd ../.. && turbo build --filter=web` (auto-detected)[^2]
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `pnpm install` (auto-detected)

**3. Environment Variables:**[^29][^30][^31][^33][^28]

```
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL_TO=kevswoodencreations@gmail.com
NEXT_PUBLIC_SITE_URL=https://jklwoodcrafts.com
```

Set these in Vercel Dashboard → Project Settings → Environment Variables for Production, Preview, and Development environments.

**4. Deploy:**

- Click "Deploy"
- Vercel builds and deploys automatically
- Preview URLs generated for each commit
- Production deployment on main branch

**5. Custom Domain:**

- Add custom domain in Vercel settings
- Configure DNS records (A/CNAME)
- SSL certificate auto-provisioned

***

## Development Phases \& Timeline

### Phase 1: Setup \& Configuration (1-2 days)

**Tasks:**

- [x] Initialize Turborepo with `npx create-turbo@latest`
- [x] Configure pnpm workspaces
- [x] Setup Next.js 15 app in `apps/web`
- [x] Configure TypeScript with strict mode
- [x] Setup ESLint and Prettier
- [x] Install and configure Tailwind CSS
- [x] Initialize shadcn/ui: `npx shadcn@latest init`
- [x] Setup next-themes for dark mode
- [x] Configure Vercel project

**Commands:**

```bash
# Initialize
npx create-turbo@latest jkl-woodcrafts
cd jkl-woodcrafts

# Setup Next.js app
cd apps/web
npx create-next-app@latest . --typescript --tailwind --app

# Initialize shadcn
npx shadcn@latest init

# Install dependencies
pnpm add next-themes framer-motion lucide-react
pnpm add -D @types/node
```


### Phase 2: Core UI Components (2-3 days)

**Tasks:**

- [ ] Create shared UI components package
- [ ] Build navigation header with logo
- [ ] Implement mobile menu with Sheet component
- [ ] Create footer with social links
- [ ] Build theme toggle button
- [ ] Create layout components (Container, Section)
- [ ] Design project card component
- [ ] Setup Framer Motion page transitions
- [ ] Create button variants matching woodcraft theme

**Key Components:**

```
components/
├── layout/
│   ├── header.tsx
│   ├── footer.tsx
│   ├── mobile-menu.tsx
│   └── theme-toggle.tsx
├── sections/
│   ├── hero.tsx
│   ├── featured-projects.tsx
│   └── cta-section.tsx
└── ui/
    ├── project-card.tsx
    └── [shadcn components]
```


### Phase 3: Pages Development (3-4 days)[^6][^23][^4]

**Tasks:**

- [ ] Build Home page with all sections
- [ ] Implement parallax hero section
- [ ] Create Gallery page with masonry grid
- [ ] Add filtering functionality
- [ ] Build lightbox modal for project details
- [ ] Create About page with timeline
- [ ] Design Contact page layout
- [ ] Implement smooth scroll animations
- [ ] Add page transitions

**Performance Targets:**

- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- Time to Interactive < 3.5s


### Phase 4: Backend \& Integration (2-3 days)[^13][^5][^15][^16]

**Tasks:**

- [ ] Setup Resend account and API key
- [ ] Create email template component
- [ ] Build contact form with React Hook Form
- [ ] Implement Zod validation schema
- [ ] Create email API route
- [ ] Add toast notifications for feedback
- [ ] Implement error handling
- [ ] Test email delivery end-to-end
- [ ] Add rate limiting (optional)

**Testing Checklist:**

- ✓ Form validation works correctly
- ✓ Emails deliver to correct address
- ✓ Reply-to works properly
- ✓ Error messages are user-friendly
- ✓ Success state clears form


### Phase 5: Content \& Optimization (2-3 days)[^21][^19][^9]

**Tasks:**

- [ ] Optimize all project images
- [ ] Add alt text for accessibility
- [ ] Write compelling copy for all pages
- [ ] Implement SEO meta tags
- [ ] Add Open Graph tags for social sharing
- [ ] Create JSON-LD structured data
- [ ] Generate sitemap.xml
- [ ] Configure robots.txt
- [ ] Run Lighthouse audit
- [ ] Fix accessibility issues
- [ ] Optimize Core Web Vitals

**SEO Checklist:**

- ✓ Title tags (50-60 chars)
- ✓ Meta descriptions (150-160 chars)
- ✓ Heading hierarchy (H1-H6)
- ✓ Image alt attributes
- ✓ Open Graph tags
- ✓ Twitter Card tags
- ✓ Canonical URLs
- ✓ Structured data (LocalBusiness)


### Phase 6: Testing \& Deployment (1-2 days)[^17][^18][^2]

**Tasks:**

- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness testing (iOS, Android)
- [ ] Test all forms and interactions
- [ ] Verify email functionality in production
- [ ] Performance testing with Lighthouse
- [ ] Accessibility audit with axe DevTools
- [ ] Setup Vercel project
- [ ] Configure environment variables
- [ ] Deploy to production
- [ ] Setup custom domain
- [ ] Test production deployment
- [ ] Setup error monitoring (Sentry - optional)

**Browser Support:**

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

***

## Quick Start Commands

### Initial Setup

```bash
# Clone and install
git clone <repo-url> jkl-woodcrafts
cd jkl-woodcrafts
pnpm install

# Setup environment variables
cp apps/web/.env.example apps/web/.env.local
# Edit .env.local with your keys

# Start development server
pnpm dev

# Open browser
# http://localhost:3000
```


### Development Workflow

```bash
# Run dev server
pnpm dev

# Build for production
pnpm build

# Lint code
pnpm lint

# Format code
pnpm format

# Add shadcn component
cd apps/web
npx shadcn@latest add <component-name>
```


### Deployment

```bash
# Via Git (recommended)
git push origin main
# Vercel auto-deploys

# Manual deployment
cd apps/web
vercel --prod
```


***

## File \& Folder Setup Commands

### Complete Project Initialization

```bash
# Create monorepo
npx create-turbo@latest jkl-woodcrafts
cd jkl-woodcrafts

# Setup workspace structure
mkdir -p apps/web packages/ui packages/config packages/utils

# Initialize Next.js app
cd apps/web
pnpm create next-app@latest . --typescript --tailwind --app --src-dir=false

# Install core dependencies
pnpm add next-themes framer-motion lucide-react zod react-hook-form @hookform/resolvers resend react-email

# Install dev dependencies
pnpm add -D @types/node @types/react @types/react-dom prettier eslint-config-prettier

# Initialize shadcn/ui
npx shadcn@latest init

# Add shadcn components
npx shadcn@latest add button card dialog form input textarea select tabs accordion badge separator sheet toast skeleton scroll-area aspect-ratio avatar hover-card

# Go back to root
cd ../..

# Create shared packages
cd packages/ui
pnpm init
cd ../config
pnpm init
cd ../utils
pnpm init
cd ../..

# Initialize git
git init
git add .
git commit -m "Initial commit: JKL Woodcrafts monorepo setup"

# Create Vercel project
vercel link
vercel env add RESEND_API_KEY
vercel env add CONTACT_EMAIL_TO
vercel env add NEXT_PUBLIC_SITE_URL
```


***

## Essential Configuration Files

### `.env.local` Template

```env
# Resend Email API
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL_TO=kevswoodencreations@gmail.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: Analytics
# NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
# NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```


### `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['facebook.com', 'scontent.com'], // For Facebook images
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

module.exports = nextConfig;
```


***

## Best Practices \& Recommendations

### Performance[^19][^9]

- Use Next.js Image component for all images
- Implement lazy loading for below-fold content
- Minimize JavaScript bundle size
- Enable Turbopack for faster builds (Next.js 15)
- Use dynamic imports for heavy components


### SEO[^20][^21][^9]

- Unique title and description for each page
- Semantic HTML structure
- Mobile-friendly design
- Fast loading times (< 3s)
- High-quality, descriptive content


### Accessibility[^24][^14]

- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast (WCAG AA)
- Focus indicators on interactive elements
- Skip to content link


### Security

- Validate all user inputs server-side
- Sanitize email content
- Use environment variables for secrets
- Implement rate limiting on contact form
- Keep dependencies updated


### Content Strategy[^20][^21][^19]

- High-quality photography is essential
- Showcase variety of work
- Include process/behind-the-scenes content
- Tell the story behind pieces
- Keep copy concise and scannable

***

## Estimated Timeline Summary

| Phase | Duration | Deliverables |
| :-- | :-- | :-- |
| Setup \& Configuration | 1-2 days | Monorepo initialized, tools configured |
| Core UI Components | 2-3 days | Navigation, layouts, reusable components |
| Pages Development | 3-4 days | All pages built with content sections |
| Backend \& Integration | 2-3 days | Contact form, email service working |
| Content \& Optimization | 2-3 days | SEO, performance, accessibility optimized |
| Testing \& Deployment | 1-2 days | Live site on Vercel with custom domain |

**Total: 11-17 days** (depending on complexity and content availability)

***

## Post-Launch Considerations

### Analytics \& Monitoring

- Setup Google Analytics 4
- Configure Vercel Analytics
- Monitor Core Web Vitals
- Track form submission rates
- Monitor email delivery success


### Maintenance

- Regular dependency updates
- Security patches
- Content updates (new projects)
- Performance monitoring
- Backup strategy


### Future Enhancements

- Blog for woodworking tips
- E-commerce for ready-made items
- Project request estimation tool
- Client portal for project tracking
- Video content integration
- Multi-language support (if needed)

***

## Resources \& References

- **Next.js Documentation:** https://nextjs.org/docs
- **shadcn/ui:** https://ui.shadcn.com
- **Turborepo Docs:** https://turbo.build/repo/docs
- **Resend API:** https://resend.com/docs
- **Vercel Deployment:** https://vercel.com/docs
- **Woodworking Website Examples:**[^34][^20][^19]
    - Fine Line Carpentry
    - Vorrath Woodworks
    - Massachusetts Woodworks

***

This masterplan provides everything needed to build a stunning, modern portfolio website for JKL Woodcrafts that will effectively showcase Kev Simmonds' woodworking expertise and attract new clients. The combination of Next.js 15, shadcn/ui, and Turborepo creates a scalable, performant, and maintainable foundation that can grow with the business.
<span style="display:none">[^35][^36][^37][^38][^39][^40][^41][^42][^43][^44][^45][^46][^47][^48][^49][^50][^51][^52][^53][^54][^55][^56][^57][^58][^59][^60][^61][^62][^63][^64][^65][^66][^67][^68][^69][^70][^71][^72][^73][^74][^75]</span>

<div align="center">⁂</div>

[^1]: https://www.shadcn.io/template/taqui-786-portfolio

[^2]: https://vercel.com/docs/monorepos/turborepo

[^3]: https://github.com/ycjcl868/monorepo

[^4]: https://dev.to/xcarter93/building-an-interactive-ide-themed-portfolio-with-nextjs-15-1084

[^5]: https://www.youtube.com/watch?v=B_aT3pWguFY

[^6]: https://www.youtube.com/watch?v=khFolEuyZos

[^7]: https://allshadcn.com/templates/category/portfolio-templates/

[^8]: https://www.shadcndesign.com/templates/developer-portfolio

[^9]: https://github.com/techwithanirudh/shadcn-portfolio

[^10]: https://staticmania.com/blog/guide-to-creating-a-darklight-mode-toggle-in-next-js

[^11]: https://github.com/pacocoursey/next-themes

[^12]: https://ui.shadcn.com/docs/dark-mode/next

[^13]: https://dev.to/brendan_dev/how-to-create-a-contact-form-with-emailjs-zod-shadcn-ui-typescript-using-react-and-nextjs-2paa

[^14]: https://ui.shadcn.com/docs/forms/react-hook-form

[^15]: https://resend.com/nextjs

[^16]: https://dev.to/adrianbailador/implementing-resend-in-nextjs-step-by-step-guide-2fae

[^17]: https://dev.to/jdtjenkins/how-to-deploy-a-monorepo-to-different-subdomains-on-vercel-2chn

[^18]: https://vercel.com/docs/monorepos

[^19]: https://muffingroup.com/blog/woodworking-websites/

[^20]: https://seahawkmedia.com/design/carpenter-websites/

[^21]: https://awinet.org/building-a-robust-online-portfolio-why-a-strong-website-matters-for-woodworkers/

[^22]: https://www.youtube.com/watch?v=HU6vGtKGSsM

[^23]: https://buttercms.com/blog/build-a-nextjs-portfolio-website/

[^24]: https://blog.openreplay.com/create-accessible-forms-shadcn-ui/

[^25]: https://www.shadcnblocks.com/blocks/contact

[^26]: https://www.shadcn.io/template/category/portfolio

[^27]: https://resend.com/docs/send-with-nextjs

[^28]: https://stackoverflow.com/questions/76274391/how-do-i-allow-separate-env-variables-on-a-monorepo-for-each-project-in-vercel

[^29]: https://github.com/vercel/turborepo/issues/3928

[^30]: https://github.com/vercel/vercel/discussions/5469

[^31]: https://vercel.com/docs/monorepos/monorepo-faq

[^32]: https://stackoverflow.com/questions/70826256/how-to-fix-the-error-no-next-js-version-could-be-detected-in-your-project-wh

[^33]: https://vercel.com/docs/environment-variables

[^34]: https://www.cyberoptik.net/blog/best-carpenter-websites/

[^35]: https://www.ijfmr.com/papers/2023/4/4223.pdf

[^36]: https://www.tandfonline.com/doi/pdf/10.1080/23311975.2023.2286687?needAccess=true

[^37]: https://www.shs-conferences.org/articles/shsconf/pdf/2022/09/shsconf_etltc2022_02007.pdf

[^38]: https://cakrawala.imwi.ac.id/index.php/cakrawala/article/download/178/158

[^39]: https://stackoverflow.com/questions/70117752/unable-to-deploy-a-next-js-monorepo-using-workspaces-to-vercel

[^40]: https://www.sanity.io/answers/hosting-sanity-next-js-project-on-vercel-monorepo-or-one-project

[^41]: https://colorlib.com/wp/carpentry-websites/

[^42]: https://nx.dev/docs/technologies/react/guides/deploy-nextjs-to-vercel

[^43]: https://www.behance.net/search/projects/wood website design ui

[^44]: https://shadcnstudio.com/blocks/marketing-ui/portfolio

[^45]: https://github.com/vercel/next.js/discussions/50866

[^46]: https://woodworksbyjohn.com/woodworking-portfolio/

[^47]: https://shadcntemplates.com

[^48]: http://arxiv.org/pdf/2110.08588.pdf

[^49]: https://arxiv.org/pdf/1712.06139.pdf

[^50]: https://arxiv.org/pdf/2501.16143.pdf

[^51]: http://arxiv.org/pdf/2411.16697.pdf

[^52]: https://arxiv.org/pdf/2310.08247.pdf

[^53]: https://www.aclweb.org/anthology/N18-5002.pdf

[^54]: https://arxiv.org/pdf/2401.01408.pdf

[^55]: http://arxiv.org/pdf/2311.11095.pdf

[^56]: https://community.vercel.com/t/buildcommand-ignored-in-pnpm-monorepo-with-turborepo/18299

[^57]: https://www.youtube.com/watch?v=FzF3NEusns4

[^58]: https://community.vercel.com/t/corepack-turborepo-and-pnpm-catalog-do-not-work-together/12615

[^59]: https://www.linkedin.com/pulse/building-my-portfolio-website-nextjs-15-technical-deep-usurupati-htrsc

[^60]: https://community.vercel.com/t/pnpm-monorepo-deployment-as-functions/27260

[^61]: https://magicui.design/blog/nextjs-portfolio-template

[^62]: https://shadcnstudio.com/blocks/marketing-ui/verify-email

[^63]: https://turborepo.com/docs

[^64]: https://community.vercel.com/t/my-personal-portfolio-built-w-next-js-and-sanity/1579

[^65]: https://dl.acm.org/doi/pdf/10.1145/3533767.3534401

[^66]: https://arxiv.org/pdf/2204.08348.pdf

[^67]: https://arxiv.org/html/2504.03884v1

[^68]: https://arxiv.org/pdf/2201.11216.pdf

[^69]: https://codimite.ai/blog/applying-dark-mode-in-next-js-using-css-variables/

[^70]: https://www.youtube.com/watch?v=fEeksraKfJI

[^71]: https://www.youtube.com/watch?v=EhxwqXjX1dk

[^72]: https://dev.to/topboyasante/setting-up-dark-mode-in-next-js-with-tailwindcss-1bk1

[^73]: https://resend.com/docs/introduction

[^74]: https://github.com/resend/resend-nextjs-app-router-example

[^75]: https://www.heroui.com/docs/customization/dark-mode


# Telos Website

A professional website for Telos - R&D grant funding services for deep-tech companies.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Content**: Markdown-based articles
- **Typography**: @tailwindcss/typography

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

The site runs on `http://localhost:3000` by default.

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── articles/            # Articles listing & detail pages
│   ├── contact/             # Contact page
│   ├── funding-opportunities/  # Funding programs page
│   ├── privacy-policy/      # Privacy policy
│   ├── cookie-policy/       # Cookie policy
│   ├── accessibility/       # Accessibility statement
│   └── page.tsx             # Homepage
├── components/
│   ├── layout/              # Header, Footer
│   ├── sections/            # Page sections (Hero, ValueProp, etc.)
│   ├── ui/                  # Reusable UI components
│   └── compliance/          # Cookie consent, accessibility widget
├── content/
│   └── articles/            # Markdown articles
├── lib/
│   └── markdown.ts          # Markdown parsing utilities
└── public/                  # Static assets
```

## Pages

- **/** - Homepage with hero, value proposition, process, testimonials
- **/about** - Company information, philosophy, expertise
- **/funding-opportunities** - R&D grant programs (IIA, EIC, Horizon Europe, etc.)
- **/articles** - Blog/articles with markdown support
- **/contact** - Contact form with validation

## Features

### Accessibility
- WCAG 2.1 AA compliant design
- Skip to main content link
- Keyboard navigation support
- Accessibility settings widget (text size, contrast, reduced motion)
- Screen reader friendly

### Cookie Consent
- GDPR-compliant cookie banner
- Granular consent options (essential, analytics, marketing)
- Persistent preferences

### Performance
- Static site generation (SSG)
- Optimized images
- Minimal client-side JavaScript
- Fast page loads

## Adding Articles

Create a new markdown file in `content/articles/`:

```markdown
---
title: "Article Title"
excerpt: "Brief description for previews"
date: "2024-12-20"
author: "Telos"
tags: ["Strategy", "Grants"]
readTime: "5 min read"
featured: true
---

Article content in markdown...
```

## Customization

### Colors
Edit the color palette in `tailwind.config.ts` - the primary color scheme uses navy blue variants.

### Content
- Update company information in component files
- Modify funding programs in `app/funding-opportunities/page.tsx`
- Edit legal pages as needed

## Deployment

The site is optimized for deployment on Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your repository directly to Vercel for automatic deployments.

## License

Proprietary - Telos

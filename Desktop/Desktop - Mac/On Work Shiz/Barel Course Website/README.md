# מהאופלן לבמה - Course Landing Page

A beautiful, modern landing page for a playback engineering course in Hebrew.

Repository: `https://github.com/yantip/BarelLandingPage`

## Features

- ✨ Stunning dark/light mode with smooth transitions
- 🇮🇱 Full RTL (right-to-left) support for Hebrew
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎬 Hero section with video trailer modal
- 🎨 Modern animations with Framer Motion
- 🎭 DaisyUI components for consistent design
- ⚡ Built with Next.js 15 and TypeScript
- 🌈 Gradient effects and smooth scroll animations

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: DaisyUI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Rubik (Hebrew-friendly)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

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

### Available Scripts

```
# Lint the project
npm run lint

# Format with Prettier (if configured)
npm run format
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with RTL & theme support
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.tsx        # Hero section with video
│   ├── CourseHighlights.tsx
│   ├── InstructorBio.tsx
│   ├── Curriculum.tsx
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
└── public/
    └── grid.svg        # Grid background pattern
```

## Customization

### Update Content

Edit the component files in the `components/` directory to update:
- Course title and description
- Module/curriculum content
- Testimonials
- Pricing information
- FAQ questions and answers
- Footer contact details

### Change Colors

Edit `app/globals.css` to modify the color scheme:
- Light mode colors in `:root`
- Dark mode colors in `.dark`

### Update Video

Replace the YouTube embed URL in `components/Hero.tsx` with your actual trailer URL.

### Update Enrollment Link

Change the `href` in `components/Pricing.tsx` to point to your actual enrollment platform.

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

This Next.js app can be deployed to:
- **Netlify**: Connect your Git repo
- **AWS Amplify**: Connect your Git repo  
- **Any Node.js hosting**: Build with `npm run build` and serve with `npm start`

## Releasing

To create a release locally and push a version tag:

```
git tag v1.0.0 -m "Initial public release"
git push origin v1.0.0
```

## Contributing

Issues and pull requests are welcome. Please open an issue first to discuss major changes.

## License

MIT

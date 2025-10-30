# Customization Guide for Course Landing Page

## Quick Start

Your stunning Hebrew RTL landing page is ready! Here's how to customize it for your needs:

## 📋 What to Update

### 1. **Hero Section Video** (`components/Hero.tsx`)
Replace the YouTube URL on line ~60:
```typescript
src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

### 2. **Course Content** (`components/Curriculum.tsx`)
Update the modules array with your actual course modules:
```typescript
const modules = [
  {
    title: 'שם המודול',
    duration: 'X hours',
    lessons: 10,
    topics: ['נושא 1', 'נושא 2', 'נושא 3'],
  },
  // Add more modules...
];
```

### 3. **Pricing** (`components/Pricing.tsx`)
- Update the price (line ~43): `₪1,297`
- Update the enrollment link (line ~66): `href="YOUR_ENROLLMENT_URL"`
- Modify features list if needed

### 4. **Contact Information** (`components/Footer.tsx`)
- Update email (line ~34): `info@example.com`
- Update phone (line ~38): `052-123-4567`
- Add your social media URLs

### 5. **Testimonials** (`components/Testimonials.tsx`)
Replace with real testimonials:
```typescript
const testimonials = [
  {
    name: 'שם הלקוח',
    role: 'תפקיד',
    company: 'חברה',
    text: 'המלצה...',
    rating: 5,
  },
  // Add more...
];
```

### 6. **FAQ** (`components/FAQ.tsx`)
Update the FAQs array with actual questions and answers

### 7. **Metadata** (`app/layout.tsx`)
Update page title and description (lines 13-14)

## 🎨 Customize Colors & Themes

Edit `app/globals.css` to customize:
- Light mode colors (`:root`)
- Dark mode colors (`.dark`)
- You can also adjust gradient colors in components

## 🚀 Running the Site

```bash
npm run dev    # Development
npm run build  # Production build
npm start      # Run production
```

## 📱 Testing

- Test dark/light mode toggle in top-right (left in RTL)
- Check mobile responsiveness
- Verify all Hebrew text displays correctly
- Test video modal functionality
- Check all links work properly

## 🎯 Features Implemented

✅ Full RTL support for Hebrew
✅ Dark/Light theme with smooth transitions
✅ Responsive design (mobile, tablet, desktop)
✅ Scroll-triggered animations
✅ Video trailer modal
✅ Smooth scroll behavior
✅ SEO-friendly metadata
✅ Modern gradient effects
✅ Professional typography (Rubik font)
✅ Accessible components

## 🌐 Deployment

### Vercel (Easiest)
```bash
npm i -g vercel
vercel
```

### Other Options
- Netlify: Connect Git repo
- AWS Amplify: Connect Git repo
- Any Node.js hosting: `npm run build` then `npm start`

## 💡 Tips

- Replace placeholder images with real course visuals
- Add instructor photo in `components/InstructorBio.tsx`
- Test on real devices for best experience
- Update social media links to your profiles
- Consider adding Google Analytics for tracking

Enjoy your beautiful landing page! 🎉


# Vercel Deployment Guide with Supabase

## Prerequisites

1. A Vercel account (free tier works)
2. A Supabase account (free tier works) - [Sign up here](https://supabase.com)
3. A GitHub account with this repo pushed
4. Cloudinary account for image uploads

---

## Step 1: Push Your Code to GitHub

Make sure your code is pushed to a GitHub repository.

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

---

## Step 2: Create Supabase Project

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Click **New Project**
3. Fill in:
   - **Name**: `miki-portfolio` (or any name you like)
   - **Database Password**: Choose a strong password (save it!)
   - **Region**: Choose closest to your users
   - **Pricing Plan**: Free tier is fine
4. Click **Create new project**
5. Wait 2-3 minutes for setup to complete

---

## Step 3: Set Up Database Schema

1. In your Supabase project, go to **SQL Editor** (left sidebar)
2. Click **New Query**
3. Copy and paste the SQL from `supabase/migrations/001_create_projects_table.sql`
4. Click **Run** (or press Cmd/Ctrl + Enter)
5. You should see "Success. No rows returned"
6. **Run the second migration**: Copy and paste the SQL from `supabase/migrations/002_enable_admin_operations.sql`
7. Click **Run** again
8. You should see "Success. No rows returned" - this enables admin operations (create/update/delete)

---

## Step 4: Get Supabase Credentials

1. In Supabase Dashboard, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (under "Project URL")
   - **anon public** key (under "Project API keys" → "anon public")
   - **service_role** key (under "Project API keys" → "service_role") - Keep this secret!

---

## Step 5: Import Project to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Add New** → **Project**
3. Click **Import** next to your GitHub repository
4. Vercel will auto-detect it's a Next.js project
5. **Don't deploy yet!** - First add environment variables (Step 6)

---

## Step 6: Configure Environment Variables

In Vercel: **Project Settings** → **Environment Variables**

Add these variables:

| Variable | Value | Where to Find |
|----------|-------|---------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxxx.supabase.co` | Supabase Settings → API → Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGc...` | Supabase Settings → API → anon public key |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGc...` | Supabase Settings → API → service_role key |
| `ADMIN_EMAIL` | `your-email@example.com` | Your admin login email |
| `ADMIN_PASSWORD_HASH` | `$2a$10$...` | See "Generate Password Hash" below |
| `NEXTAUTH_SECRET` | Random 32+ char string | See "Generate Secret" below |
| `NEXTAUTH_URL` | `https://your-app.vercel.app` | Your production URL (update after first deploy) |
| `CLOUDINARY_CLOUD_NAME` | Your cloud name | From Cloudinary dashboard |
| `CLOUDINARY_API_KEY` | Your API key | From Cloudinary dashboard |
| `CLOUDINARY_API_SECRET` | Your API secret | From Cloudinary dashboard |

### Generate Password Hash

Run this in your terminal:

```bash
node -e "require('bcryptjs').hash('YOUR_PASSWORD_HERE', 10).then(h => console.log(h))"
```

Replace `YOUR_PASSWORD_HERE` with your desired admin password.

### Generate Secret

Run this in your terminal:

```bash
openssl rand -base64 32
```

Or use: https://generate-secret.vercel.app/32

---

## Step 7: Deploy

1. Go back to your Vercel project
2. Click **Deploy** (or push a new commit to trigger auto-deploy)
3. Wait for the build to complete (~2-3 minutes)

---

## Step 8: Update NEXTAUTH_URL

After your first deployment:

1. Copy your Vercel deployment URL (e.g., `https://your-app.vercel.app`)
2. Go to **Project Settings** → **Environment Variables**
3. Update `NEXTAUTH_URL` with your actual URL
4. **Redeploy** (or wait for auto-redeploy)

---

## Step 9: Verify Database Connection

1. Visit: `https://YOUR-APP.vercel.app/api/db/init`
2. You should see: `{"status":"connected","tableExists":true,"projectCount":0}`

If you see an error, check:
- Supabase credentials are correct
- Database table was created (Step 3)
- Environment variables are set correctly

---

## Step 10: Add Your First Project

1. Visit `https://YOUR-APP.vercel.app/admin`
2. Login with your admin email and password
3. Click **+ New Project** to add your first project
4. Check the homepage to see your project!

---

## 🎉 You're Done!

Your portfolio is now live on Vercel with Supabase as the database.

---

## Troubleshooting

### "Missing Supabase environment variables"
- Make sure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set
- Check that variable names match exactly (case-sensitive)

### "Table does not exist"
- Go to Supabase SQL Editor and run the migration SQL again
- Check that the table appears in **Table Editor** → **projects**

### "Unauthorized" on admin login
- Double-check `ADMIN_EMAIL` matches exactly
- Regenerate `ADMIN_PASSWORD_HASH` with the correct password
- Make sure `NEXTAUTH_SECRET` is set

### "Failed to fetch projects"
- Check Supabase dashboard → **Logs** for errors
- Verify RLS policies are set correctly (public read should work)
- Check that `NEXT_PUBLIC_SUPABASE_ANON_KEY` is correct

### Images not uploading
- Verify all 3 Cloudinary variables are set correctly
- Check Cloudinary dashboard for upload presets

---

## Local Development

To develop locally with Supabase:

1. Create `.env.local` file in project root:

```env
# Supabase (get from Supabase Dashboard → Settings → API)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# Auth
ADMIN_EMAIL=admin@mikiyaron.com
ADMIN_PASSWORD_HASH=$2a$10$...
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

2. Run dev server:
```bash
npm run dev
```

---

## Useful Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Supabase Dashboard](https://supabase.com/dashboard)
- [Supabase Docs](https://supabase.com/docs)
- [Cloudinary Dashboard](https://cloudinary.com/console)
- [NextAuth.js Docs](https://next-auth.js.org/)

---

## Supabase Free Tier Limits

- **500 MB database storage** - Plenty for a portfolio
- **2 GB bandwidth** - Should be enough for most portfolios
- **50,000 monthly active users** - More than enough
- **Unlimited API requests** - Great for admin panel

If you need more, Supabase Pro is $25/month.

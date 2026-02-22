-- Create projects table for Miki Yaron Portfolio
-- Run this in Supabase SQL Editor: Dashboard → SQL Editor → New Query

CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  client TEXT DEFAULT '',
  description TEXT DEFAULT '',
  video_url TEXT DEFAULT '',
  thumbnail TEXT DEFAULT '',
  image1 TEXT DEFAULT '',
  image2 TEXT DEFAULT '',
  image3 TEXT DEFAULT '',
  team JSONB DEFAULT '[]'::jsonb,
  color TEXT DEFAULT '#f7291e',
  display_order INTEGER DEFAULT 0,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_published ON projects(published);
CREATE INDEX IF NOT EXISTS idx_projects_display_order ON projects(display_order);

-- Enable Row Level Security (RLS) - public read, admin write
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public to read published projects
CREATE POLICY "Public can read published projects"
  ON projects FOR SELECT
  USING (published = true);

-- Allow authenticated users to do everything (we'll handle auth in the app)
-- For now, we'll use service role key for admin operations
-- You can add more specific policies later if needed


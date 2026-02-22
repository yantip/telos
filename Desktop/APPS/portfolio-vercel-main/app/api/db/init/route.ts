import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// POST - Initialize database (create tables)
// This SQL should be run in Supabase SQL Editor first, but this endpoint can verify
export async function POST() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        { error: 'Missing Supabase credentials. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY' },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Check if table exists
    const { data, error } = await supabase
      .from('projects')
      .select('id')
      .limit(1)

    if (error && error.code === 'PGRST116') {
      // Table doesn't exist
      return NextResponse.json({
        success: false,
        message: 'Table does not exist. Please run the SQL migration in Supabase SQL Editor first.',
        sql: `
-- Run this SQL in Supabase SQL Editor (Dashboard → SQL Editor → New Query)

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
  color TEXT DEFAULT '#ff6b35',
  display_order INTEGER DEFAULT 0,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_published ON projects(published);
CREATE INDEX IF NOT EXISTS idx_projects_display_order ON projects(display_order);
        `,
      })
    }

    if (error) {
      return NextResponse.json(
        { error: 'Failed to check database', details: error.message },
        { status: 500 }
      )
    }

    // Count projects
    const { count } = await supabase
      .from('projects')
      .select('*', { count: 'exact', head: true })

    return NextResponse.json({
      success: true,
      message: 'Database is initialized and ready',
      projectCount: count || 0,
    })
  } catch (error) {
    console.error('Failed to initialize database:', error)
    return NextResponse.json(
      { error: 'Failed to initialize database', details: String(error) },
      { status: 500 }
    )
  }
}

// GET - Check database status
export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({
        status: 'error',
        error: 'Missing Supabase environment variables',
        message: 'Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY',
      })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Try to query the table
    const { data, error, count } = await supabase
      .from('projects')
      .select('*', { count: 'exact', head: true })

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({
          status: 'connected',
          tableExists: false,
          message: 'Database connected but table does not exist. Run the SQL migration in Supabase SQL Editor.',
        })
      }

      return NextResponse.json({
        status: 'error',
        error: error.message,
        code: error.code,
      })
    }

    return NextResponse.json({
      status: 'connected',
      tableExists: true,
      projectCount: count || 0,
    })
  } catch (error) {
    console.error('Database check failed:', error)
    return NextResponse.json(
      { 
        status: 'error', 
        error: 'Failed to connect to database',
        details: String(error)
      },
      { status: 500 }
    )
  }
}

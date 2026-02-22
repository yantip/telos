import { createClient } from '@supabase/supabase-js'

export interface TeamMember {
  role: string
  names: string[]
}

export interface Project {
  id: string
  slug: string
  title: string
  client: string
  description: string
  videoUrl: string
  thumbnail: string
  image1: string
  image2: string
  image3: string
  team: TeamMember[]
  color: string
  order: number
  published: boolean
  createdAt: string
  updatedAt: string
}

// Supabase database row type
interface ProjectRow {
  id: string
  slug: string
  title: string
  client: string
  description: string
  video_url: string
  thumbnail: string
  image1: string
  image2: string
  image3: string
  team: TeamMember[]
  color: string
  display_order: number
  published: boolean
  created_at: string
  updated_at: string
}

// Initialize Supabase client
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY')
  }

  return createClient(supabaseUrl, supabaseKey)
}

// Generate unique ID
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Convert database row to Project type
function rowToProject(row: ProjectRow): Project {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    client: row.client || '',
    description: row.description || '',
    videoUrl: row.video_url || '',
    thumbnail: row.thumbnail || '',
    image1: row.image1 || '',
    image2: row.image2 || '',
    image3: row.image3 || '',
    team: row.team || [],
    color: row.color || '#f7291e',
    order: row.display_order || 0,
    published: row.published ?? true,
    createdAt: row.created_at || new Date().toISOString(),
    updatedAt: row.updated_at || new Date().toISOString(),
  }
}

export const db = {
  projects: {
    findMany: async (options?: { 
      where?: { published?: boolean }
      orderBy?: { order: 'asc' | 'desc' } 
    }): Promise<Project[]> => {
      try {
        const supabase = getSupabaseClient()
        let query = supabase.from('projects').select('*')

        if (options?.where?.published !== undefined) {
          query = query.eq('published', options.where.published)
        }

        if (options?.orderBy?.order) {
          query = query.order('display_order', { ascending: options.orderBy.order === 'asc' })
        } else {
          query = query.order('display_order', { ascending: true })
        }

        const { data, error } = await query

        if (error) {
          console.error('Supabase query error:', error)
          return []
        }

        return (data || []).map(rowToProject)
      } catch (error) {
        console.error('Failed to fetch projects:', error)
        return []
      }
    },

    findUnique: async (options: { where: { id?: string; slug?: string } }): Promise<Project | null> => {
      try {
        const supabase = getSupabaseClient()
        let query = supabase.from('projects').select('*').limit(1)

        if (options.where.id) {
          query = query.eq('id', options.where.id)
        } else if (options.where.slug) {
          query = query.eq('slug', options.where.slug)
        } else {
          return null
        }

        const { data, error } = await query

        if (error || !data || data.length === 0) {
          return null
        }

        return rowToProject(data[0] as ProjectRow)
      } catch (error) {
        console.error('Failed to fetch project:', error)
        return null
      }
    },

    findFirst: async (options: { 
      where: { slug: string; published?: boolean } 
    }): Promise<Project | null> => {
      try {
        const supabase = getSupabaseClient()
        let query = supabase.from('projects').select('*').eq('slug', options.where.slug).limit(1)

        if (options.where.published !== undefined) {
          query = query.eq('published', options.where.published)
        }

        const { data, error } = await query

        if (error || !data || data.length === 0) {
          return null
        }

        return rowToProject(data[0] as ProjectRow)
      } catch (error) {
        console.error('Failed to fetch project:', error)
        return null
      }
    },

    create: async (options: { 
      data: Omit<Project, 'id' | 'createdAt' | 'updatedAt'> 
    }): Promise<Project> => {
      const supabase = getSupabaseClient()
      const id = generateId()
      const now = new Date().toISOString()

      const row: Omit<ProjectRow, 'id' | 'created_at' | 'updated_at'> = {
        slug: options.data.slug,
        title: options.data.title,
        client: options.data.client || '',
        description: options.data.description || '',
        video_url: options.data.videoUrl || '',
        thumbnail: options.data.thumbnail || '',
        image1: options.data.image1 || '',
        image2: options.data.image2 || '',
        image3: options.data.image3 || '',
        team: options.data.team || [],
        color: options.data.color || '#f7291e',
        display_order: options.data.order || 0,
        published: options.data.published ?? true,
      }

      const { data, error } = await supabase
        .from('projects')
        .insert({
          ...row,
          id,
          created_at: now,
          updated_at: now,
        })
        .select()
        .single()

      if (error) {
        throw new Error(`Failed to create project: ${error.message}`)
      }

      return rowToProject(data as ProjectRow)
    },

    update: async (options: { 
      where: { id: string }
      data: Partial<Omit<Project, 'id' | 'createdAt'>> 
    }): Promise<Project | null> => {
      const supabase = getSupabaseClient()
      const now = new Date().toISOString()

      const updateData: Partial<ProjectRow> = {
        updated_at: now,
      }

      if (options.data.slug !== undefined) updateData.slug = options.data.slug
      if (options.data.title !== undefined) updateData.title = options.data.title
      if (options.data.client !== undefined) updateData.client = options.data.client
      if (options.data.description !== undefined) updateData.description = options.data.description
      if (options.data.videoUrl !== undefined) updateData.video_url = options.data.videoUrl
      if (options.data.thumbnail !== undefined) updateData.thumbnail = options.data.thumbnail
      if (options.data.image1 !== undefined) updateData.image1 = options.data.image1
      if (options.data.image2 !== undefined) updateData.image2 = options.data.image2
      if (options.data.image3 !== undefined) updateData.image3 = options.data.image3
      if (options.data.team !== undefined) updateData.team = options.data.team
      if (options.data.color !== undefined) updateData.color = options.data.color
      if (options.data.order !== undefined) updateData.display_order = options.data.order
      if (options.data.published !== undefined) updateData.published = options.data.published

      const { data, error } = await supabase
        .from('projects')
        .update(updateData)
        .eq('id', options.where.id)
        .select()
        .single()

      if (error || !data) {
        return null
      }

      return rowToProject(data as ProjectRow)
    },

    delete: async (options: { where: { id: string } }): Promise<boolean> => {
      const supabase = getSupabaseClient()

      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', options.where.id)

      return !error
    },

    updateOrder: async (updates: { id: string; order: number }[]): Promise<void> => {
      const supabase = getSupabaseClient()
      const now = new Date().toISOString()

      for (const update of updates) {
        await supabase
          .from('projects')
          .update({ 
            display_order: update.order,
            updated_at: now,
          })
          .eq('id', update.id)
      }
    },
  },
}

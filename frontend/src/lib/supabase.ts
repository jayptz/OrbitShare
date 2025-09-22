import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Only create client if we have valid environment variables
export const supabase = supabaseUrl && supabaseAnonKey && 
  supabaseUrl !== 'https://placeholder.supabase.co' && 
  supabaseAnonKey !== 'placeholder-key'
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Export a helper to check if Supabase is properly configured
export const isSupabaseConfigured = () => supabase !== null

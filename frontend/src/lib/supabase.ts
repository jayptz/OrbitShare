import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Check if we have valid environment variables
const hasValidConfig = supabaseUrl && supabaseAnonKey && 
  supabaseUrl !== 'https://placeholder.supabase.co' && 
  supabaseAnonKey !== 'placeholder-key'

// Only create client if we have valid environment variables
export const supabase = hasValidConfig
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Export a helper to check if Supabase is properly configured
export function isSupabaseConfigured() {
  return hasValidConfig
}

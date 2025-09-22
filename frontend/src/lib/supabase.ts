import { createClient } from '@supabase/supabase-js'

// Use function declarations to avoid TDZ issues
function getSupabaseConfig() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  return {
    supabaseUrl,
    supabaseAnonKey,
    hasValidConfig: supabaseUrl && supabaseAnonKey && 
      supabaseUrl !== 'https://placeholder.supabase.co' && 
      supabaseAnonKey !== 'placeholder-key'
  }
}

// Factory function to create client safely
export function createSupabaseClient() {
  const config = getSupabaseConfig()
  
  if (!config.hasValidConfig) {
    return null
  }
  
  return createClient(config.supabaseUrl!, config.supabaseAnonKey!)
}

// Lazy initialization to prevent TDZ
let _supabaseClient: any = null

export function getSupabaseClient() {
  if (_supabaseClient === null) {
    _supabaseClient = createSupabaseClient()
  }
  return _supabaseClient
}

// Export the client (backward compatibility)
export const supabase = getSupabaseClient()

// Export a helper to check if Supabase is properly configured
export function isSupabaseConfigured() {
  return getSupabaseConfig().hasValidConfig
}
